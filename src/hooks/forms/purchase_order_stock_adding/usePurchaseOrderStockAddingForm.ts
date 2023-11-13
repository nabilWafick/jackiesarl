import { useState } from "react";
import StockBonCommandeAPI from "../../../api/stock_bon_commande/stock_bon_commande.api";
import StockBonCommande from "../../../models/stock_bon_commande/stock_bon_commande.model";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import usePurchasesOrderStockStore from "../../../store/stock_bon_commande/useStockBonCommande.store";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";

interface FormData {
  bcNumber: string;
  // category: string;
  // purchasedQuantity: string;
  initialStock: string;
  // sale: string;
  // quantityAfterSelling: string;
}

interface FormErrors {
  bcNumber: string | null;
  // category: string | null;
  // purchasedQuantity: string | null;
  initialStock: string | null;
  // sale: string | null;
  // quantityAfterSelling: string | null;
}

const usePurchaseOrderStock = ({
  bcNumber,
  // category,
  // purchasedQuantity,
  initialStock,
}: // sale,
// quantityAfterSelling,
FormData) => {
  const [formData, setFormData] = useState<FormData>({
    bcNumber: bcNumber,
    //  category: category,
    //  purchasedQuantity: purchasedQuantity,
    initialStock: initialStock,
    //  sale: sale,
    //  quantityAfterSelling: quantityAfterSelling,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    bcNumber: null,
    //  category: null,
    //  purchasedQuantity: null,
    initialStock: null,
    //  sale: null,
    //  quantityAfterSelling: null,
  });

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const fetchAllPurchasesOrderStock = usePurchasesOrderStockStore(
    (state) => state.fetchAllPurchasesOrderStock
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
      bcNumber: null,
      //    category: null,
      //    purchasedQuantity: null,
      initialStock: null,
      //    sale: null,
      //    quantityAfterSelling: null,
    };

    if (!formData.bcNumber.trim()) {
      errors.bcNumber = "Le bon de commande est requis";
    } else if (isNaN(Number(formData.bcNumber.trim()))) {
      errors.bcNumber = "Le bon de commande n'est pas acceptable";
    }

    // // Validation pour category (chaîne de caractères)
    // if (!formData.category.trim()) {
    //   errors.category = "La catégorie est requise";
    // } else if (formData.category.trim().length < 3) {
    //   errors.category = "La catégorie doit comporter au moins 3 caractères.";
    // }

    // // Validation pour purchasedQuantity (chaîne de caractères)
    // if (!formData.purchasedQuantity.trim()) {
    //   errors.purchasedQuantity = "La quantité achetée est requise";
    // } else if (isNaN(Number(formData.purchasedQuantity.trim()))) {
    //   errors.purchasedQuantity = "Le montant n'est pas acceptable";
    // }

    // Validation pour initialStock (chaîne de caractères)
    if (!formData.initialStock.trim()) {
      errors.initialStock = "Le stock initial est requis";
    } else if (isNaN(Number(formData.initialStock.trim()))) {
      errors.initialStock = "Le stock initial n'est pas acceptable";
    }

    // // Validation pour sale (chaîne de caractères)
    // if (!formData.sale.trim()) {
    //   errors.sale = "La vente est requise";
    // } else if (isNaN(Number(formData.sale.trim()))) {
    //   errors.sale = "La vente n'est pas acceptable";
    // }

    // // Validation pour quantityAfterSelling (chaîne de caractères)
    // if (!formData.quantityAfterSelling.trim()) {
    //   errors.quantityAfterSelling = "Le stock actuel est requis";
    // } else if (isNaN(Number(formData.quantityAfterSelling.trim()))) {
    //   errors.quantityAfterSelling = "Le stock actuel n'est pas acceptable";
    // }

    setFormErrors(errors);

    return (
      !errors.bcNumber &&
      //  !errors.category &&
      //  !errors.purchasedQuantity &&
      !errors.initialStock
      //&&
      //  !errors.sale &&
      //  !errors.quantityAfterSelling
    );
  };

  const onFormClose = () => {
    setFormData({
      bcNumber: bcNumber,
      //  category: category,
      //  purchasedQuantity: purchasedQuantity,
      initialStock: initialStock,
      //  sale: sale,
      //  quantityAfterSelling: quantityAfterSelling,
    });
    setFormErrors({
      bcNumber: null,
      //  category: null,
      //  purchasedQuantity: null,
      initialStock: null,
      //  sale: null,
      //  quantityAfterSelling: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const errors: FormErrors = {
        bcNumber: null,
        //    category: null,
        //    purchasedQuantity: null,
        initialStock: null,
        //    sale: null,
        //    quantityAfterSelling: null,
      };

      const response = await StockBonCommandeAPI.create(
        authenticatedEmploye!,
        new StockBonCommande(
          parseInt(formData.bcNumber),
          "",
          0,
          parseFloat(formData.initialStock),
          0,
          0,
          0
        )
      );

      if (response!.status == 201) {
        onFormClose();
        toggleModal("purchase-order-stock-adding-form");
        fetchAllPurchasesOrderStock();
        setActionResultMessage(
          "Le stock de bon de commande a été ajouté avec succès"
        );
        //  console.log("Added successfuly");
        toggleModal("action-result-message");
      } else if (response!.status == 406) {
        errors.initialStock = response!.error!;
        setFormErrors(errors);
      } else if (response!.status == 405) {
        errors.initialStock = response!.error!;
        setFormErrors(errors);
      } else if (response!.status == 404) {
        errors.bcNumber = response!.error!;
        setFormErrors(errors);
      } else if (response!.status == 401) {
        onFormClose();
        toggleModal("purchase-order-stock-adding-form");
        setActionResultMessage(
          `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
        );
        toggleModal("action-result-message");
      } else if (response!.status == 403) {
        onFormClose();
        toggleModal("purchase-order-stock-adding-form");
        setActionResultMessage(response!.error);
        toggleModal("action-result-message");
      } else {
        onFormClose();
        toggleModal("purchase-order-stock-adding-form");
        setActionResultMessage(
          "Erreur lors de l'ajout du stock de bon de commande"
        );
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

export default usePurchaseOrderStock;
