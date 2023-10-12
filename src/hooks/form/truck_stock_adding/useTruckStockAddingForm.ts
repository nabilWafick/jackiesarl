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

    // Validation pour truckNumber (chaîne de caractères avec au moins 8 caractères)
    if (
      !formData.truckNumber.trim() ||
      formData.truckNumber.trim().length < 8
    ) {
      errors.truckNumber =
        "Le numéro du camion doit comporter au moins 8 caractères.";
    }

    // Validation pour category (chaîne de caractères)
    if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    } else if (formData.category.trim().length < 3) {
      errors.category = "La catégorie doit comporter au moins 3 caractères.";
    }

    // Validation pour driverNumber (numéro de téléphone au format Bénin)
    const beninPhoneRegex = /^[229][45679]\d{7}$/; // Format de numéro Bénin : commence par 229 et est suivi de 8 chiffres
    if (
      !formData.driverNumber.trim() ||
      !beninPhoneRegex.test(formData.driverNumber.trim())
    ) {
      errors.driverNumber =
        "Le numéro de téléphone doit être au format du Bénin.";
    }

    // Validation pour bcNumber (nombre)
    if (!formData.bcNumber.trim() || isNaN(Number(formData.bcNumber.trim()))) {
      errors.bcNumber = "Le numéro de commande doit être un nombre valide.";
    }

    // Validation pour quantity (nombre)
    if (!formData.quantity.trim() || isNaN(Number(formData.quantity.trim()))) {
      errors.quantity = "La quantité doit être un nombre valide.";
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
