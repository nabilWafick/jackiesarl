function PurchaseOrderStockTable() {
  return (
    <div className="flex flex-col justify-start w-full ">
      <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Bon de Commande</td>
              <td className="font-medium">Catégorie</td>
              <td className="font-medium">Quantite Achetee</td>
              <td className="font-medium">Stock Initial</td>
              <td className="font-medium">Vente</td>
              <td className="font-medium">Stock Final </td>
            </tr>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              return (
                <tr key={index}>
                  <td>{100 + index}</td>
                  <td>CIM BENIN</td>
                  <td>100t</td>
                  <td>300t</td>
                  <td>200t</td>
                  <td>100t</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">
          Stock Total
        </span>
        <span className="ml-80 text-md">1500t</span>
      </div>
    </div>
  );
}

export default PurchaseOrderStockTable;
