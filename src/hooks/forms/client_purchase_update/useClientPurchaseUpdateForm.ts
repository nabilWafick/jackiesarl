import { useState } from "react";
import AchatClientAPI from "../../../api/achat_client/achat_client.api";
import AchatClient from "../../../models/achat_client/achat_client.model";
import useClientsStore from "../../../store/clients/useClients.store";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import useClientPurchasesStore from "../../../store/achat_client/useAchatClient.store";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";

interface FormData {
  id: number;
  quantity: string;
  // category: string;
  amount: string;
  ctpNumber: string;
  slip: File | string;
  bcNumber: string;
}

interface FormErrors {
  quantity: string | null;
  //  category: string | null;
  amount: string | null;
  ctpNumber: string | null;
  slip: string | null;
  bcNumber: string | null;
}

const useClientPurchaseUpdateForm = (
  { id, quantity, amount, ctpNumber, slip, bcNumber }: FormData,
  modalLabel: string
) => {
  const [formData, setFormData] = useState<FormData>({
    id: id,
    quantity: quantity,
    //  category: category,
    amount: amount,
    ctpNumber: ctpNumber,
    slip: slip,
    bcNumber: bcNumber,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    quantity: null,
    //   category: null,
    amount: null,
    ctpNumber: null,
    slip: null,
    bcNumber: null,
  });

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );
  const selectedClient = useClientsStore((state) => state.selectedClient);

  const fetchAllClientPurchases = useClientPurchasesStore(
    (state) => state.fetchAllClientPurchases
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

  const validateForm = () => {
    const errors: FormErrors = {
      quantity: null,
      //  category: null,
      amount: null,
      ctpNumber: null,
      slip: null,
      bcNumber: null,
    };

    if (!formData.quantity.trim()) {
      errors.quantity = "La quantité est requise";
    } else {
      if (!/^\d*$/.test(formData.quantity)) {
        errors.quantity = "La quantité doit être un nombre valide.";
      }
    }

    // Validation pour category (string)

    /*  if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    } else if (formData.category.trim().length < 3) {
      errors.category = "La catégorie doit comporter au moins 3 caractères.";
    }
    */

    // Validation pour amount (number)
    if (!formData.amount.trim()) {
      errors.amount = "Le montant est requis";
    } else {
      if (!/^\d*$/.test(formData.amount)) {
        errors.amount = "Le montant doit être un nombre valide.";
      }
    }

    // Validation pour ctpNumber (string)
    if (!formData.ctpNumber.trim()) {
      errors.ctpNumber = "Le numéro CTP est requis";
    } else if (formData.ctpNumber.trim().length < 3) {
      errors.ctpNumber = "Le numéro CTP doit comporter au moins 3 caractères.";
    }

    // Validation pour slip (file)
    /* if (!formData.slip) {
      errors.slip = "Le bordereau est requis";
    } else {*/
    // Vérifiez le type du fichier
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
      errors.slip = "Le type de fichier doit être PNG, JPG, JPEG ou PDF";
    }
    // }

    // Validation pour bcNumber (number)
    if (!formData.bcNumber.trim()) {
      errors.bcNumber = "Le bon de commande est requis";
    } else {
      const numericBcNumber = parseFloat(formData.bcNumber);
      if (isNaN(numericBcNumber)) {
        errors.bcNumber = "Le bon de commande doit être un nombre valide.";
      }
    }

    setFormErrors(errors);

    return (
      !errors.quantity &&
      // !errors.category &&
      !errors.amount &&
      !errors.ctpNumber &&
      !errors.slip &&
      !errors.bcNumber
    );
  };

  const onFormClose = () => {
    setFormData({
      id: id,
      quantity: quantity,
      //   category: category,
      amount: amount,
      ctpNumber: ctpNumber,
      slip: slip,
      bcNumber: bcNumber,
    });

    setFormErrors({
      quantity: null,
      //   category: null,
      amount: null,
      ctpNumber: null,
      slip: null,
      bcNumber: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const errors: FormErrors = {
        quantity: null,
        //   category: null,
        amount: null,
        ctpNumber: null,
        slip: null,
        bcNumber: null,
      };

      console.log("formData.id", formData.id);
      const response = await AchatClientAPI.update(
        authenticatedEmploye!,
        formData.id,
        new AchatClient(
          parseInt(formData.quantity),
          //  formData.category,
          "",
          parseFloat(formData.amount),
          formData.ctpNumber,
          formData.slip,
          parseInt(formData.bcNumber),
          selectedClient!.id!
        )
      );
      if (response!.status == 200) {
        onFormClose();
        toggleModal(modalLabel);
        fetchAllClientPurchases(selectedClient!.id!);
        setActionResultMessage("L'achat du client a été modifié avec succès");
        toggleModal("action-result-message");
      } else if (response!.status == 406) {
        errors.quantity = response!.error!;
        setFormErrors(errors);
      } else if (response!.status == 404) {
        errors.bcNumber = response!.error!;
        setFormErrors(errors);
      } else if (response!.status == 400) {
        onFormClose();
        toggleModal(modalLabel);
        setActionResultMessage(response!.error!);
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
        setActionResultMessage(response!.error!);
        toggleModal("action-result-message");
      } else {
        onFormClose();
        toggleModal(modalLabel);
        setActionResultMessage(
          "Erreur lors de la modification de l'achat du client"
        );
        toggleModal("action-result-message");
      }
    }
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    onFileInputChange,
    onFormClose,
    onFormSubmit,
  };
};

export default useClientPurchaseUpdateForm;
