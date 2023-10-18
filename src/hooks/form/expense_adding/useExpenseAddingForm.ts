import { useState } from "react";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import DepensesAPI from "../../../api/depenses/depenses.api";
import Depenses from "../../../models/depenses/depenses.model";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";

interface FormData {
  description: string;
  amount: string;
  piece: File | string;
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

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

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
      const numericValue = parseFloat(formData.amount);
      if (isNaN(numericValue)) {
        errors.amount = "Le montant doit être un nombre valide.";
      }
    }

    const allowedFileTypes = [
      "image/png",
      "image/jpg",
      "application/image/jpeg",
      "application/pdf",
      "application/msword",
    ];
    if (
      typeof formData.piece != "string" &&
      !allowedFileTypes.includes(formData.piece.type)
    ) {
      errors.piece =
        "Le type de fichier doit être PNG, JPG, JPEG, PDF ou Word.";
    }

    setFormErrors(errors);

    return !errors.description && !errors.amount && !errors.piece;
  };

  const onFormClose = () => {
    setFormData({
      description: description,
      amount: amount,
      piece: piece,
    });
    setFormErrors({
      description: null,
      amount: null,
      piece: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormErrors({
        description: null,
        amount: null,
        piece: null,
      });

      const response = await DepensesAPI.create(
        new Depenses(
          formData.description,
          parseFloat(formData.amount),
          formData.piece,
          0
        )
      );

      if (response!.status == 201) {
        onFormClose();
        toggleModal("expense-adding-form");
        setActionResultMessage("La dépense a été ajoutée avec succès");
        console.log("Added successfuly");
        toggleModal("action-result-message");
      } else {
        onFormClose();
        toggleModal("expense-adding-form");
        setActionResultMessage("Erreur lors de l'ajout de la dépense");
        toggleModal("action-result-message");
      }
    }
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    onFileInputChange,
    onTextareaChange,
    onFormClose,
    onFormSubmit,
  };
};

export default useExpenseAddingForm;
