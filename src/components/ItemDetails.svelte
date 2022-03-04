<script>
  // your script goes here
  export let item;
  import Button from "../shared/Button.svelte";
  import ItemStore from "../stores/ItemStore";
  const handleDelete = (serial) => {
    ItemStore.update((currentItems) => {
      return currentItems.filter((item) => item.serial !== serial);
    });
  };
</script>

<!-- markup (zero or more items) goes here -->
<div>
  <h3>{item.category}</h3>
  <p>Serial Number: {item.serial}</p>
  <p>Store Number: {item.store}</p>
  <div class="delete">
    <Button flat={true} on:click={() => handleDelete(item.serial)}
      >Delete</Button
    >
  </div>
</div>

<style>
  /* your styles go here */
</style>
