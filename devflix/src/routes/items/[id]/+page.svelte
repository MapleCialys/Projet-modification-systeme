<script>

    export let data;
    const item = data.item;

    import {formatDate} from '../../../lib/index.js';

    import H1Title from '../../../lib/components/h1Title.svelte';
    import ButtonLight from '../../../lib/components/buttonLight.svelte';

</script>

<div class="block">
    <H1Title title={"Catalogue de films"}></H1Title>

    <div class="block">
        <figure><img max-height=400px src="{item.image_item}" alt="{item.nom}"/></figure>

        <h2 class="title">{item.nom}</h2>
        <p>Date de sortie : {formatDate(item.date)}</p>
        <p>Description : {item.description}</p>
        <p>Quantité disponible : {item.quantite_disponible}</p>

        <a href="./" class="button is-primary">Ajouter au panier</a>
    </div>

    <a href="/" class="button is-warning">Éditer cette fiche</a>
    <ButtonLight url={"./"} texte={"Retour"}></ButtonLight>

</div>
