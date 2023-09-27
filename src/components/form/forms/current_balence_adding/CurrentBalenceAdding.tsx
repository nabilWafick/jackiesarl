import Modal from "../../../ui/dashboard/widgets/Modal";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";

const CurrentBalenceAdding = () => {
  // const  {inputsData, inputsError,onInputsDataChange,onFormValidate} = useFormState();
  return (
    <Modal label="">
      <form>
        <div
          className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            option
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">{"input"}</div>
            <p className="erreur ml-1.5 text-[11px] text-gray-700"></p>
          </div>

          <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
            <JsOutlineButton type="button" name="Annuler" onClick={() => {}} />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default CurrentBalenceAdding;
