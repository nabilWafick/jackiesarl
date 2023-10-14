import { useState } from "react";

interface FormData {
  bcNumber: string;
  category: string;
  amount: string;
  bank: string;
  reference: string;
  slip: File | string;
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
      category: null,
      amount: null,
      bank: null,
      reference: null,
      slip: null,
    };

    if (!formData.bcNumber.trim()) {
      errors.bcNumber = "Le bon de commande est requis";
    } else {
      const numericBcNumber = parseFloat(formData.bcNumber);
      if (isNaN(numericBcNumber)) {
        errors.bcNumber = "Le bon de commande doit être un nombre valide.";
      }
    }

    if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    } else if (formData.category.trim().length < 3) {
      errors.category = "La catégorie doit contenir au moins 3 caractères.";
    }

    if (!formData.amount.trim()) {
      errors.amount = "Le montant est requis";
    } else {
      const numericAmount = parseFloat(formData.amount);
      if (isNaN(numericAmount)) {
        errors.amount = "Le montant doit être un nombre valide.";
      }
    }

    if (!formData.bank.trim()) {
      errors.bank = "La banque est requise";
    }

    if (!formData.reference.trim()) {
      errors.reference = "La référence est requise";
    } else if (formData.reference.trim().length < 3) {
      errors.reference = "La référence doit contenir au moins 3 caractères.";
    }

    if (!formData.slip) {
      errors.slip = "Le bordereau est requis";
    } else if (
      typeof formData.slip != "string" &&
      formData.slip.type !== "application/pdf" &&
      formData.slip.type !== "application/msword"
    ) {
      errors.slip =
        "Le type de fichier n'est pas pris en charge. Veuillez télécharger un fichier PDF ou Word.";
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
    onFileInputChange,
    onFormSubmit,
  };
};

export default useClientPaymentAddingForm;
