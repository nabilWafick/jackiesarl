import { Link } from "react-router-dom";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import FilterOptionButton from "../../../../components/ui/dashboard/widgets/FilterOptionButton.widget";
import "../../../../assets/css/table.css";
import BankAdding from "../../../../components/form/forms/bank_adding/BankAdding";
import BankAccountTable from "../../../../components/ui/dashboard/bank_account/bankAccountTable";
import { useEffect } from "react";
import useSoldeCourantStore from "../../../../store/solde_courant/useSoldeCourant.store";

const BankAccountsListPage = () => {
  const soldeCourant = useSoldeCourantStore((state) => state.soldeCourant);
  const fetchAllSoldeCourant = useSoldeCourantStore(
    (state) => state.fetchAllSoldeCourant
  );

  useEffect(() => {
    fetchAllSoldeCourant();
  }, [fetchAllSoldeCourant]);

  return (
    <div className="h-full w-full flex flex-col">
      <Link to="/soldes-courants/details"></Link>
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
      <BankAccountTable bankAccountList={soldeCourant} />
    </div>
  );
};

export default BankAccountsListPage;
