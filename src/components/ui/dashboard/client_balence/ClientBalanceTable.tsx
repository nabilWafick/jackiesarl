import { FC } from "react";

const ClientBalanceTable: FC = () => {
  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Total des dettes</td>
              <td className="text-end">
                15 000 000 <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td>Total des paiements</td>
              <td className="text-end">
                10 000 000 <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td>Creances</td>
              <td className="text-end">
                5 000 000 <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td>Avance</td>
              <td className="text-end">
                0 <i> fcfa</i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientBalanceTable;
