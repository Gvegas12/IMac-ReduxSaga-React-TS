import React from "react";
import clsx from "clsx";
import { Themes } from "../../../../data/store/theme/theme.types";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import {
  SetDarkThemeAction,
  SetLightThemeAction,
} from "../../../../data/store/theme/theme.actions";

import styles from "./index.module.scss";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { theme } = useTypedSelector((state) => state.theme);

  React.useEffect(() => {
    const SSTheme = sessionStorage.getItem("theme");
    if (SSTheme === Themes.light) {
      dispatch(SetLightThemeAction());
    }
    if (SSTheme === Themes.dark) {
      dispatch(SetDarkThemeAction());
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.btnWrapper}>
        <button className={clsx(styles.themeBtn)}>
          {theme === "light" ? (
            <span
              className={styles.themeText}
              onClick={() => {
                dispatch(SetDarkThemeAction());
                sessionStorage.setItem("theme", Themes.dark);
              }}
            >
              Theme Dark
            </span>
          ) : (
            <span
              className={styles.themeText}
              onClick={() => {
                dispatch(SetLightThemeAction());
                sessionStorage.setItem("theme", Themes.light);
              }}
            >
              Theme Light
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
