import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { FETCH_USERS_REQUEST } from "../../../../data/store/users/users.action-types";
import { fetchUserPostsRequestAction } from "../../../../data/store/users/users.actions";
import {
  IUserPostsDataResponse,
  IUsersDataResponse,
} from "../../../../data/store/users/users.types";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import styles from "./index.module.scss";

interface IUserTotalData {
  data: IUsersDataResponse | undefined;
  posts: IUserPostsDataResponse[];
}

const UserSite: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { userPosts, users } = useTypedSelector((state) => state.users);
  const [userData, setUserData] = React.useState<IUserTotalData>(
    {} as IUserTotalData
  );

  React.useEffect(() => {
    dispatch(fetchUserPostsRequestAction({ userId: Number(id) }));
    dispatch({ type: FETCH_USERS_REQUEST });
  }, []);

  React.useEffect(() => {
    if (users.length && userPosts.length) {
      setUserData({
        data: users.find((user) => user.id === Number(id)),
        posts: userPosts,
      });
    }
  }, [users, userPosts]);

  console.log(userData);

  return (
    <div className={styles.user}>
      <h1>{userData.data?.name}</h1>
      <div className={styles.userData}>
        <div>
          <div className={styles.userDataIitem}>
            Email - {userData.data?.email}
          </div>
          <div className={styles.userDataIitem}>
            Телефон - {userData.data?.phone}
          </div>
          <div className={styles.userDataIitem}>
            Компания - {userData.data?.company.name}
          </div>
          <div className={styles.userDataIitem}>
            Псевдоним - {userData.data?.username}
          </div>
        </div>
        <div className={styles.userDataPosts}>
          {userData.posts?.length &&
            userData.posts.map(({ title, body, id }) => (
              <div className={styles.userDataPostsItem} key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserSite;
