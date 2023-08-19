import "../../../assets/css/table.css";
import AddingButton from "../../../components/ui/AddingButton";
import FilterOptionButton from "../../../components/ui/FilterOptionButton";

const BankAccountsListPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <div className="flex self-start">
          <FilterOptionButton />
        </div>
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
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Banque</td>
              <td className="font-medium">Numéro de compte</td>
              <td className="font-medium">Solde Actuel</td>
            </tr>

            <tr>
              <td>BOA</td>
              <td>13351463</td>
              <td>5 000 000</td>
            </tr>
            <tr>
              <td>UBA</td>
              <td>13351463</td>
              <td>5 000 000</td>
            </tr>
            <tr>
              <td>ECOBANK</td>
              <td>13351463</td>
              <td>5 000 000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BankAccountsListPage;
