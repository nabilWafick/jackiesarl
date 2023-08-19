import ProfileCard from "./ProfileCard";

const RapportUserCard = () => {
  return (
    <div className="h-[75px] w-52 px-2 flex flex-row bg-white justify-center content-center shadow-md items-center my-3">
      <div className=" mr-3 rounded-full bg-gray-300 shadow-sm">
        <ProfileCard height={60} width={60} iconSize={20} />
      </div>
      <div className="">
        <h2 className=" text-xs mb-1">ADMINISTRATEUR</h2>
        <h3 className="text-xs font-bold">Koffi Jean Paul</h3>
      </div>
    </div>
  );
};

export default RapportUserCard;
