import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" Component={Home} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/dashboard" Component={Dashboard} />
    </Router>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <h1>Page d'accueil</h1>
      <Link to="/login">Connexion</Link>
      <Link to="/register">Inscription</Link>
    </div>
  );
};

const Login: React.FC = () => {
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
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

const Register: React.FC = () => {
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
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Sidebar />
      <main>
        {/* Utilisation de la route pour afficher le contenu correct */}
        <Route path="/dashboard/home" Component={Home} />
        <Route path="/dashboard/stats" Component={Stats} />
        <Route path="/dashboard/settings" Component={Settings} />
      </main>
    </div>
  );
};

const Sidebar: React.FC = () => {
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

const Stats: React.FC = () => {
  return <div>Statistiques</div>;
};

const Settings: React.FC = () => {
  return <div>Paramètres</div>;
};

export default App;
