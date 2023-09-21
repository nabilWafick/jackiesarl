import React, { useState } from "react";
import axios from "axios";

const FormulaireEnvoiFichier: React.FC = () => {
  const [fichier, setFichier] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFichier(e.target.files[0]);
    }
  };

  const envoyerFichier = async () => {
    if (!fichier) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("fichier", fichier);

      await axios.post("http://votre-serveur.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Fichier envoyé avec succès.");
    } catch (error) {
      console.error("Erreur lors de l'envoi du fichier :", error);
      alert("Erreur lors de l'envoi du fichier.");
    }
  };

  return (
    <div>
      <h2>Envoi de Fichier</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={envoyerFichier}>Envoyer</button>
    </div>
  );
};

export default FormulaireEnvoiFichier;
