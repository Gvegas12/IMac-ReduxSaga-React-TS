import {
  FETCH_USERS_FAILED,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USER_POSTS_FAILED,
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_POSTS_SUCCESS,
} from "./users.action-types";
import {
  FetchUsersActions,
  IUserPostsDataResponse,
  IUsersDataResponse,
  IUsersState,
} from "./users.types";

const initialState: IUsersState = {
  users: [] as IUsersDataResponse[],
  userPosts: [] as IUserPostsDataResponse[],
  error: "",
  pending: false,
};

export default (
  state = initialState,
  action: FetchUsersActions
): IUsersState => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return state;
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        error: "",
        pending: false,
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        error: action.payload.error,
        pending: false,
      };
    case FETCH_USER_POSTS_SUCCESS:
      return {
        ...state,
        userPosts: action.payload.userPosts,
        error: "",
        pending: false,
      };
    case FETCH_USER_POSTS_FAILED:
      return {
        ...state,
        error: action.payload.error,
        pending: false,
      };
    case FETCH_USER_POSTS_REQUEST:
      return state;
    default:
      return state;
  }
};
