<script>
    import ReusableLayout from '$lib/components/ReusableLayout.svelte';
</script>

<style>
    /* Container et redimmension automatique pour les miniatures d'affiches de films */
    :global(.image-container) {
          display: flex;
          justify-content: center;
      }
    :global(.miniature-image) {
        width: auto;
        max-width: 560px;
        height: 180px;
    }
</style>

<slot/>