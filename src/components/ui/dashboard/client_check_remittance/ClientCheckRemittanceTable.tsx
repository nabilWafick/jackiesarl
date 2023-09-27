import { FaEdit, FaTrash, FaCheck, FaCheckCircle } from "react-icons/fa";

function TableRemiseCheque() {
  return (
    <div className="flex flex-col justify-start w-full ">
      <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Description</td>
              <td className="font-medium">Banque</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Reste</td>
              <td> </td>
              <td></td>
              <td></td>
            </tr>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              if (index % 2 == 0) {
                return (
                  <tr key={index}>
                    <td>Etat très bon</td>
                    <td>BOA</td>
                    <td>25689667</td>
                    <td>75342</td>
                    <td>
                      <i className="flex justify-end">
                        <FaCheck className="text-secondary" size={20} />
                      </i>
                    </td>
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
              }
              return (
                <tr key={index}>
                  <td>Etat très bon</td>
                  <td>UBA</td>
                  <td>25689667</td>
                  <td>75342</td>
                  <td>
                    <i className="flex justify-end">
                      <FaCheckCircle className="text-secondary" size={20} />
                    </i>
                  </td>
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
          Total des paiements
        </span>
        <span className="ml-20 text-md">10 000 000</span>
      </div>
    </div>
  );
}

export default TableRemiseCheque;
