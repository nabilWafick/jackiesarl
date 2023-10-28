import { FC } from "react";
import useSignupForm from "../../../../hooks/forms/signup/useSignupForm";
import JSInput from "../../widgets/Input.widget";
import AuthenticationButton from "../../widgets/AuthenticationButton.widget";

const SignupForm: FC = () => {
  const { formData, formErrors, onInputDataChange, onFormSubmit } =
    useSignupForm({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  return (
    <form className="flex" onSubmit={onFormSubmit}>
      <div
        className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 
        "
      >
        <div className="input-group">
          <div className="mt-3 mb-1 w-full">
            <JSInput
              onChange={onInputDataChange}
              value={formData.firstname}
              name="firstname"
              id="firstname"
              type="text"
              placeholder="Prénoms"
              autoComplete="firstname"
            />
          </div>
          {formErrors.firstname && (
            <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
              {formErrors.firstname}
            </p>
          )}
        </div>

        <div className="input-group">
          <div className="mt-3 mb-1 w-full">
            <JSInput
              onChange={onInputDataChange}
              value={formData.lastname}
              name="lastname"
              id="lastname"
              type="text"
              placeholder="Nom"
              autoComplete="lastname"
            />
          </div>
          {formErrors.lastname && (
            <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
              {formErrors.lastname}
            </p>
          )}
        </div>

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
          <AuthenticationButton name="Créer un compte" onClick={() => {}} />
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
