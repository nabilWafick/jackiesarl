import JSCategorySelect from "../../../../components/form/widgets/CategorySelect.widget";
import ClientBalanceTable from "../../../../components/ui/dashboard/client_balence/ClientBalanceTable";
import ClientCard from "../../../../components/ui/dashboard/clients/ClientCard";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import "../../../../assets/css/table.css";
import { FC } from "react";
import useClientsStore from "../../../../store/clients/useClients.store";

const categories = [
  { value: "cim_benin", label: "CIM BENIN" },
  { value: "nocibe", label: "NOCIBE" },
];

const ClientBalancePage: FC = () => {
  const selectedClient = useClientsStore((state) => state.selectedClient);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <ClientCard client={selectedClient!} />
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
