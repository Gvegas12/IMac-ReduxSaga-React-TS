import {
  FETCH_USERS_FAILED,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USER_POSTS_FAILED,
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_POSTS_SUCCESS,
} from "./users.action-types";

export interface IUsersDataResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IUserPostsDataResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IUsersState {
  error: string;
  pending: boolean;
  users: IUsersDataResponse[];
  userPosts: IUserPostsDataResponse[];
}
export interface IFetchUserPostsRequestPayload {
  userId: number;
}
export interface IFetchUserPostsSuccessPayload {
  userPosts: IUserPostsDataResponse[];
}
export interface IFetchUserPostsFailedPayload {
  error: string;
}
export interface IFetchUserPostsRequestAction {
  type: typeof FETCH_USER_POSTS_REQUEST;
  payload: IFetchUserPostsRequestPayload;
}
export interface IFetchUserPostsSuccessAction {
  type: typeof FETCH_USER_POSTS_SUCCESS;
  payload: IFetchUserPostsSuccessPayload;
}
export interface IFetchUserPostsFailedAction {
  type: typeof FETCH_USER_POSTS_FAILED;
  payload: IFetchUserPostsFailedPayload;
}

export interface IFetchUsersSuccessPayload {
  users: IUsersDataResponse[];
}
export interface IFetchUsersFailedPayload {
  error: string;
}
export interface IFetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}
export interface IFetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: IFetchUsersSuccessPayload;
}
export interface IFetchUsersFailedAction {
  type: typeof FETCH_USERS_FAILED;
  payload: IFetchUsersFailedPayload;
}

export type FetchUsersActions =
  | IFetchUsersRequestAction
  | IFetchUsersSuccessAction
  | IFetchUsersFailedAction
  | IFetchUserPostsRequestAction
  | IFetchUserPostsSuccessAction
  | IFetchUserPostsFailedAction;
