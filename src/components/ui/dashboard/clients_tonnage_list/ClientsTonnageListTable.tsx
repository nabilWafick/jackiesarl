import { FC, useEffect } from "react";
import useClientsTonnagesStore from "../../../../store/clients_tonnages/useClientsTonnages.store";

const ClientsTonnageListTable: FC = () => {
  const clientsTonnages = useClientsTonnagesStore(
    (state) => state.clientsTonnages
  );
  const fetchAllClientsTonnages = useClientsTonnagesStore(
    (state) => state.fetchAllClientsTonnages
  );

  useEffect(() => {
    fetchAllClientsTonnages();
  }, [fetchAllClientsTonnages]);

  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-7  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Tonnage CIM BENIN</td>
              <td className="font-medium">Tonnage NOCIBE</td>
              <td className="font-medium">Pourcentage</td>
            </tr>

            {clientsTonnages.map((clientTonnages, index) => {
              return (
                <tr key={index}>
                  <td>
                    {clientTonnages.client.prenoms} {clientTonnages.client.nom}
                  </td>
                  <td>
                    {clientTonnages.tonnage_CIMBENIN} <i> t</i>
                  </td>
                  <td>
                    {clientTonnages.tonnage_NOCIBE} <i> t</i>
                  </td>
                  <td>{clientTonnages.pourcentage_achat}%</td>
                </tr>
              );
            })}

            {/* <tr>
              <td className=" font-medium">Total Tonnages</td>
              <td className=" font-medium">545150t</td>
              <td className=" font-medium">454850t</td>
              <td className=" font-medium">100%</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientsTonnageListTable;
