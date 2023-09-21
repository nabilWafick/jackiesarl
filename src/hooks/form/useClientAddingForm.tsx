import { useState } from "react";

interface FormData {
  fullname: string;
  ifuNumber: number;
  email: string;
  netValue: number;
}

interface FormErrors {
  fullname: string | null;
  ifuNumber: string | null;
  email: string | null;
  netValue: string | null;
}

const useClientAddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    ifuNumber: 0,
    email: "",
    netValue: 0,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    fullname: null,
    ifuNumber: null,
    email: null,
    netValue: null,
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
      fullname: null,
      ifuNumber: null,
      email: null,
      netValue: null,
    };

    if (!formData.fullname.trim()) {
      errors.fullname = "Le nom est requis";
    }

    if (formData.ifuNumber == 0) {
      errors.ifuNumber = "Le numéro ifu est incorrecte";
    }

    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "L'email n'est pas valide";
    }

    if (formData.netValue == 0) {
      errors.netValue = "Le valeur net pas acceptable";
    }

    setFormErrors(errors);

    return (
      !errors.fullname && !errors.email && !errors.ifuNumber && !errors.netValue
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
