<script>
	import { onMount } from "svelte";
    export let data;
    console.log(data);
    
    onMount(() => {
        window.location.href=`panier/${data.user.id}`;
    });
</script>