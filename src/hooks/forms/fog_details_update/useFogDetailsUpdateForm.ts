import { useState } from "react";
import ActivitesDepotAPI from "../../../api/activites_depot/activites_depot.api";
import ActivitesDepot from "../../../models/activites_depot/activites_depot.model";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import useBrouillardStore from "../../../store/brouillard/useBrouillard.store";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useActivitesDepotStore from "../../../store/activites_depot/useActivitesDepot.store";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";

interface FormData {
  id: number;
  quantityBeforeSelling: string;
  sale: string;
  quantityAfterSelling: string;
  payment: string;
  expense: string;
  observation: string;
}

interface FormErrors {
  // quantityBeforeSelling: string | null;
  sale: string | null;
  //  quantityAfterSelling: string | null;
  payment: string | null;
  expense: string | null;
  observation: string | null;
}

const useFogDetailsUpdateForm = (
  {
    id,
    quantityBeforeSelling,
    sale,
    quantityAfterSelling,
    payment,
    expense,
    observation,
  }: FormData,
  modalLabel: string
) => {
  const [formData, setFormData] = useState<FormData>({
    id,
    quantityBeforeSelling: quantityBeforeSelling,
    sale: sale,
    quantityAfterSelling: quantityAfterSelling,
    payment: payment,
    expense: expense,
    observation: observation,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    //   quantityBeforeSelling: null,
    sale: null,
    //   quantityAfterSelling: null,
    payment: null,
    expense: null,
    observation: null,
  });

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const selectedBrouillard = useBrouillardStore(
    (state) => state.selectedBrouillard
  );

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const fetchAllActivitesDepot = useActivitesDepotStore(
    (state) => state.fetchAllActivitesDepot
  );

  const onInputDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
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
      //     quantityBeforeSelling: null,
      sale: null,
      //     quantityAfterSelling: null,
      payment: null,
      expense: null,
      observation: null,
    };

    // if (!formData.quantityBeforeSelling.trim()) {
    //   errors.quantityBeforeSelling = "La quantité avant vente est requise";
    // } else {
    //   const valeurNumeriqueQuantityBeforeSelling = parseFloat(
    //     formData.quantityBeforeSelling
    //   );
    //   if (isNaN(valeurNumeriqueQuantityBeforeSelling)) {
    //     errors.quantityBeforeSelling =
    //       "La quantité avant vente doit être un nombre valide.";
    //   }
    // }

    // Validation pour sale (nombre)
    if (!formData.sale.trim()) {
      errors.sale = "La valeur de la vente est requise";
    } else {
      if (!/^\d*$/.test(formData.sale)) {
        errors.sale = "La valeur de la vente doit être un nombre valide.";
      }
    }

    // // Validation pour quantityAfterSelling (nombre)
    // if (!formData.quantityAfterSelling.trim()) {
    //   errors.quantityAfterSelling =
    //     "La valeur de la quantité actuelle est requise";
    // } else {
    //   const valeurNumeriqueQuantityAfterSelling = parseFloat(
    //     formData.quantityAfterSelling
    //   );
    //   if (isNaN(valeurNumeriqueQuantityAfterSelling)) {
    //     errors.quantityAfterSelling =
    //       "La valeur de la quantité actuelle doit être un nombre valide.";
    //   }
    // }

    // Validation pour payment (nombre)
    if (!formData.payment.trim()) {
      errors.payment = "La valeur du versement est requise";
    } else {
      if (!/^\d*$/.test(formData.payment)) {
        errors.payment = "La valeur du versement doit être un nombre valide.";
      }
    }

    // Validation pour expense (nombre)
    if (!formData.expense.trim()) {
      errors.expense = "La valeur de la dépense est requise";
    } else {
      if (!/^\d*$/.test(formData.expense)) {
        errors.expense = "La valeur de la dépense doit être un nombre valide.";
      }
    }

    // Validation pour observation (chaîne de caractères)
    if (!formData.observation.trim()) {
      errors.observation = "L'observation est requise";
    } else if (formData.observation.trim().length < 20) {
      errors.observation =
        "L'observation doit comporter au moins 20 caractères.";
    }

    setFormErrors(errors);

    return (
      //  !errors.quantityBeforeSelling &&
      !errors.sale &&
      //  !errors.quantityAfterSelling &&
      !errors.payment &&
      !errors.expense &&
      !errors.observation
    );
  };

  const onFormClose = () => {
    setFormData({
      id,
      quantityBeforeSelling: quantityBeforeSelling,
      sale: sale,
      quantityAfterSelling: quantityAfterSelling,
      payment: payment,
      expense: expense,
      observation: observation,
    });
    setFormErrors({
      //   quantityBeforeSelling: null,
      sale: null,
      //   quantityAfterSelling: null,
      payment: null,
      expense: null,
      observation: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const errors: FormErrors = {
        //   quantityBeforeSelling: null,
        sale: null,
        //   quantityAfterSelling: null,
        payment: null,
        expense: null,
        observation: null,
      };

      const response = await ActivitesDepotAPI.update(
        authenticatedEmploye!,
        id,
        new ActivitesDepot(
          selectedBrouillard!.id!,
          parseFloat(quantityBeforeSelling),
          parseFloat(formData.sale),
          parseFloat(quantityAfterSelling),
          parseFloat(formData.payment),
          parseFloat(formData.expense),
          formData.observation
        )
      );

      if (response!.status == 200) {
        onFormClose();
        toggleModal(modalLabel);
        fetchAllActivitesDepot(selectedBrouillard!.id!);
        setActionResultMessage(
          "L'activité du dépôt a été mise à jour avec succès"
        );

        toggleModal("action-result-message");
      } else if (response!.status == 400) {
        onFormClose();
        toggleModal(modalLabel);
        setActionResultMessage(response!.error);
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
        errors.sale = response!.error!;
        setFormErrors(errors);
      } else {
        onFormClose();
        toggleModal(modalLabel);
        setActionResultMessage("Erreur lors de l'ajout de l'activité du dépôt");
        toggleModal("action-result-message");
      }
    }
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    onTextareaChange,
    onFormClose,
    onFormSubmit,
  };
};

export default useFogDetailsUpdateForm;
