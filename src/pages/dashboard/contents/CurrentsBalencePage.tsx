import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import AddingButton from "../../../components/ui/AddingButton";
import CurrentsBalenceTable from "../../../components/ui/CurrentsBalenceTable";
import { toggleModal } from "../../../components/ui/Modal";
import { forms } from "./FormsPage";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const CurrentsBalencePage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Link
        className=" text-black hover:text-black w-max font-normal"
        to="/soldes-courants"
      >
        <div className="my-3 flex self-start items-center p-2 border-2   border-primary text-sm">
          <BiArrowBack className="mr-3 text-secondary" size={20} /> Retour à la
          page précédente
        </div>
      </Link>
      <div className="p-2 my-2 bg-secondary text-white rounded-md shadow-md   w-max">
        Banque
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
          option="Passer une écriture"
          onClick={() => {
            toggleModal("current-balence-details-adding-form");
          }}
        />
        {
          forms.find(
            (form) => form.label === "current-balence-details-adding-form"
          )?.form
        }
      </div>
      <CurrentsBalenceTable />
    </div>
  );
};

export default CurrentsBalencePage;
