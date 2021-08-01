import { TOGGLE_THEME_START, TOGGLE_THEME_SUCCESS } from "./theme.actions";

export interface IThemeReducer {
  currentTheme: "light" | "dark";
  isLoading: boolean;
}

const initialState: IThemeReducer = {
  currentTheme: "light",
  isLoading: false,
};

export default function themeReducer(state = initialState, action: any) {
  const { type, data } = action;

  switch (type) {
    case TOGGLE_THEME_START:
      localStorage.removeItem("theme");
      return {
        ...state,
        isLoading: true,
      };
    case TOGGLE_THEME_SUCCESS:
      if (data) localStorage.setItem("theme", data);
      return {
        ...state,
        currentTheme: data,
        isLoading: false,
      };

    default:
      return state;
  }
}
