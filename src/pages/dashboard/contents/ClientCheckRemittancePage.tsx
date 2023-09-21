import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import ClientCard from "../../../components/ui/ClientCard";
import ClientCheckRemittanceTable from "../../../components/ui/ClientCheckRemittanceTable";
//import JSCategorySelect from "../../../components/form/CategorySelect";
import AddingButton from "../../../components/ui/AddingButton";
import { forms } from "./FormsPage";
import { toggleModal } from "../../../components/ui/Modal";

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
