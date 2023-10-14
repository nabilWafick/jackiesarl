import { FaEdit, FaFile, FaTrash } from "react-icons/fa";
import AchatClient from "../../../../models/achat_client/achat_client.model";
import { FC } from "react";
import ClientPurchaseAdding from "../../../form/forms/client_purchase_adding/ClientPurchaseAdding";
import { toggleModal } from "../widgets/ToggleModal";

interface ClientPurchasesTableProps {
  clientPurchases: AchatClient[];
}

const ClientPurchasesTable: FC<ClientPurchasesTableProps> = ({
  clientPurchases,
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
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3 border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Quantite</td>
              <td className="font-medium">Categorie</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Numero CTP</td>
              <td className="font-medium">Bordereau </td>
              <td className="font-medium">Bon de Commande</td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>

            {clientPurchases.map((clientPurchase) => {
              return (
                <tr key={clientPurchase.id!}>
                  <td>{clientPurchase.quantite_achetee}</td>
                  <td>{clientPurchase.categorie}</td>
                  <td>{clientPurchase.montant}</td>
                  <td>{clientPurchase.numero_ctp}</td>
                  <td>
                    <div>
                      <ClientPurchaseAdding
                        quantity={clientPurchase.quantite_achetee.toString()}
                        category={clientPurchase.categorie}
                        amount={clientPurchase.montant.toString()}
                        ctpNumber={clientPurchase.numero_ctp}
                        slip={clientPurchase.bordereau}
                        bcNumber={clientPurchase.numero_bc.toString()}
                      />
                      {clientPurchase.bordereau == "" ? (
                        ""
                      ) : (
                        <FaFile
                          className="text-secondary"
                          onClick={() =>
                            openSlipFile(clientPurchase.bordereau.toString())
                          }
                        />
                      )}
                    </div>
                  </td>
                  <td>{clientPurchase.numero_bc}</td>
                  <td>
                    <center>
                      <FaEdit
                        color="green"
                        onClick={() => {
                          toggleModal("client-purchase-adding-form");
                        }}
                      />
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
          Total Achat CIM Benin de la periode
        </span>
        <span className="ml-20 text-md">30t</span>
      </div>
      <div className="flex flex-row items-center content-center">
        <span className=" text-md font-medium text-gray-700">
          Total Achat NOCIBE de la periode
        </span>
        <span className="ml-24 text-md">30t</span>
      </div>
    </div>
  );
};

export default ClientPurchasesTable;
