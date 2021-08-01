import { combineReducers } from "redux";
import { pagesReducers } from "../pages";
import themeReducer from "./theme/theme.reducer";

const reducers = {
  ...pagesReducers,
  themeReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
