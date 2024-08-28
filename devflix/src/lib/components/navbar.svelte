<script>

  import { onMount } from "svelte";
  import logo from "$lib/img/app/logo.png";
  import Logout from "$lib/components/logout.svelte";
  import { findOne } from "../../lib/db/controllers/sessions.controller.js";
  import { findOne as findInUsers } from "$lib/db/controllers/users.controller";
  import { findOne as findInPaniers } from '$lib/db/controllers/paniers.controller';

  onMount(() => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.getElementById('navbarDevflix');

    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  });

</script>

<nav class="navbar is-black" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/"><img src={logo} alt="Devflix" /></a>
    
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarDevflix">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarDevflix" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/items">
        Catalogue
      </a>

      <a class="navbar-item" href="/users/{user.id}">
        Mon compte
      </a>

      <a class="navbar-item" href="/users">
        Utilisateurs
      </a>
    </div>
  </div>
      
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <Logout />
            
            <a class="has-text-white" href="/panier/{Paniers.id}">
              <i class="fa-solid fa-xl fa-cart-shopping"></i>
            </a>
          </div>
        </div>
      </div>
</nav>

<style>

  nav {
    padding-left: 30px;
  }

  .navbar-start .navbar-item:hover {
    background-color: lightgray;
    color: black;
  }

  .fa-cart-shopping:hover {
    color: orange;
  }

</style>