import React, { useState } from "react";

// Hook personnalisé pour gérer le formulaire d'envoi de fichier
function useFileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const resetFile = () => {
    setSelectedFile(null);
  };

  return [selectedFile, handleFileChange, resetFile];
}

function FileUploadForm() {
  const [selectedFile, handleFileChange, resetFile] = useFileUpload();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez ajouter ici la logique d'envoi du fichier vers le serveur
    if (selectedFile) {
      // Exemple de traitement côté client : afficher le nom du fichier
      alert(`Fichier sélectionné : ${selectedFile.name}`);
      // Réinitialise le fichier sélectionné après traitement
      resetFile();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />
      </div>
      <div>
        <button type="submit">Envoyer</button>
      </div>
    </form>
  );
}

export default FileUploadForm;
