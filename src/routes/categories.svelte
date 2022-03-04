<script>
  // your script goes here
  import AddCategory from "../components/AddCategory.svelte";
  import CategoryStore from "../stores/CategoryStore";
  import Button from "../shared/Button.svelte";
  const handleDelete = (remove) => {
    CategoryStore.update((categories) => {
      return categories.filter((category) => category !== remove);
    });
  };
</script>

<!-- markup (zero or more items) goes here -->
<AddCategory />
<h1>Categories</h1>
<div>
  {#each $CategoryStore as category (category)}
    <p>
      {category}
      {#if category !== "All"}
        <Button on:click={() => handleDelete(category)}>Delete</Button>
      {/if}
    </p>
  {/each}
</div>
