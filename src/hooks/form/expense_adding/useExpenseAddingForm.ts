import { useState } from "react";

interface FormData {
  description: string;
  amount: string;
  piece: File;
}

interface FormErrors {
  description: string | null;
  amount: string | null;
  piece: string | null;
}

const useExpenseAddingForm = ({ description, amount, piece }: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    description: description,
    amount: amount,
    piece: piece,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    description: null,
    amount: null,
    piece: null,
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
      amount: null,
      piece: null,
    };

    if (!formData.description.trim()) {
      errors.description = "La description est requise";
    } else if (formData.description.trim().length < 20) {
      errors.description =
        "La description doit comporter au moins 20 caractères.";
    }

    // Validation pour amount (nombre)
    if (!formData.amount.trim()) {
      errors.amount = "Le montant est requis";
    } else {
      const valeurNumériqueamount = parseFloat(formData.amount);
      if (isNaN(valeurNumériqueamount)) {
        errors.amount = "Le montant doit être un nombre valide.";
      }
    }

    // Validation pour piece (fichier)
    // Validation pour piece (fichier)
    if (!formData.piece) {
      errors.piece = "La pièce est requise";
    } else {
      // Vérifiez le type du fichier
      const typesDeFichierAutorisés = ["application/pdf", "application/msword"];
      if (!typesDeFichierAutorisés.includes(formData.piece.type)) {
        errors.piece = "Le type de fichier doit être PDF ou Word.";
      }
    }

    setFormErrors(errors);

    return !errors.description && !errors.amount && !errors.piece;
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
    onTextareaChange,
    onFormSubmit,
  };
};

export default useExpenseAddingForm;
