import { FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthenticatedEmployeStore from "../../store/authenticated_employe/useAuthenticatedEmploye.store";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import JSConstants from "../../utils/constants";

interface AuthProps {
  needAuth: boolean;
  children: ReactNode;
}

const Auth: FC<AuthProps> = ({ needAuth, children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigateTo = useNavigate();
  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  useEffect(() => {
    if (needAuth)
      if (!authenticatedEmploye) {
        navigateTo("/se-connecter");
        sessionStorage.clear();
      } else {
        axios
          .get(`${JSConstants.API_BASE_URL}/auth/verify-authentication`, {
            headers: {
              "authorization-tokens": `Bearer ${
                authenticatedEmploye!.accessToken
              } ${authenticatedEmploye!.token} `,
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
            await localStorage.removeItem("AuthenticatedEmployeStore");
            await sessionStorage.clear();
            navigateTo("/se-connecter");
          });
      }
    else if (!authenticatedEmploye) {
      setIsLoading(false);
    } else {
      axios
        .get("http://127.0.0.1:7000/api/auth/verify-authentication", {
          headers: {
            "authorization-tokens": `Bearer ${
              authenticatedEmploye!.accessToken
            } ${authenticatedEmploye!.token} `,
          },
        })
        .then((response) => {
          if (response.status == 202) {
            navigateTo("/");
          }
        })
        .catch(() => {
          setIsLoading(false);
        });
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
