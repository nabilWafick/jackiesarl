import FogDetailsTable from "../../../../components/ui/dashboard/fog_details/FogDetailsTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import { forms } from "../FormsPage";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../../../assets/css/table.css";

const FogDetailsPage = () => {
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
        Dépot
      </div>
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
          option="une nouvelle activité"
          onClick={() => {
            toggleModal("fog-details-adding-form");
          }}
        />
        {forms.find((form) => form.label === "fog-details-adding-form")?.form}
      </div>
      <FogDetailsTable />
    </div>
  );
};

export default FogDetailsPage;
