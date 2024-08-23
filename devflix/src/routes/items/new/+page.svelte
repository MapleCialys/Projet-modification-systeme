<h1 class="title">Ajouter un film</h1>

<form method="POST" action="?/new">
    <label for="nom">Nom</label>
    <input type="text" name="nom" id="nom" required>

    <label for="description">Description</label>
    <input type="text" name="description" id="description" required>

    <label for="image_item"></label>
    <input type="text" name="image_item" id="image_item">

    <label for="bande_annonce"></label>
    <input type="url" name="bande_annonce" id="bande_annonce">

    <label for="date"></label>
    <input type="date" name="date" id="date">

    <label for="quantite_disponible">Quantité disponible</label>
    <input type="number" name="quantite_disponible" id="quantite_disponible" required>

    <input type="submit" value="Envoyer">
</form>