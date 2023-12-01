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
  newStock: string;
  currentStock: string;
  managerName: string;
  managerNumber: string;
}

interface FormErrors {
  newStock: string | null;
}

const useFogAddingForm = (
  { id, deposit, newStock, currentStock, managerName, managerNumber }: FormData,
  modalLabel: string
) => {
  const [formData, setFormData] = useState<FormData>({
    id,
    deposit,
    newStock,
    currentStock,
    managerName,
    managerNumber,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    newStock: null,
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
      newStock: null,
    };

    if (!formData.newStock.trim()) {
      errors.newStock = "Le stock à ajouter actuel n'est pas acceptable";
    } else {
      if (!/^\d*$/.test(formData.newStock)) {
        errors.newStock = "Le stock à ajouter doit être un nombre valide.";
      }
    }

    setFormErrors(errors);

    return !errors.newStock;
  };

  const onFormClose = () => {
    setFormData({
      id,
      deposit,
      newStock,
      currentStock,
      managerName,
      managerNumber,
    });
    setFormErrors({
      newStock: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormErrors({
        newStock: null,
      });
      console.log("added stock", formData.newStock);
      console.log("last stock", formData.currentStock);
      console.log(
        "new stock",
        parseFloat(formData.newStock) + parseFloat(formData.currentStock)
      );

      const response = await BrouillardAPI.update(
        authenticatedEmploye!,
        formData.id,
        1,
        new Brouillard(
          formData.deposit,
          parseFloat(formData.newStock) + parseFloat(formData.currentStock),
          formData.managerName,
          formData.managerNumber
        )
      );

      if (response!.status == 200) {
        onFormClose();
        toggleModal(modalLabel);
        fetchAllBrouillard();
        setActionResultMessage("Le stock du dépôt a été complété avec succès");
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
      } else {
        onFormClose();
        toggleModal(modalLabel);
        setActionResultMessage(
          "Erreur lors de la mise à jour du dépôt du dépôt"
        );
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

export default useFogAddingForm;
