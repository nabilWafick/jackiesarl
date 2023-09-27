import { BiUser, BiX } from "react-icons/bi";

const ClientCard = () => {
  return (
    <div className="client flex justify-start items-center mt-3 mb-2 ">
      <div className="flex justify-around items-center p-2 border border-secondary rounded-md shadow-md">
        <div className="h-10 w-10 bg-primary slate-200  rounded-full shadow-sm flex justify-center items-center">
          <BiUser className="text-secondary" />
        </div>
        <div className="flex flex-col justify-center items-start mx-4">
          <p className="text-sm">Clément AVOSSOU</p>
          <p className="text-sm">1A54452</p>
        </div>

        <div className="h-full flex items-start justify-start">
          <BiX
            className="flex justify-start ml-1 item-start text-secondary"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
