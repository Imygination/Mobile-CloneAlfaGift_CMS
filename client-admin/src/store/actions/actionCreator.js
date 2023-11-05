import {
  CATEGORIES_FETCH_SUCCESS,
  CATEGORY_ID_FETCH_SUCCESS,
  ITEMS_FETCH_SUCCESS,
} from "./actionTypes";

const baseUrl = "http://localhost:3000";

export function itemsFetchSuccess(payload) {
  return {
    type: ITEMS_FETCH_SUCCESS,
    payload,
  };
}

export function categoriesFetchSuccess(payload) {
  return {
    type: CATEGORIES_FETCH_SUCCESS,
    payload,
  };
}

export function categoryIdFetchSuccess(payload) {
  return {
    type: CATEGORY_ID_FETCH_SUCCESS,
    payload,
  };
}

export const fetchData = (path) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/${path}`, {
        headers: { access_token: localStorage.access_token },
      });
      console.log(response, "<<<<<<<< response AC");
      if (!response.ok) {
        const error = await response.json();
        throw { error };
      }
      const result = await response.json();
      let action = {};
      switch (path) {
        case "user/item":
          action = itemsFetchSuccess(result);
          break;
        case "user/category":
          action = categoriesFetchSuccess(result);
          break;
        default:
          action = itemsFetchSuccess(result);
          break;
      }
      dispatch(action);
    } catch (error) {
      console.log(error, "<<<<< error AC");
      throw error;
    }
  };
};

export const loginUser = (loginInput) => {
  return async () => {
    try {
      const response = await fetch(`${baseUrl}/user/login`, {
        method: "POST",
        body: JSON.stringify(loginInput),
      });
      if (!response.ok) {
        const error = await response.json();
        throw { error };
      }
      const result = await response.json();
      localStorage.access_token = result.accessToken;
      localStorage.email = result.email;
      localStorage.role = result.role;
      localStorage.id = result.id;
      localStorage.username = result.username;
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const addCategory = (newCategory) => {
  return async () => {
    try {
      console.log(newCategory, "<<<<<<<<<<<<< new C");
      const response = await fetch(`${baseUrl}/user/category`, {
        method: "POST",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });
      if (!response.ok) {
        const error = await response.json();
        throw { error };
      }
      const result = await response.json();
      return result;
    } catch (error) {
      const { error: err } = error;
      throw err;
    }
  };
};

export const deleteCategory = (param) => {
  return async () => {
    try {
      const response = await fetch(`${baseUrl}/user/category/${param}`, {
        method: "DELETE",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const error = response.json();
        throw { error };
      }
      const result = response.json();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const fetchCategoryId = (params) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/user/category/${params}`, {
        headers: { access_token: localStorage.access_token },
      });
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const result = await response.json()
      const action = categoryIdFetchSuccess(result)
      const data = dispatch(action)
      return data.payload.name
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const addUser = (newUser) => {
  return async () => {
    try {
      const response = await fetch(`${baseUrl}/user/register`, {
        method: "POST",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
      if (!response.ok) {
        const error = await response.json();
        throw { error };
      }
      const result = await response.json();
      return result;
    } catch (error) {
      const { error: err } = error;
      throw err;
      
    }
  } 
}

export const addItem = (newItem) => {
  return async () => {
    try {
      const response = await fetch(`${baseUrl}/user/item`, {
        method: "POST",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
      if (!response.ok) {
        const error = await response.json();
        throw { error };
      }
      const result = await response.json();
      return result;
    } catch (error) {
      const { error: err } = error;
      throw err;
      
    }
  } 
}

export const deleteItem = (param) => {
  return async () => {
    try {
      const response = await fetch(`${baseUrl}/user/item/${param}`, {
        method: "DELETE",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const error = response.json();
        throw { error };
      }
      const result = response.json();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};