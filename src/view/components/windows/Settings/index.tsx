import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../../../data/router/utils/authRoutes.utils";
import { AUTH_ROUTE } from "../../../../data/router/utils/publicRoutes.utils";
import { ACTION_LOGOUT } from "../../../../data/store/auth/auth.action-types";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getThemeStyles } from "../../../utils/themeStyles";

import styles from "./index.module.scss";

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useTypedSelector((state) => state.theme);
  const themeStyle = getThemeStyles(theme);

  return (
    <div className={styles.folder}>
      <div
        style={{
          color: themeStyle.color,
          background: themeStyle.header.background,
        }}
        className={styles.header}
      >
        <div className={styles.header__btnWrapper}>
          <button
            onClick={() => {
              navigate(HOME_ROUTE);
            }}
            className={styles.onCloseBtn}
          />
        </div>
        <p>Settings</p>
      </div>
      <div
        style={{
          color: themeStyle.color,
          background: themeStyle.body.background,
        }}
        className={styles.wrapper}
      >
        <div className={styles.content}>
          <button
            style={{
              color: themeStyle.color,
              background: themeStyle.header.background,
            }}
            className={styles.contentItem}
            onClick={() => {
              dispatch({ type: ACTION_LOGOUT });
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
