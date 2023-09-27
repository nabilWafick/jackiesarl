import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Link
        to="/jackie-sarl"
        className="flex flex-col justify-center items-center p-20 shadow-md"
      >
        <div className="text-[50px] mb-5 text-secondary">Erreur 404</div>
        <div className="text-md text-black">Page non trouvée</div>
      </Link>
    </div>
  );
};

export default NotFoundPage;
