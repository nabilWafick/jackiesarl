import { useState } from "react";

interface FormData {
  bcNumber: number;
  purchasedQuantity: number;
  amount: number;
  bank: string;
  check: number;
  slip: string;
}

interface FormErrors {
  bcNumber: string | null;
  bank: string | null;
  purchasedQuantity: string | null;
  amount: string | null;
  check: string | null;
  slip: string | null;
}

const useClientPurchaseAddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    bcNumber: 0,
    purchasedQuantity: 0,
    amount: 0,
    bank: "",
    check: 0,
    slip: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    bcNumber: null,
    purchasedQuantity: null,
    amount: null,
    bank: null,
    check: null,
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

      purchasedQuantity: null,
      amount: null,
      bank: null,
      check: null,
      slip: null,
    };

    if (formData.bcNumber == 0) {
      errors.bcNumber = "Le bon de commande n'est pas acceptable";
    }

    if (formData.purchasedQuantity == 0) {
      errors.purchasedQuantity = "La quantité achetée n'est pas acceptable";
    }

    if (formData.amount == 0) {
      errors.amount = "Le montant n'est pas acceptable";
    }

    if (!formData.bank.trim()) {
      errors.bank = "La banque est requise";
    }

    if (formData.check == 0) {
      errors.check = "Le numero de chèque n'est pas acceptable";
    }

    if (formData.slip.trim()) {
      errors.slip = "Le bordereau est requis";
    }

    setFormErrors(errors);

    return (
      !errors.bcNumber &&
      !errors.bank &&
      !errors.purchasedQuantity &&
      !errors.amount &&
      !errors.check &&
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

export default useClientPurchaseAddingForm;
