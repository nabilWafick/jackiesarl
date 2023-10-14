import { useState } from "react";
import ClientsAPI from "../../../api/clients/clients.api";
import Clients from "../../../models/clients/clients.model";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";

interface FormData {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  ifuNumber: string;
  email: string | undefined;
}

interface FormErrors {
  firstname: string | null;
  lastname: string | null;
  phoneNumber: string | null;
  ifuNumber: string | null;
  email: string | null;
}

const useClientAddingForm = ({
  firstname,
  lastname,
  phoneNumber,
  ifuNumber,
  email,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    firstname: firstname,
    lastname: lastname,
    phoneNumber: phoneNumber,
    ifuNumber: ifuNumber,
    email: email,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstname: null,
    lastname: null,
    phoneNumber: null,
    ifuNumber: null,
    email: null,
  });

  // const [isLoading, setIsLoading] = useState<boolean>(false);

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
      firstname: null,
      lastname: null,
      phoneNumber: null,
      ifuNumber: null,
      email: null,
    };

    if (!formData.firstname.trim()) {
      errors.firstname = "Le prénom est requis";
    } else if (formData.firstname.length < 3) {
      errors.firstname = "Le prénom doit contenir au moins 3 lettres.";
    }

    if (!formData.lastname.trim()) {
      errors.lastname = "Le nom est requis";
    } else if (formData.lastname.length < 3) {
      errors.lastname = "Le nom doit contenir au moins 3 lettres.";
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Le numéro de téléphone est requis";
    } else if (!/^(\+229|00229)[4569]\d{7}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Le numéro de téléphone n'est pas correct.";
    }

    if (!formData.ifuNumber.trim()) {
      errors.ifuNumber = "Le numéro IFU est requis";
    } else if (!/^\d{10}$/.test(formData.ifuNumber)) {
      errors.ifuNumber = "Le numéro IFU doit comporter exactement 10 chiffres.";
    }

    if (formData.email) {
      if (!isValidEmail(formData.email.trim())) {
        errors.email = "L'email n'est pas valide";
      }
    }

    setFormErrors(errors);

    return (
      !errors.firstname &&
      !errors.lastname &&
      !errors.phoneNumber &&
      !errors.email &&
      !errors.ifuNumber
    );
  };

  const onFormClose = () => {
    //  setIsLoading(false);
    setFormData({
      firstname: firstname,
      lastname: lastname,
      phoneNumber: phoneNumber,
      ifuNumber: ifuNumber,
      email: email,
    });
    setFormErrors({
      firstname: null,
      lastname: null,
      phoneNumber: null,
      ifuNumber: null,
      email: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //  setIsLoading(true);
    if (validateForm()) {
      const errors: FormErrors = {
        firstname: null,
        lastname: null,
        phoneNumber: null,
        ifuNumber: null,
        email: null,
      };
      //  let exist = false;
      const response = await ClientsAPI.create(
        new Clients(
          formData.lastname,
          formData.firstname,
          parseInt(formData.ifuNumber),
          formData.phoneNumber,
          formData.email == null || formData.email == undefined
            ? null
            : formData.email
        )
      );

      if (response!.status == 400) {
        errors.firstname = response!.errors!.firstname;
        errors.lastname = response!.errors!.lastname;
        errors.phoneNumber = response!.errors!.phoneNumber;
        errors.ifuNumber = response!.errors!.ifuNumber;
        errors.email = response!.errors!.email;
        setFormErrors(errors);
      } else if (response!.status == 201) {
        onFormClose();
        toggleModal("client-adding-form");
        setActionResultMessage("Le client a été ajouté avec succès");
        toggleModal("action-result-message");
      } else {
        onFormClose();
        toggleModal("client-adding-form");
        setActionResultMessage("Erreur lors de l'ajout du client");
        toggleModal("action-result-message");
      }
    }

    //  setIsLoading(false);
  };

  const isValidEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    //    isLoading,
    onFormSubmit,
    onFormClose,
  };
};

export default useClientAddingForm;
