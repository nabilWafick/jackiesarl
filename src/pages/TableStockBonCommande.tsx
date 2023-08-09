import "../assets/css/bootstrap.min.css";

function TableStockBonCommande() {
  return (
    <div className="h-screen w-screen flex p-10 items-center">
      <div className="flex flex-col justify-start w-full ">
        <h2 className=" text-sm my-3 p-2 bg-gray-100 w-max">01-04-2025</h2>
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Bon de Commande</td>
              <td className="font-medium">Quantite Achetee</td>
              <td className="font-medium">Stock Initial</td>
              <td className="font-medium">Vente</td>
              <td className="font-medium">Stock Final </td>
            </tr>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              return (
                <tr key={index}>
                  <td>{100 + index}</td>
                  <td>100t</td>
                  <td>300t</td>
                  <td>200t</td>
                  <td>100t</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex flex-row items-center content-center">
          <span className=" text-md my-3 font-medium">Stock Total</span>
          <span className="ml-80 text-md">1500t</span>
        </div>
      </div>
    </div>
  );
}

export default TableStockBonCommande;
