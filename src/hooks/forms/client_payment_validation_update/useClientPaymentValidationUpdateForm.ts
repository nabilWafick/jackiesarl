import { useState } from "react";
import PaiementClientAPI from "../../../api/paiement_client/paiement_client.api";
import PaiementClient from "../../../models/paiement_client/paiement.model";
import useClientsStore from "../../../store/clients/useClients.store";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useClientsPaymentsValidationStore from "../../../store/paiement_client_validation/usePaiementClientValidation.store";

interface FormData {
  id: number;
  clientName: string;
  bcNumber: string;
  // category: string;
  amount: string;
  bank: string;
  reference: string;
  slip: File | string;
  est_valide: number;
}

interface FormErrors {
  clientName: string | null;
  bcNumber: string | null;
  // category: string | null;
  bank: string | null;
  amount: string | null;
  reference: string | null;
  slip: string | null;
}

const useClientPaymentValidationUpdateForm = (
  {
    id,
    clientName,
    bcNumber,
    //  category,
    bank,
    amount,
    reference,
    slip,
    est_valide,
  }: FormData,
  modalLabel: string
) => {
  const [formData, setFormData] = useState<FormData>({
    id: id,
    clientName,
    bcNumber: bcNumber,
    //   category: category,
    amount: amount,
    bank: bank,
    reference: reference,
    slip: slip,
    est_valide: est_valide,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    clientName: null,
    bcNumber: null,
    //  category: null,
    amount: null,
    bank: null,
    reference: null,
    slip: null,
  });
  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );
  const paymentValidationClient = useClientsStore(
    (state) => state.paymentValidationClient
  );
  const setPaymentValidationClient = useClientsStore(
    (state) => state.setPaymentValidationClient
  );
  const fetchAllClientsPaymentsValidation = useClientsPaymentsValidationStore(
    (state) => state.fetchAllClientPayments
  );
  const searchClients = useClientsStore((state) => state.searchClients);
  const refreshSearchedClients = useClientsStore(
    (state) => state.refreshSearchedClients
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

  const onClientNameInputDataChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    searchClients(value);
  };

  const updateClientNameFormData = (selectedClientName: string) => {
    setFormData({
      ...formData,
      clientName: selectedClientName,
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
      clientName: null,
      bcNumber: null,
      //    category: null,
      amount: null,
      bank: null,
      reference: null,
      slip: null,
    };

    if (!formData.clientName.trim()) {
      errors.clientName = "Le nom est requis";
    }

    if (!formData.bcNumber.trim()) {
      errors.bcNumber = "Le bon de commande est requis";
    } else {
      const numericBcNumber = parseFloat(formData.bcNumber);
      if (isNaN(numericBcNumber)) {
        errors.bcNumber = "Le bon de commande doit être un nombre valide.";
      }
    }

    // if (!formData.category.trim()) {
    //   errors.category = "La catégorie est requise";
    // } else if (formData.category.trim().length < 3) {
    //   errors.category = "La catégorie doit contenir au moins 3 caractères.";
    // }

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
    } else if (formData.bank.trim().length < 3) {
      errors.bank = "La banque doit contenir au moins 3 trois caractères";
    }

    if (!formData.reference.trim()) {
      errors.reference = "La référence est requise";
    } else if (formData.reference.trim().length < 3) {
      errors.reference = "La référence doit contenir au moins 3 caractères.";
    }

    // if (!formData.slip) {
    //   errors.slip = "Le bordereau est requis";
    // } else
    const allowedFileTypes = [
      "image/png",
      "image/jpg",
      "application/image/jpeg",
      "application/pdf",
      "application/msword",
    ];
    if (
      typeof formData.slip != "string" &&
      !allowedFileTypes.includes(formData.slip.type)
    ) {
      errors.slip = "Le type de fichier doit être PNG, JPG, JPEG, PDF ou Word.";
    }

    if (!paymentValidationClient) {
      errors.clientName = "Le nom du client est requis";
    }

    setFormErrors(errors);

    return (
      !errors.clientName &&
      !errors.bcNumber &&
      // !errors.category &&
      !errors.amount &&
      !errors.bank &&
      !errors.reference &&
      !errors.slip
    );
  };

  const onFormClose = () => {
    setFormData({
      id: id,
      clientName: clientName,
      bcNumber: bcNumber,
      //   category: category,
      amount: amount,
      bank: bank,
      reference: reference,
      slip: slip,
      est_valide: est_valide,
    });

    setFormErrors({
      clientName: null,
      bcNumber: null,
      //   category: null,
      amount: null,
      bank: null,
      reference: null,
      slip: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const errors: FormErrors = {
        clientName: null,
        bcNumber: null,
        // category: null,
        amount: null,
        bank: null,
        reference: null,
        slip: null,
      };

      const response = await PaiementClientAPI.update(
        formData.id,
        new PaiementClient(
          parseFloat(formData.amount),
          formData.bank,
          formData.reference,
          "",
          parseInt(formData.bcNumber),
          formData.slip,
          formData.est_valide,
          paymentValidationClient!.id!
        )
      );
      if (response!.status == 200) {
        onFormClose();
        toggleModal(modalLabel);
        fetchAllClientsPaymentsValidation();
        setActionResultMessage(
          "Le paiement du client a été modifié avec succès"
        );
        console.log("Added successfuly");
        toggleModal("action-result-message");
      } else if (response!.status == 400) {
        errors.bcNumber = response!.error!;
        setFormErrors(errors);
      } else if (response!.status == 404) {
        onFormClose();
        toggleModal(modalLabel);
        setActionResultMessage("Le paiement du client n'a pas été trouvé");
        toggleModal("action-result-message");
      } else {
        onFormClose();
        toggleModal(modalLabel);
        setActionResultMessage(
          "Erreur lors de la modification du paiement du client"
        );
        toggleModal("action-result-message");
      }
    }
    setPaymentValidationClient(undefined);
    refreshSearchedClients();
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    onClientNameInputDataChange,
    onCategorieSelectChange,
    updateClientNameFormData,
    onFileInputChange,
    onFormClose,
    onFormSubmit,
  };
};

export default useClientPaymentValidationUpdateForm;
