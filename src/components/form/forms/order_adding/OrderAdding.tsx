import useOrderAddingForm from "../../../../hooks/form/order_adding/useOrderAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input";

const OrderAdding = () => {
  const { formData, formErrors, onInputDataChange, onFormSubmit } =
    useOrderAddingForm();
  return (
    <Modal label="order-adding-form">
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Commande
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              {" "}
              <JSInput
                onChange={onInputDataChange}
                value={formData.fullname}
                name="fullname"
                id="fullname"
                type="text"
                placeholder="Nom complet"
                autoComplete="fullname"
              />
            </div>
            {formErrors.fullname && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.fullname}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.quantity.toString()}
                name="quantity"
                id="quantity"
                type="number"
                placeholder="Quantité"
                autoComplete="quantity"
              />
            </div>
            {formErrors.quantity && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.quantity}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              {" "}
              <JSInput
                onChange={onInputDataChange}
                value={formData.destination}
                name="destination"
                id="destination"
                type="text"
                placeholder="Destination"
                autoComplete="destination"
              />
              ,
            </div>
            {formErrors.destination && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.destination}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              {" "}
              <JSInput
                onChange={onInputDataChange}
                value={formData.orderDate.toString()}
                name="orderDate"
                id="orderDate"
                type="date"
                placeholder="Date de commande"
                autoComplete="orderDate"
              />
            </div>
            {formErrors.orderDate && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.orderDate}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              {" "}
              <JSInput
                onChange={onInputDataChange}
                value={formData.deliveryDate.toString()}
                name="deliveryDate"
                id="deliveryDate"
                type="date"
                placeholder="Date de livraison"
                autoComplete="deliveryDate"
              />
            </div>
            {formErrors.deliveryDate && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.deliveryDate}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.category}
                name="category"
                id="category"
                type="text"
                placeholder="Catégorie"
                autoComplete="category"
              />
            </div>
            {formErrors.category && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.category}
              </p>
            )}
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

export default OrderAdding;
