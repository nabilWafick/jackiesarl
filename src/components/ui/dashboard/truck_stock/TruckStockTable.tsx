import { FaEdit, FaTrash } from "react-icons/fa";
import StockCamion from "../../../../models/stock_camion/stock_camion.model";
import { FC } from "react";

interface TruckStockTableProps {
  trucksStock: StockCamion[];
}

const TruckStockTable: FC<TruckStockTableProps> = ({ trucksStock }) => {
  return (
    <div className="flex flex-col justify-start w-full ">
      <h2 className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</h2>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Num Camion</td>
              <td className="font-medium">Catégorie</td>
              <td className="font-medium">Num Chauffeur</td>
              <td className="font-medium">Bon Commande</td>
              <td className="font-medium">Quantite</td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>

            {trucksStock.map((truckStock) => {
              return (
                <tr key={truckStock.id!}>
                  <td>{truckStock.numero_camion}</td>
                  <td>{truckStock.categorie}</td>
                  <td>{truckStock.numero_chauffeur}</td>
                  <td>{truckStock.numero_bc}</td>
                  <td>{truckStock.quantite}</td>
                  <td>
                    <i className="flex justify-end">
                      <FaEdit color="green" />
                    </i>
                  </td>
                  <td>
                    <i className="flex justify-end">
                      <FaTrash color="red" />
                    </i>
                  </td>
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

export default TruckStockTable;
