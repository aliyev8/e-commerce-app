import { useSelector } from "react-redux";
import "./notification.scss";

function Notification() {
  const { data } = useSelector((state) => state.notificationSlice);

  return (
    <div className="notification_container">
      <span>{data}</span>
    </div>
  );
}

export default Notification;
