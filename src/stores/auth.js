 import { writable } from "svelte/store"; 


export let jwt = writable(null);
export let user = writable(null);
export let emailUser = writable(null);
export let id = writable(null);
export let authenticated = writable(false);