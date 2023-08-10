import "../assets/css/bootstrap.min.css";

function TableClient() {
  return (
    <div className="h-screen w-screen flex p-10 items-center">
      <div className="flex flex-col justify-start w-full ">
        <h2 className=" text-sm my-3 p-2 bg-gray-100 w-max">01-04-2025</h2>
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Numero Matricule</td>
              <td className="font-medium">Numero de telephone</td>
              <td className="font-medium">Adresse Email</td>
            </tr>
            {Array.from({ length: 5 }, (_: number, index: number) => {
              if (index % 2 == 0) {
                return (
                  <tr key={index}>
                    <td>SIDOINE</td>
                    <td>18454</td>
                    <td>54 85 54 55</td>
                    <td>sidoine@contact.bj</td>
                  </tr>
                );
              }

              return (
                <tr key={index}>
                  <td>FASSINOU</td>

                  <td>19454</td>
                  <td>97 85 54 55</td>
                  <td>fassinou@contact.bj</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableClient;
