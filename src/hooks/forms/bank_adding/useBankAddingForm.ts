import { useState } from "react";
import SoldeCourant from "../../../models/solde_courant/solde_courant.model";
import SoldeCourantAPI from "../../../api/solde_courant/solde_courant.api";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import useSoldeCourantStore from "../../../store/solde_courant/useSoldeCourant.store";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";

interface FormData {
  bank: string;
  accountNumber: string;
  currentBalence: string;
}

interface FormErrors {
  bank: string | null;
  accountNumber: string | null;
  currentBalence: string | null;
}

const useBankAddingForm = ({
  bank,
  accountNumber,
  currentBalence,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    bank: bank,
    accountNumber: accountNumber,
    currentBalence: currentBalence,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    bank: null,
    accountNumber: null,
    currentBalence: null,
  });

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );
  const fetchAllSoldeCourant = useSoldeCourantStore(
    (state) => state.fetchAllSoldeCourant
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

  const validateForm = () => {
    const errors: FormErrors = {
      bank: null,
      accountNumber: null,
      currentBalence: null,
    };

    if (!formData.bank.trim()) {
      errors.bank = "La banque est requise";
    } else if (formData.bank.length < 3) {
      errors.bank = "Le nom de la banque doit comporter au moins 3 lettres.";
    }

    if (!formData.accountNumber.trim()) {
      errors.accountNumber = "Le numéro de compte est requis";
    } else if (!/^\d{10}$/.test(formData.accountNumber)) {
      errors.accountNumber =
        "Le numéro de compte doit comporter exactement 10 chiffres.";
    }

    if (!formData.currentBalence.trim()) {
      errors.currentBalence = "Le solde actuel est requis";
    } else {
      const numericValue = parseFloat(formData.currentBalence);
      if (isNaN(numericValue)) {
        errors.currentBalence = "Le solde actuel doit être un nombre valide.";
      }
    }

    setFormErrors(errors);

    return !errors.bank && !errors.accountNumber && !errors.currentBalence;
  };

  const onFormClose = () => {
    setFormData({
      bank: bank,
      accountNumber: accountNumber,
      currentBalence: currentBalence,
    });
    setFormErrors({
      bank: null,
      accountNumber: null,
      currentBalence: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const response = await SoldeCourantAPI.create(
        authenticatedEmploye!,
        new SoldeCourant(
          formData.bank,
          parseFloat(formData.accountNumber),
          parseFloat(formData.currentBalence)
        )
      );

      if (response!.status == 201) {
        onFormClose();
        toggleModal("bank-adding-form");
        fetchAllSoldeCourant();
        setActionResultMessage("La banque a été ajoutée avec succès");
        toggleModal("action-result-message");
      } else if (response!.status == 401) {
        onFormClose();
        toggleModal("bank-adding-form");
        setActionResultMessage(
          `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
        );
        toggleModal("action-result-message");
      } else if (response!.status == 403) {
        onFormClose();
        toggleModal("bank-adding-form");
        setActionResultMessage(response!.error);
        toggleModal("action-result-message");
      } else if (response!.status == 406) {
        onFormClose();
        toggleModal("bank-adding-form");
        setActionResultMessage(response!.error);
        toggleModal("action-result-message");
      } else {
        onFormClose();
        toggleModal("bank-adding-form");
        setActionResultMessage("Erreur lors de l'ajout de la banque");
        toggleModal("action-result-message");
      }
    }
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    onCategorieSelectChange,
    onFormClose,
    onFormSubmit,
  };
};

export default useBankAddingForm;
