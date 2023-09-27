



INSERT INTO achat_client (quantite_achetee, categorie, montant, numero_ctp, bordereau, numero_bc, id_client, date_achat) VALUES
  (100, 'Produit A', 500, 12345, 'BordereauA', 1, 1, '2023-09-21 10:00:00'),
  (80, 'Produit B', 400, 54321, 'BordereauB', 2, 2, '2023-09-22 11:30:00'),
  (120, 'Produit C', 600, 98765, 'BordereauC', 3, 3, '2023-09-23 12:45:00'),
  (90, 'Produit B', 450, 12345, 'BordereauD', 4, 1, '2023-09-24 14:00:00'),
  (110, 'Produit A', 550, 54321, 'BordereauE', 5, 2, '2023-09-25 15:15:00'),
  (130, 'Produit C', 650, 98765, 'BordereauF', 6, 3, '2023-09-26 16:30:00'),
  (95, 'Produit B', 475, 12345, 'BordereauG', 7, 1, '2023-09-27 17:45:00'),
  (105, 'Produit A', 525, 54321, 'BordereauH', 8, 2, '2023-09-28 18:00:00'),
  (115, 'Produit C', 575, 98765, 'BordereauI', 9, 3, '2023-09-29 19:15:00'),
  (100, 'Produit B', 500, 12345, 'BordereauJ', 10, 1, '2023-09-30 20:30:00');


INSERT INTO achat_entreprise (bon_commande, quantite_achetee, montant, banque, cheque, bordereau, date_achat) VALUES
  (101, 70, 350, 'Banque A', 1001, 'BordereauA', '2023-09-21 10:30:00'),
  (102, 85, 425, 'Banque B', 1002, 'BordereauB', '2023-09-22 11:45:00'),
  (103, 60, 300, 'Banque C', 1003, 'BordereauC', '2023-09-23 13:00:00'),
  (104, 75, 375, 'Banque A', 1004, 'BordereauD', '2023-09-24 14:15:00'),
  (105, 90, 450, 'Banque B', 1005, 'BordereauE', '2023-09-25 15:30:00'),
  (106, 65, 325, 'Banque C', 1006, 'BordereauF', '2023-09-26 16:45:00'),
  (107, 80, 400, 'Banque A', 1007, 'BordereauG', '2023-09-27 18:00:00'),
  (108, 95, 475, 'Banque B', 1008, 'BordereauH', '2023-09-28 19:15:00'),
  (109, 75, 375, 'Banque C', 1009, 'BordereauI', '2023-09-29 20:30:00'),
  (110, 70, 350, 'Banque A', 1010, 'BordereauJ', '2023-09-30 21:45:00');


INSERT INTO activites_banque (id_banque, description, debit, credit, solde, date_activite) VALUES
  (1, 'Opération A', 500, 0, 500, '2023-09-21 10:00:00'),
  (2, 'Opération B', 300, 0, 300, '2023-09-22 11:30:00'),
  (1, 'Opération C', 0, 200, 300, '2023-09-23 12:45:00'),
  (3, 'Opération D', 0, 400, 600, '2023-09-24 14:00:00'),
  (2, 'Opération E', 200, 0, 500, '2023-09-25 15:15:00'),
  (1, 'Opération F', 0, 300, 200, '2023-09-26 16:30:00'),
  (3, 'Opération G', 0, 100, 700, '2023-09-27 17:45:00'),
  (2, 'Opération H', 150, 0, 850, '2023-09-28 18:00:00'),
  (1, 'Opération I', 0, 400, 450, '2023-09-29 19:15:00'),
  (2, 'Opération J', 350, 0, 800, '2023-09-30 20:30:00');


INSERT INTO activites_depot (id_depot, quantite_avant_vente, vente, quantite_actuelle, versement, depense, observation, date_remplissage) VALUES
  (1, 500, 200, 300, 0, 150, 'Observation A', '2023-09-21 10:30:00'),
  (2, 350, 100, 250, 0, 75, 'Observation B', '2023-09-22 11:45:00'),
  (3, 450, 150, 300, 0, 120, 'Observation C', '2023-09-23 13:00:00'),
  (4, 600, 300, 300, 0, 200, 'Observation D', '2023-09-24 14:15:00'),
  (1, 500, 200, 300, 0, 150, 'Observation E', '2023-09-25 15:30:00'),
  (2, 350, 100, 250, 0, 75, 'Observation F', '2023-09-26 16:45:00'),
  (3, 450, 150, 300, 0, 120, 'Observation G', '2023-09-27 18:00:00'),
  (4, 600, 300, 300, 0, 200, 'Observation H', '2023-09-28 19:15:00'),
  (1, 500, 200, 300, 0, 150, 'Observation I', '2023-09-29 20:30:00'),
  (2, 350, 100, 250, 0, 75, 'Observation J', '2023-09-30 21:45:00');


INSERT INTO autorisations (role, autoristions) VALUES
  ('Gestionnaire', 'Lire, Écrire, Supprimer'),
  ('Utilisateur', 'Lire, Écrire'),
  ('Administrateur', 'Lire, Écrire, Supprimer, Gérer Utilisateurs'),
  ('Invité', 'Lire uniquement'),
  ('Superviseur', 'Lire, Écrire, Approuver');


INSERT INTO avance (montant, id_client, date_avance) VALUES
  (1000, 1, '2023-09-21 10:00:00'),
  (800, 2, '2023-09-22 11:30:00'),
  (1200, 3, '2023-09-23 12:45:00'),
  (900, 1, '2023-09-24 14:00:00'),
  (1100, 2, '2023-09-25 15:15:00'),
  (1500, 3, '2023-09-26 16:30:00'),
  (950, 1, '2023-09-27 17:45:00'),
  (1050, 2, '2023-09-28 18:00:00'),
  (1150, 3, '2023-09-29 19:15:00'),
  (1000, 1, '2023-09-30 20:30:00');


INSERT INTO brouillard (depot, stock_actuel, nom_gerant, numero_gerant) VALUES
  ('Entrepôt A', 500, 'Gerant A', 12345),
  ('Entrepôt B', 350, 'Gerant B', 54321),
  ('Entrepôt C', 450, 'Gerant C', 98765),
  ('Entrepôt D', 600, 'Gerant D', 12345),
  ('Entrepôt E', 500, 'Gerant A', 54321),
  ('Entrepôt F', 350, 'Gerant B', 98765),
  ('Entrepôt G', 450, 'Gerant C', 12345),
  ('Entrepôt H', 600, 'Gerant D', 54321),
  ('Entrepôt I', 500, 'Gerant A', 98765),
  ('Entrepôt J', 350, 'Gerant B', 12345);


INSERT INTO clients (nom_complet, numero_ifu, numero_telephone, email) VALUES
  ('Client A', 1234567890, 9876543210, 'clientA@email.com'),
  ('Client B', 9876543210, 1234567890, 'clientB@email.com'),
  ('Client C', 5555555555, 7777777777, 'clientC@email.com'),
  ('Client D', 8888888888, 4444444444, 'clientD@email.com'),
  ('Client E', 2222222222, 6666666666, 'clientE@email.com'),
  ('Client F', 3333333333, 9999999999, 'clientF@email.com'),
  ('Client G', 1111111111, 5555555555, 'clientG@email.com'),
  ('Client H', 7777777777, 2222222222, 'clientH@email.com'),
  ('Client I', 4444444444, 8888888888, 'clientI@email.com'),
  ('Client J', 6666666666, 3333333333, 'clientJ@email.com');


INSERT INTO commandes (categorie, quantite_achetee, destination, date_commande, date_livraison, est_traitee, id_client) VALUES
  ('Produit A', 100, 1, '2023-09-21', '2023-09-25', 1, 1),
  ('Produit B', 80, 2, '2023-09-22', '2023-09-26', 0, 2),
  ('Produit C', 120, 3, '2023-09-23', '2023-09-27', 1, 3),
  ('Produit A', 90, 1, '2023-09-24', '2023-09-28', 0, 1),
  ('Produit B', 110, 2, '2023-09-25', '2023-09-29', 1, 2),
  ('Produit C', 130, 3, '2023-09-26', '2023-09-30', 0, 3),
  ('Produit A', 95, 1, '2023-09-27', '2023-10-01', 1, 1),
  ('Produit B', 105, 2, '2023-09-28', '2023-10-02', 0, 2),
  ('Produit C', 115, 3, '2023-09-29', '2023-10-03', 1, 3),
  ('Produit A', 100, 1, '2023-09-30', '2023-10-04', 0, 1);


INSERT INTO creances (creance_cim_benin, creance_nocibe, creance_autres, date_creance, id_client) VALUES
  (200, 0, 100, '2023-09-21 10:00:00', 1),
  (0, 150, 50, '2023-09-22 11:30:00', 2),
  (100, 200, 0, '2023-09-23 12:45:00', 3),
  (50, 0, 100, '2023-09-24 14:00:00', 1),
  (0, 100, 200, '2023-09-25 15:15:00', 2),
  (150, 0, 50, '2023-09-26 16:30:00', 3),
  (100, 50, 0, '2023-09-27 17:45:00', 1),
  (0, 0, 100, '2023-09-28 18:00:00', 2),
  (50, 100, 0, '2023-09-29 19:15:00', 3),
  (200, 0, 150, '2023-09-30 20:30:00', 1);


  INSERT INTO depenses (description, montant, piece, est_valide, date_depense) VALUES
  ('Achat de fournitures', 500, 'Facture A123', 1, '2023-09-21 10:00:00'),
  ('Entretien du matériel', 300, 'Facture B456', 0, '2023-09-22 11:30:00'),
  ('Frais de transport', 200, 'Facture C789', 1, '2023-09-23 12:45:00'),
  ('Achat de fournitures', 400, 'Facture D123', 0, '2023-09-24 14:00:00'),
  ('Entretien du matériel', 250, 'Facture E456', 1, '2023-09-25 15:15:00'),
  ('Frais de transport', 300, 'Facture F789', 0, '2023-09-26 16:30:00'),
  ('Achat de fournitures', 100, 'Facture G123', 1, '2023-09-27 17:45:00'),
  ('Entretien du matériel', 150, 'Facture H456', 0, '2023-09-28 18:00:00'),
  ('Frais de transport', 200, 'Facture I789', 1, '2023-09-29 19:15:00'),
  ('Achat de fournitures', 300, 'Facture J123', 0, '2023-09-30 20:30:00');


INSERT INTO employes (nom, prenoms, email, password, role) VALUES
  ('Employé A', 'Prénoms A', 'employeA@email.com', 'motdepasseA', 'Gestionnaire'),
  ('Employé B', 'Prénoms B', 'employeB@email.com', 'motdepasseB', 'Utilisateur'),
  ('Employé C', 'Prénoms C', 'employeC@email.com', 'motdepasseC', 'Administrateur'),
  ('Employé D', 'Prénoms D', 'employeD@email.com', 'motdepasseD', 'Invité'),
  ('Employé E', 'Prénoms E', 'employeE@email.com', 'motdepasseE', 'Superviseur'),
  ('Employé F', 'Prénoms F', 'employeF@email.com', 'motdepasseF', 'Gestionnaire'),
  ('Employé G', 'Prénoms G', 'employeG@email.com', 'motdepasseG', 'Utilisateur'),
  ('Employé H', 'Prénoms H', 'employeH@email.com', 'motdepasseH', 'Administrateur'),
  ('Employé I', 'Prénoms I', 'employeI@email.com', 'motdepasseI', 'Invité'),
  ('Employé J', 'Prénoms J', 'employeJ@email.com', 'motdepasseJ', 'Superviseur');


INSERT INTO modifications (modification, id_employe, date_modification) VALUES
  ('Modification A', 1, '2023-09-21 10:00:00'),
  ('Modification B', 2, '2023-09-22 11:30:00'),
  ('Modification C', 3, '2023-09-23 12:45:00'),
  ('Modification D', 4, '2023-09-24 14:00:00'),
  ('Modification E', 5, '2023-09-25 15:15:00'),
  ('Modification F', 6, '2023-09-26 16:30:00'),
  ('Modification G', 7, '2023-09-27 17:45:00'),
  ('Modification H', 8, '2023-09-28 18:00:00'),
  ('Modification I', 9, '2023-09-29 19:15:00'),
  ('Modification J', 10, '2023-09-30 20:30:00');



INSERT INTO paiement_client (montant, banque, reference, categorie, numero_bc, bordereau, est_valide, id_client, date_paiement) VALUES
  (500, 'Banque A', 'Réf123', 'Achat A', 1, 'Bordereau A', 1, 1, '2023-09-21 10:00:00'),
  (300, 'Banque B', 'Réf456', 'Achat B', 2, 'Bordereau B', 0, 2, '2023-09-22 11:30:00'),
  (200, 'Banque C', 'Réf789', 'Achat C', 3, 'Bordereau C', 1, 3, '2023-09-23 12:45:00'),
  (400, 'Banque A', 'Réf123', 'Achat A', 1, 'Bordereau D', 0, 1, '2023-09-24 14:00:00'),
  (150, 'Banque B', 'Réf456', 'Achat B', 2, 'Bordereau E', 1, 2, '2023-09-25 15:15:00'),
  (300, 'Banque C', 'Réf789', 'Achat C', 3, 'Bordereau F', 0, 3, '2023-09-26 16:30:00'),
  (100, 'Banque A', 'Réf123', 'Achat A', 1, 'Bordereau G', 1, 1, '2023-09-27 17:45:00'),
  (150, 'Banque B', 'Réf456', 'Achat B', 2, 'Bordereau H', 0, 2, '2023-09-28 18:00:00'),
  (200, 'Banque C', 'Réf789', 'Achat C', 3, 'Bordereau I', 1, 3, '2023-09-29 19:15:00'),
  (400, 'Banque A', 'Réf123', 'Achat A', 1, 'Bordereau J', 0, 1, '2023-09-30 20:30:00');


INSERT INTO rapports (rapport, date_envoi, id_employe) VALUES    
  ('Rapport A', '2023-09-21 10:00:00', 1),
  ('Rapport B', '2023-09-22 11:30:00', 2),
  ('Rapport C', '2023-09-23 12:45:00', 3),
  ('Rapport D', '2023-09-24 14:00:00', 4),
  ('Rapport E', '2023-09-25 15:15:00', 5),
  ('Rapport F', '2023-09-26 16:30:00', 6),
  ('Rapport G', '2023-09-27 17:45:00', 7),
  ('Rapport H', '2023-09-28 18:00:00', 8),
  ('Rapport I', '2023-09-29 19:15:00', 9),
  ('Rapport J', '2023-09-30 20:30:00', 10);



INSERT INTO `stock_bon_commande` (`numero_bc`, `categorie`, `quantite_achetee`, `stock_avant_vente`, `vente`, `stock_apres_vente`, `date_rechargement`)
VALUES
  (101, 'CIM BENIN', 500, 500, 300, 200, '2023-09-15 10:30:00'),
  (102, 'NOCIBE', 200, 200, 80, 120, '2023-09-14 14:45:00'),
  (103, 'CIM BENIN', 300, 300, 200, 100, '2023-09-13 09:15:00'),
  (104, 'Autres', 250, 250, 130, 120, '2023-09-12 11:20:00'),
  (105, 'CIM BENIN', 550, 550, 330, 220, '2023-09-11 16:10:00'),
  (106, 'NOCIBE', 180, 180, 60, 90, '2023-09-10 12:00:00'),
  (107, 'CIM BENIN', 220, 220, 160, 60, '2023-09-09 14:30:00'),
  (108, 'NOCIBE', 260, 260, 130, 130, '2023-09-08 13:45:00'),
  (109, 'NOCIBE', 600, 600, 360, 240, '2023-09-07 15:20:00'),
  (110, 'CIM BENIN', 160, 160, 70, 90, '2023-09-06 10:50:00');
