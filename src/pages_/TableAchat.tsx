import "../assets/css/bootstrap.min.css";

function TableAchat() {
  return (
    <div className="h-screen w-screen flex p-10 items-center">
      <div className="flex flex-col justify-start w-full ">
        <h2 className=" text-sm my-3 p-2 bg-gray-100 w-max">01-04-2025</h2>
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Bon de commande</td>
              <td className="font-medium">Quantite Achetee</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Banque</td>
              <td className="font-medium">Cheque</td>
              <td className="font-medium">Bordereau</td>
            </tr>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              if (index % 2 == 0) {
                return (
                  <tr key={index}>
                    <td>SIDOINE</td>
                    <td>300t</td>
                    <td>30 000 000</td>
                    <td>ORABANK</td>
                    <td>25658127</td>
                    <td>7534U</td>
                  </tr>
                );
              }

              return (
                <tr key={index}>
                  <td>FASSINOU</td>
                  <td>500t</td>
                  <td>50 000 000</td>
                  <td>UBA</td>
                  <td>46815486</td>
                  <td>7534U</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex flex-row items-center content-center">
          <span className=" text-md my-3 font-medium">Montant total</span>
          <span className="ml-20 text-md">60 000 000</span>
        </div>
      </div>
    </div>
  );
}

export default TableAchat;
