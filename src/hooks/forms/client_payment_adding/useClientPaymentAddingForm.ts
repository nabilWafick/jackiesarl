import { useState } from "react";
import PaiementClientAPI from "../../../api/paiement_client/paiement_client.api";
import PaiementClient from "../../../models/paiement_client/paiement.model";
import useClientsStore from "../../../store/clients/useClients.store";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useClientPaymentsStore from "../../../store/paiement_client/usePaiementClient.store";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";

interface FormData {
  bcNumber: string;
  //  category: string;
  amount: string;
  bank: string;
  reference: string;
  slip: File | string;
}

interface FormErrors {
  bcNumber: string | null;
  //  category: string | null;
  bank: string | null;
  amount: string | null;
  reference: string | null;
  slip: string | null;
}

const useClientPaymentAddingForm = ({
  bcNumber,
  //  category,
  bank,
  amount,
  reference,
  slip,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    bcNumber: bcNumber,
    //    category: category,
    amount: amount,
    bank: bank,
    reference: reference,
    slip: slip,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    bcNumber: null,
    //   category: null,
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
      //     category: null,
      amount: null,
      bank: null,
      reference: null,
      slip: null,
    };

    if (!formData.bcNumber.trim()) {
      errors.bcNumber = "Le bon de commande est requis";
    } else {
      if (!/^\d*$/.test(formData.bcNumber)) {
        errors.bcNumber = "Le bon de commande doit être un nombre valide.";
      }
    }

    /* if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    } else if (formData.category.trim().length < 3) {
      errors.category = "La catégorie doit contenir au moins 3 caractères.";
    } */

    if (!formData.amount.trim()) {
      errors.amount = "Le montant est requis";
    } else {
      if (!/^\d*$/.test(formData.amount)) {
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
      "image/jpeg",
      "application/pdf",
    ];
    if (
      typeof formData.slip != "string" &&
      !allowedFileTypes.includes(formData.slip.type)
    ) {
      errors.slip = "Le type de fichier doit être PNG, JPG, JPEG ou PDF.";
    }

    setFormErrors(errors);

    return (
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
      bcNumber: bcNumber,
      //    category: category,
      amount: amount,
      bank: bank,
      reference: reference,
      slip: slip,
    });

    setFormErrors({
      bcNumber: null,
      //    category: null,
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
        bcNumber: null,
        // category: null,
        amount: null,
        bank: null,
        reference: null,
        slip: null,
      };

      const response = await PaiementClientAPI.create(
        authenticatedEmploye!,
        new PaiementClient(
          parseFloat(formData.amount),
          formData.bank,
          formData.reference,
          //   formData.category,
          "",
          parseInt(formData.bcNumber),
          formData.slip,
          0,
          selectedClient!.id!
        )
      );
      if (response!.status == 201) {
        onFormClose();
        toggleModal("client-payment-adding-form");
        fetchAllClientPayments(selectedClient!.id!);
        setActionResultMessage(
          "Le paiement du client a été ajouté avec succès"
        );
        //    console.log("Added successfuly");
        toggleModal("action-result-message");
      } else if (response!.status == 404) {
        errors.bcNumber = response!.error!;
        setFormErrors(errors);
      } else if (response!.status == 401) {
        onFormClose();
        toggleModal("client-payment-adding-form");
        setActionResultMessage(
          `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
        );
        toggleModal("action-result-message");
      } else if (response!.status == 403) {
        onFormClose();
        toggleModal("client-payment-adding-form");
        setActionResultMessage(response!.error);
        toggleModal("action-result-message");
      } else {
        onFormClose();
        toggleModal("client-payment-adding-form");
        setActionResultMessage("Erreur lors de l'ajout du paiement du client");
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

export default useClientPaymentAddingForm;
