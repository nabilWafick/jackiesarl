import { FC, useEffect } from "react";
import useClientPurchasesWithoutBillStore from "../../../../store/achat_client_sans_facture/useAchatClientSansFacture";
import { FaFile, FaPlusCircle, FaWindowClose } from "react-icons/fa";
import Modal from "../widgets/Modal.widget";
import { toggleModal } from "../widgets/ToggleModal";
import useFactureMECEFStore from "../../../../store/facture_mecef/useFactureMECEF.store";

const SalesWithoutBillTable: FC = () => {
  // const selectedPurchase = useFactureMECEFStore((state) => state.selectedPurchase);
  const setSelectedPurchase = useFactureMECEFStore(
    (state) => state.setSelectedPurchase
  );
  const isUpdate = useFactureMECEFStore((state) => state.isUpdate);
  const purchasesWithoutBill = useClientPurchasesWithoutBillStore(
    (state) => state.purchasesWithoutBill
  );
  const fetchAllClientPurchasesWithoutBill = useClientPurchasesWithoutBillStore(
    (state) => state.fetchAllClientPurchasesWithoutBill
  );

  useEffect(() => {
    fetchAllClientPurchasesWithoutBill();
  }, [fetchAllClientPurchasesWithoutBill]);

  return (
    <Modal label="sales-without-bill">
      <div className="flex flex-row justify-between items-start w-max bg-white pl-7">
        <div className="flex flex-col justify-start w-full my-3 border-2 border-primary  rounded-lg shadow-md ">
          <table className="table table-striped text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
            <tbody>
              <tr className=" sticky top-0  ">
                <td className="font-medium">Client</td>
                <td className="font-medium">Quantité Achetée</td>
                <td className="font-medium">Catégorie</td>
                <td className="font-medium">Bon de Commande</td>
                <td className="font-medium">Montant</td>
                <td className="font-medium">Numéro CTP</td>
                <td className="font-medium">Bordereau </td>
                <td className="font-medium"></td>
              </tr>
              {purchasesWithoutBill.map((purchaseWithoutBill, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {purchaseWithoutBill.client!.prenoms}{" "}
                      {purchaseWithoutBill.client!.nom}
                    </td>
                    <td>
                      {purchaseWithoutBill.quantite_achetee}
                      <i> t</i>
                    </td>
                    <td>{purchaseWithoutBill.categorie}</td>
                    <td>{purchaseWithoutBill.numero_bc}</td>
                    <td>
                      {purchaseWithoutBill.montant}
                      <i> fcfa</i>
                    </td>
                    <td>{purchaseWithoutBill.numero_ctp}</td>
                    <td>
                      {purchaseWithoutBill.bordereau == "" ? (
                        ""
                      ) : (
                        <a
                          href={purchaseWithoutBill.bordereau as string}
                          target="_blank"
                          download={true}
                        >
                          <FaFile
                            className="text-secondary"
                            onClick={() => {
                              //  setFileLink(purchaseWithoutBill.bordereau as string);
                              //    toggleModal("file-shower");
                            }}
                          />
                        </a>
                      )}
                    </td>
                    <td>
                      <FaPlusCircle
                        className="flex justify-end self-end text-secondary hover:cursor-pointer "
                        onClick={() => {
                          setSelectedPurchase(purchaseWithoutBill);
                          toggleModal("sales-without-bill");
                          if (!isUpdate) {
                            toggleModal("mecef-bill-adding-form");
                          }
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <FaWindowClose
          size={20}
          className="flex items-start self-start sticky top-0 ml-3 mr-1 text-secondary hover:cursor-pointer "
          onClick={() => {
            toggleModal("sales-without-bill");
            // setFileLink(undefined);
          }}
        />
      </div>
    </Modal>
  );
};

export default SalesWithoutBillTable;
