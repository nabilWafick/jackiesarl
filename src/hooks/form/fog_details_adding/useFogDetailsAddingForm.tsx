import { useState } from "react";

interface FormData {
  quantityBeforeSelling: number;
  sale: number;
  currentQuantity: number;
  payment: number;
  expense: number;
  observation: string;
}

interface FormErrors {
  quantityBeforeSelling: string | null;
  sale: string | null;
  currentQuantity: string | null;
  payment: string | null;
  expense: string | null;
  observation: string | null;
}

const useFogDetailsAddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    quantityBeforeSelling: 0,
    sale: 0,
    currentQuantity: 0,
    payment: 0,
    expense: 0,
    observation: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    quantityBeforeSelling: null,
    sale: null,
    currentQuantity: null,
    payment: null,
    expense: null,
    observation: null,
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
      quantityBeforeSelling: null,
      sale: null,
      currentQuantity: null,
      payment: null,
      expense: null,
      observation: null,
    };

    if (formData.quantityBeforeSelling == 0) {
      errors.quantityBeforeSelling =
        "La quantité avant vente n'est pas acceptable";
    }

    if (formData.sale == 0) {
      errors.sale = "La valeur de la vente n'est pas acceptable";
    }

    if (formData.currentQuantity == 0) {
      errors.currentQuantity =
        "La valeur de la quantité actuelle n'est pas acceptable";
    }

    if (formData.payment == 0) {
      errors.payment = "La valeur du versement n'est pas acceptable";
    }

    if (formData.sale == 0) {
      errors.sale = "La valeur de la vente n'est pas acceptable";
    }

    if (formData.expense == 0) {
      errors.expense = "La valeur de la dépense n'est pas acceptable";
    }

    if (!formData.observation.trim()) {
      errors.expense = "L'observation est requise";
    }

    setFormErrors(errors);

    return (
      !errors.quantityBeforeSelling &&
      !errors.sale &&
      !errors.currentQuantity &&
      !errors.payment &&
      !errors.expense &&
      !errors.observation
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

export default useFogDetailsAddingForm;
