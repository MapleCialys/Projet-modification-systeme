<script>

    export let data;
    
    let items = data.items;
    let panier_id = null;
    if(items[0])
    panier_id = items[0].Paniers_id;

    import H1Title from '$lib/components/h1Title.svelte';

    async function handleDeleteAll(event)
    {
        const formData = new FormData(event.target);

        const response = await fetch('?/deleteAll', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        console.log("log dans le front", result);
        items = [];

        // if (result.type == 'failure')
        //     erreur = JSON.parse(result.data)[0];
        // else
        //     window.location.href = '/items';
    }

</script>

<div class="block">
    <H1Title title={"Paniers"}></H1Title>

    <div class="block">
        <table class="table">
            <thead>
                <tr>
                    <th></th> <!-- Cases à cocher -->
                    <th></th> <!-- Miniatures affiches de films -->
                    <th>Films</th>
                    <th></th> <!-- Boutons supprimer (C12) -->
                </tr>
            </thead>
            <tbody>
                {#each items as item}
                <tr>
                    <td>
                        <input type="checkbox">
                        <input type="number" name="id" id="id" value={item.id} readonly hidden>
                    </td>
                    <td><figure class="image-container"><img src="../{item.movie.image_item}" alt="{item.movie.nom}" class="miniature-image"/></figure></td>
                    <td>
                        <h2 class="subtitle">{item.movie.nom}</h2>
                        <p> {item.movie.description}</p></td>
                    <td>
                        <button class="button is-small is-danger is-outlined">
                            Retirer du panier 
                            <span class="icon ml-1"><i class="fa-solid fa-trash"></i></span>
                        </button>
                    </td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
    
    <div class="block">
        <form on:submit|preventDefault={handleDeleteAll}>
            <input type="text" name="panier_id" value="{panier_id}" hidden>
            <button class="button is-danger">Vider le panier</button>
    </form>
    </div>

</div>