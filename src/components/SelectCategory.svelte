<script>
  // your script goes here
  import CategoryStore from "../stores/CategoryStore";
  export let selected;
</script>

<!-- markup (zero or more items) goes here -->
Show:
<select bind:value={selected}>
  {#each $CategoryStore as category}
    <option value={category}>
      {category}
    </option>
  {/each}
</select>

<style>
  /* your styles go here */
</style>
