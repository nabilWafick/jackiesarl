function ClientsTonnageListTable() {
  return (
    <div className="flex flex-col justify-start w-full ">
      <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p>
      <div className="flex flex-col justify-start w-full my-7  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Tonnage CIM BENIN</td>
              <td className="font-medium">Tonnage NOCIBE</td>
              <td className="font-medium">Pourcentage</td>
            </tr>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              if (index % 2 == 0) {
                return (
                  <tr key={index}>
                    <td>Freddy EDOUN</td>
                    <td>
                      3450 <i> t</i>
                    </td>
                    <td>
                      3500 <i> t</i>
                    </td>
                    <td>20%</td>
                  </tr>
                );
              }
              return (
                <tr key={index}>
                  <td>Tobby PATO</td>
                  <td>
                    3450 <i> t</i>
                  </td>
                  <td>
                    3500 <i> t</i>
                  </td>
                  <td>20%</td>
                </tr>
              );
            })}
            <tr>
              <td className=" font-medium">Total Tonnages</td>
              <td className=" font-medium">545150t</td>
              <td className=" font-medium">454850t</td>
              <td className=" font-medium">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientsTonnageListTable;
