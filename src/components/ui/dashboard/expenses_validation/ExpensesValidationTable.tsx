import { FaCheck, FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

function TableValidationDepense() {
  return (
    <div className="flex flex-col justify-start w-full ">
      <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              {/* <td className="font-medium">Date</td> */}
              <td className="font-medium">Description</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Pièce</td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              if (index % 2 == 0) {
                return (
                  <tr key={index}>
                    {/* <td>01-04-2025</td> */}
                    <td>Achat de quelque chose</td>
                    <td>2 340 000</td>
                    <td>Relevé.pdf</td>
                    <td>
                      <i
                        // type="button"
                        className="flex justify-end"
                      >
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
              }
              return (
                <tr key={index}>
                  {/* <td>01-04-2025</td> */}
                  <td>Achat de quelque chose</td>
                  <td>2 340 000</td>
                  <td>Relevé.pdf</td>
                  <td>
                    <i
                      // type="button"
                      className="flex justify-end"
                    >
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
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="flex flex-row items-center content-center">
          <span className=" text-md my-3 font-medium text-gray-700">
            Total Dépenses
          </span>
          <span className="ml-72 text-md">30 000 000</span>
        </div> */}
    </div>
  );
}

export default TableValidationDepense;
