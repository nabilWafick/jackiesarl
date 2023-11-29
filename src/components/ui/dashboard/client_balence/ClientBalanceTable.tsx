import { FC } from "react";
import SoldeClient from "../../../../models/solde_client/solde_client.model";
import "../../../../assets/css/Sidebar.css";

interface ClientBalanceTableProps {
  soldeClient: SoldeClient;
}

const ClientBalanceTable: FC<ClientBalanceTableProps> = ({ soldeClient }) => {
  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md overflow-auto sidebar">
        <table className="table table-striped text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
          <tbody>
            <tr>
              <td className="font-medium">Total des dettes de ce mois</td>
              <td className="text-end font-medium">
                {soldeClient!.total_dettes_mois} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td>CIM BENIN</td>
              <td className="text-end">
                {soldeClient!.total_dettes_mois_CIMBENIN} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td>NOCIBE</td>
              <td className="text-end">
                {soldeClient!.total_dettes_mois_NOCIBE} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td className="font-medium">Total des paiements</td>
              <td className="text-end font-medium">
                {soldeClient!.total_paiements_mois} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td>CIM BENIN</td>
              <td className="text-end">
                {soldeClient!.total_paiements_mois_CIMBENIN} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td>NOCIBE</td>
              <td className="text-end">
                {soldeClient!.total_paiements_mois_NOCIBE} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td className="font-medium">Créances</td>
              <td className="text-end font-medium">
                {soldeClient!.creance} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td>CIM BENIN</td>
              <td className="text-end">
                {soldeClient!.creance_CIMBENIN} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td>NOCIBE</td>
              <td className="text-end">
                {soldeClient!.creance_NOCIBE} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td className=" font-medium">Pourcentage Créances</td>
              <td className="text-end font-medium">
                {soldeClient!.pourcentage_creance_client} %
              </td>
            </tr>
            <tr>
              <td className="font-medium">Avance</td>
              <td className="text-end font-medium">
                {soldeClient!.avance} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td>CIM BENIN</td>
              <td className="text-end">
                {soldeClient!.avance_CIMBENIN} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td>NOCIBE</td>
              <td className="text-end">
                {soldeClient!.avance_NOCIBE} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td className=" font-medium">Pourcentage Avances</td>
              <td className="text-end font-medium">
                {soldeClient!.pourcentage_avance_client}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientBalanceTable;
