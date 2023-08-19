import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import ClientCard from "../../../components/ui/ClientCard";
import ClientBalanceTable from "../../../components/ui/ClientBalanceTable";
import JSCategorySelect from "../../../components/form/CategorySelect";

const categories = [
  { value: "cim_benin", label: "CIM BENIN" },
  { value: "nocibe", label: "NOCIBE" },
];

const ClientBalancePage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <ClientCard />
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <JSCategorySelect
          id="ctegory-ciment"
          name="category-ciment"
          options={categories}
        />
      </div>
      <ClientBalanceTable />
    </div>
  );
};

export default ClientBalancePage;
