<script>

    import H1Title from '$lib/components/h1Title.svelte';
    import Goback from "$lib/components/goback.svelte";
    import {formatDate} from '$lib/index.js';

    export let data;

    const user = data.user;
</script>

<div class="block">

    <H1Title title={"Mon compte"}></H1Title>

    <div class="box">
        <!-- POST et action pas créé, tout en readonly et pas submit -->
        <form enctype="multipart/form-data">
        
        <div class="field">
            <label class="label" for="nom">Nom</label>
            <div class="control">
              <input class="input readonly" type="text" name="nom" id="nom" value={user.nom} required readonly>
            </div>
        </div>

        <div class="field">
            <label class="label" for="prenom">Prénom</label>
            <div class="control">
              <input class="input readonly" type="text" name="prenom" id="prenom" value={user.prenom} required readonly>
            </div>
        </div>

        <div class="field">
            <label class="label" for="courriel">Courriel</label>
            <div class="control">
              <input class="input readonly" type="email" name="courriel" id="courriel" value={user.courriel} required readonly>
            </div>
        </div>

        <div class="field">
            <label class="label" for="password">Mot de passe</label>
            <div class="control">
              <input class="input readonly" type="password" name="password" id="password" value={user.password} required readonly>
            </div>
        </div>

        <div class="columns">
          <!-- First column -->
          <div class="column">

              <div class="field">
                <label class="label" for="date">Date de création de compte</label>
                <div class="control">
                  <input class="input readonly" style="width: 30%;" type="date" name="date" id="date" value={formatDate(user.createdAt)} required readonly>
                </div>
              </div>
    
          </div>
    
        </div>
    
        </form>
      </div>


    <!-- Boutons en bas de page -->
    <div class="block has-text-right">
      <form method="POST" action="?/delete">
        <input type="number" name="id" id="id" value={user.id} required readonly hidden>
        <input type="submit" class="button is-danger is-rounded" value="Supprimer mon compte">
      </form>
        <Goback />
    </div>

</div>