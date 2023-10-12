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
  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    } else if (formData.description.trim().length < 3) {
      errors.description =
        "La description doit comporter au moins 3 caractères.";
    }

    // Validation pour debit (nombre)
    if (!formData.debit.trim()) {
      errors.debit = "La valeur du débit est requise";
    } else {
      const valeurNumériqueDebit = parseFloat(formData.debit);
      if (isNaN(valeurNumériqueDebit)) {
        errors.debit = "La valeur du débit doit être un nombre valide.";
      }
    }

    // Validation pour credit (nombre)
    if (!formData.credit.trim()) {
      errors.credit = "La valeur du crédit est requise";
    } else {
      const valeurNumériqueCredit = parseFloat(formData.credit);
      if (isNaN(valeurNumériqueCredit)) {
        errors.credit = "La valeur du crédit doit être un nombre valide.";
      }
    }

    // Validation pour currentBalence (nombre)
    if (!formData.currentBalence.trim()) {
      errors.currentBalence = "La valeur du solde actuel est requise";
    } else {
      const valeurNumériqueCurrentBalence = parseFloat(formData.currentBalence);
      if (isNaN(valeurNumériqueCurrentBalence)) {
        errors.currentBalence =
          "La valeur du solde actuel doit être un nombre valide.";
      }
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
    onTextareaChange,
    onFormSubmit,
  };
};

export default useCurrentBalenceDetailsAddingForm;
