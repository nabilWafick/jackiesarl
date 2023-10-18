import { useState } from "react";
import Brouillard from "../../../models/brouillard/brouillard.model";
import BrouillardAPI from "../../../api/brouillard/brouillard.api";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";

interface FormData {
  deposit: string;
  currentStock: string;
  managerName: string;
  managerNumber: string;
}

interface FormErrors {
  deposit: string | null;
  currentStock: string | null;
  managerName: string | null;
  managerNumber: string | null;
}

const useFogAddingForm = ({
  deposit,
  currentStock,
  managerName,
  managerNumber,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    deposit: deposit,
    currentStock: currentStock,
    managerName: managerName,
    managerNumber: managerNumber,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    deposit: null,
    currentStock: null,
    managerName: null,
    managerNumber: null,
  });

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
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
      deposit: null,
      currentStock: null,
      managerName: null,
      managerNumber: null,
    };

    if (!formData.deposit.trim()) {
      errors.deposit = "Le nom du dépôt est requis";
    } else if (formData.deposit.trim().length < 3) {
      errors.deposit = "Le nom du dépôt doit comporter au moins 3 caractères.";
    }

    if (!formData.currentStock.trim()) {
      errors.currentStock = "Le stock actuel n'est pas acceptable";
    } else {
      const valeurNumeriqueCurrentStock = parseFloat(formData.currentStock);
      if (isNaN(valeurNumeriqueCurrentStock)) {
        errors.currentStock = "Le stock actuel doit être un nombre valide.";
      }
    }

    // Validation pour managerName (chaîne de caractères)
    if (!formData.managerName.trim()) {
      errors.managerName = "Le nom du gérant est requis";
    } else if (formData.managerName.trim().length < 3) {
      errors.managerName =
        "Le nom du gérant doit comporter au moins 3 caractères.";
    }

    const beninPhoneRegex = /^(\+229|00229)[45679]\d{7}$/; // Format de numéro
    // Validation pour managerNumber (nombre)
    if (!formData.managerNumber.trim()) {
      errors.managerNumber = "Le numéro du gérant n'est pas acceptable";
    } else {
      if (!beninPhoneRegex.test(formData.managerNumber.trim())) {
        errors.managerNumber =
          "Le numéro du gérant doit être un nombre valide.";
      }
    }

    setFormErrors(errors);

    return (
      !errors.deposit &&
      !errors.currentStock &&
      !errors.managerName &&
      !errors.managerNumber
    );
  };

  const onFormClose = () => {
    setFormData({
      deposit: deposit,
      currentStock: currentStock,
      managerName: managerName,
      managerNumber: managerNumber,
    });
    setFormErrors({
      deposit: null,
      currentStock: null,
      managerName: null,
      managerNumber: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormErrors({
        deposit: null,
        currentStock: null,
        managerName: null,
        managerNumber: null,
      });

      const response = await BrouillardAPI.create(
        new Brouillard(
          formData.deposit,
          parseFloat(formData.currentStock),
          formData.managerName,
          formData.managerNumber
        )
      );

      if (response!.status == 201) {
        onFormClose();
        toggleModal("fog-adding-form");
        setActionResultMessage("Le dépôt a été ajouté avec succès");
        console.log("Added successfuly");
        toggleModal("action-result-message");
      } else {
        onFormClose();
        toggleModal("fog-adding-form");
        setActionResultMessage("Erreur lors de l'ajout du dépôt");
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
