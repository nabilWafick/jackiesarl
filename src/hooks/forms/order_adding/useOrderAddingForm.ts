import { useState } from "react";
import CommandesAPI from "../../../api/commandes/commandes.api";
import Commandes from "../../../models/commandes/commandes.model";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useClientsStore from "../../../store/clients/useClients.store";
import useCommandesStore from "../../../store/commandes/useCommandes.store";
import { Moment } from "moment";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";

interface FormData {
  clientName: string;
  quantity: string;
  destination: string;
  orderDate: Date | Moment | undefined;
  deliveryDate: Date | Moment | undefined;
  category: string;
}

interface FormErrors {
  clientName: string | null;
  quantity: string | null;
  destination: string | null;
  orderDate: string | null;
  deliveryDate: string | null;
  category: string | null;
}

const useOrderAddingForm = ({
  clientName,
  quantity,
  destination,
  orderDate,
  deliveryDate,
  category,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    clientName: clientName,
    quantity: quantity,
    destination: destination,
    orderDate: orderDate,
    deliveryDate: deliveryDate,
    category: category,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    clientName: null,
    quantity: null,
    destination: null,
    orderDate: null,
    deliveryDate: null,
    category: null,
  });

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const orderClient = useClientsStore((state) => state.orderClient);
  const setOrderClient = useClientsStore((state) => state.setOrderClient);
  const fetchAllClientsOrders = useCommandesStore(
    (state) => state.fetchAllClientsOrders
  );
  const searchClients = useClientsStore((state) => state.searchClients);
  const refreshSearchedClients = useClientsStore(
    (state) => state.refreshSearchedClients
  );
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

  const onOrderDateInputChange = (dateValue: Date | Moment) => {
    setFormData({
      ...formData,
      orderDate: dateValue,
    });
  };

  const onDeliveryDateInputChange = (dateValue: Date | Moment) => {
    setFormData({
      ...formData,
      deliveryDate: dateValue,
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
      clientName: null,
      quantity: null,
      destination: null,
      orderDate: null,
      deliveryDate: null,
      category: null,
    };

    // Validation pour lastname (chaîne de caractères)
    if (!formData.clientName.trim()) {
      errors.clientName = "Le nom est requis";
    }

    // Validation pour quantity (chaîne de caractères)
    if (!formData.quantity.trim()) {
      errors.quantity = "La quantité est requise";
    } else {
      if (!/^\d*$/.test(formData.quantity)) {
        errors.quantity = "La quantité doit être un nombre";
      }
    }

    // Validation pour destination (chaîne de caractères)
    if (!formData.destination.trim()) {
      errors.destination = "La destination est requise";
    } else if (formData.destination.trim().length < 3) {
      errors.destination =
        "La destination doit comporter au moins 3 caractères.";
    }

    // Validation pour orderDate (Date)
    if (!formData.orderDate) {
      errors.orderDate = "La date de commande est requise";
    }

    // Validation pour deliveryDate (Date)
    if (!formData.deliveryDate) {
      errors.deliveryDate = "La date de livraison est requise";
    }

    // Validation pour category (chaîne de caractères)
    if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    } else if (formData.category.trim().length < 3) {
      errors.category = "La catégorie doit comporter au moins 3 caractères.";
    }

    // Validation de la relation entre orderDate et deliveryDate
    if (formData.orderDate && formData.deliveryDate) {
      const orderDate = new Date(formData.orderDate.toLocaleString());
      const deliveryDate = new Date(formData.deliveryDate.toLocaleString());
      if (orderDate >= deliveryDate) {
        errors.orderDate =
          "La date de commande doit être antérieure à la date de livraison.";
        errors.deliveryDate =
          "La date de livraison doit être postérieure à la date de commande.";
      }
    }

    if (!orderClient) {
      errors.clientName = "Le nom du client est requis";
    }

    setFormErrors(errors);

    return (
      !errors.clientName &&
      !errors.quantity &&
      !errors.destination &&
      !errors.orderDate &&
      !errors.deliveryDate &&
      !errors.category
    );
  };

  const onFormClose = () => {
    setFormData({
      clientName: clientName,
      quantity: quantity,
      destination: destination,
      orderDate: orderDate,
      deliveryDate: deliveryDate,
      category: category,
    });
    setFormErrors({
      clientName: null,
      quantity: null,
      destination: null,
      orderDate: null,
      deliveryDate: null,
      category: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormErrors({
        clientName: null,
        quantity: null,
        destination: null,
        orderDate: null,
        deliveryDate: null,
        category: null,
      });

      const response = await CommandesAPI.create(
        authenticatedEmploye!,
        new Commandes(
          formData.category,
          parseFloat(formData.quantity),
          formData.destination,
          new Date(formData.orderDate!.toLocaleString()!),
          new Date(formData.deliveryDate!.toLocaleString()!),
          0,
          orderClient!.id!
        )
      );
      if (response!.status == 201) {
        onFormClose();
        toggleModal("order-adding-form");
        fetchAllClientsOrders();
        setActionResultMessage("La commande a été ajoutée avec succès");

        toggleModal("action-result-message");
      } else if (response!.status == 401) {
        onFormClose();
        toggleModal("order-adding-form");
        setActionResultMessage(
          `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
        );
        toggleModal("action-result-message");
      } else if (response!.status == 403) {
        onFormClose();
        toggleModal("order-adding-form");
        setActionResultMessage(response!.error);
        toggleModal("action-result-message");
      } else {
        onFormClose();
        toggleModal("order-adding-form");
        setActionResultMessage("Erreur lors de l'ajout de la commande");
        toggleModal("action-result-message");
      }
    }

    setOrderClient(undefined);
    refreshSearchedClients();
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    updateClientNameFormData,
    onClientNameInputDataChange,
    onOrderDateInputChange,
    onDeliveryDateInputChange,
    onCategorieSelectChange,
    onFormClose,
    onFormSubmit,
  };
};

export default useOrderAddingForm;
