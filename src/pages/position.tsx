import PositionCard from "../components/ui/PositionCard";
import administrateur from "./../assets/images/administrateur.png";
import chargeClientele from "./../assets/images/charge-clientele.png";
import chargeRecouvrement from "./../assets/images/charge-recouvrement.png";
import comptable from "./../assets/images/comptable.png";
import secretaire from "./../assets/images/secretaire.png";
import autres from "./../assets/images/autres.png";

function Position() {
  return (
    <div className=" h-screen w-screen flex flex-col justify-center justify-items-center items-center self-center content-center">
      <h2 className=" mb-12 self-center text-center text-2xl text-gray-400">
        Choisissez votre Poste
      </h2>

      <div className=" grid grid-flow-row grid-cols-3">
        <PositionCard
          image={administrateur}
          positionName="Administrateur"
          alt="Administrateur"
        />
        <PositionCard
          image={chargeRecouvrement}
          positionName="Charge Recouvrement"
          alt="Charge Recouvrement"
        />
        <PositionCard
          image={secretaire}
          positionName="Secretaire"
          alt="Secretaire"
        />
        <PositionCard
          image={chargeClientele}
          positionName="Charge Clientele"
          alt="Charge Clientele"
        />
        <PositionCard
          image={comptable}
          positionName="Comptable"
          alt="Comptable"
        />
        <PositionCard image={autres} positionName="Autres" alt="Autres" />
      </div>
    </div>
  );
}

export default Position;
