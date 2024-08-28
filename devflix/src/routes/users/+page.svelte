<script>
    
    import H1Title from '$lib/components/h1Title.svelte';
    import ButtonPrimary from '$lib/components/buttonPrimary.svelte';
    import {formatDate} from '$lib/index.js';

    export let data;

    const users = data.users;

    //console.log(users)

</script>

<div class="block">

    <H1Title title={"Utilisateurs"}></H1Title>

    <div class="block has-text-right">
        <ButtonPrimary url={"/items/new"} texte={"Ajouter un film"}></ButtonPrimary>
    </div>

    <div>
        <table class="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th></th> <!-- Liens vers C17 -->
                    <th>ID</th>
                    <th>PRÉNOM</th>
                    <th>NOM</th>
                    <th>RÔLE</th>
                    <th>DATE DE CRÉATION DE COMPTE</th>
                    <th>COURRIEL</th>
                </tr>
            </thead>
            <tbody>
                {#each users as user}
                <tr>
                    <td>
                        <a href="/users/{user.id}">
                            <span class="icon"><i class="fa-solid fa-xl fa-magnifying-glass"></i></span>
                        </a>
                    </td>
                    <td>{user.id}</td>
                    <td>{user.prenom}</td>
                    <td>{user.nom}</td>
                    <td>{user.role.nom}</td>
                    <td>{formatDate(user.createdAt)}</td>
                    <td>{user.courriel}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>

</div>


<style>

    .fa-magnifying-glass {
      color: black;
    }
  
  </style>