<script>
    import logo from "$lib/img/app/logo.png";
    import '$lib/styles.css';
</script>
<script context="module">
    export let cookie;
    console.log(cookie);
</script>
<section class="hero is-fullheight header-image">
    <div class="hero-head is-right m-4">
        <div class="buttons is-right">
        <button class="button is-warning is-rounded" on:click={() => window.location.href='/login'}>Se connecter</button>
        <button class="button is-warning is-light is-rounded" on:click={() => window.location.href='/users/new'}>Creer un compte</button>
        </div> 
    </div>
    <div class="hero-body">
                <figure class="image">
                    <img alt="logo" src="{logo}" />
                </figure>
       </div>
    <div class="hero-foot"></div>
</section>
