import { useState } from "react";

interface FormData {
  description: string;
  debit: number;
  credit: number;
  currentBalence: number;
}

interface FormErrors {
  description: string | null;
  debit: string | null;
  credit: string | null;

  currentBalence: string | null;
}

const useCurrentBalenceDetailsAddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    description: "",
    debit: 0,
    credit: 0,

    currentBalence: 0,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    description: null,
    debit: null,
    credit: null,

    currentBalence: null,
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
      description: null,
      debit: null,
      credit: null,

      currentBalence: null,
    };

    if (!formData.description.trim()) {
      errors.description = "La description est requise";
    }

    if (formData.debit == 0) {
      errors.debit = "Le valeur du débit n'est pas acceptable";
    }

    if (formData.credit == 0) {
      errors.credit = "La valeur du crédit n'est pas acceptable";
    }

    if (formData.currentBalence == 0) {
      errors.currentBalence = "La valeur du solde actuel n'est pas acceptable";
    }

    setFormErrors(errors);

    return (
      !errors.description &&
      !errors.debit &&
      !errors.credit &&
      !errors.currentBalence
    );
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Données du formulaire soumises :", formData);
    }
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    onFormSubmit,
  };
};

export default useCurrentBalenceDetailsAddingForm;
