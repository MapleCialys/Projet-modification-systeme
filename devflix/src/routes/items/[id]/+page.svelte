<script>

    export let data;
    const item = data.item;

    import {formatDate} from '../../../lib/index.js';

    import H1Title from '../../../lib/components/h1Title.svelte';

</script>

<div class="block">
    <H1Title title={"Catalogue de films"}></H1Title>

    <div class="block">
        <figure><img max-height=400px src="{item.image_item}" alt="{item.nom}"/></figure>

        <h2 class="title">{item.nom}</h2>
        <p>Date de sortie : {formatDate(item.date)}</p>
        <p>Description : {item.description}</p>
        <p>Quantite : {item.quantite_disponible}</p>
    </div>

</div>
