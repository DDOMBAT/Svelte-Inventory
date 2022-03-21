import { writable } from "svelte/store";

// TODO place add function in here
const CategoryStore = writable(["All", "Terminal", "Mac Mini"]);

export default CategoryStore;
