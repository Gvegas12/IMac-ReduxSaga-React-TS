import { Task } from "redux-saga";
import { call, fork, put, take } from "redux-saga/effects";
import {
  ACTION_LOGOUT,
  LOGIN_FAILED,
  LOGIN_REQUEST,
} from "./auth.action-types";
import { fetchLogin, logout } from "./auth.api";
import {
  ILoginRequestAction,
  ILoginRequestPayload,
  ILoginSuccessPayload,
  IUserResponse,
} from "./auth.types";
import { LoginFailedAction, LoginSuccessAction } from "./login/login.actions";

/**
 * * Принимает обьект со свойствами:
 * @param {string} email - email пользователя
 * @param {string} password - password пользователя
 * * При удачном логине:
 * Записывает токен в LS
 * * При ошибке:
 * Вызывает action с типом LOGIN_FAILED
 */
function* loginWorker({ email, password }: ILoginRequestPayload) {
  try {
    const response: IUserResponse = yield call(fetchLogin, {
      email,
      password,
    });
    localStorage.setItem("token", `${email}token${password}`);
    yield put(LoginSuccessAction({ user: response }));
  } catch (err) {
    if (err instanceof Error) {
      yield put(LoginFailedAction({ error: err.message }));
    }
  }
}

/**
 * Прослушивает action с типом LOGIN_REQUEST, как только он произойдет, 
 * то вызывает сагу воркер loginWorker, которая принимает:
 * @param {string} email - email пользователя
 * @param {string} password - password пользователя
 * * При ошибке:
 * Вызывает action с типом LOGIN_FAILED
 */
export function* loginWatcher() {
  while (true) {
    const { payload }: ILoginRequestAction = yield take(LOGIN_REQUEST);
    const task: Task<ILoginSuccessPayload> = yield fork(loginWorker, {
      email: payload.email,
      password: payload.password,
    });
    yield take(LOGIN_FAILED);
    task.cancel();
  }
}

export function* logoutWather() {
  while (true) {
    yield take(ACTION_LOGOUT);
    yield call(logout);
  }
}
