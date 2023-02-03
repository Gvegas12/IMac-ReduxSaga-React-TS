import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  BROWSER_ROUTE,
  USERS_ROUTE,
} from "../../../../data/router/utils/authRoutes.utils";
import { FETCH_USERS_REQUEST } from "../../../../data/store/users/users.action-types";
import { IUsersDataResponse } from "../../../../data/store/users/users.types";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import styles from "./index.module.scss";

const UsersSite: React.FC = () => {
  const dispatch = useDispatch();
  const { users } = useTypedSelector((state) => state.users);
  const [usersState, setUsersState] = React.useState<IUsersDataResponse[]>();
  const [toggleSort, setToggleSort] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch({ type: FETCH_USERS_REQUEST });
  }, []);
  React.useEffect(() => {
    setUsersState(users);
  }, [users]);

  const onSortByName = () => {
    setUsersState((prevState: React.ComponentState): IUsersDataResponse[] => [
      ...prevState?.sort((a: IUsersDataResponse, b: IUsersDataResponse) => {
        setToggleSort(!toggleSort);
        if (toggleSort) {
          return b.name.localeCompare(a.name);
        } else {
          return a.name.localeCompare(b.name);
        }
      }),
    ]);
  };

  const onSortById = () => {
    setUsersState((prevState: React.ComponentState): IUsersDataResponse[] => [
      ...prevState?.sort((a: IUsersDataResponse, b: IUsersDataResponse) => {
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
    <div className={styles.users}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Users</h1>
          <div className={styles.btnWrapper}>
            <button className={styles.btn} onClick={onSortByName}>
              On sort by name
            </button>
            <button className={styles.btn} onClick={onSortById}>
              On sort by id
            </button>
          </div>
          <ul className={styles.userList}>
            {usersState &&
              usersState.map(({ name, id, company }) => (
                <Link key={id} to={`${BROWSER_ROUTE}/${USERS_ROUTE}/${id}`}>
                  <li className={styles.userItem}>
                    <span>
                      <small>name: </small>
                      {name}
                    </span>
                    <span>
                      <small>company: </small>
                      {company.name}
                    </span>
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsersSite;
