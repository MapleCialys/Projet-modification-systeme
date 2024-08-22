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
<button on:click={goLogin}>Se connecter</button>
<button on:click={goSignin}>Creer un compte</button>