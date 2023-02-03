import { THEME_DARK_MODE, THEME_LIGHT_MODE } from "./theme.action-types";

export enum Themes {
  light = "light",
  dark = "dark",
}
export interface ThemesState {
  theme: Themes;
}
export interface IThemeLightAction {
  type: typeof THEME_LIGHT_MODE;
}
export interface IThemeDarkAction {
  type: typeof THEME_DARK_MODE;
}
export type ThemeActions = IThemeLightAction | IThemeDarkAction;
