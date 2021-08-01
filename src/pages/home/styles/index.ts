import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";

interface ITheme {
  theme: {
    color: string;
    backgroundColor: string;
    header: string;
    buttonBackgroundColor: string;
    buttonTextColor: string;
  };
}

export const StyledHomeHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props: ITheme) => props.theme}
  background-color: ${(props: ITheme) => props.theme.header};
`;

export const StyledTextField = styled(TextField)`
  background-color: #ffffff;
  border-radius: 5px;
`;

export const StyledTextFieldWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const StyledRequiredText = styled.span`
  font-size: 10px;
  opacity: 0.7;
  margin-left: 5px;
`;

export const StyledActionsWrapper = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-around;
`;

export const StyledButton = styled(Button)`
  && {
    background: ${(props: ITheme) => props.theme.buttonBackgroundColor};
    color: ${(props: ITheme) => props.theme.buttonTextColor};
    :hover {
      background: ${(props: ITheme) => props.theme.buttonBackgroundColor};
      opacity: 0.6;
    }
  }
`;

export const StyledErrorMessage = styled.div<{ error: boolean }>`
  ${(props) =>
    props.error && {
      color: "red",
    }};
  margin-top: 10px;
  span {
    margin-right: 135px;
    margin-top: 10px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  padding: 50px 0px;
  width: 400px;
`;

export const StyledFormWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
