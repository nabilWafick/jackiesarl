import ClientCard from "../../../../components/ui/dashboard/clients/ClientCard";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import { forms } from "../FormsPage";
import ClientCheckRemittanceTable from "../../../../components/ui/dashboard/client_check_remittance/ClientCheckRemittanceTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import "../../../../assets/css/table.css";

const ClientCheckRemittancePage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <ClientCard />
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton
          option="une nouvelle remise de chèque"
          onClick={() => {
            toggleModal("check-remittance-adding-form");
          }}
        />
        {
          forms.find(
            (form) => form.label === "client-check-remittance-adding-form"
          )?.form
        }
      </div>
      <ClientCheckRemittanceTable />
    </div>
  );
};

export default ClientCheckRemittancePage;
