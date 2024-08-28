<script>
    import ReusableLayout from '$lib/components/ReusableLayout.svelte';
</script>


<style>
    .content-image {
    background-image: url("$lib/img/app/hero2blury.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #999;
    
}
</style>

<slot />