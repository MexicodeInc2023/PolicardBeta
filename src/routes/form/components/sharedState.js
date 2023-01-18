import { readable, writable } from "svelte/store";

export let currentStep = writable(1);
export let planSelection = writable("arcade")
export let planPrice = readable(0)
export let monthlyIsSelected = writable(true);
export let onlineServiceAddOnIsAdded = writable(false)
export let largerStoreAddOnIsAdded = writable(false)
export let customizableProfileAddOnIsAdded = writable(false)

// STEP 1 FORM
export let customerName = writable("")
export let customerEmail = writable("")
export let customerPassword = writable("")
export let nameIsError = writable(false)
export let emailIsError = writable(false)
export let passwordIsError = writable(false)

// STEP 2 FORM
export let customerLastnames = writable("")
export let customerMatricula = writable("")
export let customerDate = writable("")
export let lastnamesIsError = writable(false)
export let matriculaIsError = writable(false)
export let dateIsError = writable(false)

// STEP 3 FORM
export let customerGroup = writable("")
export let customerCarreer = writable("")
export let customerAlergy = writable("")
export let groupIsError = writable(false)
export let carreerIsError = writable(false)
export let alergyIsError = writable(false)

// STEP 4 FORM
export let customerAlergyextra = writable("")
export let customerContactemergency = writable("")
export let customerPhoneEmergency = writable("")
export let alergyextraIsError = writable(false)
export let contactemergencyIsError = writable(false)
export let phoneemergencyIsError = writable(false)