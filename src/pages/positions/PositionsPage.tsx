import PositionCard from "../../components/ui/position/PositionCard";
import { JSImages } from "../../utils/images";
import { Link } from "react-router-dom";

const positionsData = [
  {
    image: JSImages.administrateur,
    name: "Administrateur",
    alt: "Administrateur",
    onClick: () => {},
  },
  {
    image: JSImages.chargeRecouvrement,
    name: "Charge Recouvrement",
    alt: "Charge Recouvrement",
    onClick: () => {},
  },
  {
    image: JSImages.secretaire,
    name: "Secretaire",
    alt: "Secretaire",
    onClick: () => {},
  },
  {
    image: JSImages.chargeClientele,
    name: "Charge Clientele",
    alt: "Charge Clientele",
    onClick: () => {},
  },
  {
    image: JSImages.comptable,
    name: "Comptable",
    alt: "Comptable",
    onClick: () => {},
  },

  {
    image: JSImages.autres,
    name: "Autres",
    alt: "Autres",
    onClick: () => {},
  },
];

function PositionsPage() {
  return (
    <div className=" h-full w-full flex flex-col justify-center justify-items-center items-center self-center content-center">
      <h2 className=" mb-12 self-center text-center text-2xl text-gray-500">
        Choisissez votre Poste
      </h2>

      <div className=" grid grid-flow-row grid-cols-3">
        {positionsData.map((position) => (
          <Link to="/se-connecter">
            <PositionCard
              key={position.name}
              image={position.image}
              name={position.name}
              alt={position.alt}
              onClick={position.onClick}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PositionsPage;
