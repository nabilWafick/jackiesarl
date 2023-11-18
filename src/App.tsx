//import "./assets/css/App.css";
import "./assets/css/Sidebar.css";
import { Route, Routes } from "react-router-dom";
import SplashPage from "./pages/splash/SplashPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import PositionsPage from "./pages/positions/PositionsPage";
import WelcomePage from "./pages/welcome/WelcomePage";
import Dashboard from "./pages/dashboard";
import { FC } from "react";

const App: FC = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className=" h-screen w-screen flex justify-center items-center sidebar">
      <Routes>
        <Route path="/jackie-sarl" Component={SplashPage} />
        <Route path="/creer-un-compte" Component={SignupPage} />
        <Route path="/se-connecter" Component={LoginPage} />
        <Route path="/postes" Component={PositionsPage} />
        <Route path="/bienvenue" Component={WelcomePage} />
        <Route path="/*" Component={Dashboard} /> // empty ""
        <Route path="*" Component={Dashboard} /> // star *
        <Route Component={Dashboard} /> // without path
      </Routes>
    </div>
  );
};

export default App;
