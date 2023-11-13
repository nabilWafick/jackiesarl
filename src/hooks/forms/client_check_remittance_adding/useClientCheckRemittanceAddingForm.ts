import { useState } from "react";
import RemiseChequeClientAPI from "../../../api/remise_cheque_client/remise_cheque_client.api";
import RemiseChequeClient from "../../../models/remise_cheque_client/remise_cheque_client.model";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import useClientsStore from "../../../store/clients/useClients.store";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useClientChecksRemittanceStore from "../../../store/remise_cheque_client/useRemiseChequeClient.store";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";

interface FormData {
  description: string;
  bank: string;
  amount: string;
  rest: string;
}

interface FormErrors {
  description: string | null;
  bank: string | null;
  amount: string | null;
  rest: string | null;
}

const useClientCheckRemittanceAddingForm = ({
  description,
  bank,
  amount,
  rest,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    description: description,
    bank: bank,
    amount: amount,
    rest: rest,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    description: null,
    bank: null,
    amount: null,
    rest: null,
  });

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const selectedClient = useClientsStore((state) => state.selectedClient);
  const fetchAllClientChecksRemittance = useClientChecksRemittanceStore(
    (state) => state.fetchAllClientChecksRemittance
  );

  const onInputDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onCategorieSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
      description: null,
      bank: null,
      amount: null,
      rest: null,
    };

    if (!formData.description.trim()) {
      errors.description = "La description est requise";
    } else if (formData.description.trim().length < 20) {
      errors.description =
        "La description doit comporter au moins 20 caractères.";
    }

    if (!formData.bank.trim()) {
      errors.bank = "La banque est requise";
    } else if (formData.bank.trim().length < 3) {
      errors.bank = "Le nom de la banque doit comporter au moins 3 caractères.";
    }

    if (!formData.amount.trim()) {
      errors.amount = "Le montant est requis";
    } else {
      const numericAmount = parseFloat(formData.amount);
      if (isNaN(numericAmount)) {
        errors.amount = "Le montant doit être un nombre valide.";
      }
    }

    if (!formData.rest.trim()) {
      errors.rest = "Le reste est requis";
    } else {
      const numericRest = parseFloat(formData.rest);
      if (isNaN(numericRest)) {
        errors.rest = "Le reste doit être un nombre valide.";
      }
    }

    setFormErrors(errors);

    return (
      !errors.description && !errors.bank && !errors.amount && !errors.rest
    );
  };

  const onFormClose = () => {
    setFormData({
      description: description,
      bank: bank,
      amount: amount,
      rest: rest,
    });

    setFormErrors({
      description: null,
      bank: null,
      amount: null,
      rest: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormErrors({
        description: null,
        bank: null,
        amount: null,
        rest: null,
      });

      const response = await RemiseChequeClientAPI.create(
        authenticatedEmploye!,
        new RemiseChequeClient(
          formData.description,
          formData.bank,
          parseFloat(formData.amount),
          parseFloat(formData.rest),
          0,
          selectedClient!.id!
        )
      );

      if (response!.status == 201) {
        onFormClose();
        toggleModal("client-check-remittance-adding-form");
        fetchAllClientChecksRemittance(selectedClient!.id!);
        setActionResultMessage(
          "La remise de chèque du client a été ajoutée avec succès"
        );
        console.log("Added successfuly");
        toggleModal("action-result-message");
      } else if (response!.status == 401) {
        onFormClose();
        toggleModal("client-check-remittance-adding-form");
        setActionResultMessage(
          `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
        );
        toggleModal("action-result-message");
      } else if (response!.status == 403) {
        onFormClose();
        toggleModal("client-check-remittance-adding-form");
        setActionResultMessage(response!.error);
        toggleModal("action-result-message");
      } else {
        onFormClose();
        toggleModal("client-check-remittance-adding-form");
        setActionResultMessage(
          "Erreur lors de l'ajout du remise de chèque du client"
        );
        toggleModal("action-result-message");
      }
    }
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    onCategorieSelectChange,
    onTextareaChange,
    onFormClose,
    onFormSubmit,
  };
};

export default useClientCheckRemittanceAddingForm;
