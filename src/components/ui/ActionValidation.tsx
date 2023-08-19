import JsOutlineButton from "./OutlineButton";
import JsButton from "./Button";

const ActionValidation = () => (
  <div className="w-[320px] shadow-lg my-5 rounded-md p-3 flex self-center flex-col justify-between items-center">
    <div className="p-2 mt-1 mb-4 rounded-md shadow-sm bg-secondary text-white">
      Attention
    </div>
    <p className="my-5 text-md text-center">
      Etes-vous sur de cette modification
    </p>
    <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
      <JsOutlineButton type="button" name="Annuler" onClick={() => {}} />
      <JsButton type="button" name="Valider" onClick={() => {}} />
    </div>
  </div>
);

export default ActionValidation;
