import { useState } from "react";
import Brouillard from "../../../models/brouillard/brouillard.model";
import BrouillardAPI from "../../../api/brouillard/brouillard.api";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import useBrouillardStore from "../../../store/brouillard/useBrouillard.store";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";

interface FormData {
  id: number;
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

const useFogUpdateForm = (
  { id, deposit, currentStock, managerName, managerNumber }: FormData,
  modalLabel: string
) => {
  const [formData, setFormData] = useState<FormData>({
    id,
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

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const fetchAllBrouillard = useBrouillardStore(
    (state) => state.fetchAllBrouillard
  );

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

    const beninPhoneRegex = /^(\+229|00229)[45679]\d{7}$/; // Format de numéro
    // Validation pour managerNumber (nombre)
    if (!formData.managerNumber.trim()) {
      errors.managerNumber = "Le numéro du gérant n'est pas acceptable";
    } else {
      if (!beninPhoneRegex.test(formData.managerNumber.trim())) {
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

  const onFormClose = () => {
    setFormData({
      id,
      deposit: deposit,
      currentStock: currentStock,
      managerName: managerName,
      managerNumber: managerNumber,
    });
    setFormErrors({
      deposit: null,
      currentStock: null,
      managerName: null,
      managerNumber: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: FormErrors = {
      deposit: null,
      currentStock: null,
      managerName: null,
      managerNumber: null,
    };

    if (validateForm()) {
      setFormErrors({
        deposit: null,
        currentStock: null,
        managerName: null,
        managerNumber: null,
      });

      const response = await BrouillardAPI.update(
        authenticatedEmploye!,
        formData.id,
        0,
        new Brouillard(
          formData.deposit,
          parseFloat(formData.currentStock),
          formData.managerName,
          formData.managerNumber
        )
      );

      if (response!.status == 200) {
        onFormClose();
        toggleModal(modalLabel);
        fetchAllBrouillard();
        setActionResultMessage("Le dépôt a été mise à jour avec succès");
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
      } else if (response!.status == 406) {
        errors.currentStock = response!.error!;
        setFormErrors(errors);
      } else {
        onFormClose();
        toggleModal(modalLabel);
        setActionResultMessage("Erreur lors de l'ajout du dépôt");
        toggleModal("action-result-message");
      }
    }
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    onFormClose,
    onFormSubmit,
  };
};

export default useFogUpdateForm;
