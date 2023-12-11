import { FC } from "react";
import PaiementClient from "../../../../models/paiement_client/paiement.model";
import { FaFile } from "react-icons/fa";
import "../../../../assets/css/Sidebar.css";

interface ClientsPaymentsTableProps {
  clientsPayments: PaiementClient[];
}

const PaymentsTable: FC<ClientsPaymentsTableProps> = ({ clientsPayments }) => {
  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md overflow-auto sidebar">
        <table className="table table-striped text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Banque</td>
              <td className="font-medium">Reference</td>
              <td className="font-medium">Categorie </td>
              <td className="font-medium">Bon de commande </td>
              <td className="font-medium">Bordereau</td>
              <td className="font-medium">Date de paiement</td>
            </tr>
            {clientsPayments.map((clientsPayment) => {
              if (clientsPayment.est_valide == 1) {
                return (
                  <tr key={clientsPayment.id}>
                    <td>
                      {clientsPayment.client!.prenoms}{" "}
                      {clientsPayment.client!.nom}
                    </td>
                    <td>
                      {clientsPayment.montant} <i> fcfa</i>
                    </td>
                    <td>{clientsPayment.banque}</td>
                    <td>{clientsPayment.reference}</td>
                    <td>{clientsPayment.categorie}</td>
                    <td>{clientsPayment.numero_bc}</td>

                    <td>
                      {clientsPayment.bordereau == "" ? (
                        ""
                      ) : (
                        <a
                          href={clientsPayment.bordereau as string}
                          target="_blank"
                          download={true}
                          className="flex justify-center self-center"
                        >
                          <FaFile
                            className="text-secondary"
                            onClick={() => {
                              //  setFileLink(clientsPayment.bordereau as string);
                              //  toggleModal("file-shower");
                            }}
                          />
                        </a>
                      )}
                    </td>
                    <td>
                      {new Date(
                        clientsPayment.date_paiement!
                      )!.toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">
          Total des paiements
        </span>
        <span className="ml-20 text-md">10 000 000</span>
      </div> */}
    </div>
  );
};

export default PaymentsTable;
