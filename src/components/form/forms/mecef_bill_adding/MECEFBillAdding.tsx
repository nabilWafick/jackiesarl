import { FC } from "react";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";
import { Moment } from "moment";
import JSDateTimePicker from "../../widgets/DateTimePicker.widget";
import useMECEFBillAddingForm from "../../../../hooks/forms/mecef_bill_adding/useMECEFBillAddingForm";

interface MECEFBillAddingProps {
  reference: string;
  file: File | string;
  billDate: Date | Moment | undefined;
}

const MECEFBillAdding: FC<MECEFBillAddingProps> = ({
  reference,
  file,
  billDate,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    onFileInputChange,
    onBillDateInputChange,
    onFormClose,
    onFormSubmit,
  } = useMECEFBillAddingForm({
    reference: reference,
    file: file,
    billDate: billDate,
  });
  return (
    <Modal label="mecef-bill-adding-form">
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Facture MECEF
          </div>

          <div className="input-group w-full mt-3">
            <div className="mt-1 mb-1 w-full">
              <JSDateTimePicker
                name="billDate"
                id="billDate"
                placeholder="Date de facturation"
                selectedDateTime={formData.billDate}
                onDateChange={onBillDateInputChange}
              />
            </div>
            {formErrors.billDate && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.billDate}
              </p>
            )}
          </div>
          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.reference}
                name="reference"
                id="reference"
                type="text"
                placeholder="Référence"
                autoComplete="off"
              />
            </div>
            {formErrors.reference && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.reference}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onFileInputChange}
                //    value={formData.file}
                name="file"
                id="file"
                type="file"
                placeholder="file"
                autoComplete="off"
              />
            </div>
            {formErrors.file && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.file}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
            <JsOutlineButton
              type="button"
              name="Fermer"
              onClick={() => {
                onFormClose();
                toggleModal("mecef-bill-adding-form");
              }}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default MECEFBillAdding;
