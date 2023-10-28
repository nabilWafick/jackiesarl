import { useState } from "react";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface FormErrors {
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  password: string | null;
}

const useSignupForm = ({ firstname, lastname, email, password }: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstname: null,
    lastname: null,
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
      firstname: null,
      lastname: null,
      email: null,
      password: null,
    };

    if (!formData.firstname.trim()) {
      errors.firstname = "Le prénom est requis";
    }

    if (!formData.lastname.trim()) {
      errors.lastname = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "L'email n'est pas vaest incorrectelide";
    }

    if (!formData.password.trim()) {
      errors.password = "Le mot de passe est requis";
    }

    setFormErrors(errors);

    return !firstname && !lastname && !errors.email && !errors.password;
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

export default useSignupForm;
