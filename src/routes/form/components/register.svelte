<script>
	import Step1 from './Step1.svelte';
	import Step2 from './Step2.svelte';
	import Step3 from './Step3.svelte';
	import Step4 from './Step4.svelte';
	import Step5 from './Step5.svelte';
	import PurchaseComplete from './PurchaseComplete.svelte';
	import { userSchema, personalSchema, groupSchema, emergencySchema } from './validateSchemas.js';
	import { superValidate } from 'sveltekit-superforms/server';
	import {
		currentStep,
		customerEmail,
		customerUserName,
		customerPassword,
		emailIsError,
		usernameIsError,
		passwordIsError
	} from './sharedState';
	import {
		customerPersonalname,
		customerLastnames,
		customerMatricula,
		customerDate,
		personalnameIsError,
		lastnamesIsError,
		matriculaIsError,
		dateIsError
	} from './sharedState';
	import {
		customerGroup,
		customerCarreer,
		customerAlergy,
		groupIsError,
		carreerIsError,
		alergyIsError
	} from './sharedState';
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

	$: userData = {
		username: $customerUserName,
		email: $customerEmail,
		password: $customerPassword
	};

	$: personalData = {
		personalname: $customerPersonalname,
		lastnames: $customerLastnames,
		matricula: String($customerMatricula),
		date: $customerDate
	};

	$: groupData = {
		group: $customerGroup,
		carreer: $customerCarreer,
		alergy: $customerAlergy
	};

	$: emergencyData = {
		alergyextra: $customerAlergyextra,
		contactemergency: $customerContactemergency,
		phoneEmergency: $customerPhoneEmergency,
		bloodType: $customerBloodType
	};

	const validate = async (data, schema) => {
		const form = await superValidate(data, schema);
		console.log(form);
		if (!form.valid) {
			console.log(form.errors);
			return form;
		}
		return form;
	};

	function nextStep() {
		if ($currentStep === 1) {
			validate(userData, userSchema).then((form) => {
				form.errors.username ? ($usernameIsError = true) : ($usernameIsError = false);
				form.errors.email ? ($emailIsError = true) : ($emailIsError = false);
				form.errors.password ? ($passwordIsError = true) : ($passwordIsError = false);
				if (form.valid) {
					$currentStep++;
				}
			});
		}
		if ($currentStep === 2) {
			validate(personalData, personalSchema).then((form) => {
				form.errors.personalname ? ($personalnameIsError = true) : ($personalnameIsError = false);
				form.errors.lastnames ? ($lastnamesIsError = true) : ($lastnamesIsError = false);
				form.errors.matricula ? ($matriculaIsError = true) : ($matriculaIsError = false);
				form.errors.date ? ($dateIsError = true) : ($dateIsError = false);
				if (form.valid) {
					$currentStep++;
				}
			});
		}
		if ($currentStep === 3) {
			validate(groupData, groupSchema).then((form) => {
				form.errors.group ? ($groupIsError = true) : ($groupIsError = false);
				form.errors.carreer ? ($carreerIsError = true) : ($carreerIsError = false);
				form.errors.alergy ? ($alergyIsError = true) : ($alergyIsError = false);
				if (form.valid) {
					$currentStep++;
				}
			});
		}
		if ($currentStep === 4) {
			validate(emergencyData, emergencySchema).then((form) => {
				form.errors.alergyextra ? ($alergyextraIsError = true) : ($alergyextraIsError = false);
				form.errors.contactemergency
					? ($contactemergencyIsError = true)
					: ($contactemergencyIsError = false);
				form.errors.phoneEmergency
					? ($phoneemergencyIsError = true)
					: ($phoneemergencyIsError = false);
				form.errors.bloodType
					? ($customerbloodtypeIsError = true)
					: ($customerbloodtypeIsError = false);
				if (form.valid) {
					$currentStep++;
				}
			});
		}
	}
	const register = import('../register.js');
	async function handleClick() {
		//console.log('click');

		(await register).sendRegisterData().catch((err) => {
			console.log(err);
			alert('Error al enviar los datos, por favor intenta de nuevo');
			return;
		});
		$currentStep++;
	}
</script>

<main>
	<aside>
		<div class="overAllStep">
			<div class="stepContainer">
				<button class="stepButton" class:selected={$currentStep === 1}>1</button>
				<div class="stepText">
					<p>Paso 1</p>
					<b> Registro de usuario </b>
				</div>
			</div>
			<div class="stepContainer">
				<button class="stepButton" class:selected={$currentStep === 2}>2</button>
				<div class="stepText">
					<p>Paso 2</p>
					<b> Nombre y datos </b>
				</div>
			</div>
			<div class="stepContainer">
				<button class="stepButton" class:selected={$currentStep === 3}>3</button>
				<div class="stepText">
					<p>Paso 3</p>
					<b> Datos escolares </b>
				</div>
			</div>
			<div class="stepContainer">
				<button class="stepButton" class:selected={$currentStep === 4}>4</button>
				<div class="stepText">
					<p>Paso 4</p>
					<b> Datos de emergencia </b>
				</div>
			</div>
			<div class="stepContainer">
				<button class="stepButton" class:selected={$currentStep >= 5}>5</button>
				<div class="stepText">
					<p>Paso 5</p>
					<b> Sube tu fotografia </b>
				</div>
			</div>
		</div>
	</aside>
	<div class="formContainer">
		{#if $currentStep === 1}
			<Step1 />
		{:else if $currentStep === 2}
			<Step2 />
		{:else if $currentStep === 3}
			<Step3 />
		{:else if $currentStep === 4}
			<Step4 />
		{:else if $currentStep === 5}
			<Step5 />
		{:else if $currentStep === 6}
			<PurchaseComplete />
		{/if}
	</div>
	<div class="footer">
		<button
			class="previousButton"
			on:click={() => {
				$currentStep--;
			}}
			class:show={$currentStep > 1 && $currentStep < 6}
		>
			<div class="arrow-wrapperr">
				<div class="arrow back" />
			</div>
			Regresar
		</button>
		{#if $currentStep < 5}
			<button class="nextButton" on:click={nextStep}>
				Siguiente
				<div class="arrow-wrapper">
					<div class="arrow" />
				</div>
			</button>
		{:else if $currentStep === 5}
			<button
				class="nextButton confirm"
				on:click={() => {
					handleClick();
				}}
			>
				Confirmar
			</button>
		{/if}
	</div>
</main>

<style>
	/* MOBILE FIRST APPROACH */
	main {
		position: relative;
		height: 100vh;
		margin-top: -730px;
	}

	aside {
		height: 172px;
		background-repeat: no-repeat;
		background-size: cover;
		background-image: url(../../../lib/img/bg-sidebar-mobile.svg);
		position: relative;
		display: flex;
		justify-content: center;
	}

	.overAllStep {
		display: flex;
		gap: 16px;
	}

	.stepText b,
	.stepText p {
		display: none;
	}

	.stepButton {
		margin-top: 30px;
		width: 33px;
		height: 33px;
		border-radius: 50%;
		border: 1px solid white;
		background-color: transparent;
		color: white;
		font-weight: 700;
		font-size: 14px;
		line-height: 16px;
		transition: 0.25s;
		z-index: 10;
	}

	.stepButton.selected {
		border: 1px solid #bee2fd;
		background-color: #bee2fd;
		color: #022959;
	}

	.formContainer {
		padding: 32px 24px;
		width: 343px;
		height: max-content;
		background-color: white;
		box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
		border-radius: 10px;
		position: absolute;
		top: 99px;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
	}

	.footer {
		height: 72px;
		width: 100%;
		background-color: white;
		position: relative;
		margin-top: 350px;
		padding: 16px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nextButton {
		--primary-color: #645bff;
		--secondary-color: #fff;
		--hover-color: #111;
		--arrow-width: 10px;
		--arrow-stroke: 2px;
		box-sizing: border-box;
		border: 0;
		border-radius: 20px;
		color: var(--secondary-color);
		padding: 1em 1.8em;
		background: var(--primary-color);
		display: flex;
		transition: 0.2s background;
		align-items: center;
		gap: 0.6em;
		font-weight: bold;
		z-index: 10;
	}

	.nextButton .arrow-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nextButton .arrow {
		margin-top: 1px;
		width: var(--arrow-width);
		background: var(--primary-color);
		height: var(--arrow-stroke);
		position: relative;
		transition: 0.2s;
	}

	.nextButton .arrow::before {
		content: '';
		box-sizing: border-box;
		position: absolute;
		border: solid var(--secondary-color);
		border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
		display: inline-block;
		top: -3px;
		right: 3px;
		transition: 0.2s;
		padding: 3px;
		transform: rotate(-45deg);
	}

	.nextButton:hover {
		background-color: var(--hover-color);
	}

	.nextButton:hover .arrow {
		background: var(--secondary-color);
	}

	.nextButton:hover .arrow:before {
		right: 0;
	}

	.previousButton {
		--primary-color: #645bff;
		--secondary-color: #fff;
		--hover-color: #111;
		--arrow-width: 10px;
		--arrow-stroke: 2px;
		box-sizing: border-box;
		border: 0;
		border-radius: 20px;
		color: var(--secondary-color);
		padding: 1em 1.8em;
		background: var(--primary-color);
		display: flex;
		transition: 0.2s background;
		align-items: center;
		gap: 0.6em;
		font-weight: bold;
	}

	.previousButton .arrow-wrapperr {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.previousButton .back {
		margin-top: 1px;
		width: var(--arrow-width);
		background: var(--primary-color);
		height: var(--arrow-stroke);
		position: relative;
		transition: 0.2s;
	}

	.previousButton .back::before {
		content: '';
		box-sizing: border-box;
		position: absolute;
		border: solid var(--secondary-color);
		border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
		display: inline-block;
		top: -3px;
		left: 3px;
		transition: 0.2s;
		padding: 3px;
		transform: rotate(135deg);
	}

	.previousButton:hover {
		background-color: var(--hover-color);
	}

	.previousButton:hover .back {
		background: var(--secondary-color);
	}

	.previousButton:hover .back:before {
		left: 0;
	}
	.previousButton {
		visibility: hidden;
	}

	.previousButton.show {
		visibility: visible;
	}

	@media screen and (min-width: 1000px) {
		main {
			width: 880px;
			height: 600px;
			background-color: white;
			box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
			border-radius: 15px;
			display: flex;
			padding: 16px;
		}

		aside {
			min-width: 274px;
			min-height: 568px;
			background-image: url(../../../lib/img/bg-sidebar-desktop.svg);
			border-radius: 10px;
			justify-content: initial;
			padding-left: 32px;
			padding-top: 40px;
		}

		.overAllStep {
			flex-direction: column;
			gap: 32px;
		}

		.stepContainer {
			display: flex;
			gap: 16px;
			align-items: center;
		}

		.stepContainer b,
		.stepContainer p {
			display: block;
			text-transform: uppercase;
		}

		.stepContainer p {
			font-weight: 400;
			font-size: 12px;
			line-height: 14px;
			color: #abbcff;
		}

		.stepContainer b {
			font-weight: 700;
			font-size: 14px;
			line-height: 16px;
			letter-spacing: 1px;
			color: white;
		}

		.stepText {
			display: flex;
			flex-direction: column;
			gap: 4px;
		}

		.formContainer {
			width: 450px;
			margin-left: 100px;
			margin-right: 100px;
			margin-top: 56px;
			top: initial;
			right: 0;
			left: initial;
			box-shadow: initial;
			padding: 0;
		}

		.footer {
			position: initial;
			margin-top: auto;
			margin-left: 100px;
			margin-bottom: 16px;
			padding: initial;
			width: 450px;
			height: 48px;
		}

		.nextButton {
			--primary-color: #645bff;
			--secondary-color: #fff;
			--hover-color: #111;
			--arrow-width: 10px;
			--arrow-stroke: 2px;
			box-sizing: border-box;
			border: 0;
			border-radius: 20px;
			color: var(--secondary-color);
			padding: 1em 1.8em;
			background: var(--primary-color);
			display: flex;
			transition: 0.2s background;
			align-items: center;
			gap: 0.6em;
			font-weight: bold;
		}

		.nextButton .arrow-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.nextButton .arrow {
			margin-top: 1px;
			width: var(--arrow-width);
			background: var(--primary-color);
			height: var(--arrow-stroke);
			position: relative;
			transition: 0.2s;
		}

		.nextButton .arrow::before {
			content: '';
			box-sizing: border-box;
			position: absolute;
			border: solid var(--secondary-color);
			border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
			display: inline-block;
			top: -3px;
			right: 3px;
			transition: 0.2s;
			padding: 3px;
			transform: rotate(-45deg);
		}

		.nextButton:hover {
			background-color: var(--hover-color);
		}

		.nextButton:hover .arrow {
			background: var(--secondary-color);
		}

		.nextButton:hover .arrow:before {
			right: 0;
		}

		.previousButton {
			--primary-color: #645bff;
			--secondary-color: #fff;
			--hover-color: #111;
			--arrow-width: 10px;
			--arrow-stroke: 2px;
			box-sizing: border-box;
			border: 0;
			border-radius: 20px;
			color: var(--secondary-color);
			padding: 1em 1.8em;
			background: var(--primary-color);
			display: flex;
			transition: 0.2s background;
			align-items: center;
			gap: 0.6em;
			font-weight: bold;
			margin-left: -45px;
		}

		.previousButton .arrow-wrapperr {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.previousButton .back {
			margin-top: 1px;
			width: var(--arrow-width);
			background: var(--primary-color);
			height: var(--arrow-stroke);
			position: relative;
			transition: 0.2s;
		}

		.previousButton .back::before {
			content: '';
			box-sizing: border-box;
			position: absolute;
			border: solid var(--secondary-color);
			border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
			display: inline-block;
			top: -3px;
			left: 3px;
			transition: 0.2s;
			padding: 3px;
			transform: rotate(135deg);
		}

		.previousButton:hover {
			background-color: var(--hover-color);
		}

		.previousButton:hover .back {
			background: var(--secondary-color);
		}

		.previousButton:hover .back:before {
			left: 0;
		}
	}
</style>
