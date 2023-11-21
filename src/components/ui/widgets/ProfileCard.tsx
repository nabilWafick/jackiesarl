import { FC } from "react";
import { BiUser } from "react-icons/bi";
interface ProfileCardDimensions {
  width?: number;
  height?: number;
  iconSize?: number;
}

const ProfileCard: FC<ProfileCardDimensions> = ({
  width,
  height,
  iconSize,
}) => {
  return (
    <div
      className={`flex justify-center md:h-12 md:w-12 lg:h-16 lg:w-16 items-center rounded-full bg-gray-100 shadow-sm`}
      style={{ width: width, height: height }}
    >
      <BiUser size={iconSize} className="text-secondary md:h-4 lg:h-6" />
      {/* 
              <img
                 src={administrateur}
              src=""
              className=" object-contain"
               alt="User Image"
            /> 
            */}
    </div>
  );
};

export default ProfileCard;
