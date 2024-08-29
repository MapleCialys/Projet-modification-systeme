<script>

    export let data;

    const roles = data.roles;
</script>

<h1>Roles</h1>

{#each roles as role}
    <h2>Role : {role.id}</h2>
    <p>{role.nom}</p>
    <p>{role.description}</p>
    <a href="./roles/{role.id}">Lien</a>
{/each}