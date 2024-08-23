<script>
    async function handleSubmit(event)
    {
        event.preventDefault();
        const formData = new FormData(event.target);

        const response = await fetch('?/new', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        console.log(result);

        if (result.type == 'failure')
            alert(result.data); // a changer pour mettre le message d'erreur sur la page
        else
            window.location.href = '/items'; //a changer pour la redirection
    }
</script>

<h1>New User</h1>

<form on:submit|preventDefault={handleSubmit}>
    <label for="nom">Nom</label>
    <input type="text" name="nom" id="nom">

    <label for="prenom">Prénom</label>
    <input type="text" name="prenom" id="prenom">

    <!-- <label for="role">Role Id</label>
    <input type="number" name="role" id="role"> -->

    <label for="courriel">Courriel</label>
    <input type="email" name="courriel" id="courriel">

    <label for="password">Password</label>
    <input type="password" name="password" id="password">
 
    <input type="submit" value="Envoyer">
</form>