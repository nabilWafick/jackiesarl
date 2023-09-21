import { FaFileUpload } from "react-icons/fa";

const RapportFileUploadedCard = () => {
  return (
    <div className="h-[75 px] w-52 p-2 flex flex-row bg-white justify-center  items-center content-between my-3 shadow-md mx-2">
      <FaFileUpload
        className="mr-2 shadow-sm flex self-start text-primary shad"
        size={65}
      />
      <div className="h-full  flex flex-col justify-between content-between">
        <h2 className=" text-sm font-semibold">Rapport uploadé</h2>
        <h3 className="text-xs my-1 font-light">le 05-11-2007</h3>
        <button
          className=" bg-secondary text-white text-[10px] px-[10px] py-[3px] hover:border-none rounded-sm"
          type="button"
        >
          Télécharger
        </button>
      </div>
    </div>
  );
};

export default RapportFileUploadedCard;
