import React, { useState } from "react";
import axios from "axios";

const FormulaireComplet: React.FC = () => {
  const [nom, setNom] = useState<string>("");
  const [prenom, setPrenom] = useState<string>("");
  const [fichier, setFichier] = useState<File | null>(null);

  const handleNomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNom(e.target.value);
  };

  const handlePrenomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrenom(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFichier(e.target.files[0]);
    }
  };

  const envoyerFormulaire = async () => {
    if (!nom || !prenom || !fichier) {
      alert("Veuillez remplir tous les champs du formulaire.");

      return;
    }

    try {
      const formData = new FormData();
      formData.append("nom", nom);
      formData.append("prenom", prenom);
      formData.append("fichier", fichier);

      await axios.post("http://votre-serveur.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Formulaire envoyé avec succès.");
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      alert("Erreur lors de l'envoi du formulaire.");
    }
  };

  return (
    <div>
      <h2>Formulaire Complet</h2>
      <div>
        <label htmlFor="nom">Nom :</label>
        <input type="text" id="nom" value={nom} onChange={handleNomChange} />
      </div>
      <div>
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          value={prenom}
          onChange={handlePrenomChange}
        />
      </div>
      <div>
        <label htmlFor="fichier">Télécharger un fichier :</label>
        <input type="file" id="fichier" onChange={handleFileChange} />
      </div>
      <button onClick={envoyerFormulaire}>Envoyer</button>
    </div>
  );
};

export default FormulaireComplet;
