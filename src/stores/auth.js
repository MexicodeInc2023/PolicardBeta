import { writable } from "svelte/store"; 
import { browser } from "$app/environment"


export const jwt = writable(
    browser && (localStorage.getItem("jwt") || null)
);
jwt.subscribe((value) => browser && (localStorage.jwt = value));

export const id = writable(
    browser && (localStorage.getItem("id") || null)
);
id.subscribe((value) => browser && (localStorage.id = value));

export const user = writable( 
    browser && (localStorage.getItem("user") || null)
);
user.subscribe((value) => browser && (localStorage.user = value));

export const emailUser = writable(
    browser && (localStorage.getItem("emailUser") || null)
);
emailUser.subscribe((value) => browser && (localStorage.emailUser = value));

export const authenticated = writable(
    browser && (localStorage.getItem("authenticated") || false)
);
authenticated.subscribe((value) => browser && (localStorage.authenticated = value));