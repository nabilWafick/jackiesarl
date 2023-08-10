import { FaEdit, FaTrash } from "react-icons/fa";
import "../assets/css/bootstrap.min.css";

function TableSoldeCourant() {
  return (
    <div className="h-screen w-screen flex p-10 items-center">
      <div className="flex flex-col justify-start w-full ">
        <h2 className=" text-sm my-3 p-2 bg-gray-100 w-max">01-04-2025</h2>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Date</td>
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
                  <td>01-04-2025</td>
                  <td>Une petite description par rapport ...</td>
                  <td>200676</td>
                  <td>5 000 000</td>
                  <td>34 954 000</td>
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
      </div>
    </div>
  );
}

export default TableSoldeCourant;
