const PREFIX = "theme";

export const TOGGLE_THEME_START = `${PREFIX}/TOGGLE_THEME_START`;
export const TOGGLE_THEME_SUCCESS = `${PREFIX}/TOGGLE_THEME_SUCCESS`;

export const toggleThemeStart = () => ({
  type: TOGGLE_THEME_START,
});

export const toggleThemeSuccess = (data: string) => ({
  type: TOGGLE_THEME_SUCCESS,
  data,
});
