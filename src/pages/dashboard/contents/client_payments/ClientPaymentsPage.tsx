import ClientCard from "../../../../components/ui/dashboard/clients/ClientCard";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import ClientPaymentsTable from "../../../../components/ui/dashboard/client_payments/ClientPaymentsTable";
import "../../../../assets/css/table.css";
import ClientPaymentAdding from "../../../../components/form/forms/client_payment_adding/ClientPaymentAdding";

const ClientPaymentsPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <ClientCard />
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton
          option="Ajouter un paiement"
          onClick={() => {
            toggleModal("payment-adding-form");
          }}
        />
        <ClientPaymentAdding
          bcNumber=""
          category=""
          amount=""
          bank=""
          reference=""
          slip=""
        />
      </div>
      <ClientPaymentsTable />
    </div>
  );
};

export default ClientPaymentsPage;
