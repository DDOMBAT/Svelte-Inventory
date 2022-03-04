<script>
  // your script goes here
  export let search = "";
  export let key;
  let keys = {
    category: "",
    serial: "",
    store: "",
  };
</script>

<!-- markup (zero or more items) goes here -->
<input type="search" placeholder="Search Inventory" bind:value={search} />
<select bind:value={key}>
  {#each Object.keys(keys) as attribute}
    <option value={attribute}>
      {attribute.charAt(0).toUpperCase() + attribute.slice(1)}
    </option>
  {/each}
</select>

<style>
  /* your styles go here */
</style>
