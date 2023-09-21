import { useState } from "react";

interface FormData {
  bank: string;
  accountNumber: number;
  currentBalence: number;
}

interface FormErrors {
  bank: string | null;
  accountNumber: string | null;
  currentBalence: string | null;
}

const useBankAddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    bank: "",
    accountNumber: 0,
    currentBalence: 0,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    bank: null,
    accountNumber: null,
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
      bank: null,
      accountNumber: null,
      currentBalence: null,
    };

    if (!formData.bank.trim()) {
      errors.bank = "La banque est requise";
    }

    if (formData.accountNumber == 0) {
      errors.accountNumber = "Le numéro de compte n'est pas acceptable";
    }

    if (formData.currentBalence == 0) {
      errors.currentBalence = "Le solde actuel n'est pas acceptable";
    }

    setFormErrors(errors);

    return !errors.bank && !errors.accountNumber && !errors.currentBalence;
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

export default useBankAddingForm;
