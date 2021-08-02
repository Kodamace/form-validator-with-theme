import {
  CLEAR_STATE,
  EDIT_EMAIL_START,
  EDIT_EMAIL_SUCCESS,
  EDIT_FIRST_NAME_START,
  EDIT_FIRST_NAME_SUCCESS,
  EDIT_LAST_NAME_START,
  EDIT_LAST_NAME_SUCCESS,
  EDIT_MIDDLE_NAME_START,
  EDIT_MIDDLE_NAME_SUCCESS,
  SUBMIT_FORM_ERROR,
  SUBMIT_FORM_START,
  SUBMIT_FORM_SUCCESS,
} from "./home.actions";

export interface IHomeReducer {
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  isLoading: boolean;
  formSubmissionFailure: boolean;
  formDataSubmitted: any;
  formSubmissionMessage: string;
}

const initialState: IHomeReducer = {
  email: "",
  firstName: "",
  middleName: "",
  lastName: "",
  isLoading: false,
  formSubmissionFailure: false,
  formDataSubmitted: {},
  formSubmissionMessage: "",
};

export default function homeReducer(state = initialState, action: any) {
  const { type, data } = action;

  switch (type) {
    case EDIT_FIRST_NAME_START:
    case EDIT_MIDDLE_NAME_START:
    case EDIT_LAST_NAME_START:
    case EDIT_EMAIL_START:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_FIRST_NAME_SUCCESS:
      return {
        ...state,
        firstName: data,
        isLoading: false,
      };

    case EDIT_MIDDLE_NAME_SUCCESS:
      return {
        ...state,
        middleName: data,
        isLoading: false,
      };
    case EDIT_LAST_NAME_SUCCESS:
      return {
        ...state,
        lastName: data,
        isLoading: false,
      };
    case EDIT_EMAIL_SUCCESS:
      return {
        ...state,
        email: data,
        isLoading: false,
      };
    case SUBMIT_FORM_START:
      return {
        ...state,
        isLoading: true,
        formSubmissionFailure: true,
        formSubmissionMessage: "",
      };
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        firstName: initialState.firstName,
        middleName: initialState.middleName,
        lastName: initialState.lastName,
        email: initialState.email,
        formSubmissionMessage: "Form submitted successfully",
        isLoading: false,
        formSubmissionFailure: false,
        formDataSubmitted: data,
      };
    case SUBMIT_FORM_ERROR:
      return {
        ...state,
        isLoading: false,
        formSubmissionFailure: true,
        formSubmissionMessage: data,
      };
    case CLEAR_STATE:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}
