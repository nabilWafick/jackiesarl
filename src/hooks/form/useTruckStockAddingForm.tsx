import { useState } from "react";

interface FormData {
  truckNumber: string;
  category: string;
  driverNumber: number;
  bcNumber: number;
  quantity: number;
}

interface FormErrors {
  truckNumber: string | null;
  category: string | null;
  driverNumber: string | null;
  bcNumber: string | null;
  quantity: string | null;
}

const useClientPurchaseAddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    truckNumber: "",
    category: "",
    driverNumber: 0,
    bcNumber: 0,
    quantity: 0,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    truckNumber: null,
    category: null,
    driverNumber: null,
    bcNumber: null,
    quantity: null,
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
      truckNumber: null,
      category: null,
      driverNumber: null,
      bcNumber: null,

      quantity: null,
    };

    if (!formData.truckNumber.trim()) {
      errors.truckNumber = "Le numéro du cq,ion est requis";
    }

    if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    }

    if (formData.driverNumber == 0) {
      errors.driverNumber = "Le numéro de téléphone n'est pas acceptable";
    }

    if (formData.bcNumber == 0) {
      errors.bcNumber = "Le numéro de commande n'est pas acceptable";
    }

    if (formData.quantity == 0) {
      errors.quantity = "La stock n'est pas acceptable";
    }

    setFormErrors(errors);

    return (
      !errors.truckNumber &&
      !errors.category &&
      !errors.driverNumber &&
      !errors.bcNumber &&
      !errors.quantity
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
