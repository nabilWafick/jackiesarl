import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PositionsPage from "./pages/PositionsPage";
import WelcomePage from "./pages/WelcomePage";
import LogoutPage from "./pages/LogoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Dashboard from "./pages/dashboard";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/jackie-sarl" Component={SplashPage} />
      <Route path="/se-connecter" Component={LoginPage} />
      <Route path="/creer-un-compte" Component={SignupPage} />
      <Route path="/postes" Component={PositionsPage} />
      <Route path="/bienvenue" Component={WelcomePage} />
      <Route path="/" Component={Dashboard} />
      <Route path="/se-deconnecter" Component={LogoutPage} />
      <Route path="" Component={NotFoundPage} /> // empty ""
      <Route path="*" Component={NotFoundPage} /> // star *
      <Route Component={NotFoundPage} /> // without path
    </Routes>
  );
}

export default App;
