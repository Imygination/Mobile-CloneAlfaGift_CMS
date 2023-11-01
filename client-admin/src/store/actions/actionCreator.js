import { ITEMS_FETCH_SUCCESS } from "./actionTypes";

const baseUrl = "http://localhost:3000";

export function itemsFetchSuccess(payload) {
  return {
    type: ITEMS_FETCH_SUCCESS,
    payload,
  };
}

export const fetchData = (path) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/${path}`);
      console.log(response, "<<<<<<<< response AC");
      if (!response.ok) {
        const error = await response.json();
        throw { error };
      }
      const result = await response.json();
      const action = itemsFetchSuccess(result);
      dispatch(action);
    } catch (error) {
      console.log(error, "<<<<< error AC");
      throw error;
    }
  };
};
