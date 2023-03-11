 import { writable } from "svelte/store"; 


export let jwt = writable(null);
export let authenticated = writable(false);