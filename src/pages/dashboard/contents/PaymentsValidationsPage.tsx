import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import JSCategorySelect from "../../../components/form/CategorySelect";
import PaymentsValidationsTable from "../../../components/ui/PaymentsValidationsTable";

const PaymentsValidationsPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <JSCategorySelect
          id="categoty"
          name="category"
          options={[
            { value: "validate", label: "Validé" },
            { value: "unvalidate", label: "Non Validé" },
          ]}
        />
      </div>
      <PaymentsValidationsTable />
    </div>
  );
};

export default PaymentsValidationsPage;
