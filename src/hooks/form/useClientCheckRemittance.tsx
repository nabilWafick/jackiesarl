import { useState } from "react";

interface FormData {
  description: string;
  bank: string;
  amount: number;
  rest: number;
}

interface FormErrors {
  description: string | null;
  bank: string | null;
  amount: string | null;
  rest: string | null;
}

const useClientCheckRemittanceAddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    description: "",
    bank: "",
    amount: 0,
    rest: 0,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    description: null,
    bank: null,
    amount: null,
    rest: null,
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
      bank: null,
      amount: null,
      rest: null,
    };

    if (!formData.description.trim()) {
      errors.description = "La descripyion est requise";
    }

    if (!formData.bank.trim()) {
      errors.bank = "La banque est requise";
    }

    if (formData.amount == 0) {
      errors.amount = "Le montant n'est pas acceptable";
    }

    if (formData.rest == 0) {
      errors.rest = "Le reste n'est pas acceptable";
    }

    setFormErrors(errors);

    return (
      !errors.description && !errors.bank && !errors.amount && !errors.rest
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

export default useClientCheckRemittanceAddingForm;
