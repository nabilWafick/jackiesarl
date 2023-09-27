import RapportUserCard from "../../../../components/ui/dashboard/rapports/RapportUserCard";
import GrantedRules from "../../../../components/ui/dashboard/permissions/GrantedRules";

const AutorisationsPage = () => {
  return (
    <div className="w-full h-full flex justify-around items-center row-auto">
      <div className="flex justify-center my-3 row-auto">
        <div className="users col-span-4 mx-5">
          <div className="flex justify-center p-2 shadow-md rounded-md bg-secondary text-white font-semibold">
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
            Autorisations
          </div>
          <GrantedRules />
          <GrantedRules />
          <GrantedRules />
          <GrantedRules />
          <GrantedRules />
        </div>
      </div>
    </div>
  );
};

export default AutorisationsPage;
