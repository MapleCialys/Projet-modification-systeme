<script>
    import ReusableLayout from '$lib/components/ReusableLayout.svelte';
</script>

<style>
    /* Container pour les images d'affiches de films */
    :global(.image-container) {
          display: flex;
          justify-content: center;
      }
</style>

<slot />