import React, { FunctionComponent, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";
import ThemeContext, { ICurrentTheme } from "../../../core/theme/global.theme";
import {
  toggleThemeStart,
  toggleThemeSuccess,
} from "../../../core/theme/theme.actions";
import { StyledButton, StyledHomeHeader } from "../styles";

interface IHomeHeader {}

export const HomeHeader: FunctionComponent<IHomeHeader> = ({}) => {
  const theme: ICurrentTheme = useContext(ThemeContext);

  const currentTheme = useSelector(
    (state: RootState) => state.themeReducer.currentTheme
  );

  const dispatch = useDispatch();

  // Depending on the current theme we handle the toggling of the theme color selected
  const handleThemeToggle = () => {
    dispatch(toggleThemeStart());
    if (currentTheme === "light") {
      return dispatch(toggleThemeSuccess("dark"));
    }
    dispatch(toggleThemeSuccess("light"));
  };
  return (
    <StyledHomeHeader theme={theme}>
      <h3>Welcome to my theme demo</h3>
      <StyledButton
        theme={theme}
        type="button"
        style={{
          position: "absolute",
          right: 50,
        }}
        onClick={() => {
          handleThemeToggle();
        }}
      >
        Toggle Theme
      </StyledButton>
    </StyledHomeHeader>
  );
};
