import { FaEdit, FaTrash } from "react-icons/fa";
import "../assets/css/bootstrap.min.css";

function TableAchatClient() {
  return (
    <div className="h-screen w-screen flex p-10 items-center">
      <div className="flex flex-col justify-start w-full ">
        <h2 className=" text-sm my-3 p-2 bg-gray-100 w-max">01-04-2025</h2>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Quantite</td>
              <td className="font-medium">Categorie</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Numero CTP</td>
              <td className="font-medium">Bordereau </td>
              <td className="font-medium">Numero BC</td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              if (index % 2 == 0) {
                return (
                  <tr key={index}>
                    <td>30t</td>
                    <td>CIM BENIN</td>
                    <td>2 340 000</td>
                    <td>2567</td>
                    <td>7373UB</td>
                    <td>7373UB</td>
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
              }

              return (
                <tr key={index}>
                  <td>30t</td>
                  <td>NOCIBE</td>
                  <td>2 340 000</td>
                  <td>2567</td>
                  <td>7373UB</td>
                  <td>7373UB</td>
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
          <span className=" text-md my-3 font-medium">
            Total Achat CIM Benin de la periode
          </span>
          <span className="ml-20 text-md">30t</span>
        </div>
        <div className="flex flex-row items-center content-center">
          <span className=" text-md font-medium">
            Total Achat NOCIBE de la periode
          </span>
          <span className="ml-24 text-md">30t</span>
        </div>
      </div>
    </div>
  );
}

export default TableAchatClient;
