import { FaEdit, FaTrash } from "react-icons/fa";

function CurrentsBalenceTable() {
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
            {Array.from({ length: 5 }, (_: number, index: number) => {
              return (
                <tr key={index}>
                  <td>Une petite description par rapport ...</td>
                  <td>200676</td>
                  <td>5 000 000</td>
                  <td>34 954 000</td>
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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CurrentsBalenceTable;
