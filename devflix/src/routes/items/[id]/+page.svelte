<script>

    export let data;

    const item = data.item;
    const panier = data.panier;

    import {formatDate} from '$lib/index.js';

    import H1Title from '$lib/components/h1Title.svelte';
    import ButtonLight from '$lib/components/buttonLight.svelte';

</script>

<div class="block">

    <H1Title title={item.nom}></H1Title>
    
        <div class="columns">
            <!-- First column -->
            <div class="column is-narrow">
                <figure class="image-container"><img src="{item.image_item}" alt="{item.nom}" class="resized-image"/></figure>

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
                <p><strong>Date de sortie :</strong> {formatDate(item.date)}</p><br>
                <p>Description : {item.description}</p><br>
                <p><strong>Quantité disponible :</strong> {item.quantite_disponible}</p><br>
                <a href="./panier" class="button is-primary">Ajouter au panier</a>
            </div>
          </div>
    
    <!-- Boutons en bas de page -->
    <div class="block has-text-right">
        <a href="/" class="button is-warning">Éditer cette fiche</a>
        <ButtonLight url={"./"} texte={"Retour"}></ButtonLight>
    </div>

</div>


<style>
    .video-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
</style>