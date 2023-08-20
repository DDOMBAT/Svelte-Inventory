<script>
  // your script goes here
  import ItemStore from "../stores/ItemStore";
  import ItemDetails from "../components/ItemDetails.svelte";
  import SelectCategory from "../components/SelectCategory.svelte";
  import ClearInventory from "../components/ClearInventory.svelte";
  import Search from "../components/Search.svelte";
  let selected = "All";
  let search = "";
  let key = "category";
  $: filteredItems = $ItemStore;
  $: {
    if (selected === "All") {
      filteredItems = $ItemStore;
    } else {
      filteredItems = $ItemStore.filter((item) => item.category === selected);
    }
    filteredItems = filteredItems.filter((item) =>
      item[key].toLowerCase().includes(search.toLowerCase())
    );
  }
  $: quantity = filteredItems.length;
</script>

<!-- markup (zero or more items) goes here -->
<div>
  <h1>Inventory <ClearInventory /></h1>
  <SelectCategory bind:selected />
  <Search bind:search bind:key />
  <h2>
    {quantity}
    {#if quantity === 1} item {:else} items {/if}
  </h2>
  {#each filteredItems as item (item.serial)}
    <div>
      <ItemDetails {item} />
    </div>
  {/each}
</div>

<style>

 #inventory {
    display: block;
    margin-left: 100px;
    margin-right: auto;
  }
  
</style>
