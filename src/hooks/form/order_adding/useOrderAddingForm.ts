import { useState } from "react";

interface FormData {
  firstname: string;
  lastname: string;
  quantity: string;
  destination: string;
  orderDate: Date | null;
  deliveryDate: Date | null;
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
  const onDateInputChange = (name: string, dateValue: Date | null) => {
    setFormData({
      ...formData,
      [name]: dateValue,
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
    } else if (formData.firstname.trim().length < 3) {
      errors.firstname = "Le nom doit comporter au moins 3 caractères.";
    }

    // Validation pour lastname (chaîne de caractères)
    if (!formData.lastname.trim()) {
      errors.lastname = "Le nom est requis";
    } else if (formData.lastname.trim().length < 3) {
      errors.lastname = "Le nom doit comporter au moins 3 caractères.";
    }

    // Validation pour quantity (chaîne de caractères)
    if (!formData.quantity.trim()) {
      errors.quantity = "La quantité est requise";
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
      const orderDate = new Date(formData.orderDate);
      const deliveryDate = new Date(formData.deliveryDate);
      if (orderDate >= deliveryDate) {
        errors.orderDate =
          "La date de commande doit être antérieure à la date de livraison.";
        errors.deliveryDate =
          "La date de livraison doit être postérieure à la date de commande.";
      }
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
    onDateInputChange,
    onFormSubmit,
  };
};

export default useOrderAddingForm;
