import { FC, ReactNode } from "react";
import JsOutlineButton from "./OutlineButton";
import JsButton from "./Button";

interface AddingButtonProps {
  option: string;
  inputs: ReactNode[];
}

const AddingForm: FC<AddingButtonProps> = ({ option, inputs }) => {
  return (
    <div
      className="flex flex-col self-center justify-center bg-white items-center my-10 w-[300px] p-3 shadow-xl
"
    >
      <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
        {option}
      </div>

      {inputs.map((input) => (
        <div className="my-2 w-full">{input}</div>
      ))}

      <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
        <JsOutlineButton type="button" name="Annuler" onClick={() => {}} />
        <JsButton type="button" name="Valider" onClick={() => {}} />
      </div>
    </div>
  );
};

export default AddingForm;
