<script>

    export let data;
    const item = data.item;

    import H1Title from '../../../lib/components/h1Title.svelte';

</script>

<div class="block">
    <H1Title title={"Catalogue de films"}></H1Title>

    <div class="block">
        <figure><img max-height=400px src="{item.image_item}" alt="{item.nom}"/></figure>

        <p>Nom : {item.nom}</p>
        <p>Description : {item.description}</p>
        <p>Quantite : {item.quantite_disponible}</p>
    </div>

</div>
