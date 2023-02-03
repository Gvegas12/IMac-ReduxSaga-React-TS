import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "../../data/router";
import {
  BROWSER_ROUTE,
  HOME_ROUTE,
  POSTS_ROUTE,
  SETTING_ROUTE,
  USERS_ROUTE,
  USER_ROUTE,
} from "../../data/router/utils/authRoutes.utils";
import Browser from "../components/windows/Browser";
import PostsSite from "../components/sites/Posts";
import UsersSite from "../components/sites/Users";
import Layout from "./Layout";
import Settings from "../components/windows/Settings";
import UserSite from "../components/sites/User";

const AppRouter: React.FC = () => {
  // f11 нажми для fullscreen
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<Layout />}>
          <Route path={SETTING_ROUTE} element={<Settings />} />
          <Route
            path={BROWSER_ROUTE}
            element={<Browser name="Custom Browser" />}
          >
            <Route path={USERS_ROUTE} element={<UsersSite />} />
            <Route path={POSTS_ROUTE} element={<PostsSite />} />
            <Route path={USER_ROUTE} element={<UserSite />} />
          </Route>
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path={"*"} element={<Layout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
