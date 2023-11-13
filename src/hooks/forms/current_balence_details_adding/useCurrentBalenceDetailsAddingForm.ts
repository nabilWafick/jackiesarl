import { useState } from "react";
import ActivitesBanqueAPI from "../../../api/activites_banque/activites_banque.api";
import ActivitesBanque from "../../../models/activites_banque/activites_banque.model";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import useSoldeCourantStore from "../../../store/solde_courant/useSoldeCourant.store";
import useActivitesBanqueStore from "../../../store/activites_banque/useActivitesBanque.store";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";

interface FormData {
  description: string;
  debit: string;
  credit: string;
  //  currentBalence: string;
}

interface FormErrors {
  description: string | null;
  debit: string | null;
  credit: string | null;
  // currentBalence: string | null;
}

const useCurrentBalenceDetailsAddingForm = ({
  description,
  debit,
  credit,
}: // currentBalence,
FormData) => {
  const [formData, setFormData] = useState<FormData>({
    description: description,
    debit: debit,
    credit: credit,
    //   currentBalence: currentBalence,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    description: null,
    debit: null,
    credit: null,
    // currentBalence: null,
  });

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const selectedSoldeCourant = useSoldeCourantStore(
    (state) => state.selectedSoldeCourant
  );
  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );
  const fetchAllActivitesBanque = useActivitesBanqueStore(
    (state) => state.fetchAllActivitesBanque
  );

  const onInputDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors: FormErrors = {
      description: null,
      debit: null,
      credit: null,
      //    currentBalence: null,
    };

    if (!formData.description.trim()) {
      errors.description = "La description est requise";
    } else if (formData.description.trim().length < 20) {
      errors.description =
        "La description doit comporter au moins 20 caractères.";
    }

    // Validation pour debit (nombre)

    if (!formData.credit && !formData.debit) {
      errors.credit = "La valeur du crédit ou débit est requise";
      errors.debit = "La valeur du crédit ou débit est requise";
    } else {
      const valeurNumeriqueDebit = parseFloat(formData.debit);
      if (formData.debit.trim() && isNaN(valeurNumeriqueDebit)) {
        errors.debit = "La valeur du débit doit être un nombre valide.";
      } else if (valeurNumeriqueDebit == 0) {
        errors.debit = "La valeur du débit doit être différent de 0.";
      }

      // Validation pour credit (nombre)

      const valeurNumeriqueCredit = parseFloat(formData.credit);
      if (formData.credit.trim() && isNaN(valeurNumeriqueCredit)) {
        errors.credit = "La valeur du crédit doit être un nombre valide.";
      } else if (valeurNumeriqueCredit == 0) {
        errors.credit = "La valeur du crédit doit être différent de 0.";
      }
    }
    /* // Validation pour currentBalence (nombre)
    if (!formData.currentBalence.trim()) {
      errors.currentBalence = "La valeur du solde actuel est requise";
    } else {
      const valeurNumériqueCurrentBalence = parseFloat(formData.currentBalence);
      if (isNaN(valeurNumériqueCurrentBalence)) {
        errors.currentBalence =
          "La valeur du solde actuel doit être un nombre valide.";
      }
    }
    */
    setFormErrors(errors);

    return (
      !errors.description && !errors.debit && !errors.credit //&&
      // !errors.currentBalence
    );
  };

  const onFormClose = () => {
    setFormData({
      description: description,
      debit: debit,
      credit: credit,
      //   currentBalence: currentBalence,
    });

    setFormErrors({
      description: null,
      debit: null,
      credit: null,
      //   currentBalence: null,
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      if (!formData.debit) {
        formData.debit = "0";
      }
      if (!formData.credit) {
        formData.credit = "0";
      }
      const errors: FormErrors = {
        description: null,
        debit: null,
        credit: null,
        //   currentBalence: null,
      };

      const response = await ActivitesBanqueAPI.create(
        authenticatedEmploye!,
        new ActivitesBanque(
          selectedSoldeCourant!.id!,
          formData.description,
          parseFloat(formData.debit),
          parseFloat(formData.credit),
          0
        )
      );

      if (response!.status == 201) {
        onFormClose();
        toggleModal("current-balence-details-adding-form");
        fetchAllActivitesBanque(selectedSoldeCourant!.id!);
        setActionResultMessage(
          "L'activité de la banque a été ajoutée avec succès"
        );
        // console.log("Added successfuly");
        toggleModal("action-result-message");
      } else if (response!.status == 401) {
        onFormClose();
        toggleModal("current-balence-details-adding-form");
        setActionResultMessage(
          `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
        );
        toggleModal("action-result-message");
      } else if (response!.status == 403) {
        onFormClose();
        toggleModal("current-balence-details-adding-form");
        setActionResultMessage(response!.error);
        toggleModal("action-result-message");
      } else if (response!.status == 406) {
        errors.credit = response!.error!;
        setFormErrors(errors);
      } else {
        onFormClose();
        toggleModal("current-balence-details-adding-form");
        setActionResultMessage(
          "Erreur lors de l'ajout de l'activité de la banque"
        );
        toggleModal("action-result-message");
      }
    }
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    onTextareaChange,
    onFormClose,
    onFormSubmit,
  };
};

export default useCurrentBalenceDetailsAddingForm;
