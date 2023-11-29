import { FC } from "react";
import PermissionsGroup from "./permissions_group";
interface PermissionCheckBoxData {
  label: string;
  permission: string;
}

interface PermissionsGroupProps {
  permissionsGroupName: string;
  permissionsList: PermissionCheckBoxData[];
}

const permissionsGroupData: PermissionsGroupProps[] = [
  {
    permissionsGroupName: "Administrateur",
    permissionsList: [
      {
        label: "Admin",
        permission: "admin",
      },
    ],
  },
  {
    permissionsGroupName: "Globales",
    permissionsList: [
      {
        label: "Tableau de bord",
        permission: "lire-tableau-bord",
      },
      {
        label: "Imprimer une interface",
        permission: "imprimer-interface",
      },
    ],
  },
  {
    permissionsGroupName: "Client",
    permissionsList: [
      {
        label: "Ajouter les données d'un client",
        permission: "ajouter-client",
      },
      {
        label: "Lire les données d'un client",
        permission: "lire-client",
      },
      {
        label: "Modifier les données d'un client",
        permission: "modifier-client",
      },
      /* {
        label: "Supprimer les données d'un client",
        permission: "supprimer-client",
      },*/
    ],
  },
  {
    permissionsGroupName: "Soldes",
    permissionsList: [
      {
        label: "Lire le solde d'un client",
        permission: "lire-solde-client",
      },
      {
        label: "Lire les avances des clients",
        permission: "lire-avances-clients",
      },
      {
        label: "Lire les créances des clients",
        permission: "lire-creances-clients",
      },
    ],
  },
  {
    permissionsGroupName: "Achat Client",
    permissionsList: [
      {
        label: "Ajouter les données de l'achat d'un client",
        permission: "ajouter-achat-client",
      },
      {
        label: "Lire les données de l'achat d'un client",
        permission: "lire-achat-client",
      },
      {
        label: "Modifier les données de l'achat d'un client",
        permission: "modifier-achat-client",
      },
      {
        label: "Supprimer les données de l'achat d'un client",
        permission: "supprimer-achat-client",
      },
    ],
  },
  {
    permissionsGroupName: "Paiement Client",
    permissionsList: [
      {
        label: "Ajouter les données du paiement d'un client",
        permission: "ajouter-paiement-client",
      },
      {
        label: "Lire les données du paiement d'un client",
        permission: "lire-paiement-client",
      },
      {
        label: "Modifier les données du paiement d'un client",
        permission: "modifier-paiement-client",
      },
      {
        label: "Supprimer les données du paiement d'un client",
        permission: "supprimer-paiement-client",
      },
    ],
  },
  {
    permissionsGroupName: "Remise Chèque Client",
    permissionsList: [
      {
        label: "Ajouter les données de la remise de chèque d'un client",
        permission: "ajouter-remise-cheque-client",
      },
      {
        label: "Lire les données de la remise de chèque d'un client",
        permission: "lire-remise-cheque-client",
      },
      {
        label: "Modifier les données de la remise de chèque d'un client",
        permission: "modifier-remise-cheque-client",
      },
      {
        label: "Supprimer les données de la remise de chèque d'un client",
        permission: "supprimer-remise-cheque-client",
      },
    ],
  },
  {
    permissionsGroupName: "Stock Bon de Commande",
    permissionsList: [
      {
        label: "Ajouter les données d'un stock bon de commande",
        permission: "ajouter-stock-bon-commande",
      },
      {
        label: "Lire les données d'un stock bon de commande",
        permission: "lire-stock-bon-commande",
      },
      /*  {
        label: "Modifier les données d'un stock bon de commande",
        permission: "modifier-stock-bon-commande",
      },
      {
        label: "Supprimer les données d'un stock bon de commande",
        permission: "supprimer-stock-bon-commande",
      },*/
    ],
  },
  {
    permissionsGroupName: "Stock Camion",
    permissionsList: [
      {
        label: "Ajouter les données d'un stock camion",
        permission: "ajouter-stock-camion",
      },
      {
        label: "Lire les données d'un stock camion",
        permission: "lire-stock-camion",
      },
      {
        label: "Modifier les données d'un stock camion",
        permission: "modifier-stock-camion",
      },
      {
        label: "Supprimer les données d'un stock camion",
        permission: "supprimer-stock-camion",
      },
    ],
  },
  {
    permissionsGroupName: "Achat Entreprise",
    permissionsList: [
      {
        label: "Ajouter les données de l'achat d'un entreprise",
        permission: "ajouter-achat-entreprise",
      },
      {
        label: "Lire les données de l'achat d'un entreprise",
        permission: "lire-achat-entreprise",
      },
      {
        label: "Modifier les données de l'achat d'un entreprise",
        permission: "modifier-achat-entreprise",
      },
      {
        label: "Supprimer les données de l'achat d'un entreprise",
        permission: "supprimer-achat-entreprise",
      },
    ],
  },
  {
    permissionsGroupName: "Modification",
    permissionsList: [
      /*   {
        label: "Ajouter une modification",
        permission: "ajouter-modification",
      },*/
      {
        label: "Lire une modification",
        permission: "lire-modification",
      },
      /* {
        label: "Modifier une modification",
        permission: "modifier-modification",
      },
        {
        label: "Supprimer une modification",
        permission: "supprimer-modification",
      },*/
    ],
  },
  {
    permissionsGroupName: "Brouillard",
    permissionsList: [
      {
        label: "Ajouter les données d'un dépôt",
        permission: "ajouter-brouillard",
      },
      {
        label: "Lire les données d'un dépôt",
        permission: "lire-brouillard",
      },
      {
        label: "Modifier les données d'un dépôt",
        permission: "modifier-brouillard",
      },
      {
        label: "Supprimer les données d'un dépôt",
        permission: "supprimer-brouillard",
      },
    ],
  },
  {
    permissionsGroupName: "Activité dépôt",
    permissionsList: [
      {
        label: "Ajouter les données de l'activité d'un dépôt",
        permission: "ajouter-activite-depot",
      },
      {
        label: "Lire les données de l'activité d'un dépôt",
        permission: "lire-activite-depot",
      },
      {
        label: "Modifier les données de l'activité d'un dépôt",
        permission: "modifier-activite-depot",
      },
      {
        label: "Supprimer les données de l'activité d'un dépôt",
        permission: "supprimer-activite-depot",
      },
    ],
  },
  {
    permissionsGroupName: "Dépense",
    permissionsList: [
      {
        label: "Ajouter les données d'une dépense",
        permission: "ajouter-depense",
      },
      {
        label: "Lire les données d'une dépense",
        permission: "lire-depense",
      },
      {
        label: "Modifier les données d'une dépense",
        permission: "modifier-depense",
      },
      {
        label: "Supprimer les données d'une dépense",
        permission: "supprimer-depense",
      },
    ],
  },
  {
    permissionsGroupName: "Rapport",
    permissionsList: [
      {
        label: "Ajouter un rapport",
        permission: "ajouter-rapport",
      },
      {
        label: "Lire un rapport",
        permission: "lire-rapport",
      },
      /*{
        label: "Modifier un rapport",
        permission: "modifier-rapport",
      },
      {
        label: "Supprimer un rapport",
        permission: "supprimer-rapport",
      },*/
    ],
  },
  {
    permissionsGroupName: "Commande",
    permissionsList: [
      {
        label: "Ajouter les données d'une commande",
        permission: "ajouter-commande",
      },
      {
        label: "Lire les données d'une commande",
        permission: "lire-commande",
      },
      {
        label: "Modifier les données d'une commande",
        permission: "modifier-commande",
      },
      {
        label: "Supprimer les données d'une commande",
        permission: "supprimer-commande",
      },
    ],
  },
  {
    permissionsGroupName: "Banque",
    permissionsList: [
      {
        label: "Ajouter les données d'une banque",
        permission: "ajouter-solde-courant",
      },
      {
        label: "Lire les données d'une banque",
        permission: "lire-solde-courant",
      },
      {
        label: "Modifier les données d'une banque",
        permission: "modifier-solde-courant",
      },
      {
        label: "Supprimer les données d'une banque",
        permission: "supprimer-solde-courant",
      },
    ],
  },
  {
    permissionsGroupName: "Activité Banque",
    permissionsList: [
      {
        label: "Ajouter les données de l'activité d'une banque",
        permission: "ajouter-activite-banque",
      },
      {
        label: "Lire les données de l'activité d'une banque",
        permission: "lire-activite-banque",
      },
      {
        label: "Modifier les données de l'activité d'une banque",
        permission: "modifier-activite-banque",
      },
      {
        label: "Supprimer les données de l'activité d'une banque",
        permission: "supprimer-activite-banque",
      },
    ],
  },
  {
    permissionsGroupName: "Facture MECEF",
    permissionsList: [
      {
        label: "Ajouter les données d'une facture MECEF",
        permission: "ajouter-facture-mecef",
      },
      {
        label: "Lire les données d'une facture MECEF",
        permission: "lire-facture-mecef",
      },
      {
        label: "Modifier les données d'une facture MECEF",
        permission: "modifier-facture-mecef",
      },
      {
        label: "Supprimer les données d'une facture MECEF",
        permission: "supprimer-facture-mecef",
      },
    ],
  },
];

const Permissions: FC = () => {
  return (
    <div>
      {permissionsGroupData.map((permissions, index) => (
        <PermissionsGroup
          key={index}
          permissionsGroupName={permissions.permissionsGroupName}
          permissionsList={permissions.permissionsList}
        />
      ))}
    </div>
  );
};

export default Permissions;
