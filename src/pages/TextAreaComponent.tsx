import { useState, ChangeEvent } from "react";

function TextareaAvecHook() {
  // Déclarer une variable d'état pour suivre la valeur du texte
  const [valeurTextarea, setValeurTextarea] = useState<string>("");

  // Fonction de gestion du changement de texte
  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValeurTextarea(e.target.value);
  };

  return (
    <div>
      <h1>Textarea avec Hook React</h1>
      <textarea
        value={valeurTextarea}
        onChange={handleTextareaChange}
        rows={4} // Nombre de lignes dans le textarea
        cols={50} // Nombre de colonnes dans le textarea
      />
      <p>Le texte saisi : {valeurTextarea}</p>
    </div>
  );
}

export default TextareaAvecHook;
