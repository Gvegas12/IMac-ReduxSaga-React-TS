import { IUserResponse, LoginActions, IAuthState } from "../auth.types";
import {
  ACTION_LOGOUT,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../auth.action-types";

const initialState: IAuthState = {
  user: {} as IUserResponse,
  error: "",
  pending: false,
};

export default (state = initialState, action: LoginActions): IAuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return {
        user: action.payload.user,
        error: "",
        pending: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    case ACTION_LOGOUT:
      return {
        ...state,
        error: "",
        user: {} as IUserResponse,
      };
    default:
      return state;
  }
};
