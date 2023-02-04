import React from "react";
import Header from "../components/widgets/Header";
import { Outlet } from "react-router-dom";
import { Themes } from "../../data/store/theme/theme.types";
import { useTypedSelector } from "../hooks/useTypedSelector";
import DARK_BG_IMG from "../assets/img/apple_main_bg_6060w_dark.jpg";
import LIGHT_BG_IMG from "../assets/img/apple_main_bg_6060w_light.jpg";
import Desktop from "../components/pages/Desktop";

const Layout: React.FC = () => {
  const { theme } = useTypedSelector((state) => state.theme);
  return (
    <>
      <Header />
      <main
        style={{
          backgroundImage: `url(${
            theme === Themes.light ? LIGHT_BG_IMG : DARK_BG_IMG
          })`,
        }}
      >
        <Desktop />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
