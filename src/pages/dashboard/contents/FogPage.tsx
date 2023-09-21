import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import AddingButton from "../../../components/ui/AddingButton";
import { toggleModal } from "../../../components/ui/Modal";
import { forms } from "./FormsPage";
import FogTable from "../../../components/ui/FogTable";
import { Link } from "react-router-dom";

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
        {forms.find((form) => form.label === "fog-adding-form")?.form}
      </div>
      <FogTable />
    </div>
  );
};

export default FogPage;
