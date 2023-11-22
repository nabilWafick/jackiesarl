import { FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticatedEmployee } from "../../data/GlobalData";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import JSConstants from "../../utils/constants";
import useAuthenticatedEmployeStore from "../../store/authenticated_employe/useAuthenticatedEmploye.store";
//import AuthAPI from "../../api/auth/auth.api";

interface AuthProps {
  needAuth: boolean;
  children: ReactNode;
}

const Auth: FC<AuthProps> = ({ needAuth, children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigateTo = useNavigate();
  const auth = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );
  authenticatedEmployee.value = auth;
  const authenticatedEmploye = authenticatedEmployee.value;

  useEffect(() => {
    if (needAuth) {
      if (!authenticatedEmploye) {
        navigateTo("/se-connecter");
        sessionStorage.clear();
      } else {
        axios
          .get(`${JSConstants.API_BASE_URL}/auth/verify-authentication`, {
            headers: {
              "authorization-token": `Bearer ${authenticatedEmploye!.token}`,
            },
          })
          .then((response) => {
            if (response.status == 202) {
              setIsLoading(false);
            } else {
              localStorage.removeItem("AuthenticatedEmployeStore");
              sessionStorage.clear();
            }
          })
          .catch(async () => {
            localStorage.removeItem("AuthenticatedEmployeStore");
            sessionStorage.clear();
            navigateTo("/se-connecter");
          });
      }
    } else {
      if (!authenticatedEmploye) {
        setIsLoading(false);
      } else {
        axios
          .get(`${JSConstants.API_BASE_URL}/auth/verify-authentication`, {
            headers: {
              "authorization-token": `Bearer ${authenticatedEmploye!.token}`,
            },
          })
          .then((response) => {
            if (response.status == 202) {
              navigateTo("/");
            }
          })
          .catch(async () => {
            setIsLoading(false);
          });
      }
    }
  }, [authenticatedEmploye, navigateTo, needAuth]);

  return isLoading ? (
    <div className="flex justify-center items-center text-lg ">
      <ClipLoader
        size={70}
        color={"#D55F5A"}
        className="text-secondary"
        loading={isLoading}
      />
    </div>
  ) : (
    <>{children}</>
  );
};

export default Auth;
