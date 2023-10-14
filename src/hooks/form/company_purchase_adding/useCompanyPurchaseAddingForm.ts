import { useState } from "react";

interface FormData {
  bcNumber: string;
  purchasedQuantity: string;
  amount: string;
  bank: string;
  check: string;
  slip: File | string;
}

interface FormErrors {
  bcNumber: string | null;
  bank: string | null;
  purchasedQuantity: string | null;
  amount: string | null;
  check: string | null;
  slip: string | null;
}

const useCompanyPurchaseForm = ({
  bcNumber,
  bank,
  purchasedQuantity,
  amount,
  check,
  slip,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    bcNumber: bcNumber,
    purchasedQuantity: purchasedQuantity,
    amount: amount,
    bank: bank,
    check: check,
    slip: slip,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    bcNumber: null,
    purchasedQuantity: null,
    amount: null,
    bank: null,
    check: null,
    slip: null,
  });

  const onInputDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const selectedFiles = e.target.files;

    if (selectedFiles && selectedFiles.length > 0) {
      setFormData({
        ...formData,
        [name]: selectedFiles[0],
      });
    }
  };

  const validateForm = () => {
    const errors: FormErrors = {
      bcNumber: null,
      purchasedQuantity: null,
      amount: null,
      bank: null,
      check: null,
      slip: null,
    };

    if (!formData.bcNumber.trim()) {
      errors.bcNumber = "Le numéro de bon de commande est requis";
    } else {
      const valeurNumériqueBcNumber = parseFloat(formData.bcNumber);
      if (isNaN(valeurNumériqueBcNumber)) {
        errors.bcNumber =
          "Le numéro de bon de commande doit être un nombre valide.";
      }
    }

    // Validation pour purchasedQuantity (nombre)
    if (!formData.purchasedQuantity.trim()) {
      errors.purchasedQuantity = "La quantité achetée est requise";
    } else {
      const valeurNumeriquePurchasedQuantity = parseFloat(
        formData.purchasedQuantity
      );
      if (isNaN(valeurNumeriquePurchasedQuantity)) {
        errors.purchasedQuantity =
          "La quantité achetée doit être un nombre valide.";
      }
    }

    // Validation pour amount (nombre)
    if (!formData.amount.trim()) {
      errors.amount = "Le amount est requis";
    } else {
      const valeurNumériqueamount = parseFloat(formData.amount);
      if (isNaN(valeurNumériqueamount)) {
        errors.amount = "Le amount doit être un nombre valide.";
      }
    }

    // Validation pour bank (chaine de caractères)
    if (!formData.bank.trim()) {
      errors.bank = "La banque est requise";
    } else if (formData.bank.trim().length < 3) {
      errors.bank = "La banque doit comporter au moins 3 caratères";
    }

    // Validation pour.check (nombre)
    if (!formData.check.trim()) {
      errors.check = "Le numéro de chèque est requis";
    } else {
      const valeurCheck = parseFloat(formData.check);
      if (isNaN(valeurCheck)) {
        errors.check = "Le numéro de chèque doit être un nombre valide.";
      }
    }

    // Validation pour slip (fichier)
    // Validation pour slip (file)
    if (!formData.slip) {
      errors.slip = "Le bordereau est requis";
    } else {
      // Vérifiez le type du fichier
      const typesDeFichierAutorisés = ["application/pdf", "application/msword"];
      if (
        typeof formData.slip != "string" &&
        !typesDeFichierAutorisés.includes(formData.slip.type)
      ) {
        errors.slip = "Le type de fichier doit être PDF ou Word.";
      }
    }

    setFormErrors(errors);

    return (
      !errors.bcNumber &&
      !errors.bank &&
      !errors.purchasedQuantity &&
      !errors.amount &&
      !errors.check &&
      !errors.slip
    );
  };

  const onFormClose = () => {
    setFormData({
      bcNumber: bcNumber,
      purchasedQuantity: purchasedQuantity,
      amount: amount,
      bank: bank,
      check: check,
      slip: slip,
    });

    setFormErrors({
      bcNumber: null,
      purchasedQuantity: null,
      amount: null,
      bank: null,
      check: null,
      slip: null,
    });
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
    onFileInputChange,
    onFormClose,
    onFormSubmit,
  };
};

export default useCompanyPurchaseForm;
