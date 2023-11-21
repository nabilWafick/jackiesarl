import { FC } from "react";
import Brouillard from "../../../../models/brouillard/brouillard.model";
import useBrouillardStore from "../../../../store/brouillard/useBrouillard.store";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import BrouillardAPI from "../../../../api/brouillard/brouillard.api";
import { toggleModal } from "../widgets/ToggleModal";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
import FogStockUpdate from "../../../form/forms/fog_stock_increase/FogStockIncrease";
import FogUpdate from "../../../form/forms/fog_update/FogUpdate";
import { authenticatedEmployee } from "../../../../data/GlobalData";

interface FogTableProps {
  fogs: Brouillard[];
}

const FogTable: FC<FogTableProps> = ({ fogs }) => {
  const setSelectedBrouillard = useBrouillardStore(
    (state) => state.setSelectedBrouillard
  );
  const authenticatedEmploye = authenticatedEmployee.value;

  const fetchAllBrouillard = useBrouillardStore(
    (state) => state.fetchAllBrouillard
  );
  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <h2 className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</h2> */}
      <div
        className="
          flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md"
      >
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Dépot</td>
              <td className="font-medium">Stock Actuel</td>
              <td className="font-medium">Nom Gérant</td>
              <td className="font-medium">Num Gérant</td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>

              <td className="font-medium"></td>
            </tr>

            {fogs.map((fog) => (
              <tr key={fog.id}>
                <td>
                  <Link
                    className=" text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                    onClick={() => setSelectedBrouillard(fog)}
                    to="/brouillard/details"
                  >
                    {fog.depot}
                  </Link>
                </td>
                <td>
                  <Link
                    className=" text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                    onClick={() => setSelectedBrouillard(fog)}
                    to="/brouillard/details"
                  >
                    {fog.stock_actuel}
                    <i> t</i>
                  </Link>
                </td>

                <td>
                  <Link
                    className=" text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                    onClick={() => setSelectedBrouillard(fog)}
                    to="/brouillard/details"
                  >
                    {fog.nom_gerant}
                  </Link>
                </td>
                <td>
                  <Link
                    className=" text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                    onClick={() => setSelectedBrouillard(fog)}
                    to="/brouillard/details"
                  >
                    {fog.numero_gerant}
                  </Link>
                </td>
                <td>
                  <div>
                    <FogStockUpdate
                      key={Date.now() + fog.id!}
                      id={fog.id!}
                      deposit={fog.depot}
                      currentStock={fog.stock_actuel.toString()}
                      managerName={fog.nom_gerant}
                      managerNumber={fog.numero_gerant}
                      modalLabel={`fog-stock-update-form-${fog.id}`}
                    />
                    <i className="flex justify-end">
                      <FaPlus
                        className="text-secondary"
                        onClick={() =>
                          toggleModal(`fog-stock-update-form-${fog.id}`)
                        }
                      />
                    </i>
                  </div>
                </td>
                <td>
                  <div>
                    <FogUpdate
                      key={Date.now() + fog.id!}
                      id={fog.id!}
                      deposit={fog.depot}
                      currentStock={fog.stock_actuel.toString()}
                      managerName={fog.nom_gerant}
                      managerNumber={fog.numero_gerant}
                      modalLabel={`fog-update-form-${fog.id}`}
                    />
                    <i className="flex justify-end">
                      <FaEdit
                        color="green"
                        onClick={() => toggleModal(`fog-update-form-${fog.id}`)}
                      />
                    </i>
                  </div>
                </td>
                <td>
                  <i className="flex justify-end">
                    <FaTrash
                      color="red"
                      onClick={async () => {
                        const response = await BrouillardAPI.delete(
                          authenticatedEmploye!,
                          fog.id!
                        );

                        if (response!.status == 204) {
                          setActionResultMessage(
                            "La dépôt a été supprimé avec succès"
                          );
                          fetchAllBrouillard();
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
                          setActionResultMessage("La dépôt n'a pas été trouvé");
                          toggleModal("action-result-message");
                        } else {
                          setActionResultMessage(
                            "Erreur lors de la suppression de dépôt"
                          );
                          toggleModal("action-result-message");
                        }
                      }}
                    />
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FogTable;
