import "../assets/css/bootstrap.min.css";

function TableAvance() {
  return (
    <div className="h-screen w-screen flex p-10 items-center">
      <div className="flex flex-col justify-start w-full ">
        <h2 className="text-sm my-3 p-2 bg-gray-100 w-max">01-04-2025</h2>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Montant</td>
            </tr>

            <tr>
              <td>FASSINOU</td>
              <td>15 000 000</td>
            </tr>

            <tr>
              <td>SIDOINE</td>
              <td>15 000 000</td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-row items-center content-center">
          <span className=" text-md my-3 font-medium">Total Avance</span>
          <span className="ml-20 text-md">30 000 000</span>
        </div>
      </div>
    </div>
  );
}

export default TableAvance;
