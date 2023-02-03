import { call, put, take, takeLatest } from "redux-saga/effects";
import {
  FETCH_USERS_REQUEST,
  FETCH_USER_POSTS_REQUEST,
} from "./users.action-types";
import {
  fetchUserPostsFailedAction,
  fetchUserPostsSuccessAction,
  fetchUsersFailedAction,
  fetchUsersSuccessAction,
} from "./users.actions";
import { fetchUserPosts, fetchUsers } from "./users.api";
import {
  IFetchUserPostsRequestAction,
  IUserPostsDataResponse,
  IUsersDataResponse,
} from "./users.types";

function* fetchUsersWorker() {
  try {
    const response: IUsersDataResponse[] = yield call(fetchUsers);
    yield put(fetchUsersSuccessAction({ users: response }));
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchUsersFailedAction({ error: err.message }));
    }
  }
}

export function* fetchUsersWatcher() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersWorker);
}

function* fetchUserPostsWorker(userId: number) {
  try {
    const response: IUserPostsDataResponse[] = yield call(
      fetchUserPosts,
      userId
    );
    yield put(fetchUserPostsSuccessAction({ userPosts: response }));
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchUserPostsFailedAction({ error: err.message }));
    }
  }
}

export function* fetchUserPostsWatcher() {
  while (true) {
    const { payload }: IFetchUserPostsRequestAction = yield take(
      FETCH_USER_POSTS_REQUEST
    );
    yield call(fetchUserPostsWorker, payload.userId);
  }
}
