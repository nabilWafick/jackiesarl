import { FC } from "react";
import ProfileCard from "../../widgets/ProfileCard";

interface SideBarUserInfosCardProps {
  name: string;
  position: string;
}

const SideBarUserInfosCard: FC<SideBarUserInfosCardProps> = ({
  name,
  position,
}) => {
  return (
    <div className="h-full w-full flex flex-row justify-evenly content-center items-center">
      <ProfileCard height={65} width={65} iconSize={20} />
      <div className="">
        <h2 className=" text-xs mb-1">{position}</h2>
        <h3 className="text-xs font-bold">{name}</h3>
      </div>
    </div>
  );
};

export default SideBarUserInfosCard;
