import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
  FETCH_USER_POSTS_FAILED,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_REQUEST,
} from "./users.action-types";
import {
  IFetchUsersSuccessAction,
  IFetchUsersSuccessPayload,
  IFetchUsersFailedAction,
  IFetchUsersFailedPayload,
  IFetchUserPostsSuccessPayload,
  IFetchUserPostsSuccessAction,
  IFetchUserPostsFailedPayload,
  IFetchUserPostsFailedAction,
  IFetchUserPostsRequestAction,
  IFetchUserPostsRequestPayload,
} from "./users.types";

export const fetchUsersSuccessAction = (
  payload: IFetchUsersSuccessPayload
): IFetchUsersSuccessAction => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersFailedAction = (
  payload: IFetchUsersFailedPayload
): IFetchUsersFailedAction => ({
  type: FETCH_USERS_FAILED,
  payload,
});

export const fetchUserPostsRequestAction = (
  payload: IFetchUserPostsRequestPayload
): IFetchUserPostsRequestAction => ({
  type: FETCH_USER_POSTS_REQUEST,
  payload,
});

export const fetchUserPostsSuccessAction = (
  payload: IFetchUserPostsSuccessPayload
): IFetchUserPostsSuccessAction => ({
  type: FETCH_USER_POSTS_SUCCESS,
  payload,
});

export const fetchUserPostsFailedAction = (
  payload: IFetchUserPostsFailedPayload
): IFetchUserPostsFailedAction => ({
  type: FETCH_USER_POSTS_FAILED,
  payload,
});
