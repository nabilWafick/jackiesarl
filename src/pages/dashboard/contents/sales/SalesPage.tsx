import SalesTable from "../../../../components/ui/dashboard/sales/SalesTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import "../../../../assets/css/table.css";
import useSalesStore from "../../../../store/vente/vente.store";
import { FC, useEffect } from "react";
import JSSelect from "../../../../components/form/widgets/Select.widget";

const SalesPage: FC = () => {
  const sales = useSalesStore((state) => state.clientPurchases);
  const fetchAllSales = useSalesStore((state) => state.fetchAllSales);
  const selectedSortOption = useSalesStore((state) => state.selectedSortOption);
  const startDate = useSalesStore((state) => state.startDate);
  const endDate = useSalesStore((state) => state.endDate);
  const onSelectedSetOptionChange = useSalesStore(
    (state) => state.onSelectedSetOptionChange
  );
  const onStartDateChange = useSalesStore((state) => state.onStartDateChange);
  const onEndDateChange = useSalesStore((state) => state.onEndDateChange);
  const resetDatesInterval = useSalesStore((state) => state.resetDatesInterval);
  useEffect(() => {
    fetchAllSales();
  }, [fetchAllSales]);

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
      <SalesTable sales={sales} />
    </div>
  );
};

export default SalesPage;
