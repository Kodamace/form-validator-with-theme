import React from "react";
import { FunctionComponent } from "react";
import { StyledErrorMessage } from "../styles";

interface IError {
  error: any;
  value: string | undefined;
  errorMessage?: string;
}

interface ISubmitErrorValues {
  value: string;
  key: string;
}

export const ErrorMessage: FunctionComponent<IError> = ({
  error,
  value,
  errorMessage,
}) => {
  return (
    <div style={{ marginTop: errorMessage ? "-10px" : "0px" }}>
      {error && (
        <StyledErrorMessage error={error}>
          {errorMessage ? (
            <span>{`${value} ${errorMessage}`}</span>
          ) : (
            `${value} can not be empty`
          )}
        </StyledErrorMessage>
      )}
    </div>
  );
};

export const handleEmailValidationCheck = (
  value: string,
  updateErrors: (value: any) => void
) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isValidEmail = re.test(value);
  if (!isValidEmail) {
    updateErrors("email not valid");
  } else {
    updateErrors(undefined);
  }
};

export const handleErrors = (
  inputValue: string,
  errors: any,
  updateErrors: (value: any) => void
) => {
  const errorKeys = Object.keys(errors);
  const touchedIndex = errorKeys.findIndex((key) => key === inputValue);
  if (touchedIndex >= 0) {
    errorKeys.splice(touchedIndex, 1);

    const newErrors = errorKeys.reduce((acc: any, errorKey: string) => {
      acc[errorKey] = errors[errorKey];
      return acc;
    }, {});

    updateErrors(newErrors);
  }
};

export const handelFormSubmissionErrors = (values: ISubmitErrorValues[]) => {
  let errorObj = {};
  values.map(({ value, key }) => {
    if (!value) {
      errorObj = { ...errorObj, [key]: `error.${key}.required` };
    }
    return errorObj;
  });
  return errorObj;
};
