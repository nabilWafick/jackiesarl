import { ReactNode } from "react";
import JSInput from "../../../components/form/Input";
import JsTextarea from "../../../components/form/Textarea";
import AddingForm from "../../../components/ui/AddingForm";
import { toggleModal } from "../../../components/ui/Modal";

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
            // onChange={()=>{}}
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Nom complet"
            autoComplete="fullname"
          />,
          <JSInput
            // onChange={()=>{}}
            name="ifuNumber"
            id="ifuNumber"
            type="number"
            placeholder="Numéro matricule"
            autoComplete="ifuNumber"
          />,
          <JSInput
            // onChange={()=>{}}
            name="email"
            id="email"
            type="email"
            placeholder="Adresse email"
            autoComplete="email"
          />,
          <JSInput
            // onChange={()=>{}}
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
            // onChange={()=>{}}
            name="quantity"
            id="quantity"
            type="number"
            placeholder="Quantité"
            autoComplete="quantity"
          />,
          <JSInput
            // onChange={()=>{}}
            name="category"
            id="category"
            type="text"
            placeholder="Catégorie"
            autoComplete="category"
          />,
          <JSInput
            // onChange={()=>{}}
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
          <JSInput
            // onChange={()=>{}}
            name="ctpNumber"
            id="ctpNumber"
            type="number"
            placeholder="Numéro CTP"
            autoComplete="ctpNumber"
          />,
          <JSInput
            // onChange={()=>{}}
            name="slip" // slip === bordereau
            id="slip"
            type="text"
            placeholder="Bordereau"
            autoComplete="slip"
          />,
          <JSInput
            // onChange={()=>{}}
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
        label="payment-adding-form"
        option="Paiement"
        inputs={[
          <JSInput
            // onChange={()=>{}}
            name="bcNumber"
            id="bcNumber"
            type="number"
            placeholder="Numéro BC"
            autoComplete="bcNumber"
          />,
          <JSInput
            // onChange={()=>{}}
            name="category"
            id="category"
            type="text"
            placeholder="Catégorie"
            autoComplete="category"
          />,
          <JSInput
            // onChange={()=>{}}
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
          <JSInput
            // onChange={()=>{}}
            name="bank"
            id="bank"
            type="text"
            placeholder="Banque"
            autoComplete="bank"
          />,
          <JSInput
            // onChange={()=>{}}
            name="reference"
            id="reference"
            type="text"
            placeholder="Référence"
            autoComplete="reference"
          />,
          <JSInput
            // onChange={()=>{}}
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
            // onChange={()=>{}}
            name="description"
            id="description"
            placeholder="Description"
          />,
          <JSInput
            // onChange={()=>{}}
            name="bank"
            id="bank"
            type="text"
            placeholder="Banque"
            autoComplete="bank"
          />,
          <JSInput
            // onChange={()=>{}}
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
          <JSInput
            // onChange={()=>{}}
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
            // onChange={()=>{}}
            name="bcNumber"
            id="bcNumber"
            type="number"
            placeholder="Bon de Commande"
            autoComplete="bcNumber"
          />,
          <JSInput
            // onChange={()=>{}}
            name="category"
            id="category"
            type="text"
            placeholder="Catégorie"
            autoComplete="category"
          />,
          <JSInput
            // onChange={()=>{}}
            name="purchasedQuantity"
            id="purchasedQuantity"
            type="number"
            placeholder="Quantité Achetée"
            autoComplete="purchasedQuantity"
          />,
          <JSInput
            // onChange={()=>{}}
            name="initialStock"
            id="initialStock"
            type="number"
            placeholder="Stock Initial"
            autoComplete="initialStock"
          />,
          <JSInput
            // onChange={()=>{}}
            name="sale"
            id="sale"
            type="number"
            placeholder="Vente"
            autoComplete="sale"
          />,
          <JSInput
            // onChange={()=>{}}
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
            // onChange={()=>{}}
            name="truckNumber"
            id="truckNumber"
            type="text"
            placeholder="Num Camiom"
            autoComplete="truckNumber"
          />,
          <JSInput
            // onChange={()=>{}}
            name="category"
            id="category"
            type="text"
            placeholder="Catégorie"
            autoComplete="category"
          />,
          <JSInput
            // onChange={()=>{}}
            name="driverNumber"
            id="driverNumber"
            type="number"
            placeholder="Num Chauffeur"
            autoComplete="driverNumber"
          />,
          <JSInput
            // onChange={()=>{}}
            name="bcNumber"
            id="bcNumber"
            type="number"
            placeholder="Bon de Commande"
            autoComplete="bcNumber"
          />,
          <JSInput
            // onChange={()=>{}}
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
            // onChange={()=>{}}
            name="bcNumber"
            id="bcNumber"
            type="number"
            placeholder="Bon de Commande"
            autoComplete="bcNumber"
          />,

          <JSInput
            // onChange={()=>{}}
            name="purchasedQuantity"
            id="purchasedQuantity"
            type="number"
            placeholder="Quantité Achetée"
            autoComplete="purchasedQuantity"
          />,

          <JSInput
            // onChange={()=>{}}
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
          <JSInput
            // onChange={()=>{}}
            name="bank"
            id="bank"
            type="text"
            placeholder="Banque"
            autoComplete="bank"
          />,
          <JSInput
            // onChange={()=>{}}
            name="check"
            id="check"
            type="number"
            placeholder="Chèque"
            autoComplete="check"
          />,
          <JSInput
            // onChange={()=>{}}
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
            // onChange={()=>{}}
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Nom complet"
            autoComplete="fullname"
          />,
          <JSInput
            // onChange={()=>{}}
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
            // onChange={()=>{}}
            name="deposit"
            id="deposit"
            type="text"
            placeholder="Dépot"
            autoComplete="deposit"
          />,
          <JSInput
            // onChange={()=>{}}
            name="currentStock"
            id="currentStock"
            type="number"
            placeholder="Stock Actuel"
            autoComplete="currentStock"
          />,

          <JSInput
            // onChange={()=>{}}
            name="managerName"
            id="managerName"
            type="text"
            placeholder="Nom Gérant"
            autoComplete="managerName"
          />,
          <JSInput
            // onChange={()=>{}}
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
            // onChange={()=>{}}
            name="quantityBeforeSelling"
            id="quantityBeforeSelling"
            type="number"
            placeholder="Quantité Avant Vente"
            autoComplete="quantityBeforeSelling"
          />,
          <JSInput
            // onChange={()=>{}}
            name="sale"
            id="sale"
            type="number"
            placeholder="Vente"
            autoComplete="sale"
          />,
          <JSInput
            // onChange={()=>{}}
            name="currentQuantity"
            id="currentQuantity"
            type="number"
            placeholder="Quantité Actuelle"
            autoComplete="currentQuantity"
          />,
          <JSInput
            // onChange={()=>{}}
            name="payment"
            id="payment"
            type="number"
            placeholder="Versement"
            autoComplete="payment"
          />,
          <JSInput
            // onChange={()=>{}}
            name="expense"
            id="expense"
            type="number"
            placeholder="Dépense"
            autoComplete="expense"
          />,
          <JsTextarea
            // onChange={()=>{}}
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
            // onChange={()=>{}}
            name="description"
            id="description"
            placeholder="Description"
          />,

          <JSInput
            // onChange={()=>{}}
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
          <JSInput
            // onChange={()=>{}}
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
            // onChange={()=>{}}
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Nom complet"
            autoComplete="fullname"
          />,
          <JSInput
            // onChange={()=>{}}
            name="quantity"
            id="quantity"
            type="number"
            placeholder="Quantité"
            autoComplete="quantity"
          />,
          <JSInput
            // onChange={()=>{}}
            name="destination"
            id="destination"
            type="text"
            placeholder="Destination"
            autoComplete="destination"
          />,
          <JSInput
            // onChange={()=>{}}
            name="orderDate"
            id="orderDate"
            type="date"
            placeholder="Date de commande"
            autoComplete="orderDate"
          />,
          <JSInput
            // onChange={()=>{}}
            name="deliveryDate"
            id="deliveryDate"
            type="date"
            placeholder="Date de livraison"
            autoComplete="deliveryDate"
          />,
          <JSInput
            // onChange={()=>{}}
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
            // onChange={()=>{}}
            name="bank"
            id="bank"
            type="text"
            placeholder="Nom de la Banque"
            autoComplete="bank"
          />,
          <JSInput
            // onChange={()=>{}}
            name="accountNumber"
            id="accountNumber"
            type="number"
            placeholder="Numéro de compte"
            autoComplete="accountNumber"
          />,
          <JSInput
            // onChange={()=>{}}
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
            // onChange={()=>{}}
            name="description"
            id="description"
            placeholder="Description"
          />,
          <JSInput
            // onChange={()=>{}}
            name="debit"
            id="debit"
            type="number"
            placeholder="Débit"
            autoComplete="debit"
          />,
          <JSInput
            // onChange={()=>{}}
            name="credit"
            id="credit"
            type="number"
            placeholder="Crédit"
            autoComplete="credit"
          />,

          <JSInput
            // onChange={()=>{}}
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
            // onChange={()=>{}}
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Client"
            autoComplete="fullname"
          />,
          <JSInput
            // onChange={()=>{}}
            name="cim-benin-debt"
            id="cim-benin-debt"
            type="number"
            placeholder="Créance CIM BENIN"
            autoComplete="cim-benin-debt"
          />,

          <JSInput
            // onChange={()=>{}}
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
