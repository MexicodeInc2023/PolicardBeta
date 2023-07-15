<script>
	import {
		customerAlergyextra,
		customerContactemergency,
		customerPhoneEmergency,
		customerBloodType,
		alergyextraIsError,
		contactemergencyIsError,
		phoneemergencyIsError,
		customerbloodtypeIsError
	} from './sharedState';
	import { browser } from '$app/environment';

	let showComponent = false;
	if (browser) {
		window.setTimeout(() => {
			showComponent = true;
		}, 0);
	}
</script>

<article class:show={showComponent}>
	<h3>Registro de usuario</h3>
	<p>Ingresa tus datos personales, se mostrarán en tu credencial.</p>
	<form>
		<div>
			<label for="alergyextraInput"> Alergia Extra </label>
			<input
				type="text"
				class:error={$alergyextraIsError}
				id="alergyextraInput"
				placeholder=" Ingresa otra alergia que padezcas "
				bind:value={$customerAlergyextra}
			/>
		</div>
		<div>
			<label for="contacemergencyInput"> Contacto de Emergencia <span>*</span></label>
			<input
				type="text"
				class:error={$contactemergencyIsError}
				id="contacemergencyInput"
				placeholder=" Ingresa tu contacto de emergencia "
				bind:value={$customerContactemergency}
			/>
		</div>
		<div>
			<label for="phoneemergencyInput"> Numero de Emergencia <span>*</span></label>
			<input
				type="text"
				class:error={$phoneemergencyIsError}
				id="phoneemergencyInput"
				placeholder=" Ingresa tu numero de emergencia "
				bind:value={$customerPhoneEmergency}
			/>
		</div>
		<div>
			<label for="bloodTypeInput"> Tipo de Sangre <span>*</span></label>
			<input
				type="text"
				class:error={$customerbloodtypeIsError}
				placeholder=" Ingresa tu tipo de sangre "
				bind:value={$customerBloodType}
			/>
			{#if $customerbloodtypeIsError}<span class="invalid">El tipo de sangre no es valido</span
				>{/if}
		</div>
	</form>
</article>

<style>
	span{color:red}article{transition:.3s;position:relative;right:-10rem;opacity:0}.show{opacity:1;right:0}.invalid{font-size:12px;color:red;background:transparent!important}h3{font-weight:700;font-size:24px;line-height:28px;color:#022959;margin-bottom:9px;text-align:center}p{font-size:16px;line-height:25px;color:#9699aa;margin-bottom:22px;text-align:center}form{display:flex;flex-direction:column;gap:16px;margin-top:-11px}form div{display:flex;flex-direction:column}label{font-size:12px;line-height:14px;color:#022959;margin-bottom:3px}input{width:295px;height:40px;border:1px solid #d6d9e6;border-radius:4px;background-color:#fff;padding-inline:16px;font-weight:500;font-size:15px;line-height:17px;color:#022959}input::placeholder{color:#9699aa}input:focus{outline:1px solid #483eff}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type='number']{-moz-appearance:textfield}input.error{outline:1px solid #ee374a}@media screen and (min-width: 1000px){h3{font-size:32px;line-height:37px;margin-bottom:11px;text-align:left}p{font-size:16px;line-height:25px;margin-bottom:40px;text-align:left}label{font-size:14px;line-height:16px;margin-bottom:8px}input{width:450px;height:48px;border-radius:8px;font-size:16px;line-height:25px}form{display:flex;flex-direction:column;gap:16px;margin-top:-25px}}
</style>
