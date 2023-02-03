import React from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import {
  BROWSER_ROUTE,
  SETTING_ROUTE,
} from "../../../../data/router/utils/authRoutes.utils";

import styles from "./index.module.scss";

const Footer: React.FC = () => {
  const location = useLocation();
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Link to={SETTING_ROUTE}>
          <div
            className={clsx(
              styles.icon,
              styles.settingsIcon,
              location.pathname === SETTING_ROUTE && styles.active
            )}
          />
        </Link>
        <Link to={BROWSER_ROUTE}>
          <div
            className={clsx(
              styles.icon,
              "ME-icon-svg",
              location.pathname.includes(BROWSER_ROUTE) && styles.active
            )}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
