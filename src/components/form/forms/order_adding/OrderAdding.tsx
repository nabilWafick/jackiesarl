import { FC } from "react";
import useOrderAddingForm from "../../../../hooks/forms/order_adding/useOrderAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";
import JSDateTimePicker from "../../widgets/DateTimePicker.widget";
import useClientsStore from "../../../../store/clients/useClients.store";
import { Moment } from "moment";
import JSFormSelect from "../../widgets/FormSelect.widget";

interface OrderAddingProps {
  clientName: string;
  quantity: string;
  destination: string;
  orderDate: Date | Moment | undefined;
  deliveryDate: Date | Moment | undefined;
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
    onCategorieSelectChange,
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
          className="flex flex-col self-center justify-center items-center pb-10 w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Commande
          </div>

          <div className="pl-2 text-tableTextColor font-medium w-full block break-words">
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

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onClientNameInputDataChange}
                value={formData.clientName}
                name="clientName"
                id="clientName"
                type="text"
                placeholder="Nom du Client"
                autoComplete="off"
              />
            </div>
            {formErrors.clientName && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.clientName}
              </p>
            )}
          </div>

          <div className="input-group w-full mt-3">
            {/* <label htmlFor="orderDate" className="text-black ">
              Date de commande
            </label> */}
            <div className="mt-1 mb-1 w-full">
              <JSDateTimePicker
                name="orderDate"
                id="orderDate"
                placeholder="Date de commande"
                selectedDateTime={formData.orderDate}
                onDateChange={onOrderDateInputChange}
              />
            </div>
            {formErrors.orderDate && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.orderDate}
              </p>
            )}
          </div>

          <div className="input-group w-full mt-3">
            {/* <label htmlFor="deliveryDate" className="text-black">
              Date de Livraison
            </label> */}
            <div className="mt-1 mb-1 w-full">
              <JSDateTimePicker
                name="deliveryDate"
                id="deliveryDate"
                placeholder="Date de livraison"
                selectedDateTime={formData.deliveryDate}
                onDateChange={onDeliveryDateInputChange}
              />
            </div>
            {formErrors.deliveryDate && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.deliveryDate}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.quantity}
                name="quantity"
                id="quantity"
                type="text"
                placeholder="Quantité"
                autoComplete="off"
              />
            </div>
            {formErrors.quantity && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.quantity}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.destination}
                name="destination"
                id="destination"
                type="text"
                placeholder="Destination"
                autoComplete="off"
              />
            </div>
            {formErrors.destination && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.destination}
              </p>
            )}
          </div>

          {/* <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.category}
                name="category"
                id="category"
                type="text"
                placeholder="Catégorie"
               autoComplete="off"    />
            </div>
            {formErrors.category && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.category}
              </p>
            )}
          </div> */}
          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSFormSelect
                id="category"
                name="category"
                options={[
                  { value: "CIM BENIN", label: "CIM BENIN" },
                  { value: "NOCIBE", label: "NOCIBE" },
                ]}
                selectedOption={formData.category}
                onChange={onCategorieSelectChange}
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
