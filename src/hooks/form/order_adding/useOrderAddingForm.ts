import { useState } from "react";

interface FormData {
  firstname: string;
  lastname: string;
  quantity: string;
  destination: string;
  orderDate: number;
  deliveryDate: number;
  category: string;
}

interface FormErrors {
  firstname: string | null;
  lastname: string | null;
  quantity: string | null;
  destination: string | null;
  orderDate: string | null;
  deliveryDate: string | null;
  category: string | null;
}

const useOrderAddingForm = ({
  firstname,
  lastname,
  quantity,
  destination,
  orderDate,
  deliveryDate,
  category,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    firstname: firstname,
    lastname: lastname,
    quantity: quantity,
    destination: destination,
    orderDate: orderDate,
    deliveryDate: deliveryDate,
    category: category,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstname: null,
    lastname: "",
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
      firstname: null,
      lastname: null,
      quantity: null,
      destination: null,
      orderDate: null,
      deliveryDate: null,
      category: null,
    };

    if (!formData.firstname.trim()) {
      errors.firstname = "Le nom est requis";
    }

    if (!formData.lastname.trim()) {
      errors.lastname = "Le nom est requis";
    }

    if (!formData.quantity.trim()) {
      errors.quantity = "Le quantité est requis";
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
      !errors.firstname &&
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
