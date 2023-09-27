import ProfileCard from "../../components/ui/widgets/ProfileCard";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className=" h-full w-full justify-center flex flex-col items-center content-center ">
      <h2 className="text-lg font-medium mb-10 text-gray-500">BIENVENUE</h2>

      <Link to="/">
        <div className="w-[300px] h-[350px] bg-white flex flex-col justify-center items-center  p-2 shadow-lg rounded-sm">
          <ProfileCard height={110} width={110} iconSize={50} />
          <p className="text-lg mt-12 text-gray-500 font-medium">
            KOFFI Jean Paul
          </p>
          <p className={`my-2 font-medium text-secondary`}>Administrateur</p>
          <p className="text-gray-500">+229******80</p>
        </div>
      </Link>
    </div>
  );
}

export default WelcomePage;
