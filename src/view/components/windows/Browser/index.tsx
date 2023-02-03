import React, { ChangeEvent } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../../../data/router/utils/authRoutes.utils";
import { getThemeStyles } from "../../../utils/themeStyles";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import styles from "./index.module.scss";

interface IBrowserProps {
  name?: string;
}

const Browser: React.FC<IBrowserProps> = ({ name }) => {
  const navigate = useNavigate();
  const locationRouter = useLocation();
  const [url, setUrl] = React.useState<string>(
    `${location.origin}${locationRouter.pathname}`
  );

  React.useEffect(() => {
    setUrl(`${location.origin}${locationRouter.pathname}`);
  }, [locationRouter]);

  const onChangeUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const { theme } = useTypedSelector((state) => state.theme);
  const themeStyle = getThemeStyles(theme);

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
