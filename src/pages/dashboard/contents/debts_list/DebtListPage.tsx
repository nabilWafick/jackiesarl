import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import JSCategorySelect from "../../../../components/form/widgets/CategorySelect.widget";
import DebtsTable from "../../../../components/ui/dashboard/debts/DebtsTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useCreanceStore from "../../../../store/creances/useCreances.store";

const DebtsListPage: FC = () => {
  const creances = useCreanceStore((state) => state.creances);
  const fetchCreances = useCreanceStore((state) => state.fetchCreances);
  useEffect(() => {
    fetchCreances();
  }, [fetchCreances]);
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex justify-between items-center">
        <Link
          className="w-max flex text-black hover:text-black font-normal"
          to="/creances"
        >
          <div className="my-3 w-max flex justify-center items-center p-2 border-2   border-primary text-sm">
            <BiArrowBack className="mr-3 text-secondary" size={20} /> Retour à
            la page précédente
          </div>
        </Link>
      </div>

      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <JSCategorySelect
          id="categoty"
          name="category"
          options={[
            { value: "increasing", label: "Ordre croissant" },
            { value: "decreasing", label: "Ordre décroissant" },
          ]}
        />
      </div>
      <DebtsTable creances={creances} />
    </div>
  );
};

export default DebtsListPage;
