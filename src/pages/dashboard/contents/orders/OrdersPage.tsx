import OrdersTable from "../../../../components/ui/dashboard/orders/OrdersTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import "../../../../assets/css/table.css";
import OrderAdding from "../../../../components/form/forms/order_adding/OrderAdding";
import useCommandesStore from "../../../../store/commandes/useCommandes.store";
import { useEffect } from "react";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";
import useClientsStore from "../../../../store/clients/useClients.store";
const OrdersPage = () => {
  const setOrderClient = useClientsStore((state) => state.setOrderClient);
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
            setOrderClient(undefined);
            toggleModal("order-adding-form");
          }}
        />
        <OrderAdding
          clientName=""
          quantity=""
          destination=""
          orderDate={undefined}
          deliveryDate={undefined}
          category=""
        />
        <ActionResult />
      </div>
      <OrdersTable orders={orders} />
    </div>
  );
};

export default OrdersPage;
