import { useState } from "react";

interface FormData {
  deposit: string;

  currentStock: number;
  managerName: string;
  managerNumber: number;
}

interface FormErrors {
  deposit: string | null;
  currentStock: string | null;
  managerName: string | null;
  managerNumber: string | null;
}

const useFogAddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    deposit: "",
    currentStock: 0,
    managerName: "",
    managerNumber: 0,
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

    if (formData.managerNumber == 0) {
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

export default useFogAddingForm;
