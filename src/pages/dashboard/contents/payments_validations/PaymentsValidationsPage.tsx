import JSCategorySelect from "../../../../components/form/widgets/CategorySelect";
import PaymentsValidationsTable from "../../../../components/ui/dashboard/payments_validations/PaymentsValidationsTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useclientsPaymentsValidationStore from "../../../../store/paiement_client_validation/usePaiementClientValidation.store";
import useClientsStore from "../../../../store/clients/useClients.store";

const PaymentsValidationsPage: FC = () => {
  const clients = useClientsStore((state) => state.clients);
  const fetchAllClients = useClientsStore((state) => state.fetchAllClients);
  const clientsPaymentsValidation = useclientsPaymentsValidationStore(
    (state) => state.clientsPaymentsValidation
  );
  const fetchAllClientsPaymentsValidation = useclientsPaymentsValidationStore(
    (state) => state.fetchAllClientsPaymentsValidation
  );

  useEffect(() => {
    fetchAllClients();
    fetchAllClientsPaymentsValidation(clients);
  }, [clients, fetchAllClients, fetchAllClientsPaymentsValidation]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <JSCategorySelect
          id="categoty"
          name="category"
          options={[
            { value: "validate", label: "Validé" },
            { value: "unvalidate", label: "Non Validé" },
          ]}
        />
      </div>
      <PaymentsValidationsTable
        clientsPaymentsValidations={clientsPaymentsValidation}
      />
    </div>
  );
};

export default PaymentsValidationsPage;
