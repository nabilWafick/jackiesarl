import { FaCheck, FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";
import PaiementClientValidation from "../../../../models/paiement_client_validation/paiement_client_validation.model";
import { FC } from "react";

interface ClientsPaymentsValidationsTableProps {
  clientsPaymentsValidations: PaiementClientValidation[];
}

const ClientsPaymentsValidationsTable: FC<
  ClientsPaymentsValidationsTableProps
> = ({ clientsPaymentsValidations }) => {
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
              <td></td>
              <td></td>
              <td></td>
            </tr>

            {clientsPaymentsValidations.map((clientsPaymentValidation) => (
              <tr key={clientsPaymentValidation.id}>
                <td>
                  {clientsPaymentValidation.client.prenoms}{" "}
                  {clientsPaymentValidation.client.nom}
                </td>
                <td>{clientsPaymentValidation.montant}</td>
                <td>{clientsPaymentValidation.banque}</td>
                <td>{clientsPaymentValidation.reference}</td>
                <td>{clientsPaymentValidation.categorie}</td>
                <td>{clientsPaymentValidation.numero_bc}</td>
                <td>{clientsPaymentValidation.bordereau}</td>
                <td className="w-min">
                  {clientsPaymentValidation.est_valide ? (
                    <center className="flex justify-end">
                      <FaCheckCircle className="text-secondary" size={20} />
                    </center>
                  ) : (
                    <center className="flex justify-end">
                      <FaCheck className="text-secondary" size={20} />
                    </center>
                  )}
                </td>
                <td>
                  <center className="flex justify-end">
                    <FaEdit color="green" />
                  </center>
                </td>
                <td>
                  <center className="flex justify-end">
                    <FaTrash color="red" />
                  </center>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium">Total des paiements</span>
        <span className="ml-20 text-md  text-gray-700">10 000 000</span>
      </div>
    </div>
  );
};

export default ClientsPaymentsValidationsTable;
