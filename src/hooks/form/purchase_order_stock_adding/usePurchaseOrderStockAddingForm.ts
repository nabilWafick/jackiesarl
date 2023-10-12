import { useState } from "react";

interface FormData {
  bcNumber: string;
  category: string;
  purchasedQuantity: string;
  quantityBeforeSelling: string;
  sale: string;
  quantityAfterSelling: string;
}

interface FormErrors {
  bcNumber: string | null;
  category: string | null;
  purchasedQuantity: string | null;
  quantityBeforeSelling: string | null;
  sale: string | null;
  quantityAfterSelling: string | null;
}

const usePurchaseOrderStock = ({
  bcNumber,
  category,
  purchasedQuantity,
  quantityBeforeSelling,
  sale,
  quantityAfterSelling,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    bcNumber: bcNumber,
    category: category,
    purchasedQuantity: purchasedQuantity,
    quantityBeforeSelling: quantityBeforeSelling,
    sale: sale,
    quantityAfterSelling: quantityAfterSelling,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    bcNumber: null,
    category: null,
    purchasedQuantity: null,
    quantityBeforeSelling: null,
    sale: null,
    quantityAfterSelling: null,
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
      quantityBeforeSelling: null,
      sale: null,
      quantityAfterSelling: null,
    };

    if (!formData.bcNumber.trim()) {
      errors.bcNumber = "Le bon de commande est requis";
    } else if (isNaN(Number(formData.bcNumber.trim()))) {
      errors.bcNumber = "Le bon de commande n'est pas acceptable";
    }

    // Validation pour category (chaîne de caractères)
    if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    } else if (formData.category.trim().length < 3) {
      errors.category = "La catégorie doit comporter au moins 3 caractères.";
    }

    // Validation pour purchasedQuantity (chaîne de caractères)
    if (!formData.purchasedQuantity.trim()) {
      errors.purchasedQuantity = "La quantité achetée est requise";
    } else if (isNaN(Number(formData.purchasedQuantity.trim()))) {
      errors.purchasedQuantity = "Le montant n'est pas acceptable";
    }

    // Validation pour quantityBeforeSelling (chaîne de caractères)
    if (!formData.quantityBeforeSelling.trim()) {
      errors.quantityBeforeSelling = "Le stock initial est requis";
    } else if (isNaN(Number(formData.quantityBeforeSelling.trim()))) {
      errors.quantityBeforeSelling = "Le stock initial n'est pas acceptable";
    }

    // Validation pour sale (chaîne de caractères)
    if (!formData.sale.trim()) {
      errors.sale = "La vente est requise";
    } else if (isNaN(Number(formData.sale.trim()))) {
      errors.sale = "La vente n'est pas acceptable";
    }

    // Validation pour quantityAfterSelling (chaîne de caractères)
    if (!formData.quantityAfterSelling.trim()) {
      errors.quantityAfterSelling = "Le stock actuel est requis";
    } else if (isNaN(Number(formData.quantityAfterSelling.trim()))) {
      errors.quantityAfterSelling = "Le stock actuel n'est pas acceptable";
    }

    setFormErrors(errors);

    return (
      !errors.bcNumber &&
      !errors.category &&
      !errors.purchasedQuantity &&
      !errors.quantityBeforeSelling &&
      !errors.sale &&
      !errors.quantityAfterSelling
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
