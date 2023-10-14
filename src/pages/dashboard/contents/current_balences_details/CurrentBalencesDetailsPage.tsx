import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import CurrentsBalenceTable from "../../../../components/ui/dashboard/current_balence_details/CurrentsBalenceTableDetails";
import "../../../../assets/css/table.css";
import CurrentBalenceDetailsAdding from "../../../../components/form/forms/current_balence_details_adding/CurrentBalenceDetailsAdding";
import { FC } from "react";
import useSoldeCourantStore from "../../../../store/solde_courant/useSoldeCourant.store";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";

const CurrentsBalenceDetailsPage: FC = () => {
  const selectedSoldeCourant = useSoldeCourantStore(
    (state) => state.selectedSoldeCourant
  );
  return (
    <div className="h-full w-full flex flex-col">
      <Link
        className=" text-black hover:text-black w-max font-normal"
        to="/soldes-courants"
      >
        <div className="my-3 flex self-start items-center p-2 border-2   border-primary text-sm">
          <BiArrowBack className="mr-3 text-secondary" size={20} /> Retour à la
          page précédente
        </div>
      </Link>
      <div className="p-2 my-2 bg-secondary text-white rounded-md shadow-md   w-max">
        {selectedSoldeCourant!.banque}
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        {/* <JSCategorySelect
          id="categoty"
          name="category"
          options={[
            { value: "increasing", label: "Ordre croissant" },
            { value: "decreasing", label: "Ordre décroissant" },
          ]}
        /> */}
        <AddingButton
          option="Passer une écriture"
          onClick={() => {
            toggleModal("current-balence-details-adding-form");
          }}
        />
        <CurrentBalenceDetailsAdding
          description=""
          debit=""
          credit=""
          currentBalence=""
        />
        <ActionResult />
      </div>
      <CurrentsBalenceTable selectedBank={selectedSoldeCourant} />
    </div>
  );
};

export default CurrentsBalenceDetailsPage;
