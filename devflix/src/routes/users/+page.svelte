<script>
    
    export let data;

    const users = data.users;

    //console.log(users)

</script>

<h1>Utilisateurs</h1>

{#each users as user}
    <h2>Utilisateur : {user.id}</h2>
    <p>{user.nom}</p>
    <p>{user.prenom}</p>
    <p>Role : {user.role.nom}</p>
    <p>Description role : {user.role.description}</p>
    <p>Password : {user.password}</p>
    <a href="./users/{user.id}">Lien</a>
{/each}