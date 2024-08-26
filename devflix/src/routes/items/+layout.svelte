<script>
    import ReusableLayout from '$lib/components/ReusableLayout.svelte';
</script>

<style>
    /* Container et redimmension automatique pour les images d'affiches de films */
    :global(.image-container) {
          display: flex;
          justify-content: center;
      }
    :global(.resized-image) {
        width: auto;
        max-width: 560px;
        height: 380px;
    }
</style>

<slot/>