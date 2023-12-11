import { FC } from "react";
import useLoginForm from "../../../../hooks/forms/login/useLoginForm";
import JSInput from "../../widgets/Input.widget";
import AuthenticationButton from "../../widgets/AuthenticationButton.widget";
import { Link } from "react-router-dom";

interface LoginFormProps {
  email: string;
  password: string;
}

const LoginForm: FC<LoginFormProps> = ({ email, password }) => {
  const { formData, formErrors, onInputDataChange, onFormSubmit } =
    useLoginForm({
      email: email,
      password: password,
    });

  return (
    <form onSubmit={onFormSubmit}>
      <div
        className="flex flex-col self-center justify-center items-center my-10' w-[300px] px-5 py-3 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]
        "
      >
        <div className="input-group w-full">
          <div className="mt-3 mb-1 w-full">
            <JSInput
              onChange={onInputDataChange}
              value={formData.email}
              name="email"
              id="email1"
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
          <AuthenticationButton name="Connexion" onClick={() => {}} />
        </div>
        <Link to="/creer-un-compte">
          <p className="mt-5 flex self-center text-center text-tableTextColor hover:text-tableTextColor">
            Créer un compte
          </p>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
