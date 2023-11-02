import { CATEGORIES_FETCH_SUCCESS } from "../actions/actionTypes";

const defaultValue = {
  categories: [],
};

export default function categoryReducer(state = defaultValue, action) {
  console.log(action, "<<<<<<<<<<<<<< ini action");
  if (action.type === CATEGORIES_FETCH_SUCCESS) {
    return {
      ...state,
      categories: action.payload,
    };
  }
  return state
}
