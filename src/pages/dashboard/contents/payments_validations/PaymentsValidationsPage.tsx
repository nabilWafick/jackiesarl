import JSCategorySelect from "../../../../components/form/widgets/CategorySelect";
import PaymentsValidationsTable from "../../../../components/ui/dashboard/payments_validations/PaymentsValidationsTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import "../../../../assets/css/table.css";

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
