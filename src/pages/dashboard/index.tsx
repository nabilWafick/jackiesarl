import NavBar from "../../layouts/navbar/NavBar.layout";
import SideBar from "../../layouts/sidebar/SideBar.layout";
import { FC } from "react";
import Auth from "../auth/Auth";
import Main from "../../layouts/main/Main.layout";
import ActionResult from "../../components/ui/dashboard/widgets/ActionResult";

const Dashboard: FC = () => {
  return (
    <Auth needAuth={true}>
      <ActionResult />
      <div className="flex h-screen w-screen">
        <SideBar />
        <div className="flex flex-col w-screen flex-1'">
          <NavBar />
          <Main />
        </div>

        {/* <div className="flex flex-row h-full w-full ">
          <div className="w-[20.1%] h-full"></div>
          <div className="flex flex-col h-full w-full ">
            <NavBar />
            <div className="flex flex-col h-full w-full">
              <div className="flex mt-[80px] px-2">
                <Routes>
                  <Route path="/" Component={TableBord} />
                  <Route path="/search" Component={SearchPage} />
                  <Route path="/clients" Component={ClientsListPage} />
                  <Route path="/client" Component={SelectedClientPage} />
                  <Route
                    path="/clients/achats"
                    Component={ClientPurchasesPage}
                  />
                  <Route
                    path="/clients/paiements"
                    Component={ClientPaymentsPage}
                  />
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
                  <Route path="/avances" Component={AdvancePage} />
                  <Route path="/achat" Component={PurchasesPage} />
                  <Route path="/modifications" Component={ModificationsPage} />
                  <Route path="/creances" Component={DebtsListPage} />
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
  
                  <Route path="" Component={NotFoundPage} /> // empty ""
                  <Route path="*" Component={NotFoundPage} /> // star
                  <Route Component={NotFoundPage} /> // without path
                </Routes>
              </div>
            </div>
          </div>
        </div>  */}
      </div>
    </Auth>
  );
};

export default Dashboard;
