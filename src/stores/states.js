import { writable } from "svelte/store";
import { browser } from "$app/environment"

export const id_rq = writable(browser && (localStorage.getItem("id_rq") || null));
id_rq.subscribe((value) => browser && (localStorage.id_rq = value));


export const statusCredentials = writable(
    browser && (localStorage.getItem("statusCredentials") || 1)
);
statusCredentials.subscribe((value) => browser && (localStorage.statusCredentials = value));

export const statusProcedures = writable(
    browser && (localStorage.getItem("statusProcedures") || "")
);
statusProcedures.subscribe((value) => browser && (localStorage.statusProcedures = value));

export const procedureTrue = writable(browser && (localStorage.getItem("procedureTrue") || false));
procedureTrue.subscribe((value) => browser && (localStorage.procedureTrue = value));

export const count = writable(0);
/* export const statusCredentials = writable(1); */



export const loading = writable(false);