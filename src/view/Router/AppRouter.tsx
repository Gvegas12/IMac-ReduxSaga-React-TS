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
import PostsSite from "../components/entities/Posts";
import UserSite from "../components/entities/User";
import UsersSite from "../components/entities/Users";
import Browser from "../components/features/Browser";
import Settings from "../components/features/Settings";
import Layout from "./Layout";

const AppRouter: React.FC = () => {
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
