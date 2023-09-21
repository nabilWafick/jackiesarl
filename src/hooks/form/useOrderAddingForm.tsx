import { useState } from "react";

interface FormData {
  fullname: string;
  quantity: number;
  destination: string;
  orderDate: number;
  deliveryDate: number;
  category: string;
}

interface FormErrors {
  fullname: string | null;
  quantity: string | null;
  destination: string | null;
  orderDate: string | null;
  deliveryDate: string | null;
  category: string | null;
}

const useOrderAddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    quantity: 0,
    destination: "",
    orderDate: Date.now(),
    deliveryDate: Date.now(),
    category: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    fullname: null,
    quantity: null,
    destination: null,
    orderDate: null,
    deliveryDate: null,
    category: null,
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
      fullname: null,
      quantity: null,
      destination: null,
      orderDate: null,
      deliveryDate: null,
      category: null,
    };

    if (!formData.fullname.trim()) {
      errors.fullname = "Le nom est requis";
    }

    if (formData.quantity == 0) {
      errors.quantity = "Le quantité n'est pas acceptable";
    }

    if (!formData.destination.trim()) {
      errors.destination = "La destination est requise";
    }

    if (formData.orderDate == 0) {
      errors.orderDate = "La date de commande est requise";
    }

    if (formData.deliveryDate == 0) {
      errors.deliveryDate = "La date de livraison est requise";
    }

    if (!formData.category.trim()) {
      errors.category = "La catégorie est requise";
    }

    setFormErrors(errors);

    return (
      !errors.fullname &&
      !errors.quantity &&
      !errors.destination &&
      !errors.orderDate &&
      !errors.deliveryDate &&
      !errors.category
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

export default useOrderAddingForm;
