import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "./AppReducer";

const AuthContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
