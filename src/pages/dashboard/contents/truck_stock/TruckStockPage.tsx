import TruckStockTable from "../../../../components/ui/dashboard/truck_stock/TruckStockTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import { forms } from "../FormsPage";
import "../../../../assets/css/table.css";

const TruckStockPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton
          option="un nouveau stock de camion"
          onClick={() => {
            toggleModal("truck-stock-adding-form");
          }}
        />{" "}
        {forms.find((form) => form.label === "truck-stock-adding-form")?.form}
      </div>
      <TruckStockTable />
    </div>
  );
};

export default TruckStockPage;
