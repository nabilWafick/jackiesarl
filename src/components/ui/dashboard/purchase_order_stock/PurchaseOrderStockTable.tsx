import { FC } from "react";
import StockBonCommande from "../../../../models/stock_bon_commande/stock_bon_commande.model";

interface PurchaseOrderStockTableProps {
  purchasesOrderStock: StockBonCommande[];
}

const PurchaseOrderStockTable: FC<PurchaseOrderStockTableProps> = ({
  purchasesOrderStock,
}) => {
  return (
    <div className="flex flex-col justify-start w-full ">
      <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Bon de Commande</td>
              <td className="font-medium">Catégorie</td>
              <td className="font-medium">Quantite Achetee</td>
              <td className="font-medium">Stock Avant Vente</td>
              <td className="font-medium">Vente</td>
              <td className="font-medium">Stock Après Vente </td>
            </tr>

            {purchasesOrderStock.map((purchaseOrderStock) => {
              return (
                <tr key={purchaseOrderStock.id!}>
                  <td>{purchaseOrderStock.numero_bc}</td>
                  <td>{purchaseOrderStock.categorie}</td>
                  <td>{purchaseOrderStock.quantite_achetee}</td>
                  <td>{purchaseOrderStock.stock_avant_vente}</td>
                  <td>{purchaseOrderStock.vente}</td>
                  <td>{purchaseOrderStock.stock_apres_vente}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">
          Stock Total
        </span>
        <span className="ml-80 text-md">1500t</span>
      </div>
    </div>
  );
};

export default PurchaseOrderStockTable;
