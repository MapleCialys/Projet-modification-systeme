<script>
	import Logout from "../../lib/component/logout.svelte";


    export let data;

    const items = data.items;

    console.log(items)

</script>

<h1>Items</h1>

<Logout />

{#each items as item}
    <h2>Item : {item.id}</h2>
    <p>{item.nom}</p>
    <p>{item.description}</p>
    <p>{item.quantite}</p>
    <a href="./items/{item.id}">Lien</a>
{/each}