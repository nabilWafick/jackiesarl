import { useState } from "react";

interface FormData {
  description: string;
  debit: string;
  credit: string;
  currentBalence: string;
}

interface FormErrors {
  description: string | null;
  debit: string | null;
  credit: string | null;

  currentBalence: string | null;
}

const useCurrentBalenceDetailsAddingForm = ({
  description,
  debit,
  credit,
  currentBalence,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    description: description,
    debit: debit,
    credit: credit,
    currentBalence: currentBalence,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    description: null,
    debit: null,
    credit: null,
    currentBalence: null,
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
      debit: null,
      credit: null,

      currentBalence: null,
    };

    if (!formData.description.trim()) {
      errors.description = "La description est requise";
    }

    if (!formData.debit.trim()) {
      errors.debit = "Le valeur du débit est requise";
    }

    if (!formData.credit.trim()) {
      errors.credit = "La valeur du crédit est requise";
    }

    if (!formData.currentBalence.trim()) {
      errors.currentBalence = "La valeur du solde actuel est requise";
    }

    setFormErrors(errors);

    return (
      !errors.description &&
      !errors.debit &&
      !errors.credit &&
      !errors.currentBalence
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

export default useCurrentBalenceDetailsAddingForm;
