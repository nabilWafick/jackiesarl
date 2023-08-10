import "../assets/css/bootstrap.min.css";

function TableSoldeClient() {
  return (
    <div className="h-screen w-screen flex p-10 items-center">
      <div className="flex flex-col justify-start w-full ">
        <h2 className=" text-sm my-3 p-2 bg-gray-100 w-max">01-04-2025</h2>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Total des dettes</td>
              <td className="text-end">15 000 000</td>
            </tr>

            <tr>
              <td>Total des paiements</td>
              <td className="text-end">10 000 000</td>
            </tr>

            <tr>
              <td>Creances</td>
              <td className="text-end">5 000 000</td>
            </tr>

            <tr>
              <td>Avance</td>
              <td className="text-end">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableSoldeClient;
