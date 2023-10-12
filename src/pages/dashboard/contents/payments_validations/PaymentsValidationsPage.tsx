import JSCategorySelect from "../../../../components/form/widgets/CategorySelect.widget";
import PaymentsValidationsTable from "../../../../components/ui/dashboard/payments_validations/PaymentsValidationsTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useclientsPaymentsValidationStore from "../../../../store/paiement_client_validation/usePaiementClientValidation.store";

const PaymentsValidationsPage: FC = () => {
  const clientsPaymentsValidation = useclientsPaymentsValidationStore(
    (state) => state.clientsPaymentsValidation
  );
  const fetchAllClientsPaymentsValidation = useclientsPaymentsValidationStore(
    (state) => state.fetchAllClientsPaymentsValidation
  );

  useEffect(() => {
    fetchAllClientsPaymentsValidation();
  }, [fetchAllClientsPaymentsValidation]);

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
