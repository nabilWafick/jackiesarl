import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import JSCategorySelect from "../../../../components/form/widgets/CategorySelect";
import ModificationsTable from "../../../../components/ui/dashboard/modifications/ModificationsTable";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useModificationsStore from "../../../../store/modifications/useModifications.store";
import useEmployesStore from "../../../../store/employes/useEmployes.store";

const categories = [
  { value: "this_week", label: "Cette semaine" },
  { value: "this_month", label: "Ce mois" },
];

const ModificationsPage: FC = () => {
  const employees = useEmployesStore((state) => state.employees);
  const fetchAllEmployes = useEmployesStore((state) => state.fetchAllEmployes);
  const modifications = useModificationsStore((state) => state.modifications);
  const fetchAllModifications = useModificationsStore(
    (state) => state.fetchAllModifications
  );

  useEffect(() => {
    fetchAllEmployes();
    fetchAllModifications(employees);
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <JSCategorySelect id="periode" name="periode" options={categories} />
      </div>
      <ModificationsTable modifications={[]} />
    </div>
  );
};

export default ModificationsPage;
