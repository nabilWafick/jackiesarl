import FogTable from "../../../../components/ui/dashboard/fog/FogTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import "../../../../assets/css/table.css";
import FogAdding from "../../../../components/form/forms/fog_adding/FogAdding";
import { FC, useEffect } from "react";
import useBrouillardStore from "../../../../store/brouillard/useBrouillard.store";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";

const FogPage: FC = () => {
  const brouillards = useBrouillardStore((state) => state.brouillards);
  const fetchAllBrouillard = useBrouillardStore(
    (state) => state.fetchAllBrouillard
  );

  useEffect(() => {
    fetchAllBrouillard();
  }, [fetchAllBrouillard]);

  return (
    <div className="h-full w-full flex flex-col">
      {/* <Link to="/brouillard/details">
        <div className="p-2 my-2 bg-secondary text-white rounded-md shadow-md   w-max">
          Dépot
        </div>
      </Link> */}

      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        {/* <JSCategorySelect
          id="categoty"
          name="category"
          options={[
            { value: "increasing", label: "Ordre croissant" },
            { value: "decreasing", label: "Ordre décroissant" },
          ]}
        /> */}
        <AddingButton
          option="Remplir"
          onClick={() => {
            toggleModal("fog-adding-form");
          }}
        />

        <FogAdding deposit="" currentStock="" managerName="" managerNumber="" />
        <ActionResult />
      </div>
      <FogTable fogs={brouillards} />
    </div>
  );
};

export default FogPage;
