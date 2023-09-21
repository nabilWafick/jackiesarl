import { useState } from "react";

interface FormData {
  quantity: number;
  category: string;
  amount: number;
  ctpNumber: number;
  slip: string;
  bcNumber: number;
}

interface FormErrors {
  quantity: string | null;
  category: string | null;
  amount: string | null;
  ctpNumber: string | null;
  slip: string | null;
  bcNumber: string | null;
}

const useClientPurchaseAddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    quantity: 0,
    category: "",
    amount: 0,
    ctpNumber: 0,
    slip: "",
    bcNumber: 0,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    quantity: null,
    category: null,
    amount: null,
    ctpNumber: null,
    slip: null,
    bcNumber: null,
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
      quantity: null,
      category: null,
      amount: null,
      ctpNumber: null,
      slip: null,
      bcNumber: null,
    };

    if (formData.quantity == 0) {
      errors.quantity = "La quantité n'est pas acceptable";
    }

    if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    }

    if (formData.amount == 0) {
      errors.amount = "Le montant n'est pas acceptable";
    }

    if (formData.ctpNumber == 0) {
      errors.amount = "Le numéro CTP n'est pas acceptable";
    }

    if (!formData.slip.trim()) {
      errors.category = "Le bodereau est requis";
    }

    if (formData.bcNumber == 0) {
      errors.bcNumber = "Le bon de commande n'est pas acceptable";
    }

    setFormErrors(errors);

    return (
      !errors.quantity &&
      !errors.category &&
      !errors.amount &&
      !errors.ctpNumber &&
      !errors.slip &&
      !errors.bcNumber
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
