<script>
	import QRCode from './components/QRJS.svelte';
	import { id_st } from '../../../../stores/auth';
	import { BaseUrl } from '../../../../stores/apiUrl';
	import LogoPersona from '../../../../lib/img/LOGOUPTAPPED.png';

	let Datos;
	let Career;
	let Emergency;
	let OnError;
	export let data;

	const dataSession = data.session;
	console.log(dataSession);
	const urlStudent = BaseUrl + 'api/student/' + dataSession.id + '/';
	let options = {
		method: 'GET'
	};

	async function getData(urlStudent, options) {
		try {
			const response = await fetch(urlStudent, options);
			const data = await response.json();
			const Datos = data.data;
			id_st.set(Datos.id);

			const urlCarrera = BaseUrl + 'api/careers/' + Datos.id_careers + '/';
			const carreraResponse = await fetch(urlCarrera, options);
			const carreraData = await carreraResponse.json();
			const Career = carreraData.data;

			const urlEmergency = BaseUrl + 'api/emergency_info/' + Datos.id_emInfo + '/';
			const emergencyResponse = await fetch(urlEmergency, options);
			const emergencyData = await emergencyResponse.json();
			const Emergency = emergencyData.data;

			OnError = false;
			return { Datos, Career, Emergency };
		} catch (error) {
			OnError = true;
			console.error(error);
			throw error;
		}
	}

	const Datapromise = getData(urlStudent, options) // fetch the data
		.then((response) => {
			Datos = response.Datos;
			Career = response.Career;
			Emergency = response.Emergency;
			return { Datos, Career, Emergency };
		})
		.catch((error) => {
			console.error(error);
			OnError = true;
			//console.log(error);
		});
</script>

<svelte:head>
	<title>Policard-Credencial</title>
</svelte:head>
{#if OnError}
	<div class="alert alert-danger">
		<button type="button" class="close" data-dismiss="alert" aria-hidden="true"> ×</button>
		<span class="glyphicon glyphicon-hand-right" /> <strong class="h4">Error Insesperado</strong>
		<hr class="message-inner-separator" />
		<p>Intentalo más tarde</p>
	</div>
{:else}
	{#await Datapromise}
		<div class="d-flex flex-row align-items-center justify-content-center" style="height:60vh">
			<div class="spinner-grow text-success" role="status">
				<span class="sr-only" />
			</div>
			<pre />
			<div class="spinner-grow text-primary" role="status">
				<span class="sr-only" />
			</div>
			<pre />
			<div class="spinner-grow text-info" role="status">
				<span class="sr-only" />
			</div>
		</div>
	{:then data}
		<div style="text-align: center;"><h1 style="color:#1a1423 ">Credencial UPTAP</h1></div>
		<div class="m-auto">
			<button class="btn btn-primary" on:click={() => window.print()}>Imprimir</button>
		</div>
		<div class="container">
			<div class="father">
				<div class="front">
					<header>
						<div class="bkg" />
						<img
							src={LogoPersona}
							alt="Picture"
							width="90"
							height="90"
							style="border-radius: 50%;"
							loading="lazy"
							decoding="async"
						/>
						<h3 style="font-size: 1.4rem;">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-mortarboard"
								viewBox="0 0 16 16"
							>
								<path
									d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"
								/>
								<path
									d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"
								/>
							</svg>
							{data.Datos.personalName}
							{data.Datos.lastname}
						</h3>
					</header>
					<div class="experiences" style="text-align: center;">
						<p style="font-weight: bold; color: #7352F2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-buildings"
								viewBox="0 0 16 16"
							>
								<path
									d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"
								/>
								<path
									d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"
								/>
							</svg>
							Universidad Politecnica de Tapachula
						</p>
						<p style="font-weight: bold; color: #18BE78">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-code-slash"
								viewBox="0 0 16 16"
							>
								<path
									d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
								/>
							</svg>
							{data.Career.nameCareers}
						</p>
						<p style="color: #1a1423 !important;">
							Matricula: {data.Datos.license}
						</p>
						<p style="color: #1a1423 !important;">
							Cuatrimestre: <span class="text-uppercase"> {data.Datos.grade}</span>
						</p>
						<p style="color: #1a1423 !important;">
							Nacimiento: {data.Datos.birthday}
						</p>
					</div>
					<div style="margin-left: 100px;">
						<QRCode
							codeValue="Nombre: {data.Datos.personalName} {data.Datos.lastname}|Carrera:{data
								.Career.nameCareers}|Matricula:{data.Datos.license}|Cuatrimestre: {data.Datos
								.grade}|Nacimiento: {data.Datos.birthday}| Contacto de Emergencia: {data.Emergency
								.emergency_name}| Numero 1: {data.Emergency.emergency_phone}| Numero extra: {data
								.Emergency.emergency_phone2}| Tipo de Sangre: {data.Emergency
								.blood_type}| Alergias: {data.Emergency.allergy} y {data.Emergency.allergy2}|"
						/>
					</div>
					<br />
				</div>
				<div class="back">
					<header>
						<div class="bkg" />
						<img
							src={LogoPersona}
							alt="Picture"
							width="90"
							height="90"
							style="border-radius: 50%;"
							loading="lazy"
							decoding="async"
						/>
						{#if data.Emergency == null}
							<h3 style="font-size: 1.4rem;">El Estudiante no agrego los datos de emergencia</h3>
						{/if}
						<h3 style="font-size: 1.4rem;">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								class="bi bi-hospital"
								viewBox="0 0 16 16"
							>
								<path
									d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z"
								/>
								<path
									d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z"
								/>
							</svg>
							Contactos de Emergencia
						</h3>
						<div class="experiences" style="text-align: center;">
							<p style="color: #1a1423 !important;">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-person-exclamation"
									viewBox="0 0 16 16"
								>
									<path
										d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
									/>
									<path
										d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5Zm0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
									/>
								</svg>
								{data.Emergency.emergency_name}
							</p>
							<p style="color: #1a1423 !important;">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-telephone"
									viewBox="0 0 16 16"
								>
									<path
										d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
									/>
								</svg>
								{data.Emergency.emergency_phone}
								{data.Emergency.emergency_phone2}
							</p>

							<!-- {#if data.Emergency.emergency_phone2 != null}
								<p style="color: #1a1423 !important;">
									Numero extra: 
								</p>
							{/if} -->

							{#if data.Emergency.blood_type != null}
								<p style="color: #1a1423 !important;">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="currentColor"
										class="bi bi-moisture"
										viewBox="0 0 16 16"
									>
										<path
											d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"
										/>
									</svg>
									Tipo de sangre: {data.Emergency.blood_type}
								</p>
							{/if}
							{#if data.Emergency.allergy != null}
								<p style="color: #1a1423 !important;">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="currentColor"
										class="bi bi-lungs"
										viewBox="0 0 16 16"
									>
										<path
											d="M8.5 1.5a.5.5 0 1 0-1 0v5.243L7 7.1V4.72C7 3.77 6.23 3 5.28 3c-.524 0-1.023.27-1.443.592-.431.332-.847.773-1.216 1.229-.736.908-1.347 1.946-1.58 2.48-.176.405-.393 1.16-.556 2.011-.165.857-.283 1.857-.241 2.759.04.867.233 1.79.838 2.33.67.6 1.622.556 2.741-.004l1.795-.897A2.5 2.5 0 0 0 7 11.264V10.5a.5.5 0 0 0-1 0v.764a1.5 1.5 0 0 1-.83 1.342l-1.794.897c-.978.489-1.415.343-1.628.152-.28-.25-.467-.801-.505-1.63-.037-.795.068-1.71.224-2.525.157-.82.357-1.491.491-1.8.19-.438.75-1.4 1.44-2.25.342-.422.703-.799 1.049-1.065.358-.276.639-.385.833-.385a.72.72 0 0 1 .72.72v3.094l-1.79 1.28a.5.5 0 0 0 .58.813L8 7.614l3.21 2.293a.5.5 0 1 0 .58-.814L10 7.814V4.72a.72.72 0 0 1 .72-.72c.194 0 .475.11.833.385.346.266.706.643 1.05 1.066.688.85 1.248 1.811 1.439 2.249.134.309.334.98.491 1.8.156.814.26 1.73.224 2.525-.038.829-.224 1.38-.505 1.63-.213.19-.65.337-1.628-.152l-1.795-.897A1.5 1.5 0 0 1 10 11.264V10.5a.5.5 0 0 0-1 0v.764a2.5 2.5 0 0 0 1.382 2.236l1.795.897c1.12.56 2.07.603 2.741.004.605-.54.798-1.463.838-2.33.042-.902-.076-1.902-.24-2.759-.164-.852-.38-1.606-.558-2.012-.232-.533-.843-1.571-1.579-2.479-.37-.456-.785-.897-1.216-1.229C11.743 3.27 11.244 3 10.72 3 9.77 3 9 3.77 9 4.72V7.1l-.5-.357V1.5Z"
										/>
									</svg>
									Alergia: {data.Emergency.allergy}
								</p>
							{/if}
							{#if data.Emergency.allergy2 != null}
								<p style="color: #1a1423 !important;">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="currentColor"
										class="bi bi-lungs"
										viewBox="0 0 16 16"
									>
										<path
											d="M8.5 1.5a.5.5 0 1 0-1 0v5.243L7 7.1V4.72C7 3.77 6.23 3 5.28 3c-.524 0-1.023.27-1.443.592-.431.332-.847.773-1.216 1.229-.736.908-1.347 1.946-1.58 2.48-.176.405-.393 1.16-.556 2.011-.165.857-.283 1.857-.241 2.759.04.867.233 1.79.838 2.33.67.6 1.622.556 2.741-.004l1.795-.897A2.5 2.5 0 0 0 7 11.264V10.5a.5.5 0 0 0-1 0v.764a1.5 1.5 0 0 1-.83 1.342l-1.794.897c-.978.489-1.415.343-1.628.152-.28-.25-.467-.801-.505-1.63-.037-.795.068-1.71.224-2.525.157-.82.357-1.491.491-1.8.19-.438.75-1.4 1.44-2.25.342-.422.703-.799 1.049-1.065.358-.276.639-.385.833-.385a.72.72 0 0 1 .72.72v3.094l-1.79 1.28a.5.5 0 0 0 .58.813L8 7.614l3.21 2.293a.5.5 0 1 0 .58-.814L10 7.814V4.72a.72.72 0 0 1 .72-.72c.194 0 .475.11.833.385.346.266.706.643 1.05 1.066.688.85 1.248 1.811 1.439 2.249.134.309.334.98.491 1.8.156.814.26 1.73.224 2.525-.038.829-.224 1.38-.505 1.63-.213.19-.65.337-1.628-.152l-1.795-.897A1.5 1.5 0 0 1 10 11.264V10.5a.5.5 0 0 0-1 0v.764a2.5 2.5 0 0 0 1.382 2.236l1.795.897c1.12.56 2.07.603 2.741.004.605-.54.798-1.463.838-2.33.042-.902-.076-1.902-.24-2.759-.164-.852-.38-1.606-.558-2.012-.232-.533-.843-1.571-1.579-2.479-.37-.456-.785-.897-1.216-1.229C11.743 3.27 11.244 3 10.72 3 9.77 3 9 3.77 9 4.72V7.1l-.5-.357V1.5Z"
										/>
									</svg>
									Alergia extra: {data.Emergency.allergy2}
								</p>
							{/if}
						</div>
					</header>
				</div>
			</div>
		</div>
	{:catch error}
		<div class="card text-white bg-danger" style="max-width: 18rem; margin-top: 3rem;">
			<div class="card-header">Error Insesperado {error}</div>
			<div class="card-body">
				<h4 class="card-title">Intente de nuevo</h4>
			</div>
		</div>
	{/await}
{/if}

<style>
	h3 {
		margin-top: 10px;
		padding: 2px;
	}
	p {
		font-size: 1.3rem;
		margin: 20px;
	}
	.container {
		background-size: cover;
		border-radius: 5px;
		perspective: 1000px;
		height: 100vh;
		margin-bottom: -110px;
	}
	.father {
		text-align: center;
		width: 400px;
		height: 690px;
		margin: auto;
		top: 5%;
		position: relative;
		transition: all 1s ease-in-out;
		transform-style: preserve-3d;
	}
	.father:hover {
		transform: rotatey(180deg);
	}
	.father > div {
		position: absolute;
		top: 0;
		left: 0;
		text-align: center;
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
	.father .front {
		z-index: 2;
		background-image: url(../../../../lib/img/god5.jpg);
		backface-visibility: hidden;
		border: 1px solid #212122;
		/* display: none; */
	}

	.father .front header img {
		display: block;
		margin: 5% auto 0;
	}
	.father .front header h3 {
		font-size: 18px;
		color: #0f2105;
		margin-top: 10px;
	}

	.father .front .experience h3:first-of-type {
		font-size: 16px;
		padding: 6px 6px;
		background-color: #00a0ff;
		color: #f7fafa;
		font-weight: 700;
		border-radius: 5px;
		width: 23%;
		margin-bottom: 10px;
	}
	.father .front .experience h3:nth-of-type(2) {
		color: #0f2105;
		margin-top: 0;
		margin-bottom: 10px;
		font-size: 16px;
	}
	.father .front .experience p {
		line-height: 5px;
		font-size: 12px;
		font-weight: 400;
	}

	.father .front .skills .grid-3 h3 {
		color: #0f2105;
		margin-top: 0;
		margin-top: 5px;
		margin-bottom: 10px;
		font-size: 16px;
	}
	.father .front .skills .grid-3 p {
		line-height: 5px;
		font-size: 12px;
		font-weight: 400;
	}

	.father .back {
		z-index: 1;
		transform: rotatey(180deg);
		background-image: url(../../../../lib/img/god5.jpg);
		backface-visibility: hidden;
		text-align: left;
		border: 1px solid #212122;
	}

	.father .back header img {
		display: block;
		margin: 5% auto 0;
	}
	.father .back header h3 {
		font-size: 18px;
		color: #0f2105;
		margin-top: 10px;
		text-align: center;
	}

	.father .back .social h3 {
		margin: 10px 0 5px;
		font-size: 16px;
	}
	.father .back .social h3::first-letter {
		color: #f7fafa;
		padding: 2px 7px;
		border-radius: 3px;
		margin-right: 2px;
	}

	hr.message-inner-separator {
		clear: both;
		margin-top: 10px;
		margin-bottom: 13px;
		border: 0;
		height: 1px;
		background-image: -webkit-linear-gradient(
			left,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.15),
			rgba(0, 0, 0, 0)
		);
		background-image: -moz-linear-gradient(
			left,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.15),
			rgba(0, 0, 0, 0)
		);
		background-image: -ms-linear-gradient(
			left,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.15),
			rgba(0, 0, 0, 0)
		);
		background-image: -o-linear-gradient(
			left,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.15),
			rgba(0, 0, 0, 0)
		);
	}

	.close {
		position: absolute;
		top: 0;
		right: 0;
		padding: 10px;
		font-size: 20px;
		cursor: pointer;
		background-color: transparent;
		border: none;
	}
	@media print {
		button {
			display: none;
		}
	}
</style>
