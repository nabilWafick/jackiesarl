import { FaEdit, FaTrash } from "react-icons/fa";

function TruckStockTable() {
  return (
    <div className="flex flex-col justify-start w-full ">
      <h2 className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</h2>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Num Camion</td>
              <td className="font-medium">Catégorie</td>
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
                  <td>NOCIBE</td>
                  <td>94877890</td>
                  <td>{100 + index}</td>
                  <td>200t</td>
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
      <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">
          Stock Total
        </span>
        <span className="ml-80 text-md">1500t</span>
      </div>
    </div>
  );
}

export default TruckStockTable;
