import OrdersTable from "../../../../components/ui/dashboard/orders/OrdersTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import "../../../../assets/css/table.css";
import OrderAdding from "../../../../components/form/forms/order_adding/OrderAdding";
import useCommandesStore from "../../../../store/commandes/useCommandes.store";
import { useEffect } from "react";

const OrdersPage = () => {
  const orders = useCommandesStore((state) => state.clientsOrders);
  const fetchAllClientsOrders = useCommandesStore(
    (state) => state.fetchAllClientsOrders
  );

  useEffect(() => {
    fetchAllClientsOrders();
  }, [fetchAllClientsOrders]);
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
          option="Ajouter une commande"
          onClick={() => {
            toggleModal("order-adding-form");
          }}
        />
        <OrderAdding
          firstname=""
          lastname=""
          quantity=""
          destination=""
          orderDate={1000}
          deliveryDate={1500}
          category=""
        />
      </div>
      <OrdersTable orders={orders} />
    </div>
  );
};

export default OrdersPage;
