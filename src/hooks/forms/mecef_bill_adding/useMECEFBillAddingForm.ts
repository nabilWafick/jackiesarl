import { useState } from "react";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";
import { Moment } from "moment";
import useFactureMECEFStore from "../../../store/facture_mecef/useFactureMECEF.store";
import FactureMECEF from "../../../models/facture_mecef/facture_mecef.model";
import FactureMECEFAPI from "../../../api/facture_mecef/facture_mecef.api";

interface FormData {
  reference: string;
  file: File | string;
  billDate: Date | Moment | undefined;
}

interface FormErrors {
  reference: string | null;
  file: string | null;
  billDate: string | null;
}

const useMECEFBillAddingForm = ({ reference, file, billDate }: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    reference: reference,
    file: file,
    billDate: billDate,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    reference: null,
    file: null,
    billDate: null,
  });

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const fetchAllClientsBill = useFactureMECEFStore(
    (state) => state.fetchAllClientsBill
  );

  const selectedPurchase = useFactureMECEFStore(
    (state) => state.selectedPurchase
  );

  const setSelectedPurchase = useFactureMECEFStore(
    (state) => state.setSelectedPurchase
  );

  const onInputDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onBillDateInputChange = (dateValue: Date | Moment) => {
    setFormData({
      ...formData,
      billDate: dateValue,
    });
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const selectedFiles = e.target.files;

    if (selectedFiles && selectedFiles.length > 0) {
      setFormData({
        ...formData,
        [name]: selectedFiles[0],
      });
    }
  };

  const validateForm = () => {
    const errors: FormErrors = {
      reference: null,
      file: null,
      billDate: null,
    };

    if (!formData.reference.trim()) {
      errors.reference = "La référence est requise";
    } else if (formData.reference.trim().length < 3) {
      errors.reference = "La référence doit contenir au moins 3 caractères.";
    }

    const allowedFileTypes = [
      "image/png",
      "image/jpg",
      "image/jpeg",
      "application/pdf",
    ];
    if (
      typeof formData.file != "string" &&
      !allowedFileTypes.includes(formData.file.type)
    ) {
      errors.file = "Le type de file doit être PNG, JPG, JPEG ou PDF";
    }
    if (!formData.billDate) {
      errors.billDate = "La date de facturation est requise";
    }

    setFormErrors(errors);

    return !errors.reference && !errors.file && !errors.billDate;
  };

  const onFormClose = () => {
    setFormData({
      reference: reference,
      file: file,
      billDate,
    });

    setFormErrors({
      reference: null,
      file: null,
      billDate: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const errors: FormErrors = {
        reference: null,
        file: null,
        billDate: null,
      };

      const response = await FactureMECEFAPI.create(
        authenticatedEmploye!,
        new FactureMECEF(
          formData.reference,
          new Date(formData.billDate!.toISOString()!),
          undefined,
          undefined,
          selectedPurchase!.id!,
          formData.file
        )
      );

      setSelectedPurchase(undefined);

      if (response!.status == 201) {
        onFormClose();
        toggleModal("mecef-bill-adding-form");
        fetchAllClientsBill();
        setActionResultMessage("La facture a été ajoutée avec succès");
        toggleModal("action-result-message");
      } else if (response!.status == 400) {
        errors.reference = response!.error!;
        setFormErrors(errors);
      } else if (response!.status == 401) {
        onFormClose();
        toggleModal("mecef-bill-adding-form");
        setActionResultMessage(
          `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
        );
        toggleModal("action-result-message");
      } else if (response!.status == 403) {
        onFormClose();
        toggleModal("mecef-bill-adding-form");
        setActionResultMessage(response!.error);
        toggleModal("action-result-message");
      } else if (response!.status == 404) {
        onFormClose();
        toggleModal("mecef-bill-adding-form");
        setActionResultMessage(response!.error);
        toggleModal("action-result-message");
      } else {
        onFormClose();
        toggleModal("mecef-bill-adding-form");
        setActionResultMessage(
          "Erreur lors de l'ajout de l'achat de l'entreprise"
        );
        toggleModal("action-result-message");
      }
    }
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    onFileInputChange,
    onBillDateInputChange,
    onFormClose,
    onFormSubmit,
  };
};

export default useMECEFBillAddingForm;
