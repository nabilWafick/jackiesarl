import { useState } from "react";

interface FormData {
  quantityBeforeSelling: string;
  sale: string;
  quantityAfterSelling: string;
  payment: string;
  expense: string;
  observation: string;
}

interface FormErrors {
  quantityBeforeSelling: string | null;
  sale: string | null;
  quantityAfterSelling: string | null;
  payment: string | null;
  expense: string | null;
  observation: string | null;
}

const useFogDetailsAddingForm = ({
  quantityBeforeSelling,
  sale,
  quantityAfterSelling,
  payment,
  expense,
  observation,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    quantityBeforeSelling: quantityBeforeSelling,
    sale: sale,
    quantityAfterSelling: quantityAfterSelling,
    payment: payment,
    expense: expense,
    observation: observation,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    quantityBeforeSelling: null,
    sale: null,
    quantityAfterSelling: null,
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
      quantityAfterSelling: null,
      payment: null,
      expense: null,
      observation: null,
    };

    if (!formData.quantityBeforeSelling.trim()) {
      errors.quantityBeforeSelling = "La quantité avant vente est requis";
    }

    if (!formData.sale.trim()) {
      errors.sale = "La valeur de la vente est requise";
    }

    if (!formData.quantityAfterSelling.trim()) {
      errors.quantityAfterSelling =
        "La valeur de la quantité actuelle est requise";
    }

    if (!formData.payment.trim()) {
      errors.payment = "La valeur du versement est requise";
    }

    if (!formData.sale.trim()) {
      errors.sale = "La valeur de la vente est requise";
    }

    if (!formData.expense.trim()) {
      errors.expense = "La valeur de la dépense est requise";
    }

    if (!formData.observation.trim()) {
      errors.expense = "L'observation est requise";
    }

    setFormErrors(errors);

    return (
      !errors.quantityBeforeSelling &&
      !errors.sale &&
      !errors.quantityAfterSelling &&
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
