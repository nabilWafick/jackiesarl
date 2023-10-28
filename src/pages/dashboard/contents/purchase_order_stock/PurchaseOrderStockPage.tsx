import PurchaseOrderStockTable from "../../../../components/ui/dashboard/purchase_order_stock/PurchaseOrderStockTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";

import "../../../../assets/css/table.css";
import PurchaseOrderStockAdding from "../../../../components/form/forms/purchase_order_stock_adding/PurchaseOrderStockAdding";
import usePurchasesOrderStockStore from "../../../../store/stock_bon_commande/useStockBonCommande.store";
import { useEffect } from "react";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";

const PurchaseOrderStockPage = () => {
  const purchasesOrderStock = usePurchasesOrderStockStore(
    (state) => state.purchasesOrderStock
  );
  const fetchAllPurchasesOrderStock = usePurchasesOrderStockStore(
    (state) => state.fetchAllPurchasesOrderStock
  );

  useEffect(() => {
    fetchAllPurchasesOrderStock();
  }, [fetchAllPurchasesOrderStock]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-end items-center mt-2 my-3 content-center">
        <AddingButton
          option="Ajouter un stock bon de commande"
          onClick={() => {
            toggleModal("purchase-order-stock-adding-form");
          }}
        />
        <PurchaseOrderStockAdding
          bcNumber=""
          //  category=""
          //  purchasedQuantity=""
          initialStock=""
          //  sale=""
          //  quantityAfterSelling=""
        />
        <ActionResult />
      </div>
      <PurchaseOrderStockTable purchasesOrderStock={purchasesOrderStock} />
    </div>
  );
};

export default PurchaseOrderStockPage;
