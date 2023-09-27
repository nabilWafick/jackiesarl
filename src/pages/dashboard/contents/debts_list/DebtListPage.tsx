import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import JSCategorySelect from "../../../../components/form/widgets/CategorySelect";
import DebtsTable from "../../../../components/ui/dashboard/debts/DebtsTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import "../../../../assets/css/table.css";

const DebtsListPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex justify-between items-center">
        <Link
          className="w-max flex text-black hover:text-black font-normal"
          to="/creances"
        >
          <div className="my-3 w-max flex justify-center items-center p-2 border-2   border-primary text-sm">
            <BiArrowBack className="mr-3 text-secondary" size={20} /> Retour à
            la page précédente
          </div>
        </Link>
        {/* <AddingButton
          option="une nouvelle créance"
          onClick={() => {
            toggleModal("debt-adding-form");
          }}
        />
        {forms.find((form) => form.label === "debt-adding-form")?.form} */}
      </div>

      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <JSCategorySelect
          id="categoty"
          name="category"
          options={[
            { value: "increasing", label: "Ordre croissant" },
            { value: "decreasing", label: "Ordre décroissant" },
          ]}
        />
      </div>
      <DebtsTable />
    </div>
  );
};

export default DebtsListPage;
