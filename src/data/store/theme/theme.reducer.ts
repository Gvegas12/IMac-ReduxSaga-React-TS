import { THEME_DARK_MODE, THEME_LIGHT_MODE } from "./theme.action-types";
import { ThemeActions, Themes, ThemesState } from "./theme.types";

const initialState: ThemesState = {
  theme: "" as Themes,
};

export default (state = initialState, action: ThemeActions): ThemesState => {
  switch (action.type) {
    case THEME_DARK_MODE:
      return {
        ...state,
        theme: Themes.dark,
      };
    case THEME_LIGHT_MODE:
      return {
        ...state,
        theme: Themes.light,
      };
    default:
      return state;
  }
};
