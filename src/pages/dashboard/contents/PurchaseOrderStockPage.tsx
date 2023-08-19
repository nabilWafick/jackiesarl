import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import AddingButton from "../../../components/ui/AddingButton";
import PurchaseOrderStockTable from "../../../components/ui/PurchaseOrderStockTable";

const PurchaseOrderStockPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton option="Stock" onClick={() => {}} />
      </div>
      <PurchaseOrderStockTable />
    </div>
  );
};

export default PurchaseOrderStockPage;
