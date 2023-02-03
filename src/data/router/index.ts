import { Pathname } from "react-router-dom";
import Auth from "../../view/components/pages/Auth";
import { AUTH_ROUTE } from "./utils/publicRoutes.utils";

type AppRoutesType = Array<{ path: Pathname; Component: React.FC }>;
/**
 * Массив с маршрутами приложения доступные пользователю только после авторизации
 * 
 * @type AppRoutesType = Array<{
 * 
 * * path: Pathname 
 * * Component: React.FC
 * 
 * }>
 */
export const publicRoutes: AppRoutesType = [
  {
    path: AUTH_ROUTE,
    Component: Auth,
  },
];
