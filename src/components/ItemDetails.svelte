<script>
  // your script goes here
  export let item;
  import Button from "../shared/Button.svelte";
  import Edit from "../components/Edit.svelte";
  import ItemStore from "../stores/ItemStore";
  let editing = false;
  const handleDelete = (serial) => {
    ItemStore.update((currentItems) => {
      return currentItems.filter((item) => item.serial !== serial);
    });
  };
  const handleEdit = (e) => {
    editing = false;
  };
</script>

<!-- markup (zero or more items) goes here -->
<div>
  {#if editing}
    <Edit {item} on:edit={handleEdit} />
  {:else}
    <h3>{item.category}</h3>
    <p>Serial Number: {item.serial}</p>
    <p>Store Number: {item.store}</p>
  {/if}
  <div class="delete">
    <Button flat={true} on:click={() => handleDelete(item.serial)}
      >Delete</Button
    >
    <button on:click={() => (editing = !editing)}>Edit</button>
  </div>
</div>

<style>
  /* your styles go here */
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rbga(0, 0, 0, 0, 0.2);
  }
</style>
