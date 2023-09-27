import AuthenticationButton from "../../components/form/widgets/AuthenticationButton";
import { Link } from "react-router-dom";
import JSInput from "../../components/form/widgets/Input";

const loginInputsData = [
  {
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    placeholder: "Email",
  },

  /* {
    id: "phone",
    name: "phone",
    type: "phone",
    autoComplete: "phone",
    placeholder: "Téléphone",
  },*/
  {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "password",
    placeholder: "Mot de passe",
  },
];

/*
const loginPhoneInputData = {
  id: "phoneIndex",
  name: "phoneIndex",
  options: [
    { value: "+229", label: "+229" },
    { value: "+228", label: "+228" },
    { value: "+227", label: "+227" },
  ],
};
*/

function LoginPage() {
  return (
    <div className=" h-full w-full flex items-center justify-center content-center">
      <div className="w-[350px] shadow-lg flex p-7 rounded-sm">
        <form className=" w-full " action="#" method="POST">
          <h3 className="text-bold text-[30px] mb-10 flex justify-center text-center text-black">
            Se connecter
          </h3>

          {loginInputsData.map((loginInput) => {
            /*
          if (loginInput.name == "phone") {
              return (
                <div className=" flex flex-row my-2">
                  <JSSelect
                    id={loginPhoneInputData.id}
                    name={loginPhoneInputData.name}
                    options={loginPhoneInputData.options}
                  />
                  <JsInput
                    id={loginInput.id}
                    name={loginInput.name}
                    type={loginInput.type}
                    autoComplete={loginInput.autoComplete}
                    placeholder={loginInput.placeholder}
                  />
                </div>
              );
            }
           */
            return (
              <div key={loginInput.name} className="my-2 w-full">
                <JSInput
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.preventDefault();
                  }}
                  id={loginInput.id}
                  name={loginInput.name}
                  type={loginInput.type}
                  autoComplete={loginInput.autoComplete}
                  placeholder={loginInput.placeholder}
                />
              </div>
            );
          })}

          <Link to="/bienvenue">
            <AuthenticationButton name="Connexion" onClick={() => {}} />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
