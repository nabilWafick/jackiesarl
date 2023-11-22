import { FC } from "react";

interface SalesWithoutBillProps {}

const SalesWithoutBill: FC<SalesWithoutBillProps> = () => {
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesWithoutBill;
