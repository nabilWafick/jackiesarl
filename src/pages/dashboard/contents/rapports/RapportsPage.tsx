import RapportFileUploadedCard from "../../../../components/ui/dashboard/rapports/RapportFileUploadedCard";
import RapportUserCard from "../../../../components/ui/dashboard/rapports/RapportUserCard";
import JsButton from "../../../../components/ui/widgets/Button";
import "../../../../assets/css/table.css";

const RapportsPage = () => {
  return (
    <div className="w-full h-full flex-col justify-around items-center row-auto">
      <p className="text-lg text-center font-medium my-4">Administrateur</p>
      <div className="flex justify-center my-3 row-auto">
        <div className="users col-span-4 mx-5">
          <div className="flex justify-center p-2 shadow-md rounded-md bg-secondary text-white  font-semibold">
            Utilisateurs
          </div>
          <RapportUserCard />
          <RapportUserCard />
          <RapportUserCard />
          <RapportUserCard />
          <RapportUserCard />
          <RapportUserCard />
        </div>
        <div className="files col-span-4 mx-5">
          <div className="flex justify-center p-2 shadow-md rounded-md bg-secondary text-white font-semibold">
            Rapports
          </div>
          <RapportFileUploadedCard />
          <RapportFileUploadedCard />
          <RapportFileUploadedCard />
          <RapportFileUploadedCard />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg text-center font-medium my-4">Utilisateur</p>
        <div className="flex items-center mb-7 p-2 border border-secondary">
          <RapportFileUploadedCard />
          <RapportFileUploadedCard />
          <RapportFileUploadedCard />
          <RapportFileUploadedCard />
        </div>

        <div className="my-16">
          <JsButton
            name="Uploader un rapport"
            type="button"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default RapportsPage;
