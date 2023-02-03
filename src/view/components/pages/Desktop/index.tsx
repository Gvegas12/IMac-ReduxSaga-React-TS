import React from "react";
import UI from "../../UI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTE } from "../../../../data/router/utils/publicRoutes.utils";
import { FETCH_USERS_REQUEST } from "../../../../data/store/users/users.action-types";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { fetchUserPostsRequestAction } from "../../../../data/store/users/users.actions";
import {
  BROWSER_ROUTE,
  POSTS_ROUTE,
  USERS_ROUTE,
} from "../../../../data/router/utils/authRoutes.utils";

import styles from "./index.module.scss";
import Footer from "../../sections/Footer";

const Desktop: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, userPosts } = useTypedSelector((state) => state.users);

  React.useEffect(() => {
    if (!localStorage.getItem(`token`)) {
      navigate(AUTH_ROUTE);
    }
  }, []);
  return (
    <div className={styles.desktop}>
      <div className="container">
        <div className={styles.wrapper}>
          <UI.FileIcon
            href={BROWSER_ROUTE + "/" + USERS_ROUTE}
            onOpen={() => {
              if (!users.length) {
                dispatch({ type: FETCH_USERS_REQUEST });
              }
            }}
            className={styles.file_closed}
            name="Users"
          />
          <UI.FileIcon
            href={BROWSER_ROUTE + "/" + POSTS_ROUTE}
            onOpen={() => {
              if (!userPosts.length) {
                dispatch(fetchUserPostsRequestAction({ userId: 1 }));
              }
            }}
            className={styles.file_closed}
            name="Posts"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Desktop;
