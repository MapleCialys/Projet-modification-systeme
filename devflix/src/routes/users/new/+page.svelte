<script>  
    import Goback from "../../../lib/components/goback.svelte";
    let erreur = null;
    async function handleSubmit(event)
    {
        event.preventDefault();
        const formData = new FormData(event.target);

        const response = await fetch('?/new', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.type == 'failure')
        erreur = JSON.parse(result.data)[0];
        else
            window.location.href = '/items';
    }
    export let data;
    console.log(data);
</script>

<section class="hero is-fullheight content-image">
    <div class="hero-body">
       <div class="container has-text-centered">
        {#if erreur}
        <div class="notification is-danger">
            <p>{erreur}</p>
        </div>
        {/if}
        <h1 class="title is-centered has-text-warning-light">Nouveau compte</h1>
    
        <form on:submit|preventDefault={handleSubmit}>
        <div class="field">
            <p class="control">
              <input style="width: 30%;" class="input" type="text" placeholder="Nom" name="nom" id="nom">
            </p>
          </div>
        <div class="field">
            <p class="control">
              <input style="width: 30%;" class="input" type="text" placeholder="Prenom" name="prenom" id="prenom">
            </p>
          </div>
        <div class="field">
            <p class="control">
              <input style="width: 30%;" class="input" type="email" placeholder="Courriel" name="courriel" id="courriel">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input style="width: 30%;" class="input" type="password" placeholder="Mot de passe" name="password" id="password">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-warning is-light is-rounded">
                Valider
              </button>
              <Goback />
            </p>
          </div>    
        </form>
       </div>
    </div>
    
</section>
