import { BiUser } from "react-icons/bi";
import { JSColors } from "../utils/colors";
import ProfileCard from "../components/ui/ProfileCard";

function Welcome() {
  return (
    <div className=" h-screen w-screen justify-center flex flex-col items-center content-center ">
      <h2 className="text-lg font-medium mb-10 text-gray-500">BIENVENUE</h2>

      <div className="w-[300px] h-[350px] bg-white flex flex-col justify-center items-center  p-2 shadow-lg rounded-sm">
        <ProfileCard height={110} width={110} iconSize={70} />
        <p className="text-lg text-gray-500 font-medium">KOFFI Jean Paul</p>
        <p
          className={`my-2 font-medium text-[#D55F5A]  [${JSColors.secondary}]`}
        >
          Administrateur
        </p>
        <p className="text-gray-500">+229******80</p>
      </div>
    </div>
  );
}

export default Welcome;
