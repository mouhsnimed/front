import React, { createContext, useReducer, useContext } from "react";
import { AuthReducer, initialState } from "./authReducer";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export function useAuthState() {
  const authState = React.useContext(AuthStateContext);
  const dispatch = React.useContext(AuthDispatchContext);
  if (dispatch === undefined || authState === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return [authState, dispatch];
}

export const AuthProvider = ({ children }) => {
  const [authSatate, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={authSatate}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
