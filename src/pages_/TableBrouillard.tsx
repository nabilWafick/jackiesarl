import "../assets/css/bootstrap.min.css";

function TableBrouillard() {
  return (
    <div className="h-screen w-screen flex p-10 items-center">
      <div className="flex flex-col justify-start w-full ">
        <h2 className=" text-sm my-3 p-2 bg-gray-100 w-max">01-04-2025</h2>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Date</td>
              <td className="font-medium">Quantité Initiale</td>
              <td className="font-medium">Vente</td>
              <td className="font-medium">Quantité Finale</td>
              <td className="font-medium">Versement</td>
              <td className="font-medium">Dépense</td>
              <td className="font-medium">Observation</td>
            </tr>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              return (
                <tr key={index}>
                  <td>01-04-2025</td>
                  <td>78 000</td>
                  <td>2 340 000</td>
                  <td>100 000</td>
                  <td>2567</td>
                  <td>100 000</td>
                  <td>Bonne</td>
                </tr>
              );
            })}
            <tr>
              <td className=" font-medium">Total</td>
              <td className=" font-medium">15 000 000</td>
              <td className=" font-medium">15 000 000</td>
              <td className=" font-medium">15 000 000</td>
              <td className=" font-medium">15 000 000</td>
              <td className=" font-medium">15 000 000</td>
              <td className=" font-medium"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableBrouillard;
