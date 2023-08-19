import RapportFileUploadedCard from "../../../components/ui/RapportFileUploadedCard";
import RapportUserCard from "../../../components/ui/RapportUserCard";

const RapportsPage = () => {
  return (
    <div className="w-full h-full flex justify-around items-center row-auto">
      <div className="flex justify-center my-3 row-auto">
        <div className="users col-span-4 mx-5">
          <div className="flex justify-center p-2 shadow-md rounded-md bg-secondary text-white">
            Les Utilisateurs
          </div>
          <RapportUserCard />
          <RapportUserCard />
          <RapportUserCard />
          <RapportUserCard />
          <RapportUserCard />
          <RapportUserCard />
        </div>
        <div className="files col-span-4 mx-5">
          <div className="flex justify-center p-2 shadow-md rounded-md bg-secondary text-white">
            Les Rapports
          </div>
          <RapportFileUploadedCard />
          <RapportFileUploadedCard />
          <RapportFileUploadedCard />
          <RapportFileUploadedCard />
        </div>
      </div>
    </div>
  );
};

export default RapportsPage;
