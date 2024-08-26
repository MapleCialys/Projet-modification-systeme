<script>
    import ReusableLayout from '$lib/components/ReusableLayout.svelte';
</script>

<style>
    /* Redimmension automatique pour les images d'affiches de films */
    :global(.resized-image) {
        width: auto;
        max-width: 560px;
        height: 400px;
    }
</style>

<slot/>