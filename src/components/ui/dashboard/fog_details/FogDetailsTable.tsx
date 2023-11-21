import { FC } from "react";
import ActivitesDepot from "../../../../models/activites_depot/activites_depot.model";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toggleModal } from "../widgets/ToggleModal";
import ActivitesDepotAPI from "../../../../api/activites_depot/activites_depot.api";
import { authenticatedEmployee } from "../../../../data/GlobalData";

import useActivitesDepotStore from "../../../../store/activites_depot/useActivitesDepot.store";
import FogDetailsUpdate from "../../../form/forms/fog_details_update/FogDetailsUpdate";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";

interface FogDetailsTableProps {
  fogDetails: ActivitesDepot[];
}

const FogDetailsTable: FC<FogDetailsTableProps> = ({ fogDetails }) => {
  const authenticatedEmploye = authenticatedEmployee.value;
  const fetchAllActivitesDepot = useActivitesDepotStore(
    (state) => state.fetchAllActivitesDepot
  );
  const selectedDepotId = useActivitesDepotStore(
    (state) => state.selectedDepotId
  );
  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  let totalVente = 0;
  let totalVersement = 0;
  let totalDepense = 0;

  fogDetails.forEach((fogDetail) => {
    totalVente += fogDetail.vente;
    totalVersement += fogDetail.versement;
    totalDepense += fogDetail.depense;
  });

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
              <td className="font-medium">Quantité Avant Vente</td>
              <td className="font-medium">Vente</td>
              <td className="font-medium">Quantité Après Vente</td>
              <td className="font-medium">Versement</td>
              <td className="font-medium">Dépense</td>
              <td className="font-medium">Observation</td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>

            {fogDetails.map((fogDetail) => (
              <tr key={fogDetail.id}>
                <td>
                  {fogDetail.quantite_avant_vente}
                  <i> t</i>
                </td>
                <td>
                  {fogDetail.vente}
                  <i> t</i>
                </td>
                <td>
                  {fogDetail.quantite_apres_vente}
                  <i> t</i>
                </td>
                <td>
                  {fogDetail.versement} <i> fcfa</i>
                </td>
                <td>
                  {fogDetail.depense} <i> fcfa</i>
                </td>
                <td>{fogDetail.observation}</td>
                <td>
                  <FogDetailsUpdate
                    key={Date.now() + fogDetail.id!}
                    id={fogDetail.id!}
                    quantityBeforeSelling={fogDetail.quantite_avant_vente.toString()}
                    quantityAfterSelling={fogDetail.quantite_apres_vente.toString()}
                    sale={fogDetail.vente.toString()}
                    expense={fogDetail.depense.toString()}
                    payment={fogDetail.versement.toString()}
                    observation={fogDetail.observation}
                    modalLabel={`fog-details-update-form-${fogDetail.id}`}
                  />
                  <FaEdit
                    color="green"
                    onClick={() => {
                      toggleModal(`fog-details-update-form-${fogDetail.id}`);
                    }}
                  />
                </td>
                <td>
                  <FaTrash
                    color="red"
                    onClick={async () => {
                      const response = await ActivitesDepotAPI.delete(
                        authenticatedEmploye!,
                        fogDetail.id!
                      );
                      if (response!.status == 204) {
                        setActionResultMessage(
                          "L'activité depôt a été supprimé avec succès"
                        );
                        fetchAllActivitesDepot(selectedDepotId);
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
                          "L'activité depôt n'a pas été trouvé"
                        );
                        toggleModal("action-result-message");
                      } else if (response!.status == 406) {
                        setActionResultMessage(response!.error);
                        toggleModal("action-result-message");
                      } else {
                        setActionResultMessage(
                          "Erreur lors de la suppression de l'activité depôt"
                        );
                        toggleModal("action-result-message");
                      }
                    }}
                  />
                </td>
              </tr>
            ))}

            <tr>
              <td className=" font-medium">Total</td>
              <td className=" font-medium">
                {totalVente} <i> t</i>
              </td>
              <td className=" font-medium"></td>
              <td className=" font-medium">
                {totalVersement} <i> fcfa</i>
              </td>
              <td className=" font-medium">
                {totalDepense} <i> fcfa</i>
              </td>
              <td className=" font-medium"></td>
              <td className=" font-medium"> </td>
              <td className=" font-medium"> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FogDetailsTable;
