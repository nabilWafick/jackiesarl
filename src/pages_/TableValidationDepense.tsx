import { FaEdit, FaTrash } from "react-icons/fa";
import "../assets/css/bootstrap.min.css";

function TableValidationDepense() {
  return (
    <div className="h-screen w-screen flex p-10 items-center">
      <div className="flex flex-col justify-start w-full ">
        <h2 className=" text-sm my-3 p-2 bg-gray-100 w-max">01-04-2025</h2>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Date</td>
              <td className="font-medium">Description</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Pièce</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              return (
                <tr key={index}>
                  <td>01-04-2025</td>
                  <td>Achat de quelque chose</td>
                  <td>2 340 000</td>
                  <td>Relevé.pdf</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="w-min">
                    <button
                      // type="button"
                      className="bg-orange-400 text-white py-1 px-3 rounded-sm hover:border-none w-min"
                    >
                      Valider
                    </button>
                  </td>
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
        <div className="flex flex-row items-center content-center">
          <span className=" text-md my-3 font-medium">Total Dépenses</span>
          <span className="ml-72 text-md">30 000 000</span>
        </div>
      </div>
    </div>
  );
}

export default TableValidationDepense;
