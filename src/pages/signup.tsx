import AuthenticationButton from "../components/form/AuthenticationButton";
import JsInput from "../components/form/Input";
import JSSelect from "../components/form/Select";

const signupInputsData = [
  {
    id: "firstname",
    name: "firstname",
    type: "text",
    autoComplete: "firstname",
    placeholder: "Prénoms",
  },
  {
    id: "name",
    name: "name",
    type: "text",
    autoComplete: "name",
    placeholder: "Nom",
  },
  {
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    placeholder: "Email",
  },
  {
    id: "phone",
    name: "phone",
    type: "phone",
    autoComplete: "phone",
    placeholder: "Téléphone",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "password",
    placeholder: "Mot de passe",
  },
];

const signupPhoneInputData = {
  id: "phoneIndex",
  name: "phoneIndex",
  options: [
    { value: "+229", label: "+229" },
    { value: "+228", label: "+228" },
    { value: "+227", label: "+227" },
  ],
};

function Signup() {
  return (
    <div className=" h-screen w-screen flex items-center justify-center content-center">
      <div className="w-[350px] shadow-lg flex p-7 rounded-sm">
        <form className=" w-full " action="#" method="POST">
          <h3 className="text-bold text-[30px] mb-10 flex justify-center text-center text-black">
            Créer un compte
          </h3>

          {signupInputsData.map((signupInput) => {
            if (signupInput.name == "phone") {
              return (
                <div className=" flex flex-row my-2">
                  <JSSelect
                    id={signupPhoneInputData.id}
                    name={signupPhoneInputData.name}
                    options={signupPhoneInputData.options}
                  />
                  <JsInput
                    id={signupInput.id}
                    name={signupInput.name}
                    type={signupInput.type}
                    autoComplete={signupInput.autoComplete}
                    placeholder={signupInput.placeholder}
                  />
                </div>
              );
            }
            return (
              <div key={signupInput.name} className="my-2 w-full">
                <JsInput
                  id={signupInput.id}
                  name={signupInput.name}
                  type={signupInput.type}
                  autoComplete={signupInput.autoComplete}
                  placeholder={signupInput.placeholder}
                />
              </div>
            );
          })}

          <AuthenticationButton name="Inscription" onClick={() => {}} />
        </form>
      </div>
    </div>
  );
}

export default Signup;
