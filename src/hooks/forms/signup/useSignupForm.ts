import { useState } from "react";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import Employes from "../../../models/employes/employes.model";
import AuthAPI from "../../../api/auth/auth.api";
import { useNavigate } from "react-router-dom";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  phoneNumber: string;
  password: string;
}

interface FormErrors {
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  role: string | null;
  phoneNumber: string | null;
  password: string | null;
}

const useSignupForm = ({
  firstname,
  lastname,
  email,
  role,
  phoneNumber,
  password,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    firstname: firstname,
    lastname: lastname,
    email: email,
    role: role,
    phoneNumber: phoneNumber,
    password: password,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstname: null,
    lastname: null,
    email: null,
    role: null,
    phoneNumber: null,
    password: null,
  });

  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // const actionResultMessage = useInterfacesStore(
  //   (state) => state.actionResultMessage
  // );

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const navigateTo = useNavigate();

  const onInputDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors: FormErrors = {
      firstname: null,
      lastname: null,
      email: null,
      role: null,
      phoneNumber: null,
      password: null,
    };

    if (!formData.firstname.trim()) {
      errors.firstname = "Le prénom est requis";
    } else if (formData.firstname.length < 3) {
      errors.firstname = "Le prénom doit contenir au moins 3 lettres.";
    }

    if (!formData.lastname.trim()) {
      errors.lastname = "Le nom est requis";
    } else if (formData.lastname.length < 3) {
      errors.lastname = "Le nom doit contenir au moins 3 lettres.";
    }

    if (!formData.role.trim()) {
      errors.role = "Le poste est requis";
    } else if (formData.role.length < 3) {
      errors.role = "Le poste doit contenir au moins 3 lettres.";
    }

    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!isValidEmail(formData.email.trim())) {
      errors.email = "L'email n'est pas valide";
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Le numéro de téléphone est requis";
    } else if (!/^(\+229|00229)[4569]\d{7}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Le numéro de téléphone n'est pas correct.";
    }

    if (!formData.password.trim()) {
      errors.password = "Le mot de passe est requis";
    } else if (formData.password.trim().length < 7) {
      errors.password = "Le mot de passe doit comporter au moins 7 caractères.";
    }

    setFormErrors(errors);

    return (
      !errors.firstname &&
      !errors.lastname &&
      !errors.phoneNumber &&
      !errors.email &&
      !errors.role &&
      !errors.password
    );
  };

  const onFormClose = () => {
    //  setIsLoading(false);
    setFormData({
      firstname: firstname,
      lastname: lastname,
      email: email,
      role: role,
      phoneNumber: phoneNumber,
      password: password,
    });
    setFormErrors({
      firstname: null,
      lastname: null,
      email: null,
      role: null,
      phoneNumber: null,
      password: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //  setIsLoading(true);
    if (validateForm()) {
      const errors: FormErrors = {
        firstname: null,
        lastname: null,
        email: null,
        role: null,
        phoneNumber: null,
        password: null,
      };
      const response = await AuthAPI.register(
        new Employes(
          formData.lastname,
          formData.firstname,
          formData.email,
          formData.phoneNumber,
          formData.password,
          formData.role
        )
      );

      if (response!.status == 406) {
        errors.firstname = response!.errors!.firstname;
        errors.lastname = response!.errors!.lastname;
        errors.phoneNumber = response!.errors!.phoneNumber;
        errors.email = response!.errors!.email;
        setFormErrors(errors);
      } else if (response!.status == 201) {
        setActionResultMessage("Votre compte a été crée avec succès");
        toggleModal("action-result-message");
        setTimeout(() => {
          navigateTo("/se-connecter");
        }, 1500);
      } else {
        setActionResultMessage("Erreur lors de la création du compte");
        toggleModal("action-result-message");
      }
    }

    //  setIsLoading(false);
  };

  const isValidEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    //    isLoading,
    onFormSubmit,
    onFormClose,
  };
};

export default useSignupForm;
