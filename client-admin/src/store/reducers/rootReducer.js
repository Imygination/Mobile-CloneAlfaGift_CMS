import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  itemReducer,
  categoryReducer,
});

export default rootReducer;
