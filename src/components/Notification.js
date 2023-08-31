import { useEffect } from "react";
import { useContext } from "react";
import NotificationContext from "../contexts/NotificationContext";

const Notification = () => {
  const { notification, dispatch } = useContext(NotificationContext);

  useEffect(() => {
    if (notification.message !== "") {
      const timer = setTimeout(() => {
        dispatch({ type: "CLEAR_NOTIFICATION" });
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification, dispatch]);

  if (notification.message === "") {
    return null;
  }

  return (
    <div className={`notification ${notification.type}`}>
      {notification.message}
    </div>
  );
};

export default Notification;
