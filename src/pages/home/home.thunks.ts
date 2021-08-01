import { RootState } from "../../core/store/store";
import {
  editEmailStart,
  editEmailSuccess,
  editFirstNameStart,
  editFirstNameSuccess,
  editLastNameStart,
  editLastNameSuccess,
  editMiddleNameStart,
  editMiddleNameSuccess,
  submitFormError,
  submitFormStart,
  submitFormSuccess,
} from "./home.actions";

export interface IFormData {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
}

export function updateFirstName(value: any) {
  return async (dispatch: any, getState: any) => {
    await dispatch(editFirstNameStart());

    try {
      await dispatch(editFirstNameSuccess(value));
    } catch (error) {
      console.log("Sorry mate something went wrong!");
    }
  };
}

export function updateMiddleName(value: any) {
  return async (dispatch: any, getState: any) => {
    await dispatch(editMiddleNameStart());

    try {
      await dispatch(editMiddleNameSuccess(value));
    } catch (error) {
      console.log("Sorry mate something went wrong!");
    }
  };
}

export function updateLastName(value: any) {
  return async (dispatch: any, getState: any) => {
    await dispatch(editLastNameStart());

    try {
      await dispatch(editLastNameSuccess(value));
    } catch (error) {
      console.log("Sorry mate something went wrong!");
    }
  };
}

export function updateEmail(value: any) {
  return async (dispatch: any, getState: any) => {
    await dispatch(editEmailStart());

    try {
      await dispatch(editEmailSuccess(value));
    } catch (error) {
      console.log("Sorry mate something went wrong!");
    }
  };
}

export function submitForm() {
  return async (dispatch: any, getState: any) => {
    await dispatch(submitFormStart());
    const storeState: RootState = getState();

    const { firstName, middleName, lastName, email } = storeState.homeReducer;

    const data: IFormData = {
      firstName,
      lastName,
      email,
    };

    if (middleName) data.middleName = middleName;

    try {
      setTimeout(() => {
        dispatch(submitFormSuccess(data));
      }, 3000);
    } catch (error) {
      dispatch(
        submitFormError("Something went wrong or all values are not filled!")
      );
    }
  };
}
