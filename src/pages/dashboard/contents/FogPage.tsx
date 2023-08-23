import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import AddingButton from "../../../components/ui/AddingButton";
import FogTable from "../../../components/ui/FogTable";
import { toggleModal } from "../../../components/ui/Modal";
import { forms } from "./FormsPage";

const FogPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
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
