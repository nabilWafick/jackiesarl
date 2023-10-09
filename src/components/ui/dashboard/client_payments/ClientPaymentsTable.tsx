import { FC } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import PaiementClient from "../../../../models/paiement_client/paiement.model";

interface ClientPaymentsTableProps {
  clientPayments: PaiementClient[];
}

const ClientPaymentsTable: FC<ClientPaymentsTableProps> = ({
  clientPayments,
}) => {
  return (
    <div className="flex flex-col justify-start w-full ">
      <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Numéro BC</td>
              <td className="font-medium">Categorie </td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Banque</td>
              <td className="font-medium">Reference</td>
              <td className="font-medium">Bordereau</td>

              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>

            {clientPayments.map((clientPayment) => {
              return (
                <tr key={clientPayment.id!}>
                  <td>{clientPayment.numero_bc}</td>
                  <td>{clientPayment.categorie}</td>
                  <td>{clientPayment.montant}</td>
                  <td>{clientPayment.banque}</td>
                  <td>{clientPayment.reference}</td>
                  <td>{clientPayment.bordereau}</td>
                  {/* <td>
                    <center className="flex items-center justify-center">
                      {clientPayment.est_valide ? (
                        <FaCheckCircle className="text-secondary" size={20} />
                      ) : (
                        <FaCheck className="text-secondary" size={20} />
                      )}
                    </center>
                  </td> */}
                  <td>
                    <center>
                      <FaEdit color="green" />
                    </center>
                  </td>
                  <td>
                    <center>
                      <FaTrash color="red" />
                    </center>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">
          Total paiement CIM Benin de la periode
        </span>
        <span className="ml-20 text-md">10 000 000</span>
      </div>
      <div className="flex flex-row items-center content-center">
        <span className=" text-md font-medium text-gray-700">
          Total paiement NOCIBE de la periode
        </span>
        <span className="ml-24 text-md">10 000 000</span>
      </div>
    </div>
  );
};

export default ClientPaymentsTable;
