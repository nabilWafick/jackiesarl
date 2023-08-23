import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import AddingButton from "../../../components/ui/AddingButton";
import PurchaseOrderStockTable from "../../../components/ui/PurchaseOrderStockTable";
import { forms } from "./FormsPage";
import { toggleModal } from "../../../components/ui/Modal";

const PurchaseOrderStockPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton
          option="un nouveau stock bon de commande"
          onClick={() => {
            toggleModal("purchase-order-stock-adding-form");
          }}
        />
        {
          forms.find(
            (form) => form.label === "purchase-order-stock-adding-form"
          )?.form
        }
      </div>
      <PurchaseOrderStockTable />
    </div>
  );
};

export default PurchaseOrderStockPage;
