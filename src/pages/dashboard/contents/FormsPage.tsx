import { ReactNode } from "react";
import JSInput from "../../../components/form/widgets/Input";
import JsTextarea from "../../../components/form/widgets/Textarea";
import AddingForm from "../../../components/ui/dashboard/widgets/AddingForm";
import { toggleModal } from "../../../components/ui/dashboard/widgets/ToggleModal";

export interface FormStructure {
  label: string;
  form: ReactNode;
}

export const forms: FormStructure[] = [
  {
    label: "client-adding-form",
    form: (
      <AddingForm
        label="client-adding-form"
        option="Client"
        inputs={[
          <JSInput
            onChange={() => {}}
            value={""}
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Nom complet"
            autoComplete="fullname"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="ifuNumber"
            id="ifuNumber"
            type="number"
            placeholder="Numéro matricule"
            autoComplete="ifuNumber"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="email"
            id="email"
            type="email"
            placeholder="Adresse email"
            autoComplete="email"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="netValue"
            id="netValue"
            type="number"
            placeholder="Valeur net"
            autoComplete="netValue"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "client-purchase-adding-form",
    form: (
      <AddingForm
        label="purchase-adding-form"
        option="Achat"
        inputs={[
          <JSInput
            onChange={() => {}}
            value={""}
            name="quantity"
            id="quantity"
            type="number"
            placeholder="Quantité"
            autoComplete="quantity"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="category"
            id="category"
            type="text"
            placeholder="Catégorie"
            autoComplete="category"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="ctpNumber"
            id="ctpNumber"
            type="number"
            placeholder="Numéro CTP"
            autoComplete="ctpNumber"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="slip" // slip === bordereau
            id="slip"
            type="text"
            placeholder="Bordereau"
            autoComplete="slip"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="bcNumber"
            id="bcNumber"
            type="number"
            placeholder="Numéro BC"
            autoComplete="bcNumber"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "client-payment-adding-form",
    form: (
      <AddingForm
        label="client-payment-adding-form"
        option="Paiement"
        inputs={[
          <JSInput
            onChange={() => {}}
            value={""}
            name="bcNumber"
            id="bcNumber"
            type="number"
            placeholder="Numéro BC"
            autoComplete="bcNumber"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="category"
            id="category"
            type="text"
            placeholder="Catégorie"
            autoComplete="category"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="bank"
            id="bank"
            type="text"
            placeholder="Banque"
            autoComplete="bank"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="reference"
            id="reference"
            type="text"
            placeholder="Référence"
            autoComplete="reference"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="slip" // slip === bordereau
            id="slip"
            type="text"
            placeholder="Bordereau"
            autoComplete="slip"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "client-check-remittance-adding-form",
    form: (
      <AddingForm
        label="check-remittance-adding-form"
        option="Remise de Chèque"
        inputs={[
          <JsTextarea
            onChange={() => {}}
            value={""}
            name="description"
            id="description"
            placeholder="Description"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="bank"
            id="bank"
            type="text"
            placeholder="Banque"
            autoComplete="bank"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="rest"
            id="rest"
            type="number"
            placeholder="Reste"
            autoComplete="rest"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "purchase-order-stock-adding-form",
    form: (
      <AddingForm
        label="purchase-order-stock-adding-form"
        option="Stock Bon de Commande"
        inputs={[
          <JSInput
            onChange={() => {}}
            value={""}
            name="bcNumber"
            id="bcNumber"
            type="number"
            placeholder="Bon de Commande"
            autoComplete="bcNumber"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="category"
            id="category"
            type="text"
            placeholder="Catégorie"
            autoComplete="category"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="purchasedQuantity"
            id="purchasedQuantity"
            type="number"
            placeholder="Quantité Achetée"
            autoComplete="purchasedQuantity"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="initialStock"
            id="initialStock"
            type="number"
            placeholder="Stock Initial"
            autoComplete="initialStock"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="sale"
            id="sale"
            type="number"
            placeholder="Vente"
            autoComplete="sale"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="currentstock"
            id="currentstock"
            type="number"
            placeholder="Stock Final"
            autoComplete="currentstock"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "truck-stock-adding-form",
    form: (
      <AddingForm
        label="truck-stock-adding-form"
        option="Stock Camion"
        inputs={[
          <JSInput
            onChange={() => {}}
            value={""}
            name="truckNumber"
            id="truckNumber"
            type="text"
            placeholder="Num Camiom"
            autoComplete="truckNumber"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="category"
            id="category"
            type="text"
            placeholder="Catégorie"
            autoComplete="category"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="driverNumber"
            id="driverNumber"
            type="number"
            placeholder="Num Chauffeur"
            autoComplete="driverNumber"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="bcNumber"
            id="bcNumber"
            type="number"
            placeholder="Bon de Commande"
            autoComplete="bcNumber"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="quantity"
            id="quantity"
            type="number"
            placeholder="Quantité"
            autoComplete="quantity"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "company-purchase-adding-form",
    form: (
      <AddingForm
        label="purchase-order-stock-adding-form"
        option="Stock Bon de Commande"
        inputs={[
          <JSInput
            onChange={() => {}}
            value={""}
            name="bcNumber"
            id="bcNumber"
            type="number"
            placeholder="Bon de Commande"
            autoComplete="bcNumber"
          />,

          <JSInput
            onChange={() => {}}
            value={""}
            name="purchasedQuantity"
            id="purchasedQuantity"
            type="number"
            placeholder="Quantité Achetée"
            autoComplete="purchasedQuantity"
          />,

          <JSInput
            onChange={() => {}}
            value={""}
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="bank"
            id="bank"
            type="text"
            placeholder="Banque"
            autoComplete="bank"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="check"
            id="check"
            type="number"
            placeholder="Chèque"
            autoComplete="check"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="slip"
            id="slip"
            type="text"
            placeholder="Bordereau"
            autoComplete="slip"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "advance-adding-form",
    form: (
      <AddingForm
        label="advance-adding-form"
        option="Avance"
        inputs={[
          <JSInput
            onChange={() => {}}
            value={""}
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Nom complet"
            autoComplete="fullname"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "fog-adding-form",
    form: (
      <AddingForm
        label="fog-adding-form"
        option="Dépot"
        inputs={[
          <JSInput
            onChange={() => {}}
            value={""}
            name="deposit"
            id="deposit"
            type="text"
            placeholder="Dépot"
            autoComplete="deposit"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="currentStock"
            id="currentStock"
            type="number"
            placeholder="Stock Actuel"
            autoComplete="currentStock"
          />,

          <JSInput
            onChange={() => {}}
            value={""}
            name="managerName"
            id="managerName"
            type="text"
            placeholder="Nom Gérant"
            autoComplete="managerName"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="managerNumber"
            id="managerNumber"
            type="number"
            placeholder="Num Gérant"
            autoComplete="managerNumber"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "fog-details-adding-form",
    form: (
      <AddingForm
        label="fog-details-adding-form"
        option="Brouillard"
        inputs={[
          <JSInput
            onChange={() => {}}
            value={""}
            name="quantityBeforeSelling"
            id="quantityBeforeSelling"
            type="number"
            placeholder="Quantité Avant Vente"
            autoComplete="quantityBeforeSelling"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="sale"
            id="sale"
            type="number"
            placeholder="Vente"
            autoComplete="sale"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="currentQuantity"
            id="currentQuantity"
            type="number"
            placeholder="Quantité Actuelle"
            autoComplete="currentQuantity"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="payment"
            id="payment"
            type="number"
            placeholder="Versement"
            autoComplete="payment"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="expense"
            id="expense"
            type="number"
            placeholder="Dépense"
            autoComplete="expense"
          />,
          <JsTextarea
            onChange={() => {}}
            value={""}
            name="observation"
            id="observation"
            placeholder="Observation"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "expense-adding-form",
    form: (
      <AddingForm
        label="expense-adding-form"
        option="Dépenses"
        inputs={[
          <JsTextarea
            onChange={() => {}}
            value={""}
            name="description"
            id="description"
            placeholder="Description"
          />,

          <JSInput
            onChange={() => {}}
            value={""}
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="piece"
            id="piece"
            type="text"
            placeholder="Pièce"
            autoComplete="piece"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "order-adding-form",
    form: (
      <AddingForm
        label="order-adding-form"
        option="Commandes"
        inputs={[
          <JSInput
            onChange={() => {}}
            value={""}
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Nom complet"
            autoComplete="fullname"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="quantity"
            id="quantity"
            type="number"
            placeholder="Quantité"
            autoComplete="quantity"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="destination"
            id="destination"
            type="text"
            placeholder="Destination"
            autoComplete="destination"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="orderDate"
            id="orderDate"
            type="date"
            placeholder="Date de commande"
            autoComplete="orderDate"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="deliveryDate"
            id="deliveryDate"
            type="date"
            placeholder="Date de livraison"
            autoComplete="deliveryDate"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="category"
            id="category"
            type="text"
            placeholder="Catégorie"
            autoComplete="category"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "bank-adding-form",
    form: (
      <AddingForm
        label="bank-adding-form"
        option="Banque"
        inputs={[
          <JSInput
            onChange={() => {}}
            value={""}
            name="bank"
            id="bank"
            type="text"
            placeholder="Nom de la Banque"
            autoComplete="bank"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="accountNumber"
            id="accountNumber"
            type="number"
            placeholder="Numéro de compte"
            autoComplete="accountNumber"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="currentBalance"
            id="currentBalance"
            type="number"
            placeholder="Solde actuel"
            autoComplete="currentBalance"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "current-balence-details-adding-form",
    form: (
      <AddingForm
        label="current-balence-details-adding-form"
        option="Soldes Courants"
        inputs={[
          <JsTextarea
            onChange={() => {}}
            value={""}
            name="description"
            id="description"
            placeholder="Description"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="debit"
            id="debit"
            type="number"
            placeholder="Débit"
            autoComplete="debit"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="credit"
            id="credit"
            type="number"
            placeholder="Crédit"
            autoComplete="credit"
          />,

          <JSInput
            onChange={() => {}}
            value={""}
            name="currentBalence"
            id="currentBalence"
            type="number"
            placeholder="Solde actuel"
            autoComplete="currentBalence"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "debt-adding-form",
    form: (
      <AddingForm
        label="debt-adding-form"
        option="Créance"
        inputs={[
          <JSInput
            onChange={() => {}}
            value={""}
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Client"
            autoComplete="fullname"
          />,
          <JSInput
            onChange={() => {}}
            value={""}
            name="cim-benin-debt"
            id="cim-benin-debt"
            type="number"
            placeholder="Créance CIM BENIN"
            autoComplete="cim-benin-debt"
          />,

          <JSInput
            onChange={() => {}}
            value={""}
            name="nocibe-debt"
            id="nocibe-debt"
            type="number"
            placeholder="Créance NOCIBE"
            autoComplete="nocibe-debt"
          />,
        ]}
        onCancel={toggleModal}
      />
    ),
  },
];

const FormsPage = () => {
  return (
    <div className="h-full w-full justify-center items-center content-center p-5 grid grid-cols-3">
      {forms.map((form) => (
        <div key={form.label}>{form.form}</div>
      ))}
    </div>
  );
};

export default FormsPage;
