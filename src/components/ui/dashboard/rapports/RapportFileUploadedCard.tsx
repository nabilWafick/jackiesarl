import { FaFileUpload } from "react-icons/fa";
import Rapports from "../../../../models/rapports/rapports.model";
import { FC } from "react";

interface RapportFileUploadedCardProps {
  rapport: Rapports;
}

const RapportFileUploadedCard: FC<RapportFileUploadedCardProps> = ({
  rapport,
}) => {
  const date = new Date(rapport.date_envoi!); // Créez une instance de Date avec la date actuelle

  const date_envoi = date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="h-[75 px] w-52 p-2 flex flex-row bg-white justify-center  items-center content-between my-3 shadow-md mx-2">
      <FaFileUpload
        className="mr-2 shadow-sm flex self-start text-primary shad"
        size={65}
      />
      <div className="h-full  flex flex-col justify-between content-between">
        <h2 className=" text-sm font-semibold">Rapport uploadé</h2>
        <h3 className="text-xs my-1 font-light">le {date_envoi}</h3>
        <a
          className="flex items-center"
          href="https://images.freeimages.com/images/large-previews/add/golden-gate-1471075.jpg"
          //   href={"http://127.0.0.1:7000/uploads/employees/reports/test.png"  }
          download
        >
          <div className=" bg-secondary text-white text-[10px] px-[10px] py-[3px] hover:border-none rounded-sm">
            Télécharger
          </div>
        </a>
      </div>
    </div>
  );
};

export default RapportFileUploadedCard;
