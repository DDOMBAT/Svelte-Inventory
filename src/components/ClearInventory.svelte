<script>
  // your script goes here
  import ItemStore from "../stores/ItemStore";
  import Button from "../shared/Button.svelte";
  const clearInventory = () => {
    ItemStore.update((currentItems) => {
      currentItems = [];
      return currentItems;
    });
  };
</script>

<main>
  <Button on:click={clearInventory}>Clear Inventory</Button>
</main>

<style>
  main {
    margin-left: auto;
    margin-right: 0;
    float: right;
  }
</style>
