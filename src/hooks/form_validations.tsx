import React, { useState } from "react";

const FormulaireValidation: React.FC = () => {
  const [nom, setNom] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [erreurNom, setErreurNom] = useState<string>("");
  const [erreurEmail, setErreurEmail] = useState<string>("");

  const handleNomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNom(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const validerFormulaire = () => {
    let isValid = true;

    if (nom.trim() === "") {
      setErreurNom("Le nom est requis");
      isValid = false;
    } else {
      setErreurNom("");
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErreurEmail("L'email n'est pas valide");
      isValid = false;
    } else {
      setErreurEmail("");
    }

    if (isValid) {
      // Envoyer les données du formulaire ou effectuer d'autres actions
    }
  };

  return (
    <div>
      <h2>Formulaire de Validation</h2>
      <form>
        <div>
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            // value={nom}
            onChange={handleNomChange}
          />
          <p className="erreur">{erreurNom}</p>
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            id="email"
            // value={email}
            onChange={handleEmailChange}
          />
          <p className="erreur">{erreurEmail}</p>
        </div>
        <button type="button" onClick={validerFormulaire}>
          Valider
        </button>
      </form>
    </div>
  );
};

export default FormulaireValidation;
