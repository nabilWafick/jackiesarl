import { FC } from "react";

const AdvanceTable: FC = () => {
  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <h2 className="text-sm my-3 p-2 bg-primary w-max">01-04-2025</h2> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Montant</td>
            </tr>
            <tr>
              <td>FASSINOU</td>
              <td>15 000 000</td>
            </tr>
            <tr>
              <td>SIDOINE</td>
              <td>15 000 000</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">
          Total Avance
        </span>
        <span className="ml-20 text-md">30 000 000</span>
      </div> */}
    </div>
  );
};

export default AdvanceTable;
