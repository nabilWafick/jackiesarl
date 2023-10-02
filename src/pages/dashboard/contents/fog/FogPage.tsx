import FogTable from "../../../../components/ui/dashboard/fog/FogTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import { Link } from "react-router-dom";
import "../../../../assets/css/table.css";
import FogAdding from "../../../../components/form/forms/fog_adding/FogAdding";

const FogPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Link to="/brouillard/details">
        <div className="p-2 my-2 bg-secondary text-white rounded-md shadow-md   w-max">
          Dépot
        </div>
      </Link>

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
      </div>
      <FogTable />
    </div>
  );
};

export default FogPage;
