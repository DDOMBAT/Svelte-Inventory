<script>
  // your script goes here
  import CategoryStore from "../stores/CategoryStore";
  import Button from "../shared/Button.svelte";
  let input = "";
  let error = "";
  let valid = false;
  const handleSubmit = () => {
    valid = true;
    if (input.trim().length < 1) {
      valid = false;
      error = "Input cannot be empty";
    } else {
      error = "";
    }
    if (valid) {
      CategoryStore.update((categories) => {
        return [...categories, input];
      });
      input = "";
    }
  };
</script>

<!-- markup (zero or more items) goes here -->
<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="serial">Category</label>
    <input type="text" id="input" bind:value={input} />
    <div class="error">{error}</div>
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
