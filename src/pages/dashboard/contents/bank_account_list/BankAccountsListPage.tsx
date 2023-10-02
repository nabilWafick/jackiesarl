import { Link } from "react-router-dom";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import FilterOptionButton from "../../../../components/ui/dashboard/widgets/FilterOptionButton";
import "../../../../assets/css/table.css";
import BankAdding from "../../../../components/form/forms/bank_adding/BankAdding";

const BankAccountsListPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Link to="/soldes-courants/details">
        <div className="p-2 my-2 bg-secondary text-white rounded-md shadow-md   w-max">
          Banque
        </div>
      </Link>
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
        <AddingButton
          option="Ajouter une nouvelle banque"
          onClick={() => {
            toggleModal("bank-adding-form");
          }}
        />
        <BankAdding bank="" accountNumber="" currentBalence="" />
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
