import { FaEdit, FaTrash } from "react-icons/fa";
import "../assets/css/bootstrap.min.css";

function TableCaisse() {
  return (
    <div className="h-screen w-screen flex p-10 items-center">
      <div className="flex flex-col justify-start w-full ">
        <h2 className="text-sm my-3 p-2 bg-gray-100 w-max">01-04-2025</h2>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Caisse</td>
              <td className="font-medium">Montant</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>Caisse Siege Jackie Sarl</td>
              <td>170 000 000</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
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

            <tr>
              <td>Caisse depot Agla</td>
              <td>15 000 000</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
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
            <tr>
              <td>Caisse depot Agori</td>
              <td>15 000 000</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
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
          </tbody>
        </table>
        <div className="flex flex-row items-center content-center">
          <span className=" text-md my-3 font-medium">Total Caisse</span>
          <span className="ml-20 text-md">200 000 000</span>
        </div>
      </div>
    </div>
  );
}

export default TableCaisse;
