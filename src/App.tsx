import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/home/Home";
import ThemeContext, { themes } from "./core/theme/global.theme";
import { toggleThemeSuccess } from "./core/theme/theme.actions";
import { RootState } from "./core/store/store";

function App() {
  const currentTheme: "light" | "dark" = useSelector(
    (state: RootState) => state.themeReducer.currentTheme
  );

  const dispatch = useDispatch();

  const getUsersPreferredTheme = (theme: string | null) => {
    if (theme) dispatch(toggleThemeSuccess(theme));
  };

  useEffect(() => {
    const userPreferredTheme = localStorage.getItem("theme");
    getUsersPreferredTheme(userPreferredTheme);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = themes[currentTheme].backgroundColor;
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={themes[currentTheme]}>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
