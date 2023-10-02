import { useState } from "react";

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
      errors.email = "L'email n'est pas vaest incorrectelide";
    }

    if (!formData.password.trim()) {
      errors.password = "Le mot de passe est requis";
    }

    setFormErrors(errors);

    return !errors.email && !errors.password;
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

export default useLoginForm;
