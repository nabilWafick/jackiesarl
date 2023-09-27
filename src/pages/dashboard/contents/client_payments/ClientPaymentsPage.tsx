import ClientCard from "../../../../components/ui/dashboard/clients/ClientCard";
import { forms } from "../FormsPage";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import ClientPaymentsTable from "../../../../components/ui/dashboard/client_payments/ClientPaymentsTable";
import "../../../../assets/css/table.css";

const ClientPaymentsPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <ClientCard />
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton
          option="un nouveau paiement"
          onClick={() => {
            toggleModal("payment-adding-form");
          }}
        />
        {
          forms.find((form) => form.label === "client-payment-adding-form")
            ?.form
        }
      </div>
      <ClientPaymentsTable />
    </div>
  );
};

export default ClientPaymentsPage;
