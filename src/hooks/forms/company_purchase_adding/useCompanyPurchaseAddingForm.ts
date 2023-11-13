import { useState } from "react";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import AchatEntrepriseAPI from "../../../api/achat_entreprise/achat_entreprise.api";
import AchatEntreprise from "../../../models/achat_entreprise/achat_entreprise.model";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useCompanyPurchasesStore from "../../../store/achat_entreprise/useAchatEntreprise.store";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";

interface FormData {
  bcNumber: string;
  category: string;
  purchasedQuantity: string;
  amount: string;
  bank: string;
  check: string;
  slip: File | string;
}

interface FormErrors {
  bcNumber: string | null;
  category: string | null;
  bank: string | null;
  purchasedQuantity: string | null;
  amount: string | null;
  check: string | null;
  slip: string | null;
}

const useCompanyPurchaseAddingForm = ({
  bcNumber,
  category,
  bank,
  purchasedQuantity,
  amount,
  check,
  slip,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    bcNumber: bcNumber,
    category: category,
    purchasedQuantity: purchasedQuantity,
    amount: amount,
    bank: bank,
    check: check,
    slip: slip,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    bcNumber: null,
    category: null,
    purchasedQuantity: null,
    amount: null,
    bank: null,
    check: null,
    slip: null,
  });

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const fetchAllCompanyPurchases = useCompanyPurchasesStore(
    (state) => state.fetchAllCompanyPurchases
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
      purchasedQuantity: null,
      amount: null,
      bank: null,
      check: null,
      slip: null,
    };

    if (!formData.bcNumber.trim()) {
      errors.bcNumber = "Le numéro de bon de commande est requis";
    } else {
      const valeurNumériqueBcNumber = parseFloat(formData.bcNumber);
      if (isNaN(valeurNumériqueBcNumber)) {
        errors.bcNumber =
          "Le numéro de bon de commande doit être un nombre valide.";
      }
    }

    // Validation pour category (string)
    if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    } else if (formData.category.trim().length < 3) {
      errors.category = "La catégorie doit comporter au moins 3 caractères.";
    }

    // Validation pour purchasedQuantity (nombre)
    if (!formData.purchasedQuantity.trim()) {
      errors.purchasedQuantity = "La quantité achetée est requise";
    } else {
      const valeurNumeriquePurchasedQuantity = parseFloat(
        formData.purchasedQuantity
      );
      if (isNaN(valeurNumeriquePurchasedQuantity)) {
        errors.purchasedQuantity =
          "La quantité achetée doit être un nombre valide.";
      }
    }

    // Validation pour amount (nombre)
    if (!formData.amount.trim()) {
      errors.amount = "Le amount est requis";
    } else {
      const valeurNumériqueamount = parseFloat(formData.amount);
      if (isNaN(valeurNumériqueamount)) {
        errors.amount = "Le amount doit être un nombre valide.";
      }
    }

    // Validation pour bank (chaine de caractères)
    if (!formData.bank.trim()) {
      errors.bank = "La banque est requise";
    } else if (formData.bank.trim().length < 3) {
      errors.bank = "La banque doit comporter au moins 3 caratères";
    }

    // Validation pour.check (nombre)
    if (!formData.check.trim()) {
      errors.check = "Le numéro de chèque est requis";
    } else if (formData.check.trim().length < 10) {
      errors.check = "Le numéro de chèque doit comporter 10 chiffres";
    } else {
      const valeurCheck = parseFloat(formData.check);
      if (isNaN(valeurCheck)) {
        errors.check = "Le numéro de chèque doit être un nombre valide.";
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
      typeof formData.slip != "string" &&
      !allowedFileTypes.includes(formData.slip.type)
    ) {
      errors.slip = "Le type de fichier doit être PNG, JPG, JPEG, PDF ou Word.";
    }

    setFormErrors(errors);

    return (
      !errors.bcNumber &&
      !errors.bank &&
      !errors.purchasedQuantity &&
      !errors.amount &&
      !errors.check &&
      !errors.slip
    );
  };

  const onFormClose = () => {
    setFormData({
      bcNumber: bcNumber,
      category: category,
      purchasedQuantity: purchasedQuantity,
      amount: amount,
      bank: bank,
      check: check,
      slip: slip,
    });

    setFormErrors({
      bcNumber: null,
      category: null,
      purchasedQuantity: null,
      amount: null,
      bank: null,
      check: null,
      slip: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const errors: FormErrors = {
        bcNumber: null,
        category: null,
        purchasedQuantity: null,
        amount: null,
        bank: null,
        check: null,
        slip: null,
      };

      const response = await AchatEntrepriseAPI.create(
        authenticatedEmploye!,
        new AchatEntreprise(
          parseFloat(formData.bcNumber),
          formData.category,
          parseFloat(formData.purchasedQuantity),
          parseFloat(formData.amount),
          formData.bank,
          parseInt(formData.check),
          formData.slip
        )
      );

      if (response!.status == 201) {
        onFormClose();
        toggleModal("company-purchase-adding-form");
        fetchAllCompanyPurchases();
        setActionResultMessage(
          "L'achat de l'entreprise a été ajouté avec succès"
        );
        toggleModal("action-result-message");
      } else if (response!.status == 401) {
        onFormClose();
        toggleModal("company-purchase-adding-form");
        setActionResultMessage(
          `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
        );
        toggleModal("action-result-message");
      } else if (response!.status == 403) {
        onFormClose();
        toggleModal("company-purchase-adding-form");
        setActionResultMessage(response!.error);
        toggleModal("action-result-message");
      } else if (response!.status == 406) {
        errors.bcNumber = response!.error!;
        setFormErrors(errors);
      } else {
        onFormClose();
        toggleModal("company-purchase-adding-form");
        setActionResultMessage(
          "Erreur lors de l'ajout de l'achat de l'entreprise"
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

export default useCompanyPurchaseAddingForm;
