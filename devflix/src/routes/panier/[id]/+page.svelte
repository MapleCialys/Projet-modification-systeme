<script>

    export let data;
    
    const items = data.items;
    const catalogue = data.catalogue;

    import H1Title from '$lib/components/h1Title.svelte';

</script>

<div class="block">
    <H1Title title={"Paniers"}></H1Title>

    <div>
        <button class="button is-danger">Vider le Paniers</button>
    </div>

    <div>
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
                    <td><p>Description : {item.movie.description}</p></td>
                    <td>
                        <span class="icon"><i class="fa-solid fa-trash"></i></span>
                    </td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>

</div>