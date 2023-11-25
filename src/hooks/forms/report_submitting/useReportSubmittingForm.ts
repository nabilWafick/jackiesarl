import { useState } from "react";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import Rapports from "../../../models/rapports/rapports.model";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";
import RapportsAPI from "../../../api/rapports/rapports.api";
import useReportsStore from "../../../store/rapports/useRapports.store";

interface FormData {
  report: File | string;
}

interface FormErrors {
  report: string | null;
}

const useReportSubmittingForm = ({ report }: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    report: report,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    report: null,
  });

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const fetchAllOfEmployeeReports = useReportsStore(
    (state) => state.fetchAllOfEmployeeReports
  );

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
      report: null,
    };

    // Vérifiez le type du fichier
    const allowedFileTypes = [
      "image/png",
      "image/jpg",
      "image/jpeg",
      "application/pdf",
    ];
    if (!formData.report) {
      errors.report = "Veuillez choisir un fichier";
    } else if (
      typeof formData.report != "string" &&
      !allowedFileTypes.includes(formData.report.type)
    ) {
      errors.report = "Le type de fichier doit être PNG, JPG, JPEG ou PDF";
    }

    setFormErrors(errors);

    return !errors.report;
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const response = await RapportsAPI.create(
        authenticatedEmploye!,
        new Rapports(
          formData.report,
          undefined,
          undefined,
          authenticatedEmploye!.id!
        )
      );
      if (response!.status == 201) {
        fetchAllOfEmployeeReports();
        setActionResultMessage("Le rapport a été soumis avec succès");
        toggleModal("action-result-message");
      } else if (response!.status == 401) {
        setActionResultMessage(
          `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
        );
        toggleModal("action-result-message");
      } else if (response!.status == 403) {
        setActionResultMessage(response!.error);
        toggleModal("action-result-message");
      } else {
        setActionResultMessage("Erreur lors de l'ajout de l'achat du client");
        toggleModal("action-result-message");
      }
    }
  };

  return {
    formData,
    formErrors,
    onFileInputChange,
    onFormSubmit,
  };
};

export default useReportSubmittingForm;
