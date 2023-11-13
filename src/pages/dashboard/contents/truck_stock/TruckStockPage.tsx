import TruckStockTable from "../../../../components/ui/dashboard/truck_stock/TruckStockTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import "../../../../assets/css/table.css";
import TruckStockAdding from "../../../../components/form/forms/truck_stock_adding/TruckStockAdding";
import { FC, useEffect } from "react";
import useTrucksStockStore from "../../../../store/stock_camion/useStockCamion.store";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";

const TruckStockPage: FC = () => {
  const trucksStock = useTrucksStockStore((state) => state.trucksStock);
  const fetchAllTruckStock = useTrucksStockStore(
    (state) => state.fetchAllTruckStock
  );
  const startDate = useTrucksStockStore((state) => state.startDate);
  const endDate = useTrucksStockStore((state) => state.endDate);
  // const onSelectedSetOptionChange = useTrucksStockStore(
  //   (state) => state.onSelectedSetOptionChange
  // );
  const onStartDateChange = useTrucksStockStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = useTrucksStockStore((state) => state.onEndDateChange);
  const resetDatesInterval = useTrucksStockStore(
    (state) => state.resetDatesInterval
  );

  useEffect(() => {
    fetchAllTruckStock();
  }, [fetchAllTruckStock]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex  self-end items-center">
        <AddingButton
          option="Ajouter un stock de camion"
          onClick={() => {
            toggleModal("truck-stock-adding-form");
          }}
        />
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall
          selectedStartDate={startDate}
          selectedEndDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
          resetDatesInterval={resetDatesInterval}
        />

        {/* <JSSelect
          id="clients-select"
          name="clients-select"
          selectedOption={selectedSortOption}
          options={[
            { value: "new-to-old", label: "Nouveau à Ancien" },
            { value: "old-to-new", label: "Ancien à Nouveau" },
            { value: "more-important", label: "Plus Important" },
            { value: "less-important", label: "Moins Important" },
            // { value: "unvalidated", label: "Non Validée" },
            // { value: "validated", label: "Validée" },
          ]} */}

        <TruckStockAdding
          truckNumber=""
          category="CIM BENIN"
          driverNumber=""
          bcNumber=""
          quantity=""
        />
        <ActionResult />
      </div>
      <TruckStockTable trucksStock={trucksStock} />
    </div>
  );
};

export default TruckStockPage;
