function FogTable() {
  return (
    <div className="flex flex-col justify-start w-full ">
      <h2 className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</h2>
      <div
        className="
          flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md"
      >
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Dépot</td>
              <td className="font-medium">Stock Actuel</td>
              <td className="font-medium">Nom Gérant</td>
              <td className="font-medium">Num Gérant</td>
            </tr>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              if (index % 2 != 0) {
                return (
                  <tr key={index}>
                    <td>Cotonou</td>
                    <td>50 240t</td>

                    <td>Shalom</td>
                    <td>50 00 00 01</td>
                  </tr>
                );
              }
              return (
                <tr key={index}>
                  <td>Calavi</td>
                  <td>2 340t</td>

                  <td>Peace</td>
                  <td>90 00 00 01</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FogTable;
