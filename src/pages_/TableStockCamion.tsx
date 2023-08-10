import { FaEdit, FaTrash } from "react-icons/fa";
import "../assets/css/bootstrap.min.css";

function TableStockCamion() {
  return (
    <div className="h-screen w-screen flex p-10 items-center">
      <div className="flex flex-col justify-start w-full ">
        <h2 className=" text-sm my-3 p-2 bg-gray-100 w-max">01-04-2025</h2>
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Num Camion</td>
              <td className="font-medium">Num Chauffeur</td>
              <td className="font-medium">Bon Commande</td>
              <td className="font-medium">Quantite</td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              return (
                <tr key={index}>
                  <td>0098EUI</td>
                  <td>94877890</td>
                  <td>{100 + index}</td>
                  <td>200t</td>
                  <td>
                    <FaEdit color="green" />
                  </td>

                  <td>
                    <FaTrash color="red" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex flex-row items-center content-center">
          <span className=" text-md my-3 font-medium">Stock Total</span>
          <span className="ml-80 text-md">1500t</span>
        </div>
      </div>
    </div>
  );
}

export default TableStockCamion;
