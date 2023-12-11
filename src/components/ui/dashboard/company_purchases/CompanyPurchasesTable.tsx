import { FC } from "react";
import AchatEntreprise from "../../../../models/achat_entreprise/achat_entreprise.model";
import { FaEdit, FaFile, FaTrash } from "react-icons/fa";
import { toggleModal } from "../widgets/ToggleModal";
import useCompanyPurchasesListStore from "../../../../store/achat_entreprise/useAchatEntreprise.store";
import { authenticatedEmployee } from "../../../../data/GlobalData";

import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
import AchatEntrepriseAPI from "../../../../api/achat_entreprise/achat_entreprise.api";
import CompanyPurchasseUpdate from "../../../form/forms/company_purchase_update/CompanyPurchaseUpdate";
import "../../../../assets/css/Sidebar.css";

interface CompanyPurchasesTableProps {
  companyPurchases: AchatEntreprise[];
}

const CompanyPurchasesTable: FC<CompanyPurchasesTableProps> = ({
  companyPurchases,
}) => {
  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );
  const authenticatedEmploye = authenticatedEmployee.value;

  const fetchAllCompanyPurchases = useCompanyPurchasesListStore(
    (state) => state.fetchAllCompanyPurchases
  );

  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <h2 className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</h2> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md overflow-auto sidebar">
        <table className="table table-striped text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
          <tbody>
            <tr>
              <td className="font-medium">Bon de commande</td>
              <td className="font-medium">Catégorie</td>
              <td className="font-medium">Quantité Achetée</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Banque</td>
              <td className="font-medium">Chèque</td>
              <td className="font-medium">Bordereau</td>
              <td className="font-medium">Date d'achat</td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>
            {companyPurchases.map((companyPurchase) => (
              <tr key={companyPurchases.indexOf(companyPurchase)}>
                <td>{companyPurchase.bon_commande}</td>
                <td>{companyPurchase.categorie}</td>
                <td>
                  {companyPurchase.quantite_achetee}
                  <i> t</i>
                </td>
                <td>
                  {companyPurchase.montant}
                  <i> fcfa</i>
                </td>
                <td>{companyPurchase.banque}</td>
                <td>{companyPurchase.cheque}</td>
                <td>
                  {companyPurchase.bordereau == "" ? (
                    ""
                  ) : (
                    <a
                      href={companyPurchase.bordereau as string}
                      target="_blank"
                      download={true}
                      className="flex justify-center self-center"
                    >
                      <FaFile className="text-secondary" />
                    </a>
                  )}
                </td>
                <td>
                  {new Date(companyPurchase.date_achat!)!.toLocaleDateString(
                    "fr-FR",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </td>
                <td>
                  <CompanyPurchasseUpdate
                    key={Date.now() + companyPurchase.bon_commande}
                    bcNumber={companyPurchase.bon_commande.toString()}
                    category={companyPurchase.categorie}
                    purchasedQuantity={companyPurchase.quantite_achetee.toString()}
                    check={companyPurchase.cheque.toString()}
                    bank={companyPurchase.banque}
                    amount={companyPurchase.montant.toString()}
                    slip={companyPurchase.bordereau}
                    modalLabel={`company-purchase-update-form-${companyPurchase.bon_commande}`}
                  />
                  <FaEdit
                    color="green"
                    onClick={() => {
                      toggleModal(
                        `company-purchase-update-form-${companyPurchase.bon_commande}`
                      );
                    }}
                  />
                </td>
                <td>
                  <FaTrash
                    color="red"
                    onClick={async () => {
                      const response = await AchatEntrepriseAPI.delete(
                        authenticatedEmploye!,
                        companyPurchase.bon_commande!
                      );
                      if (response!.status == 204) {
                        setActionResultMessage(
                          "L'achat de l'entreprise a été supprimé avec succès"
                        );
                        fetchAllCompanyPurchases();
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
                          "L'achat de l'entreprise n'a pas été trouvé"
                        );
                        toggleModal("action-result-message");
                      } else if (response!.status == 406) {
                        setActionResultMessage(response!.error);
                        toggleModal("action-result-message");
                      } else {
                        setActionResultMessage(
                          "Erreur lors de la suppression de l'achat de l'entreprise"
                        );
                        toggleModal("action-result-message");
                      }
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium">Montant total</span>
        <span className="ml-20 text-md">60 000 000</span>
      </div> */}
    </div>
  );
};

export default CompanyPurchasesTable;
