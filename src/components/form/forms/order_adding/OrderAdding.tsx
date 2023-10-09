import { FC } from "react";
import useOrderAddingForm from "../../../../hooks/form/order_adding/useOrderAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface OrderAddingProps {
  firstname: string;
  lastname: string;
  quantity: string;
  destination: string;
  orderDate: number;
  deliveryDate: number;
  category: string;
}

const OrderAdding: FC<OrderAddingProps> = ({
  firstname,
  lastname,
  quantity,
  destination,
  orderDate,
  deliveryDate,
  category,
}) => {
  const { formData, formErrors, onInputDataChange, onFormSubmit } =
    useOrderAddingForm({
      firstname: firstname,
      lastname: lastname,
      quantity: quantity,
      destination: destination,
      orderDate: orderDate,
      deliveryDate: deliveryDate,
      category: category,
    });
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
              <JSInput
                onChange={onInputDataChange}
                value={formData.firstname}
                name="firstname"
                id="firstname"
                type="text"
                placeholder="Prénoms"
                autoComplete="firstname"
              />
            </div>
            {formErrors.firstname && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.firstname}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.lastname}
                name="lastname"
                id="lastname"
                type="text"
                placeholder="Nom"
                autoComplete="lastname"
              />
            </div>
            {formErrors.lastname && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.lastname}
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
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.quantity}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
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
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.destination}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
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
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.orderDate}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
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
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
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
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.category}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
            <JsOutlineButton
              type="button"
              name="Annuler"
              onClick={() => toggleModal("order-adding-form")}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default OrderAdding;
