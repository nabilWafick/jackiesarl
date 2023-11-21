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
    <div className="h-full w-full flex lg:flex-row md:flex-col  justify-evenly content-center items-center">
      <ProfileCard />
      <div className="md:pt-2 lg:py-1">
        <h2 className="md:text-[10px] lg:text-xs mb-1">{position}</h2>
        <h3 className="md:text-[10px] lg:text-xs font-bold">{name}</h3>
      </div>
    </div>
  );
};

export default SideBarUserInfosCard;
