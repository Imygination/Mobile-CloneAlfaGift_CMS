import { CATEGORY_ID_FETCH_SUCCESS } from "../actions/actionTypes"

const defaultValue = {
  category: {}
}

export default function categoryIdReducer(state = defaultValue, action) {
  if (action.type === CATEGORY_ID_FETCH_SUCCESS) {
    return {
      ...state,
      category: action.payload
    }
  }
  return state
}