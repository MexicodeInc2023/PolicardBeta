<script>
	import {
		customerEmail,
		customerUserName,
		customerPassword,
		emailIsError,
		usernameIsError,
		passwordIsError
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
	<p>
		Ingresa tus datos personales, estos se mostraran en la credencial. Por favor, durante el proceso
		<b>no recargues la pagina</b>
	</p>
	<form>
		<div>
			<label for="nameInput"> Usuario </label>
			<input
				type="text"
				class:error={$usernameIsError}
				id="nameInput"
				placeholder=" Ingresa tu usuario "
				bind:value={$customerUserName}
				required
			/>
			{#if $usernameIsError}<span class="invalid">El usuario debe tener al menos 3 caracteres</span
				>{/if}
		</div>
		<div>
			<label for="emailInput"> Correo Institucional </label>
			<input
				type="Email"
				class:error={$emailIsError}
				id="emailInput"
				placeholder=" Ingresa tu correo institucional "
				bind:value={$customerEmail}
			/>
			{#if $emailIsError}<span class="invalid">El correo debe ser el institucional</span>{/if}
		</div>
		<div>
			<label for="passwordInput"> Contraseña </label>
			<input
				type="password"
				class:error={$passwordIsError}
				id="passwordInput"
				placeholder=" Ingresa tu contraseña "
				bind:value={$customerPassword}
			/>
			{#if $passwordIsError}<span class="invalid">La contraseña debe ser al menos de 6 digitos</span
				>{/if}
		</div>
	</form>
</article>

<style>
	article {
		transition: 0.3s;
		position: relative;
		right: -10rem;
		opacity: 0;
	}
	.show {
		opacity: 1;
		right: 0;
	}
	.invalid {
		font-size: 12px;
		color: red;
		background: transparent !important;
	}
	h3 {
		font-weight: 700;
		font-size: 24px;
		line-height: 28px;
		color: #022959;
		margin-bottom: 9px;
		text-align: center;
	}

	p {
		font-size: 16px;
		line-height: 25px;
		color: #9699aa;
		margin-bottom: 22px;
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	form div {
		display: flex;
		flex-direction: column;
	}

	label {
		font-size: 12px;
		line-height: 14px;
		color: #022959;
		margin-bottom: 3px;
	}

	input {
		width: 295px;
		height: 40px;
		border: 1px solid #d6d9e6;
		border-radius: 4px;
		background-color: white;
		padding-inline: 16px;
		font-weight: 500;
		font-size: 15px;
		line-height: 17px;
		color: #022959;
	}

	input::placeholder {
		color: #9699aa;
	}

	input:focus {
		outline: 1px solid #483eff;
	}

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input.error {
		outline: 1px solid #ee374a;
	}

	@media screen and (min-width: 1000px) {
		h3 {
			font-size: 32px;
			line-height: 37px;
			margin-bottom: 11px;
			text-align: left;
		}

		p {
			font-size: 16px;
			line-height: 25px;
			margin-bottom: 40px;
			text-align: left;
		}

		label {
			font-size: 14px;
			line-height: 16px;
			margin-bottom: 8px;
		}

		input {
			width: 450px;
			height: 48px;
			border-radius: 8px;
			font-size: 16px;
			line-height: 25px;
		}
	}
</style>
