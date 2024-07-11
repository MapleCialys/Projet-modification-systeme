# Liste des fonctionnalités

## Liste des utilisateurs
- Administrateur [Niv.3]
- Gestionnaire [Niv.2]
- Vendeur [Niv.1]
- Clients [Niv.0]

Chaque niveau d'accréditation possède ses propres droits ainsi que ceux des niveaux inférieurs.


## Fonctionnalités client 

Code | Nom | Description | Niveau d'accreditation | Maquette(s) associée(s) | Niveau de priorité
:---: | --- | --- | --- | :---: | --- 
C1 | Catalogue | Visualiser les films | 0 | N/A | 1 |
C2 | Lien description | Bouton vers la page de description d'un film depuis le catalogue | 0 | N/A | 1 |
C3 | Description | Page avec les détails d'un film (synopsis, acteurs, etc.) | 0 | N/A | 1 |
C4 | Acteurs | Liens vers les acteurs | 0 | N/A | 1 |
C5 | Ajout au panier | Ajouter des films dans le panier de l'utilisateur | 0 | N/A | 1 |
C6 | Recherche catalogue | Barre de recherche pour le catalogue de films | 0 | N/A | 2 |
C7 | Bande annonce | Vidéo bande annonce du film avec bouton de lecture ou muet | 0 | N/A | 2 |
C8 | Retour | Bouton de retour vers le catalogue ou une recherche effectuée | 0 | N/A | 2 |
C9 | Panier | Tableau/liste des films dans le panier | 0 | N/A | 1 |
C10 | Quantité disponible | Afficher la quantité disponible de chaque film dans le panier | 0 | N/A | 3 |
C11 | Réservation | Bouton pour réserver les films dans le panier de l’utilisateur | 0 | N/A | 1 |
C12 | Supprimer | Boutons pour retirer les films individuellement dans le panier de l’utilisateur | 0 | N/A | 1 |
C13 | Vider le panier | Bouton pour vider le panier de l'utilisateur | 0 | N/A | 1 |
C14 | Authentification | Authentification d'un utilisateur | 0 | N/A | 2 |
C15 | Création d'un compte | Création d'un compte utilisateur | 0 | N/A | 2 |
C16 | Mot de passe oublié | Récupération du mot de passe d'un utilisateur ayant un compte | 0 | N/A | 3 |
C17 | Mon compte | Visualiser ses informations d'utilisateur (nom, adresse, courriel, etc.) | 0 | N/A | 3 |
C18 | Modifier compte | Modifier ses informations d'utilisateur | 0 | N/A | 3 |
C19 | Locations | Liste des locations en cours de l'utilisateur | 0 | N/A | 2 |
C20 | Retards | Liste des films en retard de l'utilisateur | 0 | N/A | 2 |
C21 | Renouveller | Renouveller une location/reporter la date de retour depuis le compte client | 0 | N/A | 2 |
C22 | Locations | Tableau/liste des demandes de locations | 1 | N/A | 1 |
C23 | Recherche locations | Barre de recherche pour les locations (titre, client, etc.) | 1 | N/A | 2 |
C24 | Tri locations | Trier les locations par titre, date de réservation, etc. | 1 | N/A | 2 |
C25 | Valider location | Case à cocher + bouton soumettre pour valider la sortie temporaire de l'inventaire des films réservés | 1 | N/A | 1 |
C26 | Liaison film/client | Lier un film à un client depuis le catalogue ou la page du flim pour les locations faites en magasin | 1 | N/A | 1 |
C27 | Retours | Liste de films sortis de l'inventaire | 1 | N/A | 1 |
C28 | Valider retour | Case à cocher + bouton soumettre pour valider le retour en inventaire des films ramenés par le client | 1 | N/A | 1 |
C29 | Filtre retard | Filtre pour afficher uniquement les films en retard | 1 | N/A | 1 |
C30 | Ajout film | Formulaire pour ajouter des films dans la base de données | 2 | N/A | 1 |
C31 | Valider ajout film | Bouton soumettre le formulaire pour ajouter des films dans la base de données | 2 | N/A | 1 |
C32 | Ajout acteur | Formulaire pour ajouter des acteurs dans la base de données | 2 | N/A | 1 |
C33 | Valider acteur | Bouton soumettre le formulaire pour ajouter des acteur dans la base de données | 2 | N/A | 1 |
C34 | Modifier film | Formulaire pour modifier des films de la base de données | 2 | N/A | 1 |
C35 | Valider modification film | Bouton soumettre le formulaire pour modifier des films de la base de données | 2 | N/A | 1 |
C36 | Modifier acteur | Formulaire pour modifier des acteurs de la base de données | 2 | N/A | 1 |
C37 | Valider modifier acteur | Bouton soumettre le formulaire pour modifier des acteur de la base de données | 2 | N/A | 1 |
C38 | Suppression film | Formulaire pour supprimer des films de la base de données | 2 | N/A | 1 |
C39 | Valider suppression film | Bouton soumettre le formulaire pour supprimer des films de la base de données | 2 | N/A | 1 |
C40 | Suppression acteur | Formulaire pour supprimer des acteurs de la base de données | 2 | N/A | 1 |
C41 | Valider suppression acteur | Bouton soumettre le formulaire pour supprimer des acteurs de la base de données | 2 | N/A | 1 |
C42 | Utilisateurs | Liste des utilisateurs | 3 | N/A | 3 |
C43 | Gestion des rôles | Changer le rôle d'un utilisateur | 3 | N/A | 3 |
C44 | Ajouter compte | Création de nouveaux comptes utilisateurs | 3 | N/A | 3 |
C45 | Supprimer compte | Supprimer des comptes utilisateurs | 3 | N/A | 3 |


## Fonctionnalités internes 
Code | Nom | Description | Niveau d'accreditation | Maquette(s) associée(s) | Niveau de priorité
:---: | --- | --- | --- | :---: | --- 
I1 | Notification courriel | Notifier l'utilisateur quand il valide une reservation | 0 | N/A | 1 |
I2 | Reservation | Réserver les films qui sont dans le panier de l’utilisateur. | 0 | N/A | 1 |
I3 | Location | Valide la sortie temporaire de l'inventaire des films reserves | 1 | N/A | 1 |
I4 | Retour | Valide le retour en inventaire des films ramenes par le client | 1 | N/A | 1 |
I6 | Suppression de titre | Supprimer des films de la base de donnees | 2 | N/A | 1 |
I7 | Authentification | Authentification d'un utilisateur | 0 | N/A | 2 |
I8 | Management | Gestion des comptes total | 3 | N/A | 3 |
I9 | Creation | Creation de nouveau compte | 0 | N/A | 2|