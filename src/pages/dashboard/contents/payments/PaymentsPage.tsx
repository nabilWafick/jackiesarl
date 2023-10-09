import PaymentsTable from "../../../../components/ui/dashboard/payments/PaymentsTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useClientsPaymentsValidationStore from "../../../../store/paiement_client_validation/usePaiementClientValidation.store";

const PaymentsPage: FC = () => {
  const clientsPaymentsValidation = useClientsPaymentsValidationStore(
    (state) => state.clientsPaymentsValidation
  );
  const fetchAllClientsPaymentsValidation = useClientsPaymentsValidationStore(
    (state) => state.fetchAllClientsPaymentsValidation
  );

  useEffect(() => {
    fetchAllClientsPaymentsValidation();
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-start items-center mt-2 my-3 content-center">
        <DateIntervall />
      </div>
      <PaymentsTable clientsPayments={clientsPaymentsValidation} />
    </div>
  );
};

export default PaymentsPage;
