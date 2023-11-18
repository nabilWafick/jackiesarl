import { useState } from "react";
import useInterfacesStore from "../../../store/interfaces/useInfacesStore";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";
import AuthAPI from "../../../api/auth/auth.api";
import { useNavigate } from "react-router-dom";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";
import useClientPurchasesStore from "../../../store/achat_client/useAchatClient.store";
import useCompanyPurchasesListStore from "../../../store/achat_entreprise/useAchatEntreprise.store";
import useActivitesBanqueStore from "../../../store/activites_banque/useActivitesBanque.store";
import useActivitesDepotStore from "../../../store/activites_depot/useActivitesDepot.store";
import useAvanceStore from "../../../store/avance/useAvance.store";
import useBrouillardStore from "../../../store/brouillard/useBrouillard.store";
import useClientsStore from "../../../store/clients/useClients.store";
import useClientsTonnagesStore from "../../../store/clients_tonnages/useClientsTonnages.store";
import useCommandesStore from "../../../store/commandes/useCommandes.store";
import useCreanceStore from "../../../store/creances/useCreances.store";
import useDepensesStore from "../../../store/depenses/useDepenses.store";
import useDepensesValidationStore from "../../../store/depenses_validation/useDepensesValidation.store";
import useModificationsStore from "../../../store/modifications/useModifications.store";
import usePaymentsStore from "../../../store/paiements/usePaiements.store";
import usePaymentsValidationStore from "../../../store/paiement_client_validation/usePaiementClientValidation.store";
import useReportsStore from "../../../store/rapports/useRapports.store";
import useClientChecksRemittanceStore from "../../../store/remise_cheque_client/useRemiseChequeClient.store";
import useSoldeClientStore from "../../../store/solde_client/useSoldeClient.store";
import useSoldeCourantStore from "../../../store/solde_courant/useSoldeCourant.store";
import usePurchasesOrderStockStore from "../../../store/stock_bon_commande/useStockBonCommande.store";
import useTrucksStockStore from "../../../store/stock_camion/useStockCamion.store";
import useDashBoardStore from "../../../store/table_bord/useTableBord.store";
import useSalesStore from "../../../store/vente/vente.store";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string | null;
  password: string | null;
}

const useLoginForm = ({ email, password }: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    email: email,
    password: password,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: null,
    password: null,
  });

  const navigateTo = useNavigate();

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const setAuthenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.setAuthenticatedEmploye
  );
  const setClientPurchasesStoreAuthenticatedEmploye = useClientPurchasesStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setCompanyPurchasesListStoreAuthenticatedEmploye =
    useCompanyPurchasesListStore((state) => state.setAuthenticatedEmployee);
  const setActivitesBanqueStoreAuthenticatedEmploye = useActivitesBanqueStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setActivitesDepotStoreAuthenticatedEmploye = useActivitesDepotStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setAvanceStoreAuthenticatedEmploye = useAvanceStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setBrouillardStoreAuthenticatedEmploye = useBrouillardStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setClientsStoreAuthenticatedEmploye = useClientsStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setClientsTonnagesStoreAuthenticatedEmploye = useClientsTonnagesStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setCommandesStoreAuthenticatedEmploye = useCommandesStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setCreanceStoreAuthenticatedEmploye = useCreanceStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setDepensesStoreAuthenticatedEmploye = useDepensesStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setDepensesValidationStoreAuthenticatedEmploye =
    useDepensesValidationStore((state) => state.setAuthenticatedEmployee);
  const setModificationsStoreAuthenticatedEmploye = useModificationsStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setPaymentsStoreAuthenticatedEmploye = usePaymentsStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setPaymentsValidationStoreAuthenticatedEmploye =
    usePaymentsValidationStore((state) => state.setAuthenticatedEmployee);
  const setReportsStoreAuthenticatedEmploye = useReportsStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setClientChecksRemittanceStoreAuthenticatedEmploye =
    useClientChecksRemittanceStore((state) => state.setAuthenticatedEmployee);
  const setSoldeClientStoreAuthenticatedEmploye = useSoldeClientStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setSoldeCourantStoreAuthenticatedEmploye = useSoldeCourantStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setPurchasesOrderStockStoreAuthenticatedEmploye =
    usePurchasesOrderStockStore((state) => state.setAuthenticatedEmployee);
  const setTrucksStockStoreAuthenticatedEmploye = useTrucksStockStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setDashBoardStoreAuthenticatedEmploye = useDashBoardStore(
    (state) => state.setAuthenticatedEmployee
  );
  const setSalesStoreAuthenticatedEmploye = useSalesStore(
    (state) => state.setAuthenticatedEmployee
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
      email: null,
      password: null,
    };

    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "L'email n'est pas valide";
    }

    if (!formData.password.trim()) {
      errors.password = "Le mot de passe est requis";
    } else if (formData.password.trim().length < 7) {
      errors.password = "Le mot de passe doit comporter au moins 7 caractères.";
    }

    setFormErrors(errors);

    return !errors.email && !errors.password;
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: FormErrors = {
      email: null,
      password: null,
    };

    //  const response =  AuthAPI.verifyAuthentication(authenticatedEmploye);

    if (validateForm()) {
      const response = await AuthAPI.login({
        email: formData.email,
        password: formData.password,
      });

      if (response!.status == 404) {
        errors.email = response!.error!;
        setFormErrors(errors);
      } else if (response!.status == 401) {
        errors.password = response!.error!;
        setFormErrors(errors);
      } else if (response!.status == 202) {
        setActionResultMessage(`Bienvenue M./Mme ${response!.employe!.nom}`);
        toggleModal("action-result-message");

        // setting employee data for store for authentication and authorisation checking while fetching data
        setAuthenticatedEmploye(response!.employe!);
        setClientPurchasesStoreAuthenticatedEmploye(response!.employe!);
        setCompanyPurchasesListStoreAuthenticatedEmploye(response!.employe!);
        setActivitesBanqueStoreAuthenticatedEmploye(response!.employe!);
        setActivitesDepotStoreAuthenticatedEmploye(response!.employe!);
        setAvanceStoreAuthenticatedEmploye(response!.employe!);
        setBrouillardStoreAuthenticatedEmploye(response!.employe!);
        setClientsStoreAuthenticatedEmploye(response!.employe!);
        setClientsTonnagesStoreAuthenticatedEmploye(response!.employe!);
        setCommandesStoreAuthenticatedEmploye(response!.employe!);
        setCreanceStoreAuthenticatedEmploye(response!.employe!);
        setDepensesStoreAuthenticatedEmploye(response!.employe!);
        setDepensesValidationStoreAuthenticatedEmploye(response!.employe!);
        setModificationsStoreAuthenticatedEmploye(response!.employe!);
        setPaymentsStoreAuthenticatedEmploye(response!.employe!);
        setPaymentsValidationStoreAuthenticatedEmploye(response!.employe!);
        setReportsStoreAuthenticatedEmploye(response!.employe!);
        setClientChecksRemittanceStoreAuthenticatedEmploye(response!.employe!);
        setSoldeClientStoreAuthenticatedEmploye(response!.employe!);
        setSoldeClientStoreAuthenticatedEmploye(response!.employe!);
        setSoldeCourantStoreAuthenticatedEmploye(response!.employe!);
        setPurchasesOrderStockStoreAuthenticatedEmploye(response!.employe!);

        setTrucksStockStoreAuthenticatedEmploye(response!.employe!);
        setDashBoardStoreAuthenticatedEmploye(response!.employe!);
        setSalesStoreAuthenticatedEmploye(response!.employe!);

        setTimeout(() => {
          navigateTo("/");
        }, 1500);
      } else {
        setActionResultMessage("Erreur lors de l'authentification");
        toggleModal("action-result-message");
      }
    }
  };

  const isValidEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  return {
    formData,
    formErrors,
    onInputDataChange,
    onFormSubmit,
  };
};

export default useLoginForm;
