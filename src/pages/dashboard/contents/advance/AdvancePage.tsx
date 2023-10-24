import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import AdvanceTable from "../../../../components/ui/dashboard/advance/AdvanceTable";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useAvanceStore from "../../../../store/avance/useAvance.store";

const AdvancePage: FC = () => {
  const avances = useAvanceStore((state) => state.avances);
  const fetchAvances = useAvanceStore((state) => state.fetchAvances);

  useEffect(() => {
    fetchAvances();
  }, [fetchAvances]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-start items-center mt-2 my-3 content-center">
        <DateIntervall />
      </div>
      <AdvanceTable avances={avances} />
    </div>
  );
};

export default AdvancePage;
