import React, { FunctionComponent, useContext } from "react";
import ThemeContext, { ICurrentTheme } from "../../../core/theme/global.theme";
import { StyledButton, StyledHomeHeader } from "../styles";

interface IHomeHeader {
  handleThemeToggle: any;
}

export const HomeHeader: FunctionComponent<IHomeHeader> = ({
  handleThemeToggle,
}) => {
  const theme: ICurrentTheme = useContext(ThemeContext);
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
