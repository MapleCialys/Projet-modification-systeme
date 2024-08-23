<script>

    export let data;

    const items = data.items;

    console.log(items)

</script>

<div class="block">
    <div class="block">
        <h1 class="title">Catalogue de films</h1>
    </div>

    <div class="grid is-col-min-9">
        {#each items as item}
        <div class="cell">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-5by3">
                        <a href="./items/{item.id}">
                            <img src="{item.image_item}" alt="{item.nom}"/>
                        </a>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <h2 class="title is-4">{item.nom}</h2>
                        <p class="subtitle is-6">{item.date}</p>
                        <p>{item.quantite_disponible}</p>
                        <a href="/" class="button is-primary">Ajouter au panier</a>
                    </div>
                </div>
            </div>
        </div>
        {/each}
    </div>
</div>