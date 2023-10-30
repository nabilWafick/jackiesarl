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
import JSSelect from "../../../../components/form/widgets/Select.widget";
const OrdersPage = () => {
  const setOrderClient = useClientsStore((state) => state.setOrderClient);
  const orders = useCommandesStore((state) => state.clientsOrders);
  const fetchAllClientsOrders = useCommandesStore(
    (state) => state.fetchAllClientsOrders
  );

  const selectedSortOption = useCommandesStore(
    (state) => state.selectedSortOption
  );
  const startDate = useCommandesStore((state) => state.startDate);
  const endDate = useCommandesStore((state) => state.endDate);
  const onSelectedSetOptionChange = useCommandesStore(
    (state) => state.onSelectedSetOptionChange
  );
  const onStartDateChange = useCommandesStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = useCommandesStore((state) => state.onEndDateChange);
  const resetDatesInterval = useCommandesStore(
    (state) => state.resetDatesInterval
  );

  useEffect(() => {
    fetchAllClientsOrders();
  }, [fetchAllClientsOrders]);
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex self-end items-center">
        <AddingButton
          option="Ajouter une commande"
          onClick={() => {
            setOrderClient(undefined);
            toggleModal("order-adding-form");
          }}
        />
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall
          selectedStartDate={startDate}
          selectedEndDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
          resetDatesInterval={resetDatesInterval}
        />

        <JSSelect
          id="clients-select"
          name="clients-select"
          selectedOption={selectedSortOption}
          options={[
            { value: "new-to-old", label: "Nouveau à Ancien" },
            { value: "old-to-new", label: "Ancien à Nouveau" },
            { value: "more-important", label: "Plus Important" },
            { value: "less-important", label: "Moins Important" },
            {
              value: "cim-benin-more-important",
              label: "CIM BENIN Plus Important",
            },
            {
              value: "cim-benin-less-important",
              label: "CIM BENIN Moins important",
            },
            {
              value: "nocibe-more-important",
              label: "NOCIBE Plus Important",
            },
            {
              value: "nocibe-less-important",
              label: "NOCIBE Moins Important",
            },
            {
              value: "delivered",
              label: "Livrée",
            },
            {
              value: "undelivered",
              label: "Non livrée",
            },
            {
              value: "destination",
              label: "Par destination",
            },
          ]}
          onChange={onSelectedSetOptionChange}
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
