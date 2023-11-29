import { FC } from "react";
import SoldeCourant from "../../../../models/solde_courant/solde_courant.model";
import useSoldeCourantStore from "../../../../store/solde_courant/useSoldeCourant.store";
import { Link } from "react-router-dom";
import { authenticatedEmployee } from "../../../../data/GlobalData";
import { toggleModal } from "../widgets/ToggleModal";
import { FaEdit, FaTrash } from "react-icons/fa";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
import BankUpdate from "../../../form/forms/bank_update/BankUpdate";
import SoldeCourantAPI from "../../../../api/solde_courant/solde_courant.api";
import "../../../../assets/css/Sidebar.css";

interface BankAccountTableProps {
  bankAccountList: SoldeCourant[];
}

const BankAccountTable: FC<BankAccountTableProps> = ({ bankAccountList }) => {
  const setSelectedSoldeCourant = useSoldeCourantStore(
    (state) => state.setSelectedSoldeCourant
  );

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const authenticatedEmploye = authenticatedEmployee.value;

  const fetchAllSoldeCourant = useSoldeCourantStore(
    (state) => state.fetchAllSoldeCourant
  );

  return (
    <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md overflow-auto sidebar">
      <table className="table table-striped text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
        <tbody>
          <tr>
            <td className="font-medium">Banque</td>
            <td className="font-medium">Numéro de compte</td>
            <td className="font-medium">Solde Actuel</td>
            <td className="font-medium"></td>
            <td className="font-medium"></td>
          </tr>

          {bankAccountList.map((bankAccount) => (
            <tr key={bankAccount.id}>
              <td>
                <Link
                  className=" text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                  onClick={() => setSelectedSoldeCourant(bankAccount)}
                  to="/soldes-courants/details"
                >
                  {bankAccount.banque}
                </Link>
              </td>
              <td>
                <Link
                  className=" text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                  onClick={() => setSelectedSoldeCourant(bankAccount)}
                  to="/soldes-courants/details"
                >
                  {bankAccount.numero_compte}
                </Link>
              </td>
              <td>
                <Link
                  className=" text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                  onClick={() => setSelectedSoldeCourant(bankAccount)}
                  to="/soldes-courants/details"
                >
                  {bankAccount.solde_actuel} <i> fcfa</i>
                </Link>
              </td>
              <td>
                <div>
                  <BankUpdate
                    key={Date.now() + bankAccount.id!}
                    id={bankAccount.id!}
                    bank={bankAccount.banque}
                    accountNumber={bankAccount.numero_compte.toString()}
                    currentBalence={bankAccount.solde_actuel.toString()}
                    modalLabel={`bank-update-form-${bankAccount.id}`}
                  />
                  <i className="flex justify-end">
                    <FaEdit
                      color="green"
                      onClick={() =>
                        toggleModal(`bank-update-form-${bankAccount.id}`)
                      }
                    />
                  </i>
                </div>
              </td>
              <td>
                <i className="flex justify-end">
                  <FaTrash
                    color="red"
                    onClick={async () => {
                      const response = await SoldeCourantAPI.delete(
                        authenticatedEmploye!,
                        bankAccount.id!
                      );

                      if (response!.status == 204) {
                        setActionResultMessage(
                          "La banque a été supprimée avec succès"
                        );
                        toggleModal("action-result-message");
                        fetchAllSoldeCourant();
                      } else if (response!.status == 401) {
                        setActionResultMessage(
                          `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
                        );
                        toggleModal("action-result-message");
                      } else if (response!.status == 403) {
                        setActionResultMessage(response!.error!);
                        toggleModal("action-result-message");
                      } else if (response!.status == 404) {
                        setActionResultMessage("La banque n'a pas été trouvée");
                        toggleModal("action-result-message");
                      } else {
                        setActionResultMessage(
                          "Erreur lors de la suppression de la banque"
                        );
                        toggleModal("action-result-message");
                      }
                    }}
                  />
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankAccountTable;
