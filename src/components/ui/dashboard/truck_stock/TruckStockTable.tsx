import { FaEdit, FaTrash } from "react-icons/fa";
import StockCamion from "../../../../models/stock_camion/stock_camion.model";
import { FC } from "react";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
import TruckStockUpadate from "../../../form/forms/truck_stock_update/TruckStockUpdate";
import { toggleModal } from "../widgets/ToggleModal";
import useTrucksStockStore from "../../../../store/stock_camion/useStockCamion.store";
import StockCamionAPI from "../../../../api/stock_camion/stock_camion.api";
import { authenticatedEmployee } from "../../../../data/GlobalData";
import "../../../../assets/css/Sidebar.css";

interface TruckStockTableProps {
  trucksStock: StockCamion[];
}

const TruckStockTable: FC<TruckStockTableProps> = ({ trucksStock }) => {
  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );
  const authenticatedEmploye = authenticatedEmployee.value;

  const fetchAllTruckStock = useTrucksStockStore(
    (state) => state.fetchAllTruckStock
  );

  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <h2 className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</h2> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md overflow-auto sidebar">
        <table className="table table-striped text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
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
                  <td>
                    {truckStock.quantite}
                    <i> t</i>
                  </td>
                  <td>
                    <div>
                      <TruckStockUpadate
                        key={Date.now() + truckStock.id!}
                        id={truckStock.id!}
                        truckNumber={truckStock.numero_camion}
                        category={truckStock.categorie}
                        quantity={truckStock.quantite.toString()}
                        bcNumber={truckStock.numero_bc.toString()}
                        driverNumber={truckStock.numero_chauffeur}
                        modalLabel={`truck-stock-update-form-${truckStock.id}`}
                      />
                      <i className="flex justify-end">
                        <FaEdit
                          color="green"
                          onClick={() => {
                            toggleModal(
                              `truck-stock-update-form-${truckStock.id}`
                            );
                          }}
                        />
                      </i>
                    </div>
                  </td>
                  <td>
                    <i className="flex justify-end">
                      <FaTrash
                        color="red"
                        onClick={async () => {
                          const response = await StockCamionAPI.delete(
                            authenticatedEmploye!,
                            truckStock.id!
                          );
                          if (response!.status == 204) {
                            setActionResultMessage(
                              "Le stock camion a été supprimé avec succès"
                            );
                            fetchAllTruckStock();
                            toggleModal("action-result-message");
                          } else if (response!.status == 401) {
                            setActionResultMessage(
                              `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
                            );
                            toggleModal("action-result-message");
                          } else if (response!.status == 403) {
                            setActionResultMessage(response!.error);
                            toggleModal("action-result-message");
                          } else if (response!.status == 404) {
                            setActionResultMessage(
                              "Le stock camion n'a pas été trouvé"
                            );
                            toggleModal("action-result-message");
                          } else {
                            setActionResultMessage(
                              "Erreur lors de la suppression du stock camion"
                            );
                            toggleModal("action-result-message");
                          }
                        }}
                      />
                    </i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">
          Stock Total
        </span>
        <span className="ml-80 text-md">1500t</span>
      </div> */}
    </div>
  );
};

export default TruckStockTable;
