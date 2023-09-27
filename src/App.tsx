import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import SplashPage from "./pages/splash/SplashPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import PositionsPage from "./pages/positions/PositionsPage";
import WelcomePage from "./pages/welcome/WelcomePage";
import LogoutPage from "./pages/logout/LogoutPage";
import NotFoundPage from "./pages/unfounded_page/404";
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
