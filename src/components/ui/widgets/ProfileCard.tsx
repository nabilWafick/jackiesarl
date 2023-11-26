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
      className={`flex justify-center h-10 w-10 sm:h-11 sm:w-11 md:h-11 md:w-11 lg:h-16 lg:w-16 items-center rounded-full bg-gray-100 shadow-sm`}
      style={{ width: width, height: height }}
    >
      <BiUser
        size={iconSize}
        className="text-blue-500 sm:text-yellow-400  md:text-green-700 lg:text-secondary sm:h-3 md:h-3 lg:h-6"
      />
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
