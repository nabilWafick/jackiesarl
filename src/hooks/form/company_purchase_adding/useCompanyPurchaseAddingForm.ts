import { useState } from "react";

interface FormData {
  bcNumber: string;
  purchasedQuantity: string;
  amount: string;
  bank: string;
  check: string;
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

const useCompanyPurchaseForm = ({
  bcNumber,
  bank,
  purchasedQuantity,
  amount,
  check,
  slip,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    bcNumber: bcNumber,
    purchasedQuantity: purchasedQuantity,
    amount: amount,
    bank: bank,
    check: check,
    slip: slip,
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

    if (!formData.bcNumber.trim()) {
      errors.bcNumber = "Le bon de commande est requis";
    }

    if (!formData.purchasedQuantity.trim()) {
      errors.purchasedQuantity = "La quantité achetée est requise";
    }

    if (!formData.amount.trim()) {
      errors.amount = "Le montant est requis";
    }

    if (!formData.bank.trim()) {
      errors.bank = "La banque est requise";
    }

    if (!formData.check.trim()) {
      errors.check = "Le numero de chèque est requis";
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

export default useCompanyPurchaseForm;
