//import { FaEdit, FaTrash } from "react-icons/fa";
import SoldeCourant from "../../../../models/solde_courant/solde_courant.model";
import { FC, useEffect } from "react";
import useActivitesBanque from "../../../../store/activites_banque/useActivitesBanque.store";
import CurrentBalenceDetailsUpdate from "../../../form/forms/current_balence_details_update/CurrentBalenceDetailsUpdate";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toggleModal } from "../widgets/ToggleModal";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
import ActivitesBanqueAPI from "../../../../api/activites_banque/activites_banque.api";
import { authenticatedEmployee } from "../../../../data/GlobalData";

interface CurrentsBalenceDetailsTableProps {
  selectedBank: SoldeCourant | undefined;
}

const CurrentsBalenceTable: FC<CurrentsBalenceDetailsTableProps> = ({
  selectedBank,
}) => {
  const currentsBalenceDetails = useActivitesBanque(
    (state) => state.activitesBanque
  );
  const fetchAllActivitesBanque = useActivitesBanque(
    (state) => state.fetchAllActivitesBanque
  );
  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  useEffect(() => {
    fetchAllActivitesBanque(selectedBank!.id!);
  }, [fetchAllActivitesBanque, selectedBank]);

  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
          <tbody>
            <tr>
              <td className="font-medium">Description</td>
              <td className="font-medium">Débit</td>
              <td className="font-medium">Crédit</td>
              <td className="font-medium">Solde Actuel</td>
              <td className="font-medium">Date d'écriture</td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>

            {currentsBalenceDetails.map((currentBalence) => (
              <tr key={currentBalence.id}>
                <td>{currentBalence.description}</td>
                <td>
                  {currentBalence.debit} <i> fcfa</i>
                </td>
                <td>
                  {currentBalence.credit} <i> fcfa</i>
                </td>
                <td>
                  {currentBalence.solde_actuel} <i> fcfa</i>
                </td>
                <td>
                  {new Date(currentBalence.date_activite!)!.toLocaleDateString(
                    "fr-FR",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </td>
                <td>
                  <div>
                    <CurrentBalenceDetailsUpdate
                      key={Date.now() + currentBalence.id!}
                      id={currentBalence.id!}
                      id_banque={currentBalence.id_banque}
                      description={currentBalence.description}
                      debit={currentBalence.debit.toString()}
                      credit={currentBalence.credit.toString()}
                      currentBalence={currentBalence.solde_actuel.toString()}
                      modalLabel={`current-balence-details-update-form-${currentBalence.id}`}
                    />

                    <i className="flex justify-end">
                      <FaEdit
                        color="green"
                        onClick={() => {
                          toggleModal(
                            `current-balence-details-update-form-${currentBalence.id}`
                          );
                        }}
                      />
                    </i>
                  </div>
                </td>
                <td>
                  <i className="flex justify-en d">
                    <FaTrash
                      color="red"
                      onClick={async () => {
                        const response = await ActivitesBanqueAPI.delete(
                          authenticatedEmployee.value!,
                          currentBalence.id!
                        );

                        if (response!.status == 204) {
                          setActionResultMessage(
                            "L'activité de la banque a été supprimée avec succès"
                          );
                          fetchAllActivitesBanque(selectedBank!.id!);
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
                            "L'activité de la banque n'a pas été trouvée"
                          );
                          toggleModal("action-result-message");
                        } else if (response!.status == 406) {
                          setActionResultMessage(response!.error);
                          toggleModal("action-result-message");
                        } else {
                          setActionResultMessage(
                            "Erreur lors de la suppression de l'activité de la banque"
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

export default CurrentsBalenceTable;
