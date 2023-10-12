import { useState } from "react";

interface FormData {
  deposit: string;

  currentStock: string;
  managerName: string;
  managerNumber: string;
}

interface FormErrors {
  deposit: string | null;
  currentStock: string | null;
  managerName: string | null;
  managerNumber: string | null;
}

const useFogAddingForm = ({
  deposit,
  currentStock,
  managerName,
  managerNumber,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    deposit: deposit,
    currentStock: currentStock,
    managerName: managerName,
    managerNumber: managerNumber,
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
      errors.deposit = "Le nom du dépôt est requis";
    } else if (formData.deposit.trim().length < 3) {
      errors.deposit = "Le nom du dépôt doit comporter au moins 3 caractères.";
    }

    if (!formData.currentStock.trim()) {
      errors.currentStock = "Le stock actuel n'est pas acceptable";
    } else {
      const valeurNumeriqueCurrentStock = parseFloat(formData.currentStock);
      if (isNaN(valeurNumeriqueCurrentStock)) {
        errors.currentStock = "Le stock actuel doit être un nombre valide.";
      }
    }

    // Validation pour managerName (chaîne de caractères)
    if (!formData.managerName.trim()) {
      errors.managerName = "Le nom du gérant est requis";
    } else if (formData.managerName.trim().length < 3) {
      errors.managerName =
        "Le nom du gérant doit comporter au moins 3 caractères.";
    }

    // Validation pour managerNumber (nombre)
    if (!formData.managerNumber.trim()) {
      errors.managerNumber = "Le numéro du gérant n'est pas acceptable";
    } else {
      const valeurNumeriqueManagerNumber = parseFloat(formData.managerNumber);
      if (isNaN(valeurNumeriqueManagerNumber)) {
        errors.managerNumber =
          "Le numéro du gérant doit être un nombre valide.";
      }
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
