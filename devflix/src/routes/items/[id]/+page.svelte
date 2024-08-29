<script>
    export let data;

    import {formatDate} from '$lib/index.js';
    import H1Title from '$lib/components/h1Title.svelte';
    import Goback from "$lib/components/goback.svelte";
    import ButtonWarning from '$lib/components/buttonWarning.svelte';
    
    const item = data.item;
    const Paniers = data.Paniers;
    let message = null;
    let show = false;
    let notif = null;
    let admin = false;

     /**
     * Ajoute au panier
     *
     * @async
     * @param {Object} event
     */
    async function ajoutPanier(event)
    {
        event.preventDefault();
        const formData = new FormData(event.target);

        const response = await fetch('?/addToCart', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        if (result.type == 'success')
        {
            message = "Article ajouté au panier.";
            notif = "is-success";
        }
        else if (result.type == 'failure')
        {
            message = JSON.parse(result.data);
            notif = "is-warning";
        }
    }

    /* Bloc pour afficher les notifications */
    $: {
      if (message) {
        show = true;
        setTimeout(() => {
          show = false;
          message = null;
        }, 3000);
      }
    }

</script>

<div class="block">

    <H1Title title={item.nom}></H1Title>
    
        <div class="columns">
            <!-- First column -->
            <div class="column is-narrow">
                {#if item.image_item} <!-- Image générique si image_item est NULL -->
                <figure class="image-container"><img src="../{item.image_item}" alt="{item.nom}" class="resized-image"/></figure>
                {:else}
                <figure class="image-container"><img src="../src/lib/img/app/affiche_default.jpg" alt="{item.nom}" class="resized-image"/></figure>
                {/if}

                {#if item.bande_annonce} <!-- Ne pas affiché zone vidéo si bande_annonce est NULL -->
                    <div class="video-container">
                        <iframe
                            width="560"
                            height="315"
                            src="{item.bande_annonce}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            title="Bande-annonce {item.nom}">
                        </iframe>
                    </div>
                {/if}
            </div>
            
            <!-- Second column -->
            <div class="column">
                {#if !item.date || item.date == 'Invalid Date'}
                <p><strong>Date de sortie :</strong> Date inconnue</p><br>
                {:else}
                <p><strong>Date de sortie :</strong> {formatDate(item.date)}</p><br>
                {/if}
                {#if item.description}
                <p><strong>Description :</strong> {item.description}</p><br>
                {:else}
                <p><strong>Description :</strong> Synonpsis inconnu...</p><br>
                {/if}
                <p><strong>Quantité disponible :</strong> {item.quantite_disponible}</p><br>

                <form on:submit|preventDefault={ajoutPanier}>
                    <input type="text" value="{item.id}" name="item" hidden>
                    <button class="button is-primary is-rounded" type="submit">Ajouter au panier</button>
                </form>
            </div>
          </div>
          {#if show}
          <div class="notification {notif} has-text-centered">
            {message}
          </div>
        {/if}
    <!-- Boutons en bas de page -->
    <div class="block has-text-right">
        <ButtonWarning url={`./edit/${item.id}`} texte={"Éditer cette fiche"}></ButtonWarning>
        <Goback />
    </div>

</div>
