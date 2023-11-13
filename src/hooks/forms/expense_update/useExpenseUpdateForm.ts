import { useState } from "react";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import DepensesAPI from "../../../api/depenses/depenses.api";
import Depenses from "../../../models/depenses/depenses.model";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";
import useDepensesValidationStore from "../../../store/depenses_validation/useDepensesValidation.store";

interface FormData {
  id: number;
  description: string;
  amount: string;
  piece: File | string;
  est_validee: number;
}

interface FormErrors {
  description: string | null;
  amount: string | null;
  piece: string | null;
}

const useExpenseUpdateForm = (
  { id, description, amount, piece, est_validee }: FormData,
  modalLabel: string
) => {
  const [formData, setFormData] = useState<FormData>({
    id: id,
    description: description,
    amount: amount,
    piece: piece,
    est_validee: est_validee,
  });

  const [refresh, setRefresh] = useState(false);

  const [formErrors, setFormErrors] = useState<FormErrors>({
    description: null,
    amount: null,
    piece: null,
  });

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const fetchAllDepenses = useDepensesValidationStore(
    (state) => state.fetchAllDepenses
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
      id: id,
      description: description,
      amount: amount,
      piece: piece,
      est_validee: est_validee,
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

      const response = await DepensesAPI.update(
        authenticatedEmploye!,
        formData.id,
        new Depenses(
          formData.description,
          parseFloat(formData.amount),
          formData.piece,
          est_validee
        )
      );

      if (response!.status == 200) {
        fetchAllDepenses();
        onFormClose();
        toggleModal(modalLabel);
        setRefresh(!refresh);
        setActionResultMessage("La dépense a été modifiée avec succès");
        toggleModal("action-result-message");
      } else if (response!.status == 401) {
        onFormClose();
        toggleModal(modalLabel);
        setActionResultMessage(
          `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
        );
        toggleModal("action-result-message");
      } else if (response!.status == 403) {
        onFormClose();
        toggleModal(modalLabel);
        setActionResultMessage(response!.error);
        toggleModal("action-result-message");
      } else if (response!.status == 404) {
        onFormClose();
        toggleModal(modalLabel);
        setActionResultMessage("La dépense n'a pas été trouvée");
        toggleModal("action-result-message");
      } else {
        onFormClose();
        toggleModal(modalLabel);
        setActionResultMessage("Erreur lors de la mise à jour de la dépense");
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

export default useExpenseUpdateForm;
