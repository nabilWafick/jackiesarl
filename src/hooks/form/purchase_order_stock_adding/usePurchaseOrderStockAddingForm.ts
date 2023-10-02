import { useState } from "react";

interface FormData {
  bcNumber: string;
  category: string;
  purchasedQuantity: string;
  initialStock: string;
  sale: string;
  currentStock: string;
}

interface FormErrors {
  bcNumber: string | null;
  category: string | null;
  purchasedQuantity: string | null;
  initialStock: string | null;
  sale: string | null;
  currentStock: string | null;
}

const usePurchaseOrderStock = ({
  bcNumber,
  category,
  purchasedQuantity,
  initialStock,
  sale,
  currentStock,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    bcNumber: bcNumber,
    category: category,
    purchasedQuantity: purchasedQuantity,
    initialStock: initialStock,
    sale: sale,
    currentStock: currentStock,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    bcNumber: null,
    category: null,
    purchasedQuantity: null,
    initialStock: null,
    sale: null,
    currentStock: null,
  });

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
      category: null,
      purchasedQuantity: null,
      initialStock: null,
      sale: null,
      currentStock: null,
    };

    if (!formData.bcNumber.trim()) {
      errors.bcNumber = "Le bon de commande n'est pas acceptable";
    }

    if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    }

    if (!formData.purchasedQuantity.trim()) {
      errors.purchasedQuantity = "Le montant n'est pas acceptable";
    }

    if (!formData.initialStock.trim()) {
      errors.initialStock = "Le stock initial n'est pas acceptable";
    }

    if (!formData.sale.trim()) {
      errors.sale = "La vente n'est pas acceptable";
    }

    if (!formData.currentStock.trim()) {
      errors.currentStock = "La stock actuel n'est pas acceptable";
    }

    setFormErrors(errors);

    return (
      !errors.bcNumber &&
      !errors.category &&
      !errors.purchasedQuantity &&
      !errors.initialStock &&
      !errors.sale &&
      !errors.currentStock
    );
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Données du formulaire soumises :", formData);
    }
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    onFormSubmit,
  };
};

export default usePurchaseOrderStock;
