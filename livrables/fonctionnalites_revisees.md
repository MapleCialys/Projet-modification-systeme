# Liste des fonctionnalités révisées

## Liste des utilisateurs
- Administrateur [Niv.1]
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
C9 | Panier | Tableau/liste des films dans le panier | 0 | panier | 1 |
C11 | Réservation | Bouton pour réserver les films dans le panier de l’utilisateur | 0 | panier | 1 |
C12 | Supprimer item panier | Boutons pour retirer les films individuellement dans le panier de l’utilisateur | 0 | panier | 1 |
C13 | Vider le panier | Bouton pour vider le panier de l'utilisateur | 0 | panier | 1 |
C14 | Authentification | Authentification d'un utilisateur | 0 | Page d'accueil | 2 |
C30 | Ajout film | Formulaire pour ajouter des films dans la base de données | 1 | ajout-film | 1 |
C31 | Valider ajout/modification film | Bouton soumettre le formulaire pour ajouter ou modifier des films dans la base de données | 1 | ajout-film et modifier-film | 1 |
C34 | Modifier film | Formulaire pour modifier des films de la base de données | 1 | details_film | 1 |
C35 | Valider modification film | Bouton soumettre le formulaire pour modifier des films de la base de données | 1 | modifier-film | 1 |
C38 | Suppression film | Bouton pour supprimer le film de la base de données | 1 | modifier-film | 1 |
C42 | Utilisateurs | Liste des utilisateurs | 1 | utilisateurs | 2 |
==C46== | Déconnexion | Bouton de déconnexion | 0 | Toutes les pages sauf page d'accueil et motdepasseoubliee | 1 |
==C58== | Supprimer items panier | Bouton pour retirer plusieurs les films sélectionnés dans le panier de l’utilisateur | 0 | panier | 2 |
==C59== | Valider vider le panier | Bouton de confirmation pour vider le panier de l'utilisateur | 0 | panier | 1 |
==C60== | Confirmation de suppression de film | Popup pour confirmer la suppression d'un film de la base de données | 1 | modifier-film | 1 |


## Fonctionnalités internes
Code | Nom | Description | Niveau d'accreditation | Maquette(s) associée(s) | Niveau de priorité
:---: | --- | --- | --- | :---: | --- 
I1 | Catalogue | Récupérer la liste de tous les films actifs de la base de données | 0 | catalogue | 1 |
I2 | Description | Récupérer les détails d'un film (synopsis, acteurs, etc.) dans la base de données | 0 | details_film | 1 |
I3 | Acteurs | Récupérer la biographie des acteurs, les films auquels ils ont participés, etc. dans la base de données | 0 | acteur | 1 |
I4 | Ajout au panier | Ajoute un film dans le panier de l'utilisateur | 0 | catalogue et details_film | 1 |
I5 | Ajouter le nouvel item du panier dans la base de données | Stocke la liste du panier dans la base de données, afin que l'utilisateur puisse continuer sa liste plus tard ou sur un autre appareil| 0 | panier | 4 |
I6 | Recherche catalogue | Permet la recherche/filtre des éléments du catalogue par titre, genre, acteur et année | 0 | catalogue | 2 |
I7 | Panier | Affiche la liste des films sélectionnés par l'utilisateur dans le panier à partir de la bd | 0 | panier | 1 |
I9 | Réservation | Valide la réservation des films dans le panier de l’utilisateur et devient une demande de location pour les vendeurs | 0 | panier | 1 |
I10 | Supprimer un film de la liste du panier | Supprimer le film sélectionné individuellement du champ panier de l’utilisateur de la bd | 0 | panier | 2 |
I11 | Vider le panier | Supprime complètement le panier et tous ses éléments de la table panier | 0 | panier | 1 |
I12 | Encryption | Encryption du mot de passe tapé dans la page connexion | 0 | Page d'accueil | 2 |
I13 | Authentification | Comparaison des informations de la page de connexion avec les informations de l'utilisateur dans la bd | 0 | Page d'accueil | 2 |
I14 | Redirection | Redirection de l'utilisateur selon son rôle vers la page catalogue (client) ou une des pages d'administration (autres rôles). Recharger la page jusqu'à un maximum de trois fois si l'authentification échoue. | 0 | N/A | 2 |
I15 | Recharger la page en cas d'échec d'authentification | Recharger la page jusqu'à un maximum de trois fois si l'authentification échoue. | 0 | N/A | 3 |
I16 | Vérification de l'adresse de courriel | Lors de la création d'un nouveau compte, vérification préalable pour savoir si l'adresse courriel existe déjà dans la bd. Si oui, avertir l'utilisateur et recharger la page avec les données saisies | 0 | Page d'accueil | 3 |
I33 | Ajout film | Ajout d'un film dans la base de données | 1 | ajout-film | 1 |
I35 | Modifier film | Modification d'un film existent dans la base de données | 1 | details_film | 1 |
I37 | Suppression film | Suppression du film de la base de donnée ou changer son status uniquement. À déterminer. | 1 | modifier-film | 1 |
I39 | Utilisateurs | Affichage de la liste des utilisateurs actifs de la bd | 1 | utilisateurs | 2 |
I43 | Notification courriel | Notifier l'utilisateur par courriel quand il valide une réservation | 0 | panier | 1 |
==I46== | Déconnexion | Déconnecte l'utilisateur | 0 | Toutes les pages sauf page d'accueil et motdepasseoubliee | 1 |
==I49== | Supprimer plusieurs films du panier | Supprimer les films sélectionnés du champ panier de l’utilisateur de la bd | 0 | panier | 2 |