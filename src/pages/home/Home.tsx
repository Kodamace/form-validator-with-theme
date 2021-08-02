import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeHeader } from "./components/HomeHeader";
import { InputField } from "../../components/InputField";
import { PopUpModal } from "../../components/Modal";
import { RootState } from "../../core/store/store";
import {
  StyledActionsWrapper,
  StyledButton,
  StyledForm,
  StyledFormWrapper,
} from "./styles";
import ThemeContext, { ICurrentTheme } from "../../core/theme/global.theme";

import {
  ErrorMessage,
  handelFormSubmissionErrors,
  handleEmailValidationCheck,
  handleErrors,
} from "./helpers";
import { clearState, submitFormError } from "./home.actions";
import {
  submitForm,
  updateEmail,
  updateFirstName,
  updateLastName,
  updateMiddleName,
} from "./home.thunks";

export default function Home() {
  const [errors, setErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const dispatch = useDispatch();

  const {
    email,
    firstName,
    formSubmissionFailure,
    formDataSubmitted,
    formSubmissionMessage,
    isLoading,
    lastName,
    middleName,
  } = useSelector((state: RootState) => state.homeReducer);

  const theme: ICurrentTheme = useContext(ThemeContext);

  const modalBody = (
    <div>
      <p>{formSubmissionMessage}</p>
      <div>
        <p>
          First name:{" "}
          {formDataSubmitted.firstName
            ? formDataSubmitted.firstName
            : firstName
            ? firstName
            : "empty"}
        </p>
        <p>
          Middle name:{" "}
          {formDataSubmitted.middleName
            ? formDataSubmitted.middleName
            : middleName
            ? middleName
            : "empty"}
        </p>
        <p>
          Last name:{" "}
          {formDataSubmitted.lastName
            ? formDataSubmitted.lastName
            : lastName
            ? lastName
            : "empty"}
        </p>
        <p>
          email:{" "}
          {formDataSubmitted.email
            ? formDataSubmitted.email
            : email
            ? email
            : "empty"}
        </p>
      </div>
      <StyledButton onClick={() => handleClose()} type="button" theme={theme}>
        Close message
      </StyledButton>
    </div>
  );

  const handleInputValueTouchedState = (touchedValue: string) => {
    setTouched({ ...touched, [touchedValue]: true });
  };

  const handleInputValueStateUpdate = (
    inputValue: string,
    value: string,
    cb: (value: string) => void
  ) => {
    dispatch(cb(value));
    if (value) {
      handleErrors(inputValue, errors, setErrors);

      if (inputValue === "email")
        handleEmailValidationCheck(value, setEmailErrorMessage);
    } else {
      if (formSubmissionFailure && !value) {
        setErrors({
          ...errors,
          [inputValue]: `error.${inputValue}.required`,
        });
        setEmailErrorMessage("");
      }
      setEmailErrorMessage("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errorObj = handelFormSubmissionErrors([
      { value: `${firstName}`, key: "firstName" },
      { value: `${lastName}`, key: "lastName" },
      { value: `${email}`, key: "email" },
    ]);

    if (errorObj) {
      setErrors(errorObj);
    }

    if (!firstName || !lastName || !email || emailErrorMessage)
      return dispatch(
        submitFormError("Please make sure all fields are filled correctly")
      );

    dispatch(submitForm());
  };

  const handleClose = () => {
    dispatch(clearState());
  };

  return (
    <div>
      <HomeHeader />
      <StyledFormWrapper>
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
          <InputField
            isRequired
            errors={errors}
            errorField="firstName"
            name="First name"
            updateInputFunction={(value: string) =>
              handleInputValueStateUpdate("firstName", value, updateFirstName)
            }
            value={firstName}
            handleInputValueTouchedState={handleInputValueTouchedState}
          />

          <InputField
            errors={{}}
            errorField="middleName"
            name="Middle name"
            updateInputFunction={(value: string) =>
              dispatch(updateMiddleName(value))
            }
            value={middleName}
            handleInputValueTouchedState={handleInputValueTouchedState}
          />

          <InputField
            isRequired
            errors={errors}
            errorField="lastName"
            name="Last name"
            updateInputFunction={(value: string) =>
              handleInputValueStateUpdate("lastName", value, updateLastName)
            }
            value={lastName}
            handleInputValueTouchedState={handleInputValueTouchedState}
          />
          <InputField
            onBlur={() => {
              if (!email) setEmailErrorMessage("");
            }}
            isRequired
            errors={errors}
            errorField="email"
            name="Email"
            updateInputFunction={(value: string) =>
              handleInputValueStateUpdate("email", value, updateEmail)
            }
            value={email}
            handleInputValueTouchedState={handleInputValueTouchedState}
          />
          <ErrorMessage
            error={emailErrorMessage}
            value="Email"
            errorMessage="Invalid"
          />
          <StyledActionsWrapper>
            <StyledButton disabled={isLoading} theme={theme} type="submit">
              Submit{isLoading ? "ting" : null}
            </StyledButton>
          </StyledActionsWrapper>
        </StyledForm>
      </StyledFormWrapper>
      <PopUpModal showModal={formSubmissionMessage} body={modalBody} />
    </div>
  );
}
