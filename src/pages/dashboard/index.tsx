import NavBar from "../../layouts/navbar/NavBar";
import SideBar from "../../layouts/sidebar/SideBar";
import RapportsPage from "./contents/rapports/RapportsPage";
import { Routes, Route } from "react-router-dom";
import TableBord from "./contents/table_bord/TableBord";
import ClientsListPage from "./contents/clients_list/ClientsListPage";
import StockChartsPage from "./contents/stock_chart/StockChartPage";
import SellingPage from "./contents/sales/SalesPage";
import PaymentsPage from "./contents/payments/PaymentsPage";
import AdvancePage from "./contents/advance/AdvancePage";
import PurchasesPage from "./contents/company_purchases/CompanyPurchasesPage";
import ModificationsPage from "./contents/modifications/ModificationsPage";
import DebtsListPage from "./contents/debts_list/DebtListPage";
import ExpensesPage from "./contents/expenses/ExpensesPage";
import OrdersPage from "./contents/orders/OrdersPage";
import CurrentsBalencePage from "./contents/current_balences_details/CurrentBalencesDetailsPage";
import AutorisationsPage from "./contents/autorisations/AutorisationsPage";
import LogoutPage from "../logout/LogoutPage";
import FogInformationsPage from "./contents/fog_details/FogDetailsPage";
import "../../assets/css/Sidebar.css";
import BankAccountsListPage from "./contents/bank_account_list/BankAccountsListPage";
import NotFoundPage from "../unfounded_page/404";
import ClientPurchasesPage from "./contents/client_purchases/ClientPurchasesPage";
import ClientPaymentsPage from "./contents/client_payments/ClientPaymentsPage";
import ClientBalancePage from "./contents/client_balence/ClientBalancePage";
import ClientCheckRemittancePage from "./contents/client_check_remittance/ClientCheckRemittancePage";
import PurchaseOrderStockPage from "./contents/purchase_order_stock/PurchaseOrderStockPage";
import TruckStockPage from "./contents/truck_stock/TruckStockPage";
import SellingStatisticsPage from "./contents/sales_statistics/SalesStatisticPage";
import PaymentsValidationsPage from "./contents/payments_validations/PaymentsValidationsPage";
import ClientsChartPage from "./contents/clients_chart/ClientsChartPage";
import ClientsTonnageListPage from "./contents/clients_tonnage_list/ClientsTonnageListPage";
import DebtsChartPage from "./contents/debts_chart/DebtsChartPage";
import ExpensesValidationsPage from "./contents/expenses_validation/ExpensesValidationPage";
import FogPage from "./contents/fog/FogPage";
import SelectedClientPage from "./contents/selected_client/SelectedClient";
import SearchPage from "./contents/search/SearchPage";

function Dashboard() {
  return (
    <div
      className=" h-screen w-screen flex flex-row justify-center overflow-x-hidden sidebar bg-stone-100' "
      //    style={{ width: "" }}
    >
      {/*=============================== SIDEBAR ==============================*/}
      <SideBar />
      {/*================================== MAIN ==================================*/}

      <div className="flex flex-row h-full w-full ">
        <div className="w-[22%] h-full"></div>
        <div className="flex flex-col h-full w-full ">
          {/*============================= NAVBAR ===========================*/}
          <NavBar />

          {/*============================= CONTENT ===========================*/}
          <div
            className="pt-5 pr-4 mt-20  h-max w-full flex justify-center items-center" // style={{ height: "100px" }}
          >
            {/* <TestPage /> */}

            <Routes>
              <Route path="/" Component={TableBord} />
              <Route path="/search" Component={SearchPage} />
              <Route path="/clients" Component={ClientsListPage} />
              <Route path="/client" Component={SelectedClientPage} />
              <Route path="/clients/achats" Component={ClientPurchasesPage} />
              <Route path="/clients/paiements" Component={ClientPaymentsPage} />
              <Route path="/clients/soldes" Component={ClientBalancePage} />
              <Route
                path="/clients/statistiques"
                Component={ClientsChartPage}
              />
              <Route
                path="/clients/remise-de-cheque"
                Component={ClientCheckRemittancePage}
              />
              <Route
                path="/clients/liste-tonnage"
                Component={ClientsTonnageListPage}
              />
              <Route path="/stock" Component={StockChartsPage} />
              <Route
                path="/stock/bon-commande"
                Component={PurchaseOrderStockPage}
              />
              <Route path="/stock/camion" Component={TruckStockPage} />
              <Route path="/vente" Component={SellingPage} />
              <Route
                path="/vente/statistiques"
                Component={SellingStatisticsPage}
              />
              <Route path="/paiements" Component={PaymentsPage} />
              <Route
                path="/paiements/validations"
                Component={PaymentsValidationsPage}
              />
              <Route path="/avance" Component={AdvancePage} />
              <Route path="/achat" Component={PurchasesPage} />
              <Route path="/modifications" Component={ModificationsPage} />
              <Route
                path="/modifications/cette-semaine"
                Component={ModificationsPage}
              />
              <Route
                path="/modifications/ce-mois"
                Component={ModificationsPage}
              />
              <Route path="/creances" Component={DebtsChartPage} />
              <Route path="/creances/liste" Component={DebtsListPage} />
              <Route path="/brouillard" Component={FogPage} />
              <Route
                path="/brouillard/details"
                Component={FogInformationsPage}
              />
              <Route path="/depenses" Component={ExpensesPage} />
              <Route
                path="/depenses/validations"
                Component={ExpensesValidationsPage}
              />
              <Route path="/rapports" Component={RapportsPage} />
              <Route path="/commandes" Component={OrdersPage} />
              <Route
                path="/soldes-courants/"
                Component={BankAccountsListPage}
              />
              <Route
                path="/soldes-courants/details"
                Component={CurrentsBalencePage}
              />
              <Route path="/autorisations" Component={AutorisationsPage} />
              <Route path="/se-deconnecter" Component={LogoutPage} />
              <Route path="" Component={NotFoundPage} /> // empty ""
              <Route path="*" Component={NotFoundPage} /> // star *
              <Route Component={NotFoundPage} /> // without path
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
