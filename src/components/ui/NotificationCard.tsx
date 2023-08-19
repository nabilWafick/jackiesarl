import { FC } from "react";
import { FaBell } from "react-icons/fa";

interface NotificationCardProp {
  message: string;
  date: string;
}

const NotificationCard: FC<NotificationCardProp> = ({ message, date }) => {
  return (
    <div className="w-max flex justify-between items-center my-3 p-2 bg-white shadow-md">
      <FaBell className="text-secondary" size={25} />
      <p className="mx-16">{message}</p>
      <div className="p-1 bg-secondary text-white rounded-md">{date}</div>
    </div>
  );
};

export default NotificationCard;
