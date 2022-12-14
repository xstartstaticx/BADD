import { createContext, useReducer } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "login":
        return { ...state, user: { ...action.payload } };

      case "loadUsers":
        return { ...state, users: [...action.payload] };

      case "removeUser":
        const removeUser = [
          ...state.users.filter((item) => item._id !== action.payload),
        ];
        return { ...state, users: [...removeUser] };

      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
