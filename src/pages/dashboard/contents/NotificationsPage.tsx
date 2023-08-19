import NotificationCard from "../../../components/ui/NotificationCard";

const NotificationsPage = () => {
  return (
    <div className=" w-full h-full flex flex-col justify- items-center">
      <p className="flex self-start mb-10 text-xl text-gray-600">
        Notifications
      </p>
      <NotificationCard
        message="Modifacation effectuée avec succès"
        date="01-04-2024"
      />
      <NotificationCard
        message="Modifacation effectuée avec succès"
        date="01-04-2024"
      />
      <NotificationCard
        message="Modifacation effectuée avec succès"
        date="01-04-2024"
      />
      <NotificationCard
        message="Modifacation effectuée avec succès"
        date="01-04-2024"
      />
      <NotificationCard
        message="Modifacation effectuée avec succès"
        date="01-04-2024"
      />
      <NotificationCard
        message="Modifacation effectuée avec succès"
        date="01-04-2024"
      />
      <NotificationCard
        message="Modifacation effectuée avec succès"
        date="01-04-2024"
      />
    </div>
  );
};

export default NotificationsPage;
