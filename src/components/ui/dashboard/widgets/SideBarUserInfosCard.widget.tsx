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
    <div className="h-full w-full flex sm:flex-col md:flex-col lg:flex-row  justify-evenly content-center items-center">
      <ProfileCard />
      <div className="hidden sm:block md:block  sm:pt-2 md:pt-2 lg:py-1">
        <h2 className="sm:text-[10px] md:text-[10px] lg:text-xs mb-1">
          {position}
        </h2>
        <h3 className="sm:text-[10px] md:text-[10px] lg:text-xs font-bold">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default SideBarUserInfosCard;
