import { FaCheck, FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

function PaymentsValidationsTable() {
  return (
    <div className="flex flex-col justify-start w-full ">
      <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
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
                  <td>FASSINOU</td>
                  <td>78 000</td>
                  <td>UBA</td>
                  <td>2567</td>
                  <td>NOCIBE</td>
                  <td>7534U</td>
                  <td className="w-min">
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
        <span className=" text-md my-3 font-medium">Total des paiements</span>
        <span className="ml-20 text-md  text-gray-700">10 000 000</span>
      </div>
    </div>
  );
}

export default PaymentsValidationsTable;
