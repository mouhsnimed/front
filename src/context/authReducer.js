import { SetTokenToAxios } from "../request/api";

export function setToken(token) {
  localStorage.setItem("token", token);
  SetTokenToAxios(token);
}

export function removeToken(token) {
  localStorage.removeItem("token", token);
  // SetTokenToAxios(token);
}

export function getToken() {
  return localStorage.getItem("token");
}

export const initialState = {
  isLoggedIn: !!getToken(),
  token: getToken(),
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      // save token to localstorage
      setToken(action.token);
      return {
        ...state,
        token: action.token,
        isLoggedIn: true,
      };
    case "LOGOUT":
      removeToken();
      return {
        ...initialState,
        isLoggedIn: false,
        token: undefined,
      };
    default:
      return state;
  }
};
