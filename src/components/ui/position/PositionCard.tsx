import { FC } from "react";

type PositionCardProps = {
  image: string;
  name: string;
  alt: string;
  onClick: () => void;
};

const PositionCard: FC<PositionCardProps> = ({ image, name, alt, onClick }) => {
  return (
    <div
      className={`group h-[180px] w-[170px] m-3 shadow-lg flex flex-col rounded-xl content-evenly justify-evenly items-center hover:border-4 hover:border-primary group-hover:shadow-none`}
      onClick={onClick}
    >
      <img
        className="h-[120px] w-[120px] object-contain"
        src={image}
        alt={alt}
      />
      <p
        className={`text-lg text-gray-400 text-center group-hover:text-secondary`}
      >
        {name}
      </p>
    </div>
  );
};

export default PositionCard;
