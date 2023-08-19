function PaymentsTable() {
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

export default PaymentsTable;
