<script>
  // your script goes here
  import "../styles/global.css";
</script>

<!-- markup (zero or more items) goes here -->
<header>
  <nav>
    <div class="links">
      <a href="/">Inventory</a>
      <a href="items">Items</a>
      <a href="/categories">Categories</a>
    </div>
  </nav>
</header>
<main>
  <!-- page content -->
  <slot />
</main>

<style>
  /* your styles go here */
  header {
    display: flex;
    justify-content: center;
  }
  main {
    max-width: 960px;
    margin: 20px auto;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
  }
  .links {
    margin-left: auto;
  }
  a {
    margin-left: 10px;
  }
</style>
