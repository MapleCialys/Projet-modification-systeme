<script>
    function goLogin()
    {
        window.location.href='/login';
    }

    function goSignin()
    {
        window.location.href='/users/new';
    }
</script>
<script context="module">
    export let cookie;
    console.log(cookie);
</script>
<button on:click={goLogin}>Se connecter</button>
<button on:click={goSignin}>Creer un compte</button>