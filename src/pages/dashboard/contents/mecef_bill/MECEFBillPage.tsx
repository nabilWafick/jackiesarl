import { FC, useEffect } from "react";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import MECEFBillTable from "../../../../components/ui/dashboard/facture_mecef/MECEFBillTable";
import useFactureMECEFStore from "../../../../store/facture_mecef/useFactureMECEF.store";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import SalesWithoutBillTable from "../../../../components/ui/dashboard/facture_mecef/SalesWithoutBillTable";
import MECEFBillAdding from "../../../../components/form/forms/mecef_bill_adding/MECEFBillAdding";

const FactureMECEFPage: FC = () => {
  const startDate = useFactureMECEFStore((state) => state.startDate);
  const endDate = useFactureMECEFStore((state) => state.endDate);
  const setIsUpdate = useFactureMECEFStore((state) => state.setIsUpdate);
  const fetchAllClientsBill = useFactureMECEFStore(
    (state) => state.fetchAllClientsBill
  );
  const facturesMECEF = useFactureMECEFStore((state) => state.facturesMECEF);
  const onStartDateChange = useFactureMECEFStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = useFactureMECEFStore(
    (state) => state.onEndDateChange
  );
  const resetDatesInterval = useFactureMECEFStore(
    (state) => state.resetDatesInterval
  );

  useEffect(() => {
    fetchAllClientsBill();
  }, [fetchAllClientsBill]);

  return (
    <div className="h-full w-full flex flex-col ">
      <AddingButton
        option="Ajouter une facture"
        onClick={() => {
          setIsUpdate(false);
          toggleModal("sales-without-bill");
        }}
      />

      <div className="w-full flex flex-col lg:flex-row justify-center items-center my-2 content-center">
        <DateIntervall
          selectedStartDate={startDate}
          selectedEndDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
          resetDatesInterval={resetDatesInterval}
        />

        {/* <JSSelect
            id="clients-select"
            name="clients-select"
            selectedOption={selectedSortOption}
            options={[
              { value: "new-to-old", label: "Nouveau à Ancien" },
              { value: "old-to-new", label: "Ancien à Nouveau" },
              { value: "more-important", label: "Plus Important" },
              { value: "less-important", label: "Moins Important" },
              {
                value: "cim-benin-more-important",
                label: "CIM BENIN Plus Important",
              },
              {
                value: "cim-benin-less-important",
                label: "CIM BENIN Moins important",
              },
              {
                value: "nocibe-more-important",
                label: "NOCIBE Plus Important",
              },
              {
                value: "nocibe-less-important",
                label: "NOCIBE Moins Important",
              },
            ]}
            onChange={onSelectedSetOptionChange}
          /> */}

        <ActionResult />
      </div>
      <MECEFBillTable billList={facturesMECEF} />
      <SalesWithoutBillTable />
      <MECEFBillAdding reference="" file={""} billDate={undefined} />
    </div>
  );
};

export default FactureMECEFPage;
