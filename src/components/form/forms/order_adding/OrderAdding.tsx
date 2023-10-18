import { FC } from "react";
import useOrderAddingForm from "../../../../hooks/form/order_adding/useOrderAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";
import JSDateTimePicker from "../../widgets/DateTimePicker.widget";
import useClientsStore from "../../../../store/clients/useClients.store";

interface OrderAddingProps {
  clientName: string;
  quantity: string;
  destination: string;
  orderDate: Date | null;
  deliveryDate: Date | null;
  category: string;
}

const OrderAdding: FC<OrderAddingProps> = ({
  clientName,
  quantity,
  destination,
  orderDate,
  deliveryDate,
  category,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    updateClientNameFormData,
    onClientNameInputDataChange,
    onOrderDateInputChange,
    onDeliveryDateInputChange,
    onFormClose,
    onFormSubmit,
  } = useOrderAddingForm({
    clientName: clientName,
    quantity: quantity,
    destination: destination,
    orderDate: orderDate,
    deliveryDate: deliveryDate,
    category: category,
  });

  const setOrderClient = useClientsStore((state) => state.setOrderClient);
  const searchedClients = useClientsStore((state) => state.searchedClients);
  const refreshSearchedClients = useClientsStore(
    (state) => state.refreshSearchedClients
  );

  return (
    <Modal label="order-adding-form">
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center bg-white items-center my-10' w-[350px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Commande
          </div>

          <div className="pl-10 text-tableTextColor font-medium w-full block break-words">
            <ul>
              {searchedClients.map((searchedClient) => (
                <li
                  key={searchedClient.id!}
                  className=" cursor-pointer"
                  onClick={() => {
                    setOrderClient(searchedClient);
                    updateClientNameFormData(
                      `${searchedClient.prenoms} ${searchedClient.nom}`
                    );
                    refreshSearchedClients();
                  }}
                >
                  {searchedClient.prenoms} {searchedClient.nom}
                </li>
              ))}
            </ul>
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onClientNameInputDataChange}
                value={formData.clientName}
                name="clientName"
                id="clientName"
                type="text"
                placeholder="Nom du Client"
                autoComplete="clientName"
              />
            </div>
            {formErrors.clientName && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.clientName}
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
                type="text"
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
            </div>
            {formErrors.destination && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.destination}
              </p>
            )}
          </div>

          <div className="input-group mt-3">
            <label htmlFor="orderDate" className="text-black ">
              Date de commande
            </label>
            <div className="mt-1 mb-1 w-full">
              <JSDateTimePicker
                name="orderDate"
                id="orderDate"
                placeholder="Date de commande"
                selectedDate={formData.orderDate}
                onChange={onOrderDateInputChange}
              />
            </div>
            {formErrors.orderDate && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.orderDate}
              </p>
            )}
          </div>

          <div className="input-group mt-3">
            <label htmlFor="deliveryDate" className="text-black">
              Date de Livraison
            </label>
            <div className="mt-1 mb-1 w-full">
              <JSDateTimePicker
                name="deliveryDate"
                id="deliveryDate"
                placeholder="Date de livraison"
                selectedDate={formData.deliveryDate}
                onChange={onDeliveryDateInputChange}
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
              name="Fermer"
              onClick={() => {
                onFormClose();
                setOrderClient(undefined);
                refreshSearchedClients();
                toggleModal("order-adding-form");
              }}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default OrderAdding;
