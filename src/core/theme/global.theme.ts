import React from "react";

export interface ICurrentTheme {
  color: string;
  backgroundColor: string;
  header: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
}

interface ITheme {
  light: ICurrentTheme;
  dark: ICurrentTheme;
}

export const themes: ITheme = {
  light: {
    backgroundColor: "#37deba",
    color: "#4036ff",
    header: "#34c3eb",
    buttonBackgroundColor: "#4036ff",
    buttonTextColor: "#37deba",
  },
  dark: {
    backgroundColor: "#104c63",
    color: "#03b7ff",
    header: "#0c2d36",
    buttonBackgroundColor: "#03b7ff",
    buttonTextColor: "#104c63",
  },
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
