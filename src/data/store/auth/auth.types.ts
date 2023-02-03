import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  ACTION_LOGOUT,
} from "./auth.action-types";

export interface IUser {
  email: string;
  password: string;
}

export interface IUserResponse {
  email: string;
}

export interface IAuthState {
  error: string;
  pending: boolean;
  user: IUserResponse;
}

// ---------------------------------------------------
//                      Logout
// ---------------------------------------------------
export interface ILogoutAction {
  type: typeof ACTION_LOGOUT;
}
// ---------------------------------------------------
// ---------------------------------------------------

// ---------------------------------------------------
//                       Login
// ---------------------------------------------------
export interface ILoginRequestPayload {
  email: string;
  password: string;
}
export interface ILoginSuccessPayload {
  user: IUserResponse;
}
export interface ILoginFailedPayload {
  error: string;
}
export interface ILoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: ILoginRequestPayload;
}
export interface ILoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: ILoginSuccessPayload;
}
export interface ILoginFailedAction {
  type: typeof LOGIN_FAILED;
  payload: ILoginFailedPayload;
}

export type LoginActions =
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginFailedAction
  | ILogoutAction;
// ---------------------------------------------------
// ---------------------------------------------------
