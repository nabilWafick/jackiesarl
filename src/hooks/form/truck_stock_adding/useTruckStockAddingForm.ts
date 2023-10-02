import { useState } from "react";

interface FormData {
  truckNumber: string;
  category: string;
  driverNumber: string;
  bcNumber: string;
  quantity: string;
}

interface FormErrors {
  truckNumber: string | null;
  category: string | null;
  driverNumber: string | null;
  bcNumber: string | null;
  quantity: string | null;
}

const useTruckStockAddingForm = ({
  truckNumber,
  category,
  driverNumber,
  bcNumber,
  quantity,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    truckNumber: truckNumber,
    category: category,
    driverNumber: driverNumber,
    bcNumber: bcNumber,
    quantity: quantity,
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

    if (!formData.driverNumber.trim()) {
      errors.driverNumber = "Le numéro de téléphone est requis";
    }

    if (!formData.bcNumber.trim()) {
      errors.bcNumber = "Le numéro de commande est requis";
    }

    if (!formData.quantity.trim()) {
      errors.quantity = "La stock est requis";
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

export default useTruckStockAddingForm;
