<script>
  // your script goes here
  import ItemStore from "../stores/ItemStore";
  export let item;
  const editId = item.serial;
  import CategoryStore from "../stores/CategoryStore";
  import Button from "../shared/Button.svelte";
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
  export let fields = {
    category: item.category,
    serial: item.serial,
    store: item.store,
  };
  let error = {
    category: "",
    serial: "",
    store: "",
  };
  let valid = false;
  const handleSubmit = () => {
    valid = true;
    if (fields.category.trim().length < 1) {
      valid = false;
      error.category = "A category must be selected";
    } else {
      error.question = "";
    }
    if (fields.serial.trim().length < 1) {
      valid = false;
      error.serial = "Serial Number must not be blank";
    } else {
      error.serial = "";
    }
    if (fields.store.trim().length < 1) {
      valid = false;
      error.store = "Store must not be empty";
    } else {
      error.store = "";
    }
    if (valid) {
      ItemStore.update((currentItems) => {
        return currentItems.map((item) => {
          if (item.serial === editId) {
            return {
              ...item,
              category: fields.category,
              store: fields.store,
              serial: fields.serial,
            };
          }
          return item;
        });
      });
      dispatch("edit");
    }
  };
</script>

<!-- markup (zero or more items) goes here -->
<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="category">Item Category</label>
    <select id="category" bind:value={fields.category}>
      {#each $CategoryStore as category (category)}
        {#if category !== "All"}
          <option value={category}>
            {category}
          </option>
        {/if}
      {/each}
    </select>
    <div class="error">{error.category}</div>
  </div>
  <div class="form-field">
    <label for="serial">Serial Number</label>
    <input type="text" id="serial" bind:value={fields.serial} />
    <div class="error">{error.serial}</div>
  </div>
  <div class="form-field">
    <label for="store">Store Number</label>
    <input type="text" id="store" bind:value={fields.store} />
    <div class="error">{error.store}</div>
  </div>
  <Button type="secondary" flat={true}>Submit</Button>
</form>

<style>
  /* your styles go here */
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>
