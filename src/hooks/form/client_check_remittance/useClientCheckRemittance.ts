import { useState } from "react";

interface FormData {
  description: string;
  bank: string;
  amount: string;
  rest: string;
}

interface FormErrors {
  description: string | null;
  bank: string | null;
  amount: string | null;
  rest: string | null;
}

const useClientCheckRemittanceAddingForm = ({
  description,
  bank,
  amount,
  rest,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    description: description,
    bank: bank,
    amount: amount,
    rest: rest,
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
      errors.description = "La description est requise";
    }

    if (!formData.bank.trim()) {
      errors.bank = "La banque est requise";
    }

    if (!formData.amount.trim()) {
      errors.amount = "Le montant est requis";
    }

    if (!formData.rest.trim()) {
      errors.rest = "Le reste est requis";
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
