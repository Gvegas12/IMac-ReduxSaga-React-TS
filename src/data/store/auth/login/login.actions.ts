import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../auth.action-types";
import {
  ILoginRequestAction,
  ILoginRequestPayload,
  ILoginSuccessAction,
  ILoginSuccessPayload,
  ILoginFailedAction,
  ILoginFailedPayload,
} from "../auth.types";

/**
 * @param {object} payload - Принимает обьект со свойствами:
 * * email - string;
 * * password - string;
 * @returns {object} Возвращает обьект:
 * * type - тип действия
 * * payload - принятый аргумент payload
 * @description Вызывается при отправке запроса на вход/авторизацию
 */
export const LoginRequestAction = (
  payload: ILoginRequestPayload
): ILoginRequestAction => ({
  type: LOGIN_REQUEST,
  payload,
});

/**
 * @param {object} payload - Принимает обьект со свойствами:
 * * user: IUserResponse
 * @type IUser:
 * * email - string;
 * @returns {object} Возвращает обьект:
 * * type - тип действия
 * * payload - принятый аргумент payload
 * @description Вызывается при успешном входе/авторизации
 */
export const LoginSuccessAction = (
  payload: ILoginSuccessPayload
): ILoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload,
});

/**
 * @param {object} payload - Принимает обьект со свойствами:
 * * error - string; Текст ошибки
 * @returns {object} Возвращает обьект:
 * * type - тип действия
 * * payload - принятый аргумент payload
 * @description Вызывается при неудачном входе/авторизации
 */
export const LoginFailedAction = (
  payload: ILoginFailedPayload
): ILoginFailedAction => ({
  type: LOGIN_FAILED,
  payload,
});
