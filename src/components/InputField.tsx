import React, { FunctionComponent } from "react";
import { ErrorMessage } from "../pages/home/helpers";
import {
  StyledRequiredText,
  StyledTextField,
  StyledTextFieldWrapper,
} from "../pages/home/styles";

interface IInputField {
  errors: any;
  errorField: string;
  name: string | undefined;
  value: string;
  updateInputFunction: (value: string) => void;
  handleInputValueTouchedState: any;
  onBlur?: () => void;
  isRequired?: boolean;
}

export const InputField: FunctionComponent<IInputField> = ({
  errors,
  errorField,
  name,
  value,
  updateInputFunction,
  handleInputValueTouchedState,
  onBlur,
  isRequired,
}) => {
  return (
    <StyledTextFieldWrapper>
      <StyledTextField
        // required={isRequired}
        label={name}
        error={!!errors[errorField]}
        onFocus={() => handleInputValueTouchedState(errorField)}
        variant="outlined"
        value={value}
        placeholder={name}
        onChange={({ target: { value } }) => updateInputFunction(value)}
      />
      {isRequired ? (
        <StyledRequiredText>Required field*</StyledRequiredText>
      ) : null}
      {errors[errorField] && (
        <ErrorMessage error={`${errors[errorField]}`} value={name} />
      )}
    </StyledTextFieldWrapper>
  );
};
