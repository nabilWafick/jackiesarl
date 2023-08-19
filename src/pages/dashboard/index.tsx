import NavBar from "../../components/ui/NavBar";
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

function Dashboard() {
  return (
    <div
      className=" h-full w-full flex flex-row justify-center relative overflow-x-hidden"
      //    style={{ width: "" }}
    >
      {/*=============================== SIDEBAR ==============================*/}
      <SideBar />
      {/*================================== MAIN ==================================*/}

      <div className="flex flex-row ">
        <div className="w-[286px] h-full"></div>
        <div className="flex flex-col w-full ">
          {/*============================= NAVBAR ===========================*/}
          <NavBar />

          {/*============================= CONTENT ===========================*/}
          <div
            className="p-4  bg-white" // style={{ height: "100px" }}
          >
            <Routes>
              <Route path="/" Component={TableBord} />
              <Route path="/clients" Component={ClientsListPage} />
              <Route path="/stock" Component={StockChartsPage} />
              <Route path="/vente" Component={SellingPage} />
              <Route path="/paiements" Component={PaymentsPage} />
              <Route path="/avance" Component={AdvancePage} />
              <Route path="/achat" Component={PurchasesPage} />
              <Route path="/modifications" Component={ModificationsPage} />
              <Route path="/creances" Component={DebtsListPage} />
              <Route path="/brouillard" Component={ExpensesPage} />
              <Route path="/rapports" Component={RapportsPage} />
              <Route path="/commandes" Component={OrdersPage} />
              <Route path="/soldes-courants" Component={CurrentsBalencePage} />
              <Route path="/autorisations" Component={AutorisationsPage} />
              <Route path="/se-deconnecter" Component={LogoutPage} />
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
