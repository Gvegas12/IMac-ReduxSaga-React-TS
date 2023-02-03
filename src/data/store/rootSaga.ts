import { all, fork } from "redux-saga/effects";
import { loginWatcher, logoutWather } from "./auth/auth.saga";
import { fetchUserPostsWatcher, fetchUsersWatcher } from "./users/users.saga";

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(fetchUsersWatcher),
    fork(fetchUserPostsWatcher),
    fork(logoutWather),
  ]);
}
