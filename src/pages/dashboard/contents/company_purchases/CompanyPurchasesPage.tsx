import PurchasesTable from "../../../../components/ui/dashboard/company_purchases/CompanyPurchasesTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useCompanyPurchasesStore from "../../../../store/achat_entreprise/useAchatEntreprise.store";

// const categories = [
//   { value: "cim_benin", label: "CIM BENIN" },
//   { value: "nocibe", label: "NOCIBE" },
// ];

const PurchasesPage: FC = () => {
  const companyPurchases = useCompanyPurchasesStore(
    (state) => state.companyPurchases
  );
  const fetchAllCompanyPurchases = useCompanyPurchasesStore(
    (state) => state.fetchAllCompanyPurchases
  );

  useEffect(() => {
    fetchAllCompanyPurchases();
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      <div>
        <AddingButton
          option="Ajouter un achat"
          onClick={() => {
            toggleModal("fog-adding-form");
          }}
        />
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        {/* <JSCategorySelect
          id="category-ciment"
          name="category-ciment"
          options={categories}
        /> */}
      </div>
      <PurchasesTable companyPurchases={companyPurchases} />
    </div>
  );
};

export default PurchasesPage;
