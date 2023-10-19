import { FC } from "react";
import AchatEntreprise from "../../../../models/achat_entreprise/achat_entreprise.model";
import { FaFile } from "react-icons/fa";
interface CompanyPurchasesTableProps {
  companyPurchases: AchatEntreprise[];
}

const CompanyPurchasesTable: FC<CompanyPurchasesTableProps> = ({
  companyPurchases,
}) => {
  const openSlipFile = (file: string) => {
    try {
      window.open(file, "_blank");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <h2 className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</h2> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Bon de commande</td>
              <td className="font-medium">Catégorie</td>
              <td className="font-medium">Quantité Achetée</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Banque</td>
              <td className="font-medium">Chèque</td>
              <td className="font-medium">Bordereau</td>
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
                    <FaFile
                      className="text-secondary"
                      onClick={() =>
                        openSlipFile(companyPurchase.bordereau.toString())
                      }
                    />
                  )}
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
