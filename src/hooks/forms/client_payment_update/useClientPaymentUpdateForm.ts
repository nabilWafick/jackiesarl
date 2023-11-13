import { useState } from "react";
import PaiementClientAPI from "../../../api/paiement_client/paiement_client.api";
import PaiementClient from "../../../models/paiement_client/paiement.model";
import useClientsStore from "../../../store/clients/useClients.store";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useClientPaymentsStore from "../../../store/paiement_client/usePaiementClient.store";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";

interface FormData {
  id: number;
  bcNumber: string;
  category: string;
  amount: string;
  bank: string;
  reference: string;
  slip: File | string;
  est_valide: number;
}

interface FormErrors {
  bcNumber: string | null;
  category: string | null;
  bank: string | null;
  amount: string | null;
  reference: string | null;
  slip: string | null;
}

const useClientPaymentUpdateForm = (
  {
    id,
    bcNumber,
    category,
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
    bcNumber: bcNumber,
    category: category,
    amount: amount,
    bank: bank,
    reference: reference,
    slip: slip,
    est_valide: est_valide,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    bcNumber: null,
    category: null,
    amount: null,
    bank: null,
    reference: null,
    slip: null,
  });

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );
  const selectedClient = useClientsStore((state) => state.selectedClient);

  const fetchAllClientPayments = useClientPaymentsStore(
    (state) => state.fetchAllClientPayments
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

  const onFormClose = () => {
    setFormData({
      id: id,
      bcNumber: bcNumber,
      category: category,
      amount: amount,
      bank: bank,
      reference: reference,
      slip: slip,
      est_valide: est_valide,
    });

    setFormErrors({
      bcNumber: null,
      category: null,
      amount: null,
      bank: null,
      reference: null,
      slip: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormErrors({
        bcNumber: null,
        category: null,
        amount: null,
        bank: null,
        reference: null,
        slip: null,
      });
      console.log("Update Form Validate");
      const response = await PaiementClientAPI.update(
        authenticatedEmploye!,
        formData.id,
        new PaiementClient(
          parseFloat(formData.amount),
          formData.bank,
          formData.reference,
          formData.category,
          parseInt(formData.bcNumber),
          formData.slip,
          formData.est_valide,
          selectedClient!.id!
        )
      );
      if (response!.status == 200) {
        onFormClose();
        toggleModal(modalLabel);
        fetchAllClientPayments(selectedClient!.id!);
        setActionResultMessage(
          "Le paiement du client a été modifié avec succès"
        );

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
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    onCategorieSelectChange,
    onFileInputChange,
    onFormClose,
    onFormSubmit,
  };
};

export default useClientPaymentUpdateForm;
