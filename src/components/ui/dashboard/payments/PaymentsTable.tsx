import { FC } from "react";
import PaiementClientValidation from "../../../../models/paiement_client_validation/paiement_client_validation.model";

interface ClientsPaymentsTableProps {
  clientsPayments: PaiementClientValidation[];
}

const PaymentsTable: FC<ClientsPaymentsTableProps> = ({ clientsPayments }) => {
  return (
    <div className="flex flex-col justify-start w-full ">
      <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Banque</td>
              <td className="font-medium">Reference</td>
              <td className="font-medium">Categorie </td>
              <td className="font-medium">Bon de commande </td>
              <td className="font-medium">Bordereau</td>
            </tr>
            {clientsPayments.map((clientsPayment) => (
              <tr key={clientsPayment.id}>
                <td>
                  {clientsPayment.client.prenoms} {clientsPayment.client.nom}
                </td>
                <td>{clientsPayment.montant}</td>
                <td>{clientsPayment.banque}</td>
                <td>{clientsPayment.reference}</td>
                <td>{clientsPayment.categorie}</td>
                <td>{clientsPayment.numero_bc}</td>
                <td>{clientsPayment.bordereau}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">
          Total des paiements
        </span>
        <span className="ml-20 text-md">10 000 000</span>
      </div>
    </div>
  );
};

export default PaymentsTable;
