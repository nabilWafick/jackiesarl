import JSCategorySelect from "../../../../components/form/widgets/CategorySelect";
import PurchasesTable from "../../../../components/ui/dashboard/purchases/PurchasesTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import "../../../../assets/css/table.css";

const categories = [
  { value: "cim_benin", label: "CIM BENIN" },
  { value: "nocibe", label: "NOCIBE" },
];

const PurchasesPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div>
        <AddingButton
          option="un nouvel achat"
          onClick={() => {
            toggleModal("fog-adding-form");
          }}
        />
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <JSCategorySelect
          id="category-ciment"
          name="category-ciment"
          options={categories}
        />
      </div>
      <PurchasesTable />
    </div>
  );
};

export default PurchasesPage;
