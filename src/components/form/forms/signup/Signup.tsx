import { FC /*useEffect*/ } from "react";
import JSInput from "../../widgets/Input.widget";
import AuthenticationButton from "../../widgets/AuthenticationButton.widget";
import useEmployeAddingForm from "../../../../hooks/forms/signup/useSignupForm";
import { Link } from "react-router-dom";

interface SignupFormProps {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  phoneNumber: string;
  password: string;
}

const SignupForm: FC<SignupFormProps> = ({
  firstname,
  lastname,
  email,
  role,
  phoneNumber,
  password,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    /*onFormClose,*/ onFormSubmit,
  } = useEmployeAddingForm({
    firstname: firstname,
    lastname: lastname,
    email: email,
    role: role,
    phoneNumber: phoneNumber,
    password: password,
  });
  /*
  useEffect(() => {
    if (
      formErrors.firstname ||
      formErrors.lastname ||
      formErrors.email ||
      formErrors.role ||
      formErrors.phoneNumber ||
      formErrors.password
    ) {
      onFormClose();
    }
  }, [formErrors, onFormClose]);
*/
  return (
    <form className="flex" onSubmit={onFormSubmit}>
      <div
        className="flex flex-col self-center justify-center  items-center my-10' w-[300px] px-5 py-3 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]
        "
      >
        <div className="input-group w-full">
          <div className="mt-3 mb-1 w-full">
            <JSInput
              onChange={onInputDataChange}
              value={formData.firstname}
              name="firstname"
              id="firstname"
              type="text"
              placeholder="Prénoms"
              autoComplete="off"
            />
          </div>
          {formErrors.firstname && (
            <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
              {formErrors.firstname}
            </p>
          )}
        </div>

        <div className="input-group w-full">
          <div className="mt-3 mb-1 w-full">
            <JSInput
              onChange={onInputDataChange}
              value={formData.lastname}
              name="lastname"
              id="lastname"
              type="text"
              placeholder="Nom"
              autoComplete="off"
            />
          </div>
          {formErrors.lastname && (
            <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
              {formErrors.lastname}
            </p>
          )}
        </div>

        <div className="input-group w-full">
          <div className="mt-3 mb-1 w-full">
            <JSInput
              onChange={onInputDataChange}
              value={formData.email}
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          {formErrors.email && (
            <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
              {formErrors.email}
            </p>
          )}
        </div>

        <div className="input-group w-full">
          <div className="mt-3 mb-1 w-full">
            <JSInput
              onChange={onInputDataChange}
              value={formData.role}
              name="role"
              id="role"
              type="text"
              placeholder="Poste | Rôle"
              autoComplete="off"
            />
          </div>
          {formErrors.role && (
            <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
              {formErrors.role}
            </p>
          )}
        </div>

        <div className="input-group w-full">
          <div className="mt-3 mb-1 w-full">
            <JSInput
              onChange={onInputDataChange}
              value={formData.phoneNumber}
              name="phoneNumber"
              id="phoneNumber"
              type="text"
              placeholder="Téléphone Ind: +229 | 00229"
              autoComplete="off"
            />
          </div>
          {formErrors.phoneNumber && (
            <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
              {formErrors.phoneNumber}
            </p>
          )}
        </div>

        <div className="input-group w-full">
          <div className="mt-3 mb-1 w-full">
            <JSInput
              onChange={onInputDataChange}
              value={formData.password.toString()}
              name="password"
              id="password"
              type="text"
              placeholder="Mot de passe"
              autoComplete="off"
            />
          </div>
          {formErrors.password && (
            <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
              {formErrors.password}
            </p>
          )}
        </div>

        <div className="mt-1 w-full">
          <AuthenticationButton name="Créer un compte" onClick={() => {}} />
        </div>
        <Link to="/se-connecter">
          <p className="mt-5 flex self-center text-center text-tableTextColor hover:text-tableTextColor">
            Se connecter
          </p>
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
