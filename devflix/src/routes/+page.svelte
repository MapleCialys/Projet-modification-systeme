<script>
    function goLogin()
    {
        window.location.href='/login';
    }

    function goSignin()
    {
        window.location.href='/users/new';
    }
    import logo from "$lib/img/app/logo.png";
</script>
<script context="module">
    export let cookie;
    console.log(cookie);
</script>
<section class="hero is-fullheight header-image">
    <div class="hero-head is-right m-4">
        <div class="buttons is-right">
        <button class="button is-warning is-rounded" on:click={goLogin}>Se connecter</button>
        <button class="button is-warning is-light is-rounded" on:click={goSignin}>Creer un compte</button>
        </div> 
    </div>
    <div class="hero-body">
                <figure class="image">
                    <img src="{logo}" />
                </figure>
       </div>
    <div class="hero-foot"></div>
</section>

<style>
    .header-image {
    /* background-image: url("http://orig14.deviantart.net/7584/f/2015/181/2/7/flat_mountains_landscape_by_ggiuliafilippini-d8zdbco.jpg"); */
    background-image: url("$lib/img/app/hero2.jpg");
    
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #999;
}
</style>