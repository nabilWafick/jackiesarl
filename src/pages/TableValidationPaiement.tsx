import { FaEdit, FaTrash } from "react-icons/fa";
import "../assets/css/bootstrap.min.css";

function TableValidationPaiement() {
  return (
    <div className="h-screen w-screen flex p-10 items-center">
      <div className="flex flex-col justify-start w-full ">
        <h2 className=" text-sm my-3 p-2 bg-gray-100 w-max">01-04-2025</h2>
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Banque</td>
              <td className="font-medium">Reference</td>
              <td className="font-medium">Categorie </td>
              <td className="font-medium">Bordereau</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              if (index % 2 == 0) {
                return (
                  <tr key={index}>
                    <td>SIDOINE</td>
                    <td>78 000</td>
                    <td>BOA</td>
                    <td>2567</td>
                    <td>CIM BENIN</td>
                    <td>7534U</td>
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
              }

              return (
                <tr key={index}>
                  <td>FASSINOU</td>
                  <td>78 000</td>
                  <td>UBA</td>
                  <td>2567</td>
                  <td>NOCIBE</td>
                  <td>7534U</td>
                  <td className="w-min">
                    <button
                      // type="button"
                      className="bg-orange-400 text-white py-1 px-3 rounded-sm hover:border-none"
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
          <span className=" text-md my-3 font-medium">Total des paiements</span>
          <span className="ml-20 text-md">10 000 000</span>
        </div>
      </div>
    </div>
  );
}

export default TableValidationPaiement;
