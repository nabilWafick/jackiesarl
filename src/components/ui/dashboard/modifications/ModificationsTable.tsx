import { FC } from "react";
import Modifications from "../../../../models/modifications/modifications.model";

interface ModificationsTableProps {
  modifications: Modifications[];
}

const ModificationsTable: FC<ModificationsTableProps> = ({ modifications }) => {
  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <h2 className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</h2> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped ">
          <tbody>
            {modifications.map((modification) => (
              <tr key={modification.id}>
                <td className="text-[15px] flex flex-col">
                  <div className="mb-2 font-medium flex justify-between">
                    <p className=" font-semibold">
                      {modification.modification}
                    </p>
                    <p className=" font-medium">
                      {modification.prenoms_employe} {modification.nom_employe}
                    </p>
                  </div>
                  <span> {modification.details}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModificationsTable;
