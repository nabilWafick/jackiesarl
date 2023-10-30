import PaymentsTable from "../../../../components/ui/dashboard/payments/PaymentsTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import usePaymentsStore from "../../../../store/paiements/usePaiements.store";
import JSSelect from "../../../../components/form/widgets/Select.widget";

const PaymentsPage: FC = () => {
  const clientPayments = usePaymentsStore((state) => state.clientPayments);
  const fetchAllClientPayments = usePaymentsStore(
    (state) => state.fetchAllClientPayments
  );

  const selectedSortOption = usePaymentsStore(
    (state) => state.selectedSortOption
  );
  const startDate = usePaymentsStore((state) => state.startDate);
  const endDate = usePaymentsStore((state) => state.endDate);
  const onSelectedSetOptionChange = usePaymentsStore(
    (state) => state.onSelectedSetOptionChange
  );
  const onStartDateChange = usePaymentsStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = usePaymentsStore((state) => state.onEndDateChange);
  const resetDatesInterval = usePaymentsStore(
    (state) => state.resetDatesInterval
  );

  useEffect(() => {
    fetchAllClientPayments();
  }, [fetchAllClientPayments]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-start items-center mt-2 my-3 content-center">
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
          ]}
          onChange={onSelectedSetOptionChange}
        />
      </div>
      <PaymentsTable clientsPayments={clientPayments} />
    </div>
  );
};

export default PaymentsPage;
