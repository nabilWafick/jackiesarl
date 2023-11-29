import { FC } from "react";
import SignupForm from "../../components/form/forms/signup/Signup";
import ActionResult from "../../components/ui/dashboard/widgets/ActionResult";
import Auth from "../auth/Auth";

const SignupPage: FC = () => {
  return (
    <Auth needAuth={false}>
      <div className="h-screen w-screen flex justify-center items-center overflow-x-hidden ">
        <div className="w-[350px] shadow-lg flex flex-col p-7 rounded-sm">
          <h3 className="text-bold text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] mb-7 flex justify-center text-center text-tableTextColor">
            Créer un compte
          </h3>

          <SignupForm
            firstname=""
            lastname=""
            email=""
            role=""
            phoneNumber=""
            password=""
          />
          <ActionResult />
        </div>
      </div>
    </Auth>
  );
};

export default SignupPage;
