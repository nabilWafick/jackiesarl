import { useState } from "react";

interface FormData {
  bcNumber: number;
  category: string;
  purchasedQuantity: number;
  initialStock: number;
  sale: number;
  currentStock: number;
}

interface FormErrors {
  bcNumber: string | null;
  category: string | null;
  purchasedQuantity: string | null;
  initialStock: string | null;
  sale: string | null;
  currentStock: string | null;
}

const useClientPurchaseAddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    bcNumber: 0,
    category: "",
    purchasedQuantity: 0,
    initialStock: 0,
    sale: 0,
    currentStock: 0,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    bcNumber: null,
    category: null,
    purchasedQuantity: null,
    initialStock: null,
    sale: null,
    currentStock: null,
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
      purchasedQuantity: null,
      initialStock: null,
      sale: null,
      currentStock: null,
    };

    if (formData.bcNumber == 0) {
      errors.bcNumber = "Le bon de commande n'est pas acceptable";
    }

    if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    }

    if (formData.purchasedQuantity == 0) {
      errors.purchasedQuantity = "Le montant n'est pas acceptable";
    }

    if (formData.initialStock == 0) {
      errors.initialStock = "Le stock initial n'est pas acceptable";
    }

    if (formData.sale == 0) {
      errors.sale = "La vente n'est pas acceptable";
    }

    if (formData.currentStock == 0) {
      errors.currentStock = "La stock actuel n'est pas acceptable";
    }

    setFormErrors(errors);

    return (
      !errors.bcNumber &&
      !errors.category &&
      !errors.purchasedQuantity &&
      !errors.initialStock &&
      !errors.sale &&
      !errors.currentStock
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
