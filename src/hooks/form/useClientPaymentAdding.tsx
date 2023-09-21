import { useState } from "react";

interface FormData {
  bcNumber: number;
  category: string;
  amount: number;
  bank: string;
  reference: number;
  slip: string;
}

interface FormErrors {
  bcNumber: string | null;
  category: string | null;
  bank: string | null;
  amount: string | null;
  reference: string | null;
  slip: string | null;
}

const useClientPaymentAddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    bcNumber: 0,
    category: "",
    amount: 0,
    bank: "",
    reference: 0,
    slip: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    bcNumber: null,
    category: null,
    amount: null,
    bank: null,
    reference: null,
    slip: null,
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
      bcNumber: null,
      category: null,
      amount: null,
      bank: null,
      reference: null,
      slip: null,
    };

    if (formData.bcNumber == 0) {
      errors.bcNumber = "Le bon de commande n'est pas acceptable";
    }

    if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    }

    if (formData.amount == 0) {
      errors.amount = "Le montant n'est pas acceptable";
    }

    if (!formData.bank.trim()) {
      errors.bank = "La banque est requise";
    }

    if (formData.reference == 0) {
      errors.reference = "La référence n'est pas acceptable";
    }

    if (!formData.slip.trim()) {
      errors.category = "Le bodereau est requis";
    }

    setFormErrors(errors);

    return (
      !errors.bcNumber &&
      !errors.category &&
      !errors.amount &&
      !errors.bank &&
      !errors.reference &&
      !errors.slip
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

export default useClientPaymentAddingForm;
