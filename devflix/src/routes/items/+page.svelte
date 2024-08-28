<script>
	import Logout from "../../lib/components/logout.svelte";


    export let data;
    console.log(data);


    const items = data.items;
    const Paniers = data.Paniers;
    const role = data.user.role_id;

    import {formatDate} from '$lib/index.js';

    import H1Title from '$lib/components/h1Title.svelte'
    import ButtonPrimary from '$lib/components/buttonPrimary.svelte';

    async function ajoutPanier(event)
    {
        event.preventDefault();
        const formData = new FormData(event.target);

        const response = await fetch('?/addToCart', {
            method: 'POST',
            body: formData
        });
        console.log(response);

        const result = await response.json();
        console.log(result);
        // if (result.type == 'failure')
        //     erreur = JSON.parse(result.data)[0];
        // else
        //     window.location.href = '/items';
    }

</script>

<div class="block">
    <H1Title title={"Catalogue de films"}></H1Title>

    <div class="block has-text-right">
        <ButtonPrimary url={"/items/new"} texte={"Ajouter un film"}></ButtonPrimary>
        <Logout />
    </div>
    

    <!-- Grille avec cards pour chaque film -->
    <div class="grid is-col-min-10">
        {#each items as item}
            <div class="cell is-flex">
                <div class="card">

                    <div class="card-image"> <!-- Image -->
                        <figure>
                            <a href="./items/{item.id}">
                                {#if item.image_item} <!-- Image générique si image_item est NULL -->
                                <img src="{item.image_item}" alt="{item.nom}"/>
                                {:else}
                                <img src="/affiche_default.jpg" alt="{item.nom}"/>
                                {/if}
                            </a>
                        </figure>
                    </div>
                    

                    <div class="card-content"> <!-- Contenu -->
                        <div class="content">
                            <h2 class="title is-4 is-thin">{item.nom}</h2>
                            <p class="subtitle is-6">{formatDate(item.date)}</p>
                            <p>Quantité disponible : {item.quantite_disponible}</p>
                            <form on:submit|preventDefault={ajoutPanier}>
                                <input type="text" value="{item.id}" name="item" hidden>
                                <button class="button is-primary is-rounded" type="submit">Ajouter au panier</button>
                            </form>
                            <!-- <ButtonPrimary url={"./Paniers"} texte={"Ajouter au Paniers"}></ButtonPrimary> -->
                        </div>
                    </div>

                </div>
            </div>
        {/each}
    </div>

</div>