import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import AddingButton from "../../../components/ui/AddingButton";
import CurrentsBalenceTable from "../../../components/ui/CurrentsBalenceTable";

const CurrentsBalencePage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        {/* <JSCategorySelect
          id="categoty"
          name="category"
          options={[
            { value: "increasing", label: "Ordre croissant" },
            { value: "decreasing", label: "Ordre décroissant" },
          ]}
        /> */}
        <AddingButton option="Solde" onClick={() => {}} />
      </div>
      <CurrentsBalenceTable />
    </div>
  );
};

export default CurrentsBalencePage;
