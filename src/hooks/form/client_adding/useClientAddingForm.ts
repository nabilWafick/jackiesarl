import { useState } from "react";

interface FormData {
  firstname: string;
  lastname: string;
  ifuNumber: string;
  email: string;
}

interface FormErrors {
  firstname: string | null;
  lastname: string | null;
  ifuNumber: string | null;
  email: string | null;
}

const useClientAddingForm = ({
  firstname,
  lastname,
  ifuNumber,
  email,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    firstname: firstname,
    lastname: lastname,
    ifuNumber: ifuNumber,
    email: email,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstname: null,
    lastname: null,
    ifuNumber: null,
    email: null,
  });

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
      ifuNumber: null,
      email: null,
    };

    if (!formData.firstname.trim()) {
      errors.firstname = "Le prénom est requis";
    }

    if (!formData.lastname.trim()) {
      errors.lastname = "Le nom est requis";
    }

    if (!formData.ifuNumber.trim()) {
      errors.ifuNumber = "Le numéro ifu est requis";
    }

    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "L'email n'est pas vaest incorrectelide";
    }

    setFormErrors(errors);

    return (
      !errors.firstname &&
      !errors.lastname &&
      !errors.email &&
      !errors.ifuNumber
    );
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Données du formulaire soumises :", formData);
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

export default useClientAddingForm;
