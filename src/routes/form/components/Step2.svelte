<script>
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
	import { browser } from '$app/environment';

	$: if ($customerPersonalname !== '') {
		$personalnameIsError = false;
	}

	$: if ($customerLastnames !== '') {
		$lastnamesIsError = false;
	}
	$: if ($customerMatricula !== '') {
		$matriculaIsError = false;
	}
	$: if ($customerDate !== '') {
		$dateIsError = false;
	}

	let showComponent = false;
	if (browser) {
		window.setTimeout(() => {
			showComponent = true;
		}, 0);
	}
</script>

<article class:show={showComponent}>
	<h3>Registro de usuario</h3>
	<p>Ingresa tus datos personales, se mostrarán en tu credencial</p>
	<form>
		<div>
			<label for="personalnameInput"> Nombre(s) </label>
			<input
				type="text"
				class:error={$personalnameIsError}
				id="lastnames"
				placeholder=" Ingresa tus apellidos "
				bind:value={$customerPersonalname}
			/>
		</div>
		<div>
			<label for="lastnamesInput"> Apellido(s) </label>
			<input
				type="text"
				class:error={$lastnamesIsError}
				id="lastnames"
				placeholder=" Ingresa tus apellidos "
				bind:value={$customerLastnames}
			/>
		</div>
		<div>
			<label for="matriculaInput"> Matricula </label>
			<input
				type="number"
				class:error={$matriculaIsError}
				id="matriculaInput"
				placeholder=" Ingresa tu matricula escolar "
				bind:value={$customerMatricula}
			/>
		</div>
		<div>
			<label for="dateInput"> Fecha de nacimiento </label>
			<input type="date" class:error={$dateIsError} id="dateInput" bind:value={$customerDate} />
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
		margin-top: -11px;
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

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
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
		form {
			display: flex;
			flex-direction: column;
			gap: 16px;
			margin-top: -25px;
		}
	}
</style>
