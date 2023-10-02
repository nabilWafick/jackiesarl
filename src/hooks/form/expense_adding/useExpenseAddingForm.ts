import { useState } from "react";

interface FormData {
  description: string;
  amount: string;
  piece: string;
}

interface FormErrors {
  description: string | null;
  amount: string | null;
  piece: string | null;
}

const useExpenseAddingForm = ({ description, amount, piece }: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    description: description,
    amount: amount,
    piece: piece,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    description: null,
    amount: null,
    piece: null,
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
      description: null,
      amount: null,
      piece: null,
    };

    if (!formData.description.trim()) {
      errors.description = "La description est requise";
    }

    if (!formData.amount.trim()) {
      errors.amount = "Le montant est requis";
    }

    if (!formData.piece.trim()) {
      errors.piece = "La piece est requise";
    }

    setFormErrors(errors);

    return !errors.description && !errors.amount && !errors.piece;
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

export default useExpenseAddingForm;
