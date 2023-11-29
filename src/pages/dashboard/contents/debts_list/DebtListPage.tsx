// import { BiArrowBack } from "react-icons/bi";
// import { Link } from "react-router-dom";
import DebtsTable from "../../../../components/ui/dashboard/debts/DebtsTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useCreanceStore from "../../../../store/creances/useCreances.store";
import JSSelect from "../../../../components/form/widgets/Select.widget";

const DebtsListPage: FC = () => {
  const creances = useCreanceStore((state) => state.creances);
  const fetchCreances = useCreanceStore((state) => state.fetchCreances);
  const selectedSortOption = useCreanceStore(
    (state) => state.selectedSortOption
  );
  const startDate = useCreanceStore((state) => state.startDate);
  const endDate = useCreanceStore((state) => state.endDate);
  const onSelectedSetOptionChange = useCreanceStore(
    (state) => state.onSelectedSetOptionChange
  );
  const onStartDateChange = useCreanceStore((state) => state.onStartDateChange);
  const onEndDateChange = useCreanceStore((state) => state.onEndDateChange);
  const resetDatesInterval = useCreanceStore(
    (state) => state.resetDatesInterval
  );

  useEffect(() => {
    fetchCreances();
  }, [fetchCreances]);
  return (
    <div className="h-full w-full flex flex-col">
      {/* <div className="w-full flex justify-between items-center">
        <Link
          className="w-max flex text-black hover:text-black font-normal"
          to="/creances"
        >
          <div className="my-3 w-max flex justify-center items-center p-2 border-2   border-primary text-sm">
            <BiArrowBack className="mr-3 text-secondary" size={20} /> Retour à
            la page précédente
          </div>
        </Link>
      </div> */}

      <div className="w-full flex flex-col lg:flex-row justify-between items-center my-2 content-center">
        <DateIntervall
          selectedStartDate={startDate}
          selectedEndDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
          resetDatesInterval={resetDatesInterval}
        />

        <JSSelect
          id="clients-select"
          name="clients-select"
          selectedOption={selectedSortOption}
          options={[
            { value: "more-important", label: "Plus Important" },
            { value: "less-important", label: "Moins Important" },
          ]}
          onChange={onSelectedSetOptionChange}
        />
      </div>
      <DebtsTable creances={creances} />
    </div>
  );
};

export default DebtsListPage;
