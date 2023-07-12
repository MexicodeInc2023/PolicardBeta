<script>
	import {
		customerGroup,
		customerCarreer,
		customerAlergy,
		groupIsError,
		carreerIsError,
		alergyIsError
	} from './sharedState';

	$: if ($customerGroup !== '') {
		$groupIsError = false;
	}
	$: if ($customerCarreer !== '') {
		$carreerIsError = false;
	}
	$: if ($customerAlergy !== '') {
		$alergyIsError = false;
	}

	function handleCarreerChange(event) {
		const value = parseInt(event.target.value);
		customerCarreer.set(value);
	}

	let showComponent = false;
	window.setTimeout(() => {
		showComponent = true;
	}, 0);
</script>

<article class:show={showComponent}>
	<h3>Registro de usuario</h3>
	<p>Ingresa tus datos personales, se mostrarán en tu credencial.</p>
	<form>
		<div>
			<label for="groupInput"> Grupo </label>
			<select
				class="form-select group"
				class:error={$groupIsError}
				id="groupInput"
				bind:value={$customerGroup}
			>
			    <option value="1a">1A</option>
				<option value="1b">1B</option>
				<option value="2a">2A</option>
				<option value="2b">2B</option>
				<option value="3a">3A</option>
				<option value="3b">3B</option>
				<option value="4a">4A</option>
				<option value="4b">4B</option>
				<option value="5a">5A</option>
				<option value="5b">5B</option>
				<option value="6a">6A</option>
				<option value="6b">6B</option>
				<option value="7a">7A</option>
				<option value="7b">7B</option>
				<option value="8a">8A</option>
				<option value="8b">8B</option>
				<option value="9a">9A</option>
				<option value="9b">9B</option>
			</select>
		</div>
		<div>
			<label for="carreerInput"> Carreras </label>
			<select
				class="form-select group"
				class:error={$carreerIsError}
				id="carreerInput"
				on:change={handleCarreerChange}
				bind:value={$customerCarreer}
			>
				<option value="1">Ingeniería en Software</option>
				<option value="2"> Ingeniería en Tecnología Ambiental</option>
				<option value="3"> Ingeniería Financiera</option>
				<option value="4"> Ingeniería Mecatrónica</option>
				<option value="5"> Ingeniería Logística y Transporte</option>
				<option value="6"> Ingeniería Financiera</option>
				<option value="7"> Ingeniería en Sistemas Automotrices</option>
				<option value="8"> Ingeniería en Animación y Efectos Visuales</option>
				<option value="9"> Ingeniería Agroindustrial</option>
				<option value="10"> Ingeniería en Energía</option>
			</select>
		</div>
		<div>
			<label for="alergyInput"> Alergia </label>
			<input
				type="text"
				class:error={$alergyIsError}
				id="alergyInput"
				placeholder=" Ingresa alguna alergia que padeces "
				bind:value={$customerAlergy}
			/>
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

	.group {
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
	}
</style>
