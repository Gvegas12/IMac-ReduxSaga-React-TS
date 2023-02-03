import { THEME_DARK_MODE, THEME_LIGHT_MODE } from "./theme.action-types";
import { IThemeDarkAction, IThemeLightAction } from "./theme.types";

export const SetLightThemeAction = (): IThemeLightAction => ({
  type: THEME_LIGHT_MODE,
});
export const SetDarkThemeAction = (): IThemeDarkAction => ({
  type: THEME_DARK_MODE,
});
