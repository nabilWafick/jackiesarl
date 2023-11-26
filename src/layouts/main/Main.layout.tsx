import { FC /*, useEffect */ } from "react";
import { Routes, Route } from "react-router-dom";
import AdvancePage from "../../pages/dashboard/contents/advance/AdvancePage";
import AutorisationsPage from "../../pages/dashboard/contents/autorisations/AutorisationsPage";
import BankAccountsListPage from "../../pages/dashboard/contents/bank_account_list/BankAccountsListPage";
import ClientBalancePage from "../../pages/dashboard/contents/client_balence/ClientBalancePage";
import ClientCheckRemittancePage from "../../pages/dashboard/contents/client_check_remittance/ClientCheckRemittancePage";
import ClientPaymentsPage from "../../pages/dashboard/contents/client_payments/ClientPaymentsPage";
import ClientPurchasesPage from "../../pages/dashboard/contents/client_purchases/ClientPurchasesPage";
import ClientsListPage from "../../pages/dashboard/contents/clients_list/ClientsListPage";
import ClientsTonnageListPage from "../../pages/dashboard/contents/clients_tonnage_list/ClientsTonnageListPage";
import PurchasesPage from "../../pages/dashboard/contents/company_purchases/CompanyPurchasesPage";
import DebtsListPage from "../../pages/dashboard/contents/debts_list/DebtListPage";
import ExpensesValidationsPage from "../../pages/dashboard/contents/expenses_validation/ExpensesValidationPage";
import FogPage from "../../pages/dashboard/contents/fog/FogPage";
import ModificationsPage from "../../pages/dashboard/contents/modifications/ModificationsPage";
import OrdersPage from "../../pages/dashboard/contents/orders/OrdersPage";
import PaymentsValidationsPage from "../../pages/dashboard/contents/payments_validations/PaymentsValidationsPage";
import PurchaseOrderStockPage from "../../pages/dashboard/contents/purchase_order_stock/PurchaseOrderStockPage";
import RapportsPage from "../../pages/dashboard/contents/rapports/RapportsPage";
import SellingStatisticsPage from "../../pages/dashboard/contents/sales_statistics/SalesStatisticPage";
import SearchPage from "../../pages/dashboard/contents/search/SearchPage";
import SelectedClientPage from "../../pages/dashboard/contents/selected_client/SelectedClient";
import StockChartsPage from "../../pages/dashboard/contents/stock_chart/StockChartPage";
import TruckStockPage from "../../pages/dashboard/contents/truck_stock/TruckStockPage";
import NotFoundPage from "../../pages/unfounded_page/404";
import TableBord from "../../pages/dashboard/contents/table_bord/TableBord";
import SalesPage from "../../pages/dashboard/contents/sales/SalesPage";
import FogDetailsPage from "../../pages/dashboard/contents/fog_details/FogDetailsPage";
import CurrentsBalenceDetailsPage from "../../pages/dashboard/contents/current_balences_details/CurrentBalencesDetailsPage";
import "../../assets/css/Sidebar.css";
import PaymentsPage from "../../pages/dashboard/contents/payments/PaymentsPage";
import ExpensesPage from "../../pages/dashboard/contents/expenses/ExpensesPage";
import FactureMECEFPage from "../../pages/dashboard/contents/factures_mecef/FactureMECEFPage";

const Main: FC = () => {
  return (
    <main className="ml-[10vh] sm:ml-[13vh] md:ml-[20vh] lg:ml-[30vh] h-full pt-[14vh] overflow-auto flex justify-center items-center' sidebar bg-white relative px-2.5">
      <Routes>
        <Route path="/" Component={TableBord} />
        <Route path="/search" Component={SearchPage} />
        <Route path="/clients" Component={ClientsListPage} />
        <Route path="/client" Component={SelectedClientPage} />
        <Route path="/clients/achats" Component={ClientPurchasesPage} />
        <Route path="/clients/paiements" Component={ClientPaymentsPage} />
        <Route path="/clients/soldes" Component={ClientBalancePage} />
        <Route
          path="/clients/remise-de-cheque"
          Component={ClientCheckRemittancePage}
        />
        <Route
          path="/clients/liste-tonnage"
          Component={ClientsTonnageListPage}
        />
        <Route path="/stock" Component={StockChartsPage} />
        <Route path="/stock/bon-commande" Component={PurchaseOrderStockPage} />
        <Route path="/stock/camion" Component={TruckStockPage} />
        <Route path="/vente" Component={SalesPage} />
        <Route path="/vente/statistiques" Component={SellingStatisticsPage} />
        <Route path="/paiements" Component={PaymentsPage} />
        <Route
          path="/paiements/validations"
          Component={PaymentsValidationsPage}
        />
        <Route path="/avances" Component={AdvancePage} />
        <Route path="/achat" Component={PurchasesPage} />
        <Route path="/modifications" Component={ModificationsPage} />
        <Route path="/creances" Component={DebtsListPage} />
        <Route path="/brouillard" Component={FogPage} />
        <Route path="/brouillard/details" Component={FogDetailsPage} />
        <Route path="/depenses" Component={ExpensesPage} />
        <Route
          path="/depenses/validations"
          Component={ExpensesValidationsPage}
        />
        <Route path="/rapports" Component={RapportsPage} />
        <Route path="/commandes" Component={OrdersPage} />
        <Route path="/soldes-courants/" Component={BankAccountsListPage} />
        <Route
          path="/soldes-courants/details"
          Component={CurrentsBalenceDetailsPage}
        />
        <Route path="/autorisations" Component={AutorisationsPage} />
        <Route path="/factures-mecef" Component={FactureMECEFPage} />
        <Route path="" Component={NotFoundPage} /> // empty ""
        <Route path="*" Component={NotFoundPage} /> // star
        <Route Component={NotFoundPage} /> // without path
      </Routes>
    </main>
  );
};

export default Main;
