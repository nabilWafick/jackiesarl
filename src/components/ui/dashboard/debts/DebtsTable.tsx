function DebtsTable() {
  return (
    <div className="flex flex-col justify-start w-full ">
      <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Créance CIM BENIN</td>
              <td className="font-medium">Créance NOCIBE</td>
              <td className="font-medium">Pourcentage</td>
            </tr>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              if (index % 2 == 0) {
                return (
                  <tr key={index}>
                    <td>Freddy EDOUN</td>
                    <td>245 990</td>
                    <td>67 498</td>
                    <td>20%</td>
                  </tr>
                );
              }
              return (
                <tr key={index}>
                  <td>Tobby PATO</td>
                  <td>245 000</td>
                  <td>67 498</td>
                  <td>20%</td>
                </tr>
              );
            })}
            <tr>
              <td className=" font-medium">Total Créances</td>
              <td className=" font-medium">545150</td>
              <td className=" font-medium">454850</td>
              <td className=" font-medium">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DebtsTable;
