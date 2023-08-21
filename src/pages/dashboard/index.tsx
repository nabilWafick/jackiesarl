import NavBar from "../../layouts/NavBar";
import SideBar from "../../layouts/SideBar";
import RapportsPage from "./contents/RapportsPage";
import { Routes, Route } from "react-router-dom";
import TableBord from "./contents/TableBord";
import ClientsListPage from "./contents/ClientsListPage";
import StockChartsPage from "./contents/StockChartPage";
import SellingPage from "./contents/SellingPage";
import PaymentsPage from "./contents/PaymentsPage";
import AdvancePage from "./contents/AdvancePage";
import PurchasesPage from "./contents/PurchasesPage";
import ModificationsPage from "./contents/ModificationsPage";
import DebtsListPage from "./contents/DebtListPage";
import ExpensesPage from "./contents/ExpensesPage";
import OrdersPage from "./contents/OrdersPage";
import CurrentsBalencePage from "./contents/CurrentsBalencePage";
import AutorisationsPage from "./contents/AutorisationsPage";
import LogoutPage from "../LogoutPage";
import FogPage from "./contents/FogPage";
import "../../assets/css/Sidebar.css";
import BankAccountsListPage from "./contents/BankAccountsListPage";
import NotFoundPage from "../NotFoundPage";
import ClientPurchasesPage from "./contents/ClientPurchasesPage";
import ClientPaymentsPage from "./contents/ClientPaymentsPage";
import ClientBalancePage from "./contents/ClientBalancePage";
import ClientCheckRemittancePage from "./contents/ClientCheckRemittancePage";
import PurchaseOrderStockPage from "./contents/PurchaseOrderStockPage";
import TruckStockPage from "./contents/TruckStockPage";
import SellingStatisticsPage from "./contents/SellingStatisticPage";
import PaymentsValidationsPage from "./contents/PaymentsValidationsPage";
import ClientsChartPage from "./contents/ClientsChartPage";
import ClientsTonnageListPage from "./contents/ClientsTonnageListPage";
import FormsPage from "./contents/FormsPage";

function Dashboard() {
  return (
    <div
      className=" h-screen w-screen flex flex-row justify-center relative overflow-x-hidden sidebar bg-stone-100 "
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
            className="pt-5 pr-4 mt-20 h-max w-full flex justify-center items-center" // style={{ height: "100px" }}
          >
            <Routes>
              <Route path="/" Component={TableBord} />
              <Route path="/clients" Component={ClientsListPage} />
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
              <Route path="/creances" Component={DebtsListPage} />
              <Route path="/brouillard" Component={FogPage} />
              <Route path="/depenses" Component={ExpensesPage} />
              <Route path="/rapports" Component={RapportsPage} />
              <Route path="/commandes" Component={OrdersPage} />
              <Route
                path="/soldes-courants/"
                Component={/*CurrentsBalencePage*/ BankAccountsListPage}
              />
              <Route path="/soldes-courants/" Component={CurrentsBalencePage} />
              <Route
                path="/autorisations"
                Component={/*AutorisationsPage*/ FormsPage}
              />
              <Route path="/se-deconnecter" Component={LogoutPage} />
              <Route path="" Component={NotFoundPage} /> // empty ""
              <Route path="*" Component={NotFoundPage} /> // star *
              <Route Component={NotFoundPage} /> // without path
            </Routes>
            {/* <NotificationsPage /> */}
            {/* <TableBord /> */}
            {/* <ClientsListPage /> */}
            {/* <GrapheClient /> */}
            {/* <ClientPurchasesPage /> */}
            {/* <ClientPaymentsPage /> */}
            {/* <ClientBalancePage /> */}
            {/* <ClientCheckRemittancePage /> */}
            {/* <StockChartsPage /> */}
            {/* <PurchaseOrderStockPage /> */}
            {/* <TruckStockPage /> */}
            {/* <SellingPage /> */}
            {/* <SellingStatisticsPage /> */}
            {/* <PaymentsPage /> */}
            {/* <PaymentsValidationsPage /> */}
            {/* <AdvancePage /> */}
            {/* <PurchasesPage /> */}
            {/* <ModificationsPage /> */}
            {/* <DebtsChartPage /> */}
            {/* <DebtsListPage /> */}
            {/* <FogPage /> */}
            {/* <ExpensesValidationPage /> */}
            {/* <OrdersPage /> */}
            {/* <BankAccountsListPage /> */}
            {/* <CurrentsBalencePage /> */}
            {/* <RapportComponents /> */}
            {/* <RapportsPage /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
