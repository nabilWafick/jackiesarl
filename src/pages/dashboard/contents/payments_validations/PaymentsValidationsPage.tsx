import JSCategorySelect from "../../../../components/form/widgets/CategorySelect.widget";
import PaymentsValidationsTable from "../../../../components/ui/dashboard/payments_validations/PaymentsValidationsTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";
import useClientPaymentsStore from "../../../../store/paiement_client/usePaiementClient.store";

const PaymentsValidationsPage: FC = () => {
  const clientsPayments = useClientPaymentsStore(
    (state) => state.clientsPayments
  );
  const fetchAllClientsPayments = useClientPaymentsStore(
    (state) => state.fetchAllClientsPayments
  );

  useEffect(() => {
    fetchAllClientsPayments();
  }, [fetchAllClientsPayments]);

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
        <ActionResult />
      </div>
      <PaymentsValidationsTable clientsPaymentsValidations={clientsPayments} />
    </div>
  );
};

export default PaymentsValidationsPage;
