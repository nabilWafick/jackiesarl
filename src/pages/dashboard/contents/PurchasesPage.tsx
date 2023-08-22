import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import PurchasesTable from "../../../components/ui/PurchasesTable";
import JSCategorySelect from "../../../components/form/CategorySelect";

const categories = [
  { value: "cim_benin", label: "CIM BENIN" },
  { value: "nocibe", label: "NOCIBE" },
];

const PurchasesPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
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
