import { FaCheck, FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

function OrdersTable() {
  return (
    <div className="flex flex-col justify-start w-full ">
      <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Quantité</td>
              <td className="font-medium">Destination</td>
              <td className="font-medium">Date de Liviraison</td>
              <td className="font-medium">Catégorie</td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>
            {Array.from({ length: 3 }, (_: number, index: number) => {
              if (index == 0) {
                return (
                  <tr key={index}>
                    <td>Habib SALAMI</td>
                    <td>30t</td>
                    <td>Savè</td>
                    <td>20-04-2023</td>
                    <td>CIM BENIN</td>
                    <td className="">
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
              if (index == 1) {
                return (
                  <tr key={index}>
                    <td>Habib SALAMI</td>
                    <td>30t</td>
                    <td>Porto-Novo</td>
                    <td>20-04-2023</td>
                    <td>NOCIBE</td>
                    <td className="">
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
              }
              return (
                <tr key={index}>
                  <td>Habib SALAMI</td>
                  <td>30t</td>
                  <td>Ouidah</td>
                  <td>20-04-2023</td>
                  <td>NOCIBE</td>
                  <td className="">
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
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersTable;
