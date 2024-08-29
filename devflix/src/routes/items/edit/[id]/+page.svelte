<script>
    export let data;

    import {formatDate} from '$lib/index.js';
    import H1Title from '$lib/components/h1Title.svelte';
    import Goback from "$lib/components/goback.svelte";
    
    const item = data.item;

</script>

<div class="block">
    <H1Title title={`Modifier film ${item.id}`}></H1Title>
  
    <div class="box">
      <form method="POST" action="?/edit" enctype="multipart/form-data">
      <div class="columns">
        <!-- First column -->
        <div class="column">
            <input type="number" name="id" id="id" value={item.id} required readonly hidden>
          
            <!-- Input 1 -->
            <div class="field">
              <label class="label" for="nom">Titre du film</label>
              <div class="control">
                <input class="input" type="text" name="nom" id="nom" value={item.nom} required>
              </div>
            </div>
  
            <!-- Input 2 -->
            <div class="field">
              <label class="label" for="bande_annonce">Lien vers la bande annonce</label>
              <div class="control">
                <input class="input" type="url" placeholder="https://www.youtube.com/embed/VIDEO_ID" name="bande_annonce" id="bande_annonce" value={item.bande_annonce}>
              </div>
            </div>
  
            <!-- Input 3 -->
            <div class="field">
              <label class="label" for="quantite_disponible">Quantité disponible</label>
              <div class="control">
                <input class="input" type="number" min=0 name="quantite_disponible" id="quantite_disponible" value={item.quantite_disponible} required>
              </div>
            </div>
  
        </div>
  
        <!-- Second column -->
        <div class="column is-one-third">
            <!-- Input 1 -->
            <div class="field">
              <label class="label" for="date">Date de sortie</label>
              <div class="control">
                <input class="input" type="date" placeholder="AAA-MM-JJ" name="date" id="date" value={formatDate(item.date)}>
              </div>
            </div>
  
            <!-- Input 2 -->
            <div class="field">
              <label class="label" for="image_item">Image du film</label>
              <div class="control">
                <input class="input" type="file" name="image_item" id="image_item" value="{item.image_item}">
              </div>
            </div>
          
          </div>
  
      </div>
  
      <!-- Input seul -->
      <div class="field">
        <label class="label" for="description">Description</label>
        <div class="control">
          <textarea class="textarea" name="description" id="description" value="{item.description}" required></textarea>
        </div>
      </div>
      
      <input type="submit" class="button is-warning is-rounded" value="Modifier">
      
    </form>

    <form method="POST" action="?/delete">
      <input type="number" name="id" id="id" value={item.id} required readonly hidden>
      <input type="submit" class="button is-danger is-rounded" value="Supprimer">
    </form>

    </div>

    <Goback />
  
  </div>
