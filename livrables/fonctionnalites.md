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
C1 | Catalogue | Visualiser les films | 0 | catalogue | 1 |
C2 | Lien description | Bouton vers la page de description d'un film depuis le catalogue | 0 | catalogue | 1 |
C3 | Description | Page avec les détails d'un film (synopsis, acteurs, etc.) | 0 | details_film | 1 |
C4 | Acteurs | Liens vers les acteurs | 0 | details_film | 1 |
C5 | Ajout au panier | Ajouter des films dans le panier de l'utilisateur | 0 | catalogue et details_film | 1 |
C6 | Recherche catalogue | Barre de recherche pour le catalogue de films | 0 | catalogue et details_film  | 2 |
C7 | Bande annonce | Vidéo bande annonce du film avec bouton de lecture ou muet | 0 | details_film | 2 |
C8 | Retour | Bouton de retour vers le catalogue ou une recherche effectuée | 0 | details_film | 2 |
C9 | Panier | Tableau/liste des films dans le panier | 0 | N/A | 1 |
C10 | Quantité disponible | Afficher la quantité disponible de chaque film dans la page détails | 0 | details_film | 3 |
C11 | Réservation | Bouton pour réserver les films dans le panier de l’utilisateur | 0 | N/A | 1 |
C12 | Supprimer | Boutons pour retirer les films individuellement dans le panier de l’utilisateur | 0 | N/A | 1 |
C13 | Vider le panier | Bouton pour vider le panier de l'utilisateur | 0 | N/A | 1 |
C14 | Authentification | Authentification d'un utilisateur | 0 | N/A | 2 |
C15 | Création d'un compte | Création d'un compte utilisateur | 0 | N/A | 2 |
C16 | Mot de passe oublié | Bouton de récupération du mot de passe d'un utilisateur ayant un compte | 0 | N/A | 3 |
C17 | Mon compte | Visualiser ses informations d'utilisateur (nom, adresse, courriel, etc.) | 0 | monCompte | 3 |
C18 | Modifier compte | Modifier ses informations d'utilisateur | 0 | monCompte et editerUtilisateur | 3 |
C19 | Locations | Liste des locations en cours de l'utilisateur | 0 | N/A | 2 |
C20 | Retards | Liste des films en retard de l'utilisateur | 0 | N/A | 2 |
C21 | Renouveler | Renouveler une location/reporter la date de retour depuis le compte client | 0 | N/A | 2 |
C22 | Locations | Tableau/liste des demandes de locations | 1 | N/A | 1 |
C23 | Recherche locations | Barre de recherche pour les locations (titre, client, etc.) | 1 | N/A | 2 |
C24 | Tri locations | Trier les locations par titre, date de réservation, etc. | 1 | N/A | 2 |
~~C25~~ | Valider location | Case à cocher et bouton soumettre pour valider la sortie temporaire de l'inventaire des films réservés | 1 | N/A | 1 |
C26 | Liaison film/client | Lier un film à un client depuis le catalogue ou la page du flim pour les locations faites en magasin | 1 | N/A | 1 |
C27 | Retours | Liste de films sortis de l'inventaire | 1 | N/A | 1 |
C28 | Valider retour | Bouton "Confirmer" pour valider le retour en inventaire des films ramenés par le client | 1 | N/A | 1 |
C29 | Filtre retard | Filtre pour afficher uniquement les films en retard | 1 | N/A | 1 |
C30 | Ajout film | Formulaire pour ajouter des films dans la base de données | 2 | ajout-film | 1 |
C31 | Valider ajout/modification film | Bouton soumettre le formulaire pour ajouter ou modifier des films dans la base de données | 2 | ajout-film et modifier-film | 1 |
C32 | Ajout acteur | Formulaire pour ajouter des acteurs dans la base de données | 2 | N/A | 1 |
C33 | Valider acteur | Bouton soumettre le formulaire pour ajouter des acteur dans la base de données | 2 | N/A | 1 |
C34 | Modifier film | Formulaire pour modifier des films de la base de données | 2 | details_film | 1 |
C35 | Valider modification film | Bouton soumettre le formulaire pour modifier des films de la base de données | 2 | N/A | 1 |
C36 | Modifier acteur | Formulaire pour modifier des acteurs de la base de données | 2 | N/A | 1 |
C37 | Valider modifier acteur | Bouton soumettre le formulaire pour modifier des acteur de la base de données | 2 | N/A | 1 |
C38 | Suppression film | Bouton pour supprimer le film de la base de données | 2 | modifier-film | 1 |
C39 | Lier film et acteur | Bouton pour ajouter un acteur au film en modification | 2 | ajout-film et modifier-film | 1 |
C40 | Suppression acteur | Formulaire pour supprimer des acteurs de la base de données | 2 | N/A | 1 |
C41 | Valider suppression acteur | Bouton soumettre le formulaire pour supprimer des acteurs de la base de données | 2 | N/A | 1 |
C42 | Utilisateurs | Liste des utilisateurs | 3 | utilisateurs | 3 |
C43 | Gestion des rôles | Changer le rôle d'un utilisateur | 3 | editerUtilisateur | 3 |
C44 | Ajouter compte | Création de nouveaux comptes utilisateurs | 3 | ajoutUtilisateur | 3 |
C45 | Supprimer compte | Supprimer des comptes utilisateurs | 3 | editerUtilisateur | 3 |
==C46== | Déconnexion | Bouton de déconnexion | 0 | Toutes les pages sauf connexion et création de compte (côté client pas admin) | 1 |
==C47== | Recherche acteur | Barre de recherche pour les acteurs | 0 | N/A | 3 |
==C48== | Description acteur | Lien vers la page de description d'un acteur | 0 | N/A | 1 |
==C49== | Filtres acteur | Filtre pour la pages des acteurs | 0 | N/A | 3 |
==C50== | Triage acteur | Bouton de triage pour les pages catalogue et acteurs | 0 | N/A | 3 |
==C51== | Filtres utilisateurs | Filtre pour la liste des utilisateurs | 3 | utilisateurs | 3 |
==C52== | Triage utilisateurs | Bouton de triage pour la liste des utilisateurs | 3 | utilisateurs | 3 |
==C53== | Recherche utilisateurs | Barre de recherche pour la liste des utilisateurs | 3 | utilisateurs | 3 |
==C54== | Résilier abonnement | Bouton pour résiler son abonnement (ne plus être membre) | 0 | monCompte | 3 |
==C55== | Délier film et acteur | Lien texte pour supprimer le lien entre un acteur et un film en modification | 2 | ajout-film et modifier-film | 1 |


## Fonctionnalités internes
Code | Nom | Description | Niveau d'accreditation | Maquette(s) associée(s) | Niveau de priorité
:---: | --- | --- | --- | :---: | --- 
I1 | Catalogue | Récupérer la liste de tous les films actifs de la base de données | 0 | N/A | 1 |
I2 | Description | Récupérer les détails d'un film (synopsis, acteurs, etc.) dans la base de données | 0 | N/A | 1 |
I3 | Acteurs | Récupérer la biographie des acteurs, les films auquels ils ont participés, etc. dans la base de données | 0 | N/A | 1 |
I4 | Ajout au panier | Ajoute un film dans le panier de l'utilisateur | 0 | N/A | 1 |
I5 | Ajouter le nouvel item du panier dans la base de données | Stocke la liste du panier dans la base de données, afin que l'utilisateur puisse continuer sa liste plus tard ou sur un autre appareil| 0 | N/A | 4 |
I6 | Recherche catalogue | Permet la recherche/filtre des éléments du catalogue par titre, genre, acteur et année | 0 | N/A | 2 |
I7 | Panier | Affiche la liste des films sélectionnés par l'utilisateur dans le panier à partir de la bd | 0 | N/A | 1 |
I8 | Quantité disponible | Afficher la quantité disponible de chaque film dans le panier | 0 | N/A | 3 |
I9 | Réservation | Valide la réservation des films dans le panier de l’utilisateur et devient une demande de location pour les vendeurs | 0 | N/A | 1 |
I10 | Supprimer un film de la liste de location | Supprimer le film sélectionné individuellement du champ panier de l’utilisateur de la bd | 0 | N/A | 1 |
I11 | Vider le panier | Supprime complètement le panier et tous ses éléments de la table panier | 0 | N/A | 1 |
I12 | Encryption | Encryption du mot de passe tapé dans la page connexion | 0 | N/A | 2 |
I13 | Authentification | Comparaison des informations de la page de connexion avec les informations de l'utilisateur dans la bd | 0 | N/A | 2 |
I14 | Redirection | Redirection de l'utilisateur selon son rôle vers la page catalogue (client) ou une des pages d'administration (autres rôles). Recharger la page jusqu'à un maximum de trois fois si l'authentification échoue. | 0 | N/A | 2 |
I15 | Recharger la page en cas d'échec d'authentification | Recharger la page jusqu'à un maximum de trois fois si l'authentification échoue. | 0 | N/A | 3 |
I16 | Vérification de l'adresse de courriel | Lors de la création d'un nouveau compte, vérification préalable pour savoir si l'adresse courriel existe déjà dans la bd. Si oui, avertir l'utilisateur et recharger la page avec les données saisies | 0 | N/A | 3 |
I17 | Création d'un compte | Encryption du mot de passe et ajout du compte dans la base de données | 0 | N/A | 2 |
I18 | Mot de passe oublié | Envoi d'un courriel de récupération pour un mot de passe oublié avec un lien spécifique | 0 | N/A | 3 |
I19 | Vérification du lien de mot de passe | Vérification du lien avec la bd pour valider que l'utilisateur est légitime. Redirige à la page d'accueil sinon | 0 | N/A | 4 |
I20 | Formulaire de réinitialisation du mot de passe | Changer le mot de passe de l'utilisateur dans la bd | 0 | N/A | 2 |
I21 | Mon compte | Récupérer et afficher les informations du compte de l'utilisateur (nom, adresse, courriel, etc.) | 0 | monCompte | 3 |
I22 | Modifier compte | Modifier les informations du compte de l'utilisateur dans la base de données | 0 | monCompte | 3 |
I23 | Locations | Récupération de la liste des locations en cours de l'utilisateur | 0 | N/A | 2 |
I24 | Retards | Récupérer et afficher la liste des films en retard que l'utilisateur a loué et n'a pas encore rapporté | 0 | N/A | 2 |
I25 | Renouveler | Renouveler une location/reporter la date de retour depuis le compte client. Change la date de retour dans la bd. | 0 | N/A | 2 |
I26 | Locations | Valider la possibilité (I.e. disponibilité) de la sortie temporaire d'un/des film(s) reservé(s) de l'inventaire | 1 | N/A | 1 |
I27 | Recherche locations | Barre de recherche pour afficher les locations dans un ordre précis (titre, client, etc.) | 1 | N/A | 2 |
I28 | Tri locations | Trier des locations par titre, date de réservation, etc. | 1 | N/A | 2 |
I29 | Valider location | Vérification et validation de la sortie temporaire de l'inventaire des films réservés, I.e. la réservation physique est effective à partir de ce moment-là | 1 | N/A | 1 |
I30 | Liaison film/client | Recherche dans le panier de location d'un utilisateur spécifié. | 1 | N/A | 1 |
==I31== | Valider retour | Change la valeur de la table de location pour indiquer le retour de la location et incrémenter la quantité dans la table items | 1 | N/A | 1 |
I32 | Filtre retard | Filtre pour afficher uniquement les films en retard | 1 | N/A | 1 |
I33 | Ajout film | Ajout d'un film dans la base de données | 2 | N/A | 1 |
I34 | Ajout acteur | Ajout d'un acteur dans la base de données. Validation au préalable qu'il n'existe pas déjà | 2 | N/A | 1 |
I35 | Modifier film | Modification d'un film existent dans la base de données | 2 | N/A | 1 |
I36 | Modifier acteur | Modification d'un acteur existant dans la base de données | 2 | N/A | 1 |
I37 | Suppression film | Suppression du film de la base de donnée ou changer son status uniquement. À déterminer. | 2 | N/A | 1 |
I38 | Suppression acteur | Changer le statut de l'acteur dans la base de données, au cas où l'on ajouterait un film avec le même acteur plus tard | 2 | N/A | 1 |
I39 | Utilisateurs | Affichage de la liste des utilisateurs actifs de la bd | 3 | utilisateurs | 3 |
I40 | Gestion des rôles | Changer le rôle d'un utilisateur dans la bd | 3 | editerUtilisateur | 3 |
I41 | Ajouter compte | Création de nouveaux comptes utilisateurs dans la bd | 3 | ajoutUtilisateur | 3 |
I42 | Supprimer compte | Supprimer des comptes utilisateurs dans la bd | 3 | editerUtilisateur | 3 |
I43 | Notification courriel | Notifier l'utilisateur par courriel quand il valide une réservation | 0 | N/A | 1 |
==I46== | Déconnexion | Déconnecte l'utilisateur | 0 | Toutes les pages sauf connexion et création de compte (côté client pas admin) | 1 |
==I47== | Résilier abonnement | Modifie le booléen sur false pour membre dans la table utilisateurs | 0 | monCompte | 3 |
==I48== | Supprimer les paniers non-réclamés | À tous les jours à minuit, supprimer les réservations non-réclamées et remettre les items en inventaire | 2 | N/A | 2 |