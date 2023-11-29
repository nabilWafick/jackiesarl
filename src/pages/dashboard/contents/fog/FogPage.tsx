import FogTable from "../../../../components/ui/dashboard/fog/FogTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import "../../../../assets/css/table.css";
import FogAdding from "../../../../components/form/forms/fog_adding/FogAdding";
import { FC, useEffect } from "react";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";
import useBrouillardStore from "../../../../store/brouillard/useBrouillard.store";

const FogPage: FC = () => {
  const brouillards = useBrouillardStore((state) => state.brouillards);
  const fetchAllBrouillard = useBrouillardStore(
    (state) => state.fetchAllBrouillard
  );
  // const selectedSortOption = useBrouillardStore(
  //   (state) => state.selectedSortOption
  // );
  const startDate = useBrouillardStore((state) => state.startDate);
  const endDate = useBrouillardStore((state) => state.endDate);
  // const onSelectedSetOptionChange = useBrouillardStore(
  //   (state) => state.onSelectedSetOptionChange
  // );
  const onStartDateChange = useBrouillardStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = useBrouillardStore((state) => state.onEndDateChange);
  const resetDatesInterval = useBrouillardStore(
    (state) => state.resetDatesInterval
  );

  useEffect(() => {
    fetchAllBrouillard();
  }, [fetchAllBrouillard]);

  return (
    <div className="h-full w-full flex flex-col">
      <AddingButton
        option="Remplir"
        onClick={() => {
          toggleModal("fog-adding-form");
        }}
      />

      <div className="w-full flex flex-col lg:flex-row justify-center items-center my-2 content-center">
        <DateIntervall
          selectedStartDate={startDate}
          selectedEndDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
          resetDatesInterval={resetDatesInterval}
        />
        {/* <JSCategorySelect
          id="categoty"
          name="category"
          options={[
            { value: "increasing", label: "Ordre croissant" },
            { value: "decreasing", label: "Ordre décroissant" },
          ]}
        /> */}

        <FogAdding deposit="" currentStock="" managerName="" managerNumber="" />
        <ActionResult />
      </div>
      <FogTable fogs={brouillards} />
    </div>
  );
};

export default FogPage;
