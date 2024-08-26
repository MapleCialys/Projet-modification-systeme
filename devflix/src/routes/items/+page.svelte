<script>
	import Logout from "../../lib/component/logout.svelte";


    export let data;
    console.log(data);


    const items = data.items;
    const role = data.user.role_id;

   // console.log(items)

   function goNew()
   {
    window.location.href='/items/new';
   }

</script>

<h1>Items</h1>
<button on:click={goNew}>Ajouter un item</button>

<Logout />

{#each items as item}
    <h2>Item : {item.id}</h2>
    <p>{item.nom}</p>
    <p>{item.description}</p>
    <p>{item.quantite}</p>
    <a href="./items/{item.id}">Lien</a>
{/each}