import { createContext, useReducer } from "react";

const NotificationContext = createContext();

const initialState = {
  message: "",
  type: "info",
};

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return {
        message: action.message,
        type: action.notificationType,
      };
    case "CLEAR_NOTIFICATION":
      return initialState;
    default:
      return state;
  }
};

export const NotificationProvider = ({ children }) => {
  const [notification, dispatch] = useReducer(
    notificationReducer,
    initialState
  );

  return (
    <NotificationContext.Provider value={{ notification, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
