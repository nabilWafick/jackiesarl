// import { FaEdit, FaFile, FaTrash } from "react-icons/fa";
// import { toggleModal } from "../widgets/ToggleModal";

import { FC } from "react";
import FactureMECEF from "../../../../models/facture_mecef/facture_mecef.model";
import { FaEdit, FaFile, FaTrash } from "react-icons/fa";
import { toggleModal } from "../widgets/ToggleModal";
import { authenticatedEmployee } from "../../../../data/GlobalData";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
import useFactureMECEFStore from "../../../../store/facture_mecef/useFactureMECEF.store";
import FactureMECEFAPI from "../../../../api/facture_mecef/facture_mecef.api";
import MECEFBillUpdate from "../../../form/forms/mecef_bill_update/MECEFBillUpdate";
import "../../../../assets/css/Sidebar.css";

//import useFactureMECEFStore from "../../../../store/facture_mecef/useFactureMECEF.store";

interface MECEFBillTableProps {
  billList: FactureMECEF[];
}

const MECEFBillTable: FC<MECEFBillTableProps> = ({ billList }) => {
  const authenticatedEmploye = authenticatedEmployee.value;

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const setIsUpdate = useFactureMECEFStore((state) => state.setIsUpdate);

  const fetchAllClientsBill = useFactureMECEFStore(
    (state) => state.fetchAllClientsBill
  );

  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3 border-2 border-primary  rounded-lg shadow-md overflow-auto sidebar">
        <table className="table table-striped text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Quantité</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Référence</td>
              <td className="font-medium">Fichier </td>
              <td className="font-medium">Date de vente</td>
              <td className="font-medium">Date de facturation</td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>

            {billList.map((bill, index) => {
              return (
                <tr key={index}>
                  <td>
                    {bill.vente!.client!.prenoms} {bill.vente!.client!.prenoms}
                  </td>
                  <td>
                    {bill.vente!.quantite_achetee}
                    <i> t</i>
                  </td>
                  <td>
                    {bill.vente!.montant} <i> fcfa</i>
                  </td>
                  <td>{bill.reference}</td>
                  <td>
                    {bill.fichier == "" ? (
                      ""
                    ) : (
                      <a
                        href={bill.fichier as string}
                        target="_blank"
                        download={true}
                        className="flex justify-center self-center"
                      >
                        <FaFile className="text-secondary" />
                      </a>
                    )}
                  </td>
                  <td>
                    {new Date(bill.vente!.date_achat!).toLocaleDateString(
                      "fr-FR",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </td>
                  <td>
                    {new Date(bill.date_facture).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td>
                    <div>
                      <MECEFBillUpdate
                        key={Date.now() + bill!.id!}
                        id={bill!.id! as number}
                        id_achat={bill!.vente!.id!}
                        reference={bill!.reference}
                        file={bill!.fichier as string}
                        billDate={bill!.date_facture}
                        modalLabel={`mecef-bill-update-form-${bill!.id}`}
                      />
                      <i>
                        <FaEdit
                          color="green"
                          className=" hover:cursor-pointer"
                          onClick={() => {
                            setIsUpdate(true);
                            toggleModal(`mecef-bill-update-form-${bill!.id}`);
                          }}
                        />
                      </i>
                    </div>
                  </td>
                  <td>
                    <i>
                      <FaTrash
                        color="red"
                        className=" hover:cursor-pointer"
                        onClick={async () => {
                          const response = await FactureMECEFAPI.delete(
                            authenticatedEmploye!,
                            bill.id!
                          );

                          if (response!.status == 204) {
                            setActionResultMessage(
                              "La facture a été supprimée avec succès"
                            );
                            fetchAllClientsBill();
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
                              "La facture n'a pas été trouvée"
                            );
                            toggleModal("action-result-message");
                          } else {
                            setActionResultMessage(
                              "Erreur lors de la suppression de facture"
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
    </div>
  );
};

export default MECEFBillTable;
