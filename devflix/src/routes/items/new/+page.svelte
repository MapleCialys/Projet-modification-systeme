<script>

  import H1Title from '$lib/components/h1Title.svelte';
  import ButtonLight from '$lib/components/buttonLight.svelte';

</script>

<div class="block">
  <H1Title title={"Ajouter un film"}></H1Title>

  <form method="POST" action="?/new">
      <div class="field">
          <label class="label" for="nom">Titre du film</label>
          <div class="control">
            <input class="input" type="text" placeholder="La guerre des étoiles" name="nom" id="nom" required>
          </div>
      </div>

      <div class="field">
          <label class="label" for="bande_annonce">Lien vers la bande annonce</label>
          <div class="control">
            <input class="input" type="url" placeholder="https://www.youtube.com/embed/VIDEO_ID" name="bande_annonce" id="bande_annonce">
          </div>
      </div>

      <div class="field">
          <label class="label" for="date">Date de sortie</label>
          <div class="control">
            <input class="input" type="date" placeholder="AAA-MM-JJ" name="date" id="date">
          </div>
      </div>

      <div class="field">
          <label class="label" for="image_item">Image du film</label>
          <div class="control">
            <input class="input" type="text" placeholder="img file" name="image_item" id="image_item">
          </div>
      </div>

      <div class="field">
          <label class="label" for="quantite_disponible">Quantité disponible</label>
          <div class="control">
            <input class="input" type="number" min=0 name="quantite_disponible" id="quantite_disponible" required>
          </div>
      </div>

      <div class="field">
          <label class="label" for="description">Description</label>
          <div class="control">
            <textarea class="textarea" name="description" id="description" required placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></textarea>
          </div>
        </div>

      <input type="submit" class="button is-primary" value="Ajouter">
      <ButtonLight url={"./"} texte={"Retour"}></ButtonLight>
  </form>

</div>