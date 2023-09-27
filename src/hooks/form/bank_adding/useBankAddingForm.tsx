import { useState } from "react";

interface FormData {
  bank: string;
  accountNumber: string;
  currentBalence: string;
}

interface FormErrors {
  bank: string | null;
  accountNumber: string | null;
  currentBalence: string | null;
}

const useBankAddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    bank: "",
    accountNumber: "",
    currentBalence: "",
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

    if (!formData.accountNumber.trim()) {
      errors.accountNumber = "Le numéro de compte est requis";
    } else if (formData.bank.length !== 10) {
      errors.accountNumber = "Le numéro de compte doit comporter 10 chiffres.";
    }

    if (!formData.currentBalence.trim()) {
      errors.currentBalence = "Le solde actuel est requis";
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
