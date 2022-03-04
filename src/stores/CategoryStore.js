import { writable } from "svelte/store";

const CategoryStore = writable(["All", "Terminal", "Mac Mini"]);

export default CategoryStore;
