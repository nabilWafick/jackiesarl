import { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

interface FormErrors {
  name: string | null;
  email: string | null;
}

const useForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: null,
    email: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors: FormErrors = {
      name: null,
      email: null,
    };

    if (!formData.name.trim()) {
      errors.name = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "L'email n'est pas valide";
    }

    setFormErrors(errors);

    return !errors.name && !errors.email;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Vous pouvez envoyer les données à un serveur ici ou effectuer d'autres actions
      console.log("Données du formulaire soumises :", formData);
    }
  };

  const isValidEmail = (email: string) => {
    // Simple validation d'email, vous pouvez l'améliorer selon vos besoins
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  return {
    formData,
    formErrors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
