import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  useRoutes,
  Link,
} from "react-router-dom";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <Route path="/" Component={Home} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/dashboard" Component={Dashboard} />
    </Router>
  );
};

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <h1>Page d'accueil</h1>
      <Link to="/login">Connexion</Link>
      <Link to="/register">Inscription</Link>
    </div>
  );
};

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO : authentification de l'utilisateur

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h1>Connexion</h1>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Se connecter</button>
    </div>
  );
};

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO : inscription de l'utilisateur

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Inscription</h1>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Adresse e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">S'inscrire</button>
    </div>
  );
};

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [section, setSection] = useState("home");
  const [route, setRoute] = useRoutes();
  const history = useHistory();

  const changeSection = (newSection: string) => {
    setSection(newSection);
    history.push(`/dashboard/${newSection}`);
  };

  useEffect(() => {
    setRoute(useRoutes());
  }, [setRoute]);

  return (
    <div>
      <h1>Dashboard</h1>
      <Sidebar />
      <main>
        <Section section={section} />
      </main>
    </div>
  );
};

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard/home">Accueil</Link>
        </li>
        <li>
          <Link to="/dashboard/stats">Statistiques</Link>
        </li>
        <li>
          <Link to="/dashboard/settings">Paramètres</Link>
        </li>
      </ul>
    </nav>
  );
};

interface SectionProps {
  section: string;
}

const Section: React.FC<SectionProps> = ({ section }) => {
  switch (section) {
    case "home":
      return <Home />;
    case "stats":
      return <Stats />;
    case "settings":
      return <Settings />;
    default:
      return <div>Page non trouvée</div>;
  }
};

export default App;
