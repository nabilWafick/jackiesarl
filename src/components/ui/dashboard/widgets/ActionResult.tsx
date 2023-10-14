import { FC } from "react";
import JsOutlineButton from "../../widgets/OutlineButton";
import { toggleModal } from "./ToggleModal";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
import Modal from "./Modal.widget";

const ActionResult: FC = () => {
  const actionResultMessage = useInterfacesStore(
    (state) => state.actionResultMessage
  );
  return (
    <Modal label="action-result-message">
      <div className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 shadow-xl">
        <div className="p-2 mt-1 mb-4 rounded-md shadow-sm bg-secondary text-white">
          Résultat
        </div>
        <p className="my-5 text-md text-center font-medium text-gray-800 ">
          {actionResultMessage}
        </p>
        <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
          <JsOutlineButton
            type="button"
            name="Okay"
            onClick={() => toggleModal("action-result-message")}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ActionResult;
