import ClientCard from "../../../../components/ui/dashboard/clients/ClientCard";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import ClientCheckRemittanceTable from "../../../../components/ui/dashboard/client_check_remittance/ClientCheckRemittanceTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import "../../../../assets/css/table.css";
import ClientCheckRemittanceAdding from "../../../../components/form/forms/client_check_remittance_adding/ClientCheckRemittanceAdding";

const ClientCheckRemittancePage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <ClientCard />
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton
          option="Ajouter une remise de chèque"
          onClick={() => {
            toggleModal("check-remittance-adding-form");
          }}
        />
        <ClientCheckRemittanceAdding description="" bank="" amount="" rest="" />
      </div>
      <ClientCheckRemittanceTable />
    </div>
  );
};

export default ClientCheckRemittancePage;
