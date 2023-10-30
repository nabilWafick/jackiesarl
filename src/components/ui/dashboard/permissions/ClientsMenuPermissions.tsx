import { BsDot } from "react-icons/bs";
import JSCheckBox from "../../../form/widgets/CheckBox.widget";

const ClientsMenuPermissions = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-2 mb-1">
        <h2 className="flex self-start mb-2 text-xl items-center ">
          <BsDot className=" text-secondary" size={27} /> Permissions liées au
          menu
          <p className="ml-1 font-medium">Client</p>
        </h2>

        <ul className="ml-7">
          <li className="text-sm flex">
            Le droit d'ajouter, de modifier et de supprimer des achats{" "}
            <JSCheckBox />
          </li>
          <li className="text-sm">
            Le droit d'ajouter des paiements <JSCheckBox />
          </li>
          <li className="text-sm">
            Le droit de d'ajouter, de moddifier et de supprimer des remises de
            chèque <JSCheckBox />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ClientsMenuPermissions;

/** 
 * 

/**
okay, ecris les fonctions necessaires pour, la creation, l'authentification et l'authorisation des employes en nodejs+express, en suivant ce principe, lorsqu'un un employe est cree, un token special unique lui est genere, son mot de passe est hashe, crypte et les informations de l'employe sont stockes dans la table employes, pour son authentification, on verifie si le l'email et le mot de passe  sont correctes, et correspondent aux informations de la base de donnees, si non on lui retourne une erreur de non authentification, si oui, les donnes correspondent a celles de la base de donnees, on lui genere un access token qui expire dans 1 minute, et un refresh token qui lui permettra d'avoir un autre acces-token, le  acess token, le refresh token, et le token qui lui est enregistre dans la table employe de la base de donnees ainsi que  les autorisations qui lui sont accordees lui sont envoyes envoyes dans un cookies qui sera stocke dans le navigateur, le refresh token ne peut etre utilise qu'une seule fois, lorsque le access token expire, et qu'il s'authentifie a nouveau et qu'on lui genere un autre access token, on lui donne egalement un autre refresh token, en ce qui concerne l'authorisation, elle permettra de savoir si l'employe, peut acceder a un controller a partir d'une route, elle fonctionnera comme suit, on recupere dans la requete de l'employe les headers, on verifie si les headers comportent un access token (l'acces token doit etre valide et ne doit pas etre expiré), le token qui se trouve dans la base de donnes, et les permissions qui lui sont accordees,  si le headers ne contient aucun de ses elements, on lui retourne une erreur de non autorisation, si le headers contient tous ces elements ,on verifie si les tokens sont correctes et valides, si les tokens ne le sont pas on lui retourne une erreur, s'il le sont , on verifie si la permission a la fonctionnalite ou au controller qu'il demande est true dans ses permissions, si oui, on lui fait un next(), sinon, on lui retourne une erreur de non autorisation, utilise les packages comme jwt, et ceux necessaires
 */
