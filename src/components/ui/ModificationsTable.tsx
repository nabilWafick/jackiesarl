function ModificationsTable() {
  return (
    <div className="flex flex-col justify-start w-full ">
      <h2 className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</h2>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped ">
          <tbody>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              if (index % 2 == 0) {
                return (
                  <tr key={index}>
                    <td>
                      Sabine KLAUS à modifié l'achat NOCIBE du client FASSINOU à
                      20 tonnes{" "}
                    </td>
                  </tr>
                );
              }
              return (
                <tr key={index}>
                  <td>
                    David PEACE KLAUS à modifié l'achat NOCIBE du client
                    Fassinou à 30 tonnes
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ModificationsTable;
