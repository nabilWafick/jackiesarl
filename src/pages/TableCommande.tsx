import { FaEdit, FaTrash } from "react-icons/fa";
import "../assets/css/bootstrap.min.css";

function TableCommande() {
  return (
    <div className="h-screen w-screen flex p-10 items-center">
      <div className="flex flex-col justify-start w-full ">
        <h2 className=" text-sm my-3 p-2 bg-gray-100 w-max">01-04-2025</h2>
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Quantité</td>
              <td className="font-medium">Destination</td>
              <td className="font-medium">Date de Liviraison</td>
              <td className="font-medium">Catégorie</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {Array.from({ length: 3 }, (_: number, index: number) => {
              if (index == 0) {
                return (
                  <tr key={index}>
                    <td>30t</td>
                    <td>Savè</td>
                    <td>20-04-2023</td>
                    <td>CIM BENIN</td>
                    <td className="">
                      <button
                        // type="button"
                        className="bg-orange-400 text-white py-1 px-3 rounded-sm hover:border-none "
                      >
                        Traiter
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

              if (index == 1) {
                return (
                  <tr key={index}>
                    <td>30t</td>
                    <td>Porto-Novo</td>
                    <td>20-04-2023</td>
                    <td>NOCIBE</td>
                    <td className="">
                      <button
                        // type="button"
                        className="bg-orange-400 text-white py-1 px-3 rounded-sm hover:border-none "
                      >
                        Déjà Traité
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
                  <td>30t</td>
                  <td>Ouidah</td>
                  <td>20-04-2023</td>
                  <td>NOCIBE</td>
                  <td className="">
                    <button
                      // type="button"
                      className="bg-orange-400 text-white py-1 px-3 rounded-sm hover:border-none "
                    >
                      Traiter
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
      </div>
    </div>
  );
}

export default TableCommande;
