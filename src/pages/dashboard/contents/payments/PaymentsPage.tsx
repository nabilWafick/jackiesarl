import PaymentsTable from "../../../../components/ui/dashboard/payments/PaymentsTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import "../../../../assets/css/table.css";

const PaymentsPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-start items-center mt-2 my-3 content-center">
        <DateIntervall />
        {/* <AddingButton option="un paiement" onClick={() => {}} /> */}
      </div>
      <PaymentsTable />
    </div>
  );
};

export default PaymentsPage;
