import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import AddingButton from "../../../components/ui/AddingButton";
import TruckStockTable from "../../../components/ui/TruckStockTable";
import { toggleModal } from "../../../components/ui/Modal";
import { forms } from "./FormsPage";

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
