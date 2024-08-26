<script>

    export let data;

    const items = data.items;
    const panier = data.panier;

    console.log(items)

    import {formatDate} from '$lib/index.js';

    import H1Title from '$lib/components/h1Title.svelte'
    import ButtonPrimary from '$lib/components/buttonPrimary.svelte';

</script>

<div class="block">
    <H1Title title={"Catalogue de films"}></H1Title>

    <div class="block">
        <ButtonPrimary url={"/items/new"} texte={"Ajouter un film"}></ButtonPrimary>
    </div>
    
    
    <!-- Grille avec cards pour chaque film -->
    <div class="grid is-col-min-9">
        <div class="cell">
            {#each items as item}
            <div class="card">
                <div class="card-image">
                    <figure>
                        <a href="./items/{item.id}">
                            <img src="{item.image_item}" alt="{item.nom}" class="resized-image"/>
                        </a>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <h2 class="title is-4">{item.nom}</h2>
                        <p class="subtitle is-6">{formatDate(item.date)}</p>
                        <p>Quantité disponible : {item.quantite_disponible}</p>

                        <ButtonPrimary url={"./panier"} texte={"Ajouter au panier"}></ButtonPrimary>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>

</div>