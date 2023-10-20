import { FC } from "react";
import Vente from "../../../../models/vente/vente.model";

interface SalesTableProps {
  sales: Vente[];
}

const SalesTable: FC<SalesTableProps> = ({ sales }) => {
  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Quantite </td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Bon de Commande</td>
              <td className="font-medium">Categorie</td>
            </tr>

            {sales.map((sale) => {
              return (
                <tr key={sale.id}>
                  <td>
                    {sale.client.prenoms} {sale.client.nom}
                  </td>
                  <td>
                    {sale.quantite_achetee}
                    <i> t</i>
                  </td>
                  <td>
                    {sale.montant} <i> fcfa</i>
                  </td>
                  <td>{sale.numero_bc}</td>
                  <td>{sale.categorie}</td>
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
      </div>
      <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">Montant</span>
        <span className=" ml-80 text-md">8 040 000</span>
      </div> */}
    </div>
  );
};

export default SalesTable;
