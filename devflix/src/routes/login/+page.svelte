<script>
    let message = '';

    async function handleSubmit(event)
    {
        event.preventDefault();
        const formData = new FormData(event.target);

        const response = await fetch('?/login', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (!result.success)
            alert(result.message);
        else
            alert('gg ma gueule');
    }
</script>

<h1>Login</h1>

<form on:submit|preventDefault={handleSubmit} method="POST" action="?/login">

    <label for="nom">Nom</label>
    <input type="text" name="nom" id="nom">

    <label for="prenom">Prenom</label>
    <input type="text" name="prenom" id="prenom">

    <label for="password">Password</label>
    <input type="password" name="password" id="password">

    <input type="submit" value="Login">

</form>