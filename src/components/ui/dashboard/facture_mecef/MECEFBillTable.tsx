// import { FaEdit, FaFile, FaTrash } from "react-icons/fa";
// import { toggleModal } from "../widgets/ToggleModal";

import { FC } from "react";

interface MECEFBillTableProps {}

const MECEFBillTable: FC<MECEFBillTableProps> = () => {
  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3 border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
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

            {/* {clientPurchases.map((clientPurchase) => {
            return (
              <tr key={clientPurchase.id!}>
                <td>
                  {clientPurchase.quantite_achetee}
                  <i> t</i>
                </td>
                <td>{clientPurchase.categorie}</td>
                <td>{clientPurchase.numero_bc}</td>
                <td>
                  {clientPurchase.montant}
                  <i> fcfa</i>
                </td>
                <td>{clientPurchase.numero_ctp}</td>
                <td>
                  {clientPurchase.bordereau == "" ? (
                    ""
                  ) : (
                    <a
                      href={clientPurchase.bordereau as string}
                      target="_blank"
                      download={true}
                    >
                      <FaFile
                        className="text-secondary"
                       
                      />
                    </a>
                  )}
                </td>

                <td>
                  <div>
                   
                    <center>
                      <FaEdit
                        color="green"
                        onClick={() => {
                          toggleModal(
                            `client-purchase-update-form-${clientPurchase.id}`
                          );
                        }}
                      />
                    </center>
                  </div>
                </td>
                <td>
                  <center>
                    <FaTrash
                      color="red"
                    
                    />
                  </center>
                </td>
              </tr>
            );
          })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MECEFBillTable;
