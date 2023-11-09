import { useState } from "react";
import RemiseChequeClientAPI from "../../../api/remise_cheque_client/remise_cheque_client.api";
import RemiseChequeClient from "../../../models/remise_cheque_client/remise_cheque_client.model";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import useClientsStore from "../../../store/clients/useClients.store";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useClientChecksRemittanceStore from "../../../store/remise_cheque_client/useRemiseChequeClient.store";

interface FormData {
  id: number;
  description: string;
  bank: string;
  amount: string;
  rest: string;
  est_validee: number;
}

interface FormErrors {
  description: string | null;
  bank: string | null;
  amount: string | null;
  rest: string | null;
}

const useClientCheckRemittanceUpdateForm = (
  { id, description, bank, amount, rest, est_validee }: FormData,
  modalLabel: string
) => {
  const [formData, setFormData] = useState<FormData>({
    id: id,
    description: description,
    bank: bank,
    amount: amount,
    rest: rest,
    est_validee: est_validee,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    description: null,
    bank: null,
    amount: null,
    rest: null,
  });

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
      id: id,
      description: description,
      bank: bank,
      amount: amount,
      rest: rest,
      est_validee: est_validee,
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

      const response = await RemiseChequeClientAPI.update(
        formData.id,
        new RemiseChequeClient(
          formData.description,
          formData.bank,
          parseFloat(formData.amount),
          parseFloat(formData.rest),
          est_validee,
          selectedClient!.id!
        )
      );

      if (response!.status == 200) {
        onFormClose();
        toggleModal(modalLabel);
        fetchAllClientChecksRemittance(selectedClient!.id!);
        setActionResultMessage(
          "La remise de chèque du client a été mis à jour avec succès"
        );

        toggleModal("action-result-message");
      } else if (response!.status == 404) {
        onFormClose();
        toggleModal(modalLabel);
        setActionResultMessage(
          "La remise de chèque du client n'a pas été trouvé"
        );
        toggleModal("action-result-message");
      } else {
        onFormClose();
        toggleModal(modalLabel);
        setActionResultMessage(
          "Erreur lors de la mise à jour de la remise de chèque du client"
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

export default useClientCheckRemittanceUpdateForm;
