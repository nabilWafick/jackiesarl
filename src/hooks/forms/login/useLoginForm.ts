import { useState } from "react";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import AuthAPI from "../../../api/auth/auth.api";
import { useNavigate } from "react-router-dom";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string | null;
  password: string | null;
}

const useLoginForm = ({ email, password }: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    email: email,
    password: password,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: null,
    password: null,
  });

  const navigateTo = useNavigate();

  // const actionResultMessage = useInterfacesStore(
  //   (state) => state.actionResultMessage
  // );

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  /*
  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );
  */

  const setAuthenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.setAuthenticatedEmploye
  );

  const onInputDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors: FormErrors = {
      email: null,
      password: null,
    };

    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "L'email n'est pas valide";
    }

    if (!formData.password.trim()) {
      errors.password = "Le mot de passe est requis";
    } else if (formData.password.trim().length < 7) {
      errors.password = "Le mot de passe doit comporter au moins 7 caractères.";
    }

    setFormErrors(errors);

    return !errors.email && !errors.password;
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: FormErrors = {
      email: null,
      password: null,
    };

    //  const response =  AuthAPI.verifyAuthentication(authenticatedEmploye);

    if (validateForm()) {
      const response = await AuthAPI.login({
        email: formData.email,
        password: formData.password,
      });

      if (response!.status == 404) {
        errors.email = response!.error!;
        setFormErrors(errors);
      } else if (response!.status == 401) {
        errors.password = response!.error!;
        setFormErrors(errors);
      } else if (response!.status == 202) {
        setActionResultMessage(`Bienvenue M./Mme ${response!.employe!.nom}`);
        toggleModal("action-result-message");
        console.log("authenticated Employee", response!.employe!);
        setAuthenticatedEmploye(response!.employe!);
        setTimeout(() => {
          navigateTo("/");
        }, 1500);
      } else {
        setActionResultMessage("Erreur lors de l'authentification");
        toggleModal("action-result-message");
      }
    }
  };

  const isValidEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    onFormSubmit,
  };
};

export default useLoginForm;
