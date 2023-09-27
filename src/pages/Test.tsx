import { toggleModal } from "../components/ui/Modal";
import JSInput from "../components/form/Input";
import AddingForm from "../components/ui/widgets/AddingForm";

const Test = () => {
  return (
    <>
      <div className="bg-secondary " onClick={() => toggleModal("modal")}>
        Show form
      </div>

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
    </>
  );
};

export default Test;
