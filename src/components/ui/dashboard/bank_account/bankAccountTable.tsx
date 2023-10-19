import { FC } from "react";
import SoldeCourant from "../../../../models/solde_courant/solde_courant.model";
import useSoldeCourantStore from "../../../../store/solde_courant/useSoldeCourant.store";
import { Link } from "react-router-dom";

interface BankAccountTableProps {
  bankAccountList: SoldeCourant[];
}

const BankAccountTable: FC<BankAccountTableProps> = ({ bankAccountList }) => {
  const setSelectedSoldeCourant = useSoldeCourantStore(
    (state) => state.setSelectedSoldeCourant
  );

  return (
    <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
      <table className="table table-striped">
        <tbody>
          <tr>
            <td className="font-medium">Banque</td>
            <td className="font-medium">Numéro de compte</td>
            <td className="font-medium">Solde Actuel</td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankAccountTable;
