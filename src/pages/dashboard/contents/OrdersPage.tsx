import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import AddingButton from "../../../components/ui/AddingButton";
import OrdersTable from "../../../components/ui/OrdersTable";
import { toggleModal } from "../../../components/ui/Modal";
import { forms } from "./FormsPage";

const OrdersPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        {/* <JSCategorySelect
          id="categoty"
          name="category"
          options={[
            { value: "increasing", label: "Ordre croissant" },
            { value: "decreasing", label: "Ordre décroissant" },
          ]}
        /> */}
        <AddingButton
          option="une nouvelle commande"
          onClick={() => {
            toggleModal("order-adding-form");
          }}
        />
        {forms.find((form) => form.label === "order-adding-form")?.form}
      </div>
      <OrdersTable />
    </div>
  );
};

export default OrdersPage;
