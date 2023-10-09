import { FaEdit, FaTrash } from "react-icons/fa";
import SoldeCourant from "../../../../models/solde_courant/solde_courant.model";
import { FC, useEffect } from "react";
import useActivitesBanque from "../../../../store/activites_banque/useActivitesBanque.store";

interface CurrentsBalenceDetailsTableProps {
  selectedBank: SoldeCourant | undefined;
}

const CurrentsBalenceTable: FC<CurrentsBalenceDetailsTableProps> = ({
  selectedBank,
}) => {
  const currentsBalenceDetails = useActivitesBanque(
    (state) => state.activitesBanque
  );
  const fetchAllActivitesBanque = useActivitesBanque(
    (state) => state.fetchAllActivitesBanque
  );

  useEffect(() => {
    fetchAllActivitesBanque(selectedBank!.id!);
  }, [fetchAllActivitesBanque, selectedBank]);

  return (
    <div className="flex flex-col justify-start w-full ">
      <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Description</td>
              <td className="font-medium">Débit</td>
              <td className="font-medium">Crédit</td>
              <td className="font-medium">Solde</td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>

            {currentsBalenceDetails.map((currentBalence) => (
              <tr key={currentBalence.id}>
                <td>{currentBalence.description}</td>
                <td>{currentBalence.debit}</td>
                <td>{currentBalence.credit}</td>
                <td>{currentBalence.solde}</td>
                <td>
                  <i className="flex justify-end">
                    <FaEdit color="green" />
                  </i>
                </td>
                <td>
                  <i className="flex justify-end">
                    <FaTrash color="red" />
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentsBalenceTable;
