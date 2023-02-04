import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  BROWSER_ROUTE,
  USERS_ROUTE,
} from "../../../../data/router/utils/authRoutes.utils";
import { FETCH_USERS_REQUEST } from "../../../../data/store/users/users.action-types";
import { fetchUserPostsRequestAction } from "../../../../data/store/users/users.actions";
import {
  IUserPostsDataResponse,
  IUsersDataResponse,
} from "../../../../data/store/users/users.types";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import styles from "./index.module.scss";

interface IPostTotalData extends IUserPostsDataResponse {
  user: IUsersDataResponse | undefined;
}

const PostsSite: React.FC = () => {
  const dispatch = useDispatch();
  const { userPosts, users } = useTypedSelector((state) => state.users);
  const [postsTotalData, setPostsTotalData] = React.useState<IPostTotalData[]>(
    [] as IPostTotalData[]
  );
  const [toggleSort, setToggleSort] = React.useState<boolean>(true);

  React.useEffect(() => {
    dispatch(fetchUserPostsRequestAction({ userId: 1 }));
    dispatch({ type: FETCH_USERS_REQUEST });
  }, []);

  React.useEffect(() => {
    if (userPosts.length && users.length) {
      setPostsTotalData(() => {
        return userPosts.map((post) => ({
          ...post,
          user: users.find((user) => user.id === post.userId),
        }));
      });
    }
  }, [userPosts, users]);

  const onSortByTitle = () => {
    setPostsTotalData((prevState: React.ComponentState): IPostTotalData[] => [
      ...prevState?.sort((a: IPostTotalData, b: IPostTotalData) => {
        setToggleSort(!toggleSort);
        if (toggleSort) {
          return b.title.localeCompare(a.title);
        } else {
          return a.title.localeCompare(b.title);
        }
      }),
    ]);
  };

  const onSortByPostId = () => {
    setPostsTotalData((prevState: React.ComponentState): IPostTotalData[] => [
      ...prevState?.sort((a: IPostTotalData, b: IPostTotalData) => {
        setToggleSort(!toggleSort);
        if (toggleSort) {
          return b.id - a.id;
        } else {
          return a.id - b.id;
        }
      }),
    ]);
  };

  return (
    <div className={styles.posts}>
      <div className={styles.btnWrapper}>
        <button className={styles.btn} onClick={onSortByTitle}>
          On sort by name
        </button>
        <button className={styles.btn} onClick={onSortByPostId}>
          On sort by id
        </button>
      </div>
      {postsTotalData &&
        postsTotalData.map(({ title, id, body, user }) => (
          <div className={styles.postItem} key={id}>
            <h2>{title}</h2>
            <h3>
              <Link
                className={styles.userName}
                to={`${BROWSER_ROUTE}/${USERS_ROUTE}/${id}`}
              >
                {user?.name}
              </Link>
            </h3>
            <div>
              <p>{body}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostsSite;
