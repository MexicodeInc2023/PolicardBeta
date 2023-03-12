import { writable } from "svelte/store"; 
import { browser } from "$app/environment"


export const statusCredentials = writable(
    browser && (localStorage.getItem("statusCredentials") || 1)
);
statusCredentials.subscribe((value) => browser && (localStorage.statusCredentials = value));

export const count = writable(0);
/* export const statusCredentials = writable(1); */
