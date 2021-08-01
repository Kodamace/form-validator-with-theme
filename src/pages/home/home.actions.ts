import { IFormData } from "./home.thunks";

const PREFIX = "home";

export const EDIT_FIRST_NAME_START = `${PREFIX}/EDIT_FIRST_NAME_START`;
export const EDIT_FIRST_NAME_SUCCESS = `${PREFIX}/EDIT_FIRST_NAME_SUCCESS`;
export const EDIT_MIDDLE_NAME_START = `${PREFIX}/EDIT_MIDDLE_NAME_START`;
export const EDIT_MIDDLE_NAME_SUCCESS = `${PREFIX}/EDIT_MIDDLE_NAME_SUCCESS`;
export const EDIT_LAST_NAME_START = `${PREFIX}/EDIT_LAST_NAME_START`;
export const EDIT_LAST_NAME_SUCCESS = `${PREFIX}/EDIT_LAST_NAME_SUCCESS`;
export const EDIT_EMAIL_START = `${PREFIX}/EDIT_EMAIL_START`;
export const EDIT_EMAIL_SUCCESS = `${PREFIX}/EDIT_EMAIL_SUCCESS`;
export const SUBMIT_FORM_START = `${PREFIX}/SUBMIT_FORM_START`;
export const SUBMIT_FORM_SUCCESS = `${PREFIX}/SUBMIT_FORM_SUCCESS`;
export const SUBMIT_FORM_ERROR = `${PREFIX}/SUBMIT_FORM_ERROR`;
export const CLEAR_STATE = `${PREFIX}/CLEAR_STATE`;

export const editFirstNameStart = () => ({
  type: EDIT_FIRST_NAME_START,
});

export const editFirstNameSuccess = (data: string) => ({
  type: EDIT_FIRST_NAME_SUCCESS,
  data,
});

export const editMiddleNameStart = () => ({
  type: EDIT_MIDDLE_NAME_START,
});

export const editMiddleNameSuccess = (data: string) => ({
  type: EDIT_MIDDLE_NAME_SUCCESS,
  data,
});

export const editLastNameStart = () => ({
  type: EDIT_LAST_NAME_START,
});

export const editLastNameSuccess = (data: string) => ({
  type: EDIT_LAST_NAME_SUCCESS,
  data,
});

export const editEmailStart = () => ({
  type: EDIT_EMAIL_START,
});

export const editEmailSuccess = (data: string) => ({
  type: EDIT_EMAIL_SUCCESS,
  data,
});

export const submitFormStart = () => ({
  type: SUBMIT_FORM_START,
});

export const submitFormSuccess = (data: IFormData) => ({
  type: SUBMIT_FORM_SUCCESS,
  data,
});

export const submitFormError = (data: string) => ({
  type: SUBMIT_FORM_ERROR,
  data,
});

export const clearState = () => ({
  type: CLEAR_STATE,
});
