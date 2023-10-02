import ClientCard from "../../../../components/ui/dashboard/clients/ClientCard";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import ClientPurchasesTable from "../../../../components/ui/dashboard/client_purchases/ClientPurchasesTable";
import "../../../../assets/css/table.css";
import ClientPaymentAdding from "../../../../components/form/forms/client_payment_adding/ClientPaymentAdding";

const ClientPurchasesPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <ClientCard />
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton
          option="Ajouter un achat"
          onClick={() => {
            toggleModal("client-purchase-adding-form");
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
      <ClientPurchasesTable />
    </div>
  );
};

export default ClientPurchasesPage;
