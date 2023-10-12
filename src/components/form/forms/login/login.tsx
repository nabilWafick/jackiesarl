import { FC } from "react";
import useLoginForm from "../../../../hooks/form/login/useLoginForm";
import JSInput from "../../widgets/Input.widget";
import AuthenticationButton from "../../widgets/AuthenticationButton.widget";

const LoginForm: FC = () => {
  const { formData, formErrors, onInputDataChange, onFormSubmit } =
    useLoginForm({
      email: "",

      password: "",
    });
  return (
    <form onSubmit={onFormSubmit}>
      <div
        className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 
        "
      >
        <div className="input-group">
          <div className="mt-3 mb-1 w-full">
            <JSInput
              onChange={onInputDataChange}
              value={formData.email}
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
          </div>
          {formErrors.email && (
            <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
              {formErrors.email}
            </p>
          )}
        </div>

        <div className="input-group">
          <div className="mt-3 mb-1 w-full">
            <JSInput
              onChange={onInputDataChange}
              value={formData.password.toString()}
              name="password"
              id="password"
              type="password"
              placeholder="Mot de passe"
              autoComplete="password"
            />
          </div>
          {formErrors.password && (
            <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
              {formErrors.password}
            </p>
          )}
        </div>

        <div className="mt-5 w-full">
          <AuthenticationButton name="Connexion" onClick={() => {}} />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
