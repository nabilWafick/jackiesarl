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
  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      errors.quantityBeforeSelling = "La quantité avant vente est requise";
    } else {
      const valeurNumeriqueQuantityBeforeSelling = parseFloat(
        formData.quantityBeforeSelling
      );
      if (isNaN(valeurNumeriqueQuantityBeforeSelling)) {
        errors.quantityBeforeSelling =
          "La quantité avant vente doit être un nombre valide.";
      }
    }

    // Validation pour sale (nombre)
    if (!formData.sale.trim()) {
      errors.sale = "La valeur de la vente est requise";
    } else {
      const valeurNumeriqueSale = parseFloat(formData.sale);
      if (isNaN(valeurNumeriqueSale)) {
        errors.sale = "La valeur de la vente doit être un nombre valide.";
      }
    }

    // Validation pour quantityAfterSelling (nombre)
    if (!formData.quantityAfterSelling.trim()) {
      errors.quantityAfterSelling =
        "La valeur de la quantité actuelle est requise";
    } else {
      const valeurNumeriqueQuantityAfterSelling = parseFloat(
        formData.quantityAfterSelling
      );
      if (isNaN(valeurNumeriqueQuantityAfterSelling)) {
        errors.quantityAfterSelling =
          "La valeur de la quantité actuelle doit être un nombre valide.";
      }
    }

    // Validation pour payment (nombre)
    if (!formData.payment.trim()) {
      errors.payment = "La valeur du versement est requise";
    } else {
      const valeurNumeriquePayment = parseFloat(formData.payment);
      if (isNaN(valeurNumeriquePayment)) {
        errors.payment = "La valeur du versement doit être un nombre valide.";
      }
    }

    // Validation pour expense (nombre)
    if (!formData.expense.trim()) {
      errors.expense = "La valeur de la dépense est requise";
    } else {
      const valeurNumeriqueExpense = parseFloat(formData.expense);
      if (isNaN(valeurNumeriqueExpense)) {
        errors.expense = "La valeur de la dépense doit être un nombre valide.";
      }
    }

    // Validation pour observation (chaîne de caractères)
    if (!formData.observation.trim()) {
      errors.observation = "L'observation est requise";
    } else if (formData.observation.trim().length < 20) {
      errors.observation =
        "L'observation doit comporter au moins 20 caractères.";
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
    onTextareaChange,
    onFormSubmit,
  };
};

export default useFogDetailsAddingForm;
