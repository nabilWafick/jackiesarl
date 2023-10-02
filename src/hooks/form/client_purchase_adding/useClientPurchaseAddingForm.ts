import { useState } from "react";

interface FormData {
  quantity: string;
  category: string;
  amount: string;
  ctpNumber: string;
  slip: string;
  bcNumber: string;
}

interface FormErrors {
  quantity: string | null;
  category: string | null;
  amount: string | null;
  ctpNumber: string | null;
  slip: string | null;
  bcNumber: string | null;
}

const useClientPurchaseAddingForm = ({
  quantity,
  category,
  amount,
  ctpNumber,
  slip,
  bcNumber,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    quantity: quantity,
    category: category,
    amount: amount,
    ctpNumber: ctpNumber,
    slip: slip,
    bcNumber: bcNumber,
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

    if (!formData.quantity.trim()) {
      errors.quantity = "La quantité est requis";
    }

    if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    }

    if (!formData.amount.trim()) {
      errors.amount = "Le montant est requis";
    }

    if (!formData.ctpNumber.trim()) {
      errors.amount = "Le numéro CTP est requis";
    }

    if (!formData.slip.trim()) {
      errors.category = "Le bodereau est requis";
    }

    if (formData.bcNumber.trim()) {
      errors.bcNumber = "Le bon de commande est requis";
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
