import AddingButton from "../../../components/ui/AddingButton";
import DateIntervall from "../../../components/ui/DateIntervall";
import ClientPurchasesTable from "../../../components/ui/ClientPurchasesTable";
import "../../../assets/css/table.css";
import ClientCard from "../../../components/ui/ClientCard";
import { forms } from "./FormsPage";
import { toggleModal } from "../../../components/ui/Modal";

const ClientPurchasesPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <ClientCard />
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton
          option="un nouveau achat"
          onClick={() => {
            toggleModal("purchase-adding-form");
          }}
        />
        {forms.find((form) => form.label === "purchase-adding-form")?.form}
      </div>
      <ClientPurchasesTable />
    </div>
  );
};

export default ClientPurchasesPage;
