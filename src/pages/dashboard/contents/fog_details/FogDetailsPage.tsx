import FogDetailsTable from "../../../../components/ui/dashboard/fog_details/FogDetailsTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../../../assets/css/table.css";
import FogDetailsAdding from "../../../../components/form/forms/fog_details_adding/FogDetailsAdding";
import { FC, useEffect } from "react";
import useBrouillardStore from "../../../../store/brouillard/useBrouillard.store";
import useActivitesDepotStore from "../../../../store/activites_depot/useActivitesDepot.store";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";

const FogDetailsPage: FC = () => {
  const selectedBrouillard = useBrouillardStore(
    (state) => state.selectedBrouillard
  );
  const activitesDepot = useActivitesDepotStore(
    (state) => state.activitesDepot
  );
  const fetchAllActivitesDepot = useActivitesDepotStore(
    (state) => state.fetchAllActivitesDepot
  );

  // const selectedSortOption = useActivitesDepotStore(
  //   (state) => state.selectedSortOption
  // );
  const startDate = useActivitesDepotStore((state) => state.startDate);
  const endDate = useActivitesDepotStore((state) => state.endDate);
  // const onSelectedSetOptionChange = useActivitesDepotStore(
  //   (state) => state.onSelectedSetOptionChange
  // );
  const onStartDateChange = useActivitesDepotStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = useActivitesDepotStore(
    (state) => state.onEndDateChange
  );
  const resetDatesInterval = useActivitesDepotStore(
    (state) => state.resetDatesInterval
  );

  useEffect(() => {
    fetchAllActivitesDepot(selectedBrouillard!.id!);
  }, [fetchAllActivitesDepot, selectedBrouillard]);

  return (
    <div className="h-full w-full flex flex-col">
      <Link
        className=" text-black hover:text-black w-max font-normal"
        to="/brouillard"
      >
        <div className="my-3 flex self-start items-center p-2 border-2   border-primary text-sm">
          <BiArrowBack className="mr-3 text-secondary" size={20} /> Retour à la
          page précédente
        </div>
      </Link>
      <div className="p-2 my-2 bg-secondary text-white rounded-md shadow-md   w-max">
        {selectedBrouillard!.depot}
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
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
        <AddingButton
          option="Ajouter une vente"
          onClick={() => {
            toggleModal("fog-details-adding-form");
          }}
        />

        <FogDetailsAdding sale="" payment="" expense="" observation="" />
        <ActionResult />
      </div>
      <FogDetailsTable fogDetails={activitesDepot} />
    </div>
  );
};

export default FogDetailsPage;
