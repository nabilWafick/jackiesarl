import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import JSCategorySelect from "../../../components/form/CategorySelect";
import ModificationsTable from "../../../components/ui/ModificationsTable";

const categories = [
  { value: "this_week", label: "Cette semaine" },
  { value: "this_month", label: "Ce mois" },
];

const ModificationsPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <JSCategorySelect id="periode" name="periode" options={categories} />
      </div>
      <ModificationsTable />
    </div>
  );
};

export default ModificationsPage;
