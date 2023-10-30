import PaymentsValidationsTable from "../../../../components/ui/dashboard/payments_validations/PaymentsValidationsTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";
import usePaymentsValidationStore from "../../../../store/paiement_client_validation/usePaiementClientValidation.store";
import JSSelect from "../../../../components/form/widgets/Select.widget";

const PaymentsValidationsPage: FC = () => {
  const clientsPayments = usePaymentsValidationStore(
    (state) => state.clientPayments
  );
  const fetchAllClientsPayments = usePaymentsValidationStore(
    (state) => state.fetchAllClientPayments
  );

  const selectedSortOption = usePaymentsValidationStore(
    (state) => state.selectedSortOption
  );
  const startDate = usePaymentsValidationStore((state) => state.startDate);
  const endDate = usePaymentsValidationStore((state) => state.endDate);
  const onSelectedSetOptionChange = usePaymentsValidationStore(
    (state) => state.onSelectedSetOptionChange
  );
  const onStartDateChange = usePaymentsValidationStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = usePaymentsValidationStore(
    (state) => state.onEndDateChange
  );
  const resetDatesInterval = usePaymentsValidationStore(
    (state) => state.resetDatesInterval
  );

  useEffect(() => {
    fetchAllClientsPayments();
  }, [fetchAllClientsPayments]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall
          selectedStartDate={startDate}
          selectedEndDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
          resetDatesInterval={resetDatesInterval}
        />

        <JSSelect
          id="clients-select"
          name="clients-select"
          selectedOption={selectedSortOption}
          options={[
            { value: "new-to-old", label: "Nouveau à Ancien" },
            { value: "old-to-new", label: "Ancien à Nouveau" },
            { value: "more-important", label: "Plus Important" },
            { value: "less-important", label: "Moins Important" },
            {
              value: "cim-benin-more-important",
              label: "CIM BENIN Plus Important",
            },
            {
              value: "cim-benin-less-important",
              label: "CIM BENIN Moins important",
            },
            {
              value: "nocibe-more-important",
              label: "NOCIBE Plus Important",
            },
            {
              value: "nocibe-less-important",
              label: "NOCIBE Moins Important",
            },
            { value: "unvalidated", label: "Non Validée" },
            { value: "validated", label: "Validée" },
          ]}
          onChange={onSelectedSetOptionChange}
        />
        <ActionResult />
      </div>
      <PaymentsValidationsTable clientsPaymentsValidations={clientsPayments} />
    </div>
  );
};

export default PaymentsValidationsPage;
