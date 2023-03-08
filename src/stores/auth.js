import { writable } from "svelte/store";


export const jwt = writable(null);
export const authenticated = writable(false);