import { FunctionComponent } from "react";
import JsOutlineButton from "../../widgets/OutlineButton";
import { toggleModal } from "./ToggleModal";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";

const ActionResult: FunctionComponent = () => {
  const actionResultMessage = useInterfacesStore(
    (state) => state.actionResultMessage
  );
  return (
    <dialog id="action-result">
      <div className="w-[320px] shadow-lg my-5 rounded-md p-3 flex self-center flex-col justify-between items-center">
        <div className="p-2 mt-1 mb-4 rounded-md shadow-sm bg-secondary text-white">
          Résultat
        </div>
        <p className="my-5 text-md text-center">{actionResultMessage}</p>
        <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
          <JsOutlineButton
            type="button"
            name="Okay"
            onClick={() => toggleModal("action-result")}
          />
        </div>
      </div>
    </dialog>
  );
};

export default ActionResult;
