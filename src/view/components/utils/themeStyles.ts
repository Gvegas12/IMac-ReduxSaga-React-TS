import { Themes } from "../../../data/store/theme/theme.types";

export const getThemeStyles = (theme: Themes) => ({
  header: {
    background:
      theme === Themes.light
        ? `linear-gradient(
        180deg,
        rgba(232, 229, 230, 1) 0%,
        rgba(208, 208, 208, 1) 60%
      )`
        : "var(--theme-header--body-bg-color)",
  },
  body: {
    background:
      theme === Themes.light
        ? "var(--theme-light--body-bg-color)"
        : "var(--theme-dark--body-bg-color)",
  },
  color:
    theme === Themes.light
      ? "var(--theme-light--color)"
      : "var(--theme-dark--color)",
});
