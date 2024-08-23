<script>

    export let data;

    const items = data.items;

    console.log(items)

    import Title from '../../lib/components/title.svelte';

    function formatDate(dateString) {
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    }

</script>

<div class="block">
    <Title title={"Catalogue de films"}></Title>

    <div class="grid is-col-min-9">
        <div class="cell">
            {#each items as item}
            <div class="card">
                <div class="card-image">
                    <figure class="image image image is-2by3">
                        <a href="./items/{item.id}">
                            <img src="{item.image_item}" alt="{item.nom}"/>
                        </a>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <h2 class="title is-4">{item.nom}</h2>
                        <p class="subtitle is-6">{formatDate(item.date)}</p>
                        <p>Quantité disponible : {item.quantite_disponible}</p>
                        <a href="./panier" class="button is-primary">Ajouter au panier</a>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>

</div>