import { FC } from "react";
import LoginForm from "../../components/form/forms/login/Login";
import ActionResult from "../../components/ui/dashboard/widgets/ActionResult";
import Auth from "../auth/Auth";

const LoginPage: FC = () => {
  return (
    <Auth needAuth={false}>
      <div className=" h-screen w-screen flex items-center justify-center content-center">
        <div className="w-[350px] shadow-lg flex flex-col p-7 rounded-sm">
          <h3 className="text-bold text-[30px] mb-7 flex justify-center text-center text-black">
            Se connecter
          </h3>
          <LoginForm email="" password="" />
          <ActionResult />
        </div>
      </div>
    </Auth>
  );
};

export default LoginPage;
