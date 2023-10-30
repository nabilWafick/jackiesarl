import PurchasesTable from "../../../../components/ui/dashboard/company_purchases/CompanyPurchasesTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useCompanyPurchasesStore from "../../../../store/achat_entreprise/useAchatEntreprise.store";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";
import CompanyPurchasseAdding from "../../../../components/form/forms/company_purchase_adding/CompanyPurchaseAdding";

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

  // const selectedSortOption = useCompanyPurchasesStore(
  //   (state) => state.selectedSortOption
  // );
  const startDate = useCompanyPurchasesStore((state) => state.startDate);
  const endDate = useCompanyPurchasesStore((state) => state.endDate);
  // const onSelectedSetOptionChange = useCompanyPurchasesStore(
  //   (state) => state.onSelectedSetOptionChange
  // );
  const onStartDateChange = useCompanyPurchasesStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = useCompanyPurchasesStore(
    (state) => state.onEndDateChange
  );
  const resetDatesInterval = useCompanyPurchasesStore(
    (state) => state.resetDatesInterval
  );

  useEffect(() => {
    fetchAllCompanyPurchases();
  }, [fetchAllCompanyPurchases]);

  return (
    <div className="h-full w-full flex flex-col">
      <div>
        <AddingButton
          option="Ajouter un achat"
          onClick={() => {
            toggleModal("company-purchase-adding-form");
          }}
        />
        <CompanyPurchasseAdding
          bcNumber=""
          category="CIM BENIN"
          bank=""
          purchasedQuantity=""
          amount=""
          check=""
          slip=""
        />
        <ActionResult />
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall
          selectedStartDate={startDate}
          selectedEndDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
          resetDatesInterval={resetDatesInterval}
        />
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
