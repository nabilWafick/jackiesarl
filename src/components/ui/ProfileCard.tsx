import { FC } from "react";
import { BiUser } from "react-icons/bi";
import { JSColors } from "../../utils/colors";

interface ProfileCardDimensions {
  width: number;
  height: number;
  iconSize: number;
}

const ProfileCard: FC<ProfileCardDimensions> = ({
  width,
  height,
  iconSize,
}) => {
  return (
    <div>
      <div
        className={`h-[${height}px] w-[${width}px] flex justify-center items-center mb-16 rounded-full bg-gray-100 shadow-md`}
      >
        <BiUser size={iconSize} color={JSColors.secondary} />
        {/* 
              <img
                 src={administrateur}
              src=""
              className=" object-contain"
               alt="User Image"
            /> 
            */}
      </div>
    </div>
  );
};

export default ProfileCard;
