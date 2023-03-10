import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../../../data/router/utils/authRoutes.utils";
import { AUTH_ROUTE } from "../../../../data/router/utils/publicRoutes.utils";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getThemeStyles } from "../../utils/themeStyles";

import styles from "./index.module.scss";

interface IBrowserProps {
  name?: string;
}

const Browser: React.FC<IBrowserProps> = ({ name }) => {
  const { theme } = useTypedSelector((state) => state.theme);
  const themeStyle = getThemeStyles(theme);
  const navigate = useNavigate();
  const locationRouter = useLocation();
  const [url, setUrl] = React.useState<string>(
    `${location.origin}${locationRouter.pathname}`
  );

  React.useEffect(() => {
    if (!localStorage.getItem(`token`)) {
      navigate(AUTH_ROUTE);
    }
  }, []);
  React.useEffect(() => {
    setUrl(`${location.origin}${locationRouter.pathname}`);
  }, [locationRouter]);

  const onChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };


  return (
    <div className={styles.browser}>
      <div
        style={{
          color: themeStyle.color,
          background: themeStyle.header.background,
        }}
        className={styles.header}
      >
        <div>
          <div className={styles.header__btnWrapper}>
            <button
              onClick={() => {
                navigate(HOME_ROUTE);
              }}
              className={styles.onCloseBtn}
            />
          </div>
          <p>{name}</p>
        </div>
        <input
          style={{
            color: themeStyle.color,
            background: themeStyle.body.background,
          }}
          value={url}
          onChange={onChangeUrl}
          className={styles.url}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              window.location.assign(url);
            }
          }}
        />
      </div>
      <div
        style={{
          color: themeStyle.color,
          background: themeStyle.body.background,
        }}
        className={styles.wrapper}
      >
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Browser;
