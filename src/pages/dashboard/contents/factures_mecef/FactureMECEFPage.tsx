import { FC } from "react";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import MECEFBillTable from "../../../../components/ui/dashboard/facture_mecef/MECEFBillTable";

const FactureMECEFPage: FC = () => {
  return (
    <div className="flex h-full w-full ">
      <div className="h-full w-full flex flex-col justify-center' items-center content-center">
        <div className="flex  self-end items-center">
          <AddingButton
            option="Ajouter une facture"
            onClick={() => {
              toggleModal("client-purchase-adding-form");
            }}
          />
        </div>
        <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
          {/* <DateIntervall
          selectedStartDate={startDate}
          selectedEndDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
          resetDatesInterval={resetDatesInterval}
        /> */}

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

          {/* <ClientPurchaseAdding
          quantity=""
          amount=""
          ctpNumber=""
          slip=""
          bcNumber=""
        /> */}
          <ActionResult />
        </div>
        <MECEFBillTable />
      </div>
    </div>
  );
};

export default FactureMECEFPage;
