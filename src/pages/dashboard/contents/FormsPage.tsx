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
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Nom complet"
            autoComplete="fullname"
          />,
          <JSInput
            name="matrucule-number"
            id="matricule-number"
            type="number"
            placeholder="Numéro matricule"
            autoComplete="matricule-number"
          />,
          <JSInput
            name="email"
            id="email"
            type="email"
            placeholder="Adresse email"
            autoComplete="email"
          />,
          <JSInput
            name="net-value"
            id="net-value"
            type="number"
            placeholder="Valeur net"
            autoComplete="net-value"
          />,
        ]}
        onValidate={() => {}}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "purchase-adding-form",
    form: (
      <AddingForm
        label="purchase-adding-form"
        option="Achat"
        inputs={[
          <JSInput
            name="quantity"
            id="quantity"
            type="number"
            placeholder="Quantité"
            autoComplete="quantity"
          />,
          <JSInput
            name="category"
            id="category"
            type="text"
            placeholder="Catégorie"
            autoComplete="category"
          />,
          <JSInput
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
          <JSInput
            name="ctp-number"
            id="ctp-number"
            type="number"
            placeholder="Numéro CTP"
            autoComplete="ctp-number"
          />,
          <JSInput
            name="slip" // slip === bordereau
            id="slip"
            type="text"
            placeholder="Bordereau"
            autoComplete="slip"
          />,
          <JSInput
            name="bc-number"
            id="bc-number"
            type="number"
            placeholder="Numéro BC"
            autoComplete="bc-number"
          />,
        ]}
        onValidate={() => {}}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "payment-adding-form",
    form: (
      <AddingForm
        label="payment-adding-form"
        option="Paiement"
        inputs={[
          <JSInput
            name="category"
            id="category"
            type="text"
            placeholder="Catégorie"
            autoComplete="category"
          />,
          <JSInput
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
          <JSInput
            name="bank"
            id="bank"
            type="text"
            placeholder="Banque"
            autoComplete="bank"
          />,
          <JSInput
            name="reference"
            id="reference"
            type="text"
            placeholder="Référence"
            autoComplete="reference"
          />,
          <JSInput
            name="slip" // slip === bordereau
            id="slip"
            type="text"
            placeholder="Bordereau"
            autoComplete="slip"
          />,
        ]}
        onValidate={() => {}}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "check-remittance-adding-form",
    form: (
      <AddingForm
        label="check-remittance-adding-form"
        option="Remise de Chèque"
        inputs={[
          <JsTextarea
            name="description"
            id="description"
            placeholder="Description"
          />,
          <JSInput
            name="bank"
            id="bank"
            type="text"
            placeholder="Banque"
            autoComplete="bank"
          />,
          <JSInput
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
          <JSInput
            name="rest"
            id="rest"
            type="number"
            placeholder="Reste"
            autoComplete="rest"
          />,
        ]}
        onValidate={() => {}}
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
            name="purchase-order"
            id="purchase-order"
            type="number"
            placeholder="Bon de Commande"
            autoComplete="purchase-order"
          />,
          <JSInput
            name="category"
            id="category"
            type="text"
            placeholder="Catégorie"
            autoComplete="category"
          />,
          <JSInput
            name="purchased-quantity"
            id="purchased-quantity"
            type="number"
            placeholder="Quantité Achetée"
            autoComplete="purchased-quantity"
          />,
          <JSInput
            name="initial-stock"
            id="initial-stock"
            type="number"
            placeholder="Stock Initial"
            autoComplete="initial-stock"
          />,
          <JSInput
            name="sale"
            id="sale"
            type="number"
            placeholder="Vente"
            autoComplete="sale"
          />,
          <JSInput
            name="final-stock"
            id="final-stock"
            type="number"
            placeholder="Stock Final"
            autoComplete="final-stock"
          />,
        ]}
        onValidate={() => {}}
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
            name="truck-number"
            id="truck-number"
            type="text"
            placeholder="Num Camiom"
            autoComplete="truck-number"
          />,
          <JSInput
            name="category"
            id="category"
            type="text"
            placeholder="Catégorie"
            autoComplete="category"
          />,
          <JSInput
            name="driver-number"
            id="driver-number"
            type="number"
            placeholder="Num Chauffeur"
            autoComplete="driver-number"
          />,
          <JSInput
            name="purchase-order"
            id="purchase-order"
            type="number"
            placeholder="Bon de Commande"
            autoComplete="purchase-order"
          />,
          <JSInput
            name="quantity"
            id="quantity"
            type="number"
            placeholder="Quantité"
            autoComplete="quantity"
          />,
        ]}
        onValidate={() => {}}
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
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Nom complet"
            autoComplete="fullname"
          />,
          <JSInput
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
        ]}
        onValidate={() => {}}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "fog-adding-form",
    form: (
      <AddingForm
        label="fog-adding-form"
        option="Brouillard"
        inputs={[
          <JSInput
            name="initial-quantity"
            id="initial-quantity"
            type="number"
            placeholder="Quantité Initiale"
            autoComplete="initial-quantity"
          />,
          <JSInput
            name="sale"
            id="sale"
            type="number"
            placeholder="Vente"
            autoComplete="sale"
          />,
          <JSInput
            name="final-quantity"
            id="final-quantity"
            type="number"
            placeholder="Quantité Finale"
            autoComplete="final-quantity"
          />,
          <JSInput
            name="payment"
            id="payment"
            type="number"
            placeholder="Versement"
            autoComplete="payment"
          />,
          <JSInput
            name="expense"
            id="expense"
            type="number"
            placeholder="Dépense"
            autoComplete="expense"
          />,
          <JsTextarea
            name="observation"
            id="observation"
            placeholder="Observation"
          />,
        ]}
        onValidate={() => {}}
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
            name="description"
            id="description"
            placeholder="Description"
          />,

          <JSInput
            name="amount"
            id="amount"
            type="number"
            placeholder="Montant"
            autoComplete="amount"
          />,
          <JSInput
            name="piece"
            id="piece"
            type="text"
            placeholder="Pièce"
            autoComplete="piece"
          />,
        ]}
        onValidate={() => {}}
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
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Nom complet"
            autoComplete="fullname"
          />,
          <JSInput
            name="quantity"
            id="quantity"
            type="number"
            placeholder="Quantité"
            autoComplete="quantity"
          />,
          <JSInput
            name="destination"
            id="destination"
            type="text"
            placeholder="Destination"
            autoComplete="destination"
          />,
          <JSInput
            name="delivery-date"
            id="delivery-date"
            type="date"
            placeholder="Date de livraison"
            autoComplete="delivery-date"
          />,
          <JSInput
            name="category"
            id="category"
            type="text"
            placeholder="Catégorie"
            autoComplete="category"
          />,
        ]}
        onValidate={() => {}}
        onCancel={toggleModal}
      />
    ),
  },
  {
    label: "current-balence-adding-form",
    form: (
      <AddingForm
        label="bank-adding-form"
        option="Solde Courant"
        inputs={[
          <JSInput
            name="bank"
            id="bank"
            type="text"
            placeholder="Banque"
            autoComplete="bank"
          />,
          <JSInput
            name="account-number"
            id="account-number"
            type="number"
            placeholder="Numéro de compte"
            autoComplete="account-number"
          />,
          <JSInput
            name="current-balence"
            id="current-balence"
            type="number"
            placeholder="Solde Actuel"
            autoComplete="current-balence"
          />,
        ]}
        onValidate={() => {}}
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
            name="description"
            id="description"
            placeholder="Description"
          />,

          <JSInput
            name="credit"
            id="credit"
            type="number"
            placeholder="Crédit"
            autoComplete="credit"
          />,
          <JSInput
            name="debit"
            id="debit"
            type="number"
            placeholder="Débit"
            autoComplete="debit"
          />,
          <JSInput
            name="account-number"
            id="account-number"
            type="number"
            placeholder="Numéro de compte"
            autoComplete="account-number"
          />,
        ]}
        onValidate={() => {}}
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
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Client"
            autoComplete="fullname"
          />,
          <JSInput
            name="cim-benin-debt"
            id="cim-benin-debt"
            type="number"
            placeholder="Créance CIM BENIN"
            autoComplete="cim-benin-debt"
          />,

          <JSInput
            name="nocibe-debt"
            id="nocibe-debt"
            type="number"
            placeholder="Créance NOCIBE"
            autoComplete="nocibe-debt"
          />,
        ]}
        onValidate={() => {}}
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
