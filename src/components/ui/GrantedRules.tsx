import { BsDot } from "react-icons/bs";

const GrantedRules = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-2 mb-1">
        <h2 className="flex self-start mb-2 text-xl items-center ">
          <BsDot className=" text-secondary" size={27} /> Permissions liées au
          menu
          <p className="ml-1 font-medium">Client</p>
        </h2>
        <ul>
          <li className="text-sm">
            Le droit d'ajouter, de modifier et de supprimer des achats
          </li>
          <li className="text-sm">Le doit d'ajouer des paiements</li>
          <li className="text-sm">
            Le droit de modifier et de supprimer des paiements
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GrantedRules;
