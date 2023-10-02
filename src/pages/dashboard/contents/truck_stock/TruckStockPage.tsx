import TruckStockTable from "../../../../components/ui/dashboard/truck_stock/TruckStockTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import "../../../../assets/css/table.css";
import TruckStockAdding from "../../../../components/form/forms/truck_stock_adding/TruckStockAdding";

const TruckStockPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton
          option="Ajouter un stock de camion"
          onClick={() => {
            toggleModal("truck-stock-adding-form");
          }}
        />
        <TruckStockAdding
          truckNumber=""
          category=""
          driverNumber=""
          bcNumber=""
          quantity=""
        />
      </div>
      <TruckStockTable />
    </div>
  );
};

export default TruckStockPage;
