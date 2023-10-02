import { useState } from "react";

interface FormData {
  bcNumber: string;
  category: string;
  amount: string;
  bank: string;
  reference: string;
  slip: string;
}

interface FormErrors {
  bcNumber: string | null;
  category: string | null;
  bank: string | null;
  amount: string | null;
  reference: string | null;
  slip: string | null;
}

const useClientPaymentAddingForm = ({
  bcNumber,
  category,
  bank,
  amount,
  reference,
  slip,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    bcNumber: bcNumber,
    category: category,
    amount: amount,
    bank: bank,
    reference: reference,
    slip: slip,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    bcNumber: null,
    category: null,
    amount: null,
    bank: null,
    reference: null,
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
      category: null,
      amount: null,
      bank: null,
      reference: null,
      slip: null,
    };

    if (!formData.bcNumber.trim()) {
      errors.bcNumber = "Le bon de commande est requis";
    }

    if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    }

    if (!formData.amount.trim()) {
      errors.amount = "Le montant est requis";
    }

    if (!formData.bank.trim()) {
      errors.bank = "La banque est requise";
    }

    if (!formData.reference.trim()) {
      errors.reference = "La référence est requis";
    }

    if (!formData.slip.trim()) {
      errors.category = "Le bodereau est requis";
    }

    setFormErrors(errors);

    return (
      !errors.bcNumber &&
      !errors.category &&
      !errors.amount &&
      !errors.bank &&
      !errors.reference &&
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

export default useClientPaymentAddingForm;
