import { useState } from "react";
import StockCamionAPI from "../../../api/stock_camion/stock_camion.api";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import StockCamion from "../../../models/stock_camion/stock_camion.model";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import useTrucksStockStore from "../../../store/stock_camion/useStockCamion.store";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";

interface FormData {
  truckNumber: string;
  category: string;
  driverNumber: string;
  bcNumber: string;
  quantity: string;
}

interface FormErrors {
  truckNumber: string | null;
  category: string | null;
  driverNumber: string | null;
  bcNumber: string | null;
  quantity: string | null;
}

const useTruckStockAddingForm = ({
  truckNumber,
  category,
  driverNumber,
  bcNumber,
  quantity,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    truckNumber: truckNumber,
    category: category,
    driverNumber: driverNumber,
    bcNumber: bcNumber,
    quantity: quantity,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    truckNumber: null,
    category: null,
    driverNumber: null,
    bcNumber: null,
    quantity: null,
  });

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const fetchAllTruckStock = useTrucksStockStore(
    (state) => state.fetchAllTruckStock
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
      truckNumber: null,
      category: null,
      driverNumber: null,
      bcNumber: null,
      quantity: null,
    };

    // Validation pour truckNumber (chaîne de caractères avec au moins 8 caractères)
    if (
      !formData.truckNumber.trim() ||
      formData.truckNumber.trim().length < 8
    ) {
      errors.truckNumber =
        "Le numéro du camion doit comporter au moins 8 caractères.";
    }

    // Validation pour category (chaîne de caractères)
    if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    } else if (formData.category.trim().length < 3) {
      errors.category = "La catégorie doit comporter au moins 3 caractères";
    }

    // Validation pour driverNumber (numéro de téléphone au format Bénin)
    const beninPhoneRegex = /^(\+229|00229)[45679]\d{7}$/; // Format de numéro Bénin : commence par 229 et est suivi de 8 chiffres
    if (!formData.driverNumber.trim()) {
      errors.driverNumber = "Le numéro de téléphone est requis";
    } else if (!beninPhoneRegex.test(formData.driverNumber.trim())) {
      errors.driverNumber =
        "Le numéro de téléphone doit être au format du Bénin";
    }

    // Validation pour bcNumber (nombre)
    if (!formData.bcNumber.trim()) {
      errors.bcNumber = "Le bon de commande est requis";
    } else if (!/^\d*$/.test(formData.bcNumber)) {
      errors.bcNumber = "Le bon de commande doit être un nombre valide";
    }

    // Validation pour quantity (nombre)
    if (!formData.quantity.trim()) {
      errors.quantity = "La quantité est requise";
    } else if (!/^\d*$/.test(formData.quantity)) {
      errors.quantity = "La quantité doit être un nombre valide";
    }

    setFormErrors(errors);

    return (
      !errors.truckNumber &&
      !errors.category &&
      !errors.driverNumber &&
      !errors.bcNumber &&
      !errors.quantity
    );
  };

  const onFormClose = () => {
    setFormData({
      truckNumber: truckNumber,
      category: category,
      driverNumber: driverNumber,
      bcNumber: bcNumber,
      quantity: quantity,
    });
    setFormErrors({
      truckNumber: null,
      category: null,
      driverNumber: null,
      bcNumber: null,
      quantity: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormErrors({
        truckNumber: null,
        category: null,
        driverNumber: null,
        bcNumber: null,
        quantity: null,
      });

      const response = await StockCamionAPI.create(
        authenticatedEmploye!,
        new StockCamion(
          formData.truckNumber,
          formData.category,
          formData.driverNumber,
          parseInt(formData.bcNumber),
          parseFloat(formData.quantity)
        )
      );

      if (response!.status == 201) {
        onFormClose();
        toggleModal("truck-stock-adding-form");
        fetchAllTruckStock();
        setActionResultMessage("Le stock de camion a été ajouté avec succès");
        toggleModal("action-result-message");
      } else if (response!.status == 401) {
        onFormClose();
        toggleModal("truck-stock-adding-form");
        setActionResultMessage(
          `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
        );
        toggleModal("action-result-message");
      } else if (response!.status == 403) {
        onFormClose();
        toggleModal("truck-stock-adding-form");
        setActionResultMessage(response!.error);
        toggleModal("action-result-message");
      } else {
        onFormClose();
        toggleModal("truck-stock-adding-form");
        setActionResultMessage("Erreur lors de l'ajout du stock de camion");
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

export default useTruckStockAddingForm;
