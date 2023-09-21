import { useState } from "react";

interface FormData {
  deposit: string;

  currentStock: number;
  managerName: string;
  managerNumberber: number;
}

interface FormErrors {
  deposit: string | null;
  currentStock: string | null;
  managerName: string | null;
  managerNumber: string | null;
}

const useClientPurchaseAddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    deposit: "",
    currentStock: 0,
    managerName: "",
    managerNumberber: 0,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    deposit: null,
    currentStock: null,
    managerName: null,
    managerNumber: null,
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
      deposit: null,
      currentStock: null,
      managerName: null,
      managerNumber: null,
    };

    if (!formData.deposit.trim()) {
      errors.deposit = "Le nom du dépot est requis";
    }

    if (formData.currentStock == 0) {
      errors.currentStock = "Le stock actuel n'est pas acceptable";
    }

    if (!formData.managerName.trim()) {
      errors.managerName = "Le nom du gérant est requis";
    }

    if (formData.managerNumberber == 0) {
      errors.managerNumber = "Le nom du gérant n'est pas acceptable";
    }

    setFormErrors(errors);

    return (
      !errors.deposit &&
      !errors.currentStock &&
      !errors.managerName &&
      !errors.managerNumber
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
