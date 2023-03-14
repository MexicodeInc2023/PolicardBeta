<script>
	import QRCode from './components/QRJS.svelte';
	import jsPDF from 'jspdf';
	import { jwt, id, id_st } from '../../../../stores/auth';
	import { BaseUrl } from '../../../../stores/apiUrl';

	let Datos;
	let Career;
	let Emergency;
	let OnError;
	let id_user = $id;

	const urlStudent = BaseUrl + 'student/' + id_user + '/';
	let options = {
		method: 'GET'

	};

	async function getData(urlStudent, options) {
		try {
			const response = await fetch(urlStudent, options);
			const data = await response.json();
			const Datos = data.data;
			id_st.set(Datos.id);
			console.log(Datos);

			const urlCarrera = BaseUrl + 'careers/' + Datos.id_careers + '/';
			const carreraResponse = await fetch(urlCarrera, options);
			const carreraData = await carreraResponse.json();
			const Career = carreraData.data;

			const urlEmergency = BaseUrl + 'emergency_info/' + Datos.id_emInfo + '/';
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
			console.log(error);
		});
</script>

<svelte:head>
	<title>Policard-Credencial</title>
</svelte:head>
{#if OnError}
	<div class="alert alert-danger">
		<button type="button" class="close" data-dismiss="alert" aria-hidden="true"> ×</button>
		<span class="glyphicon glyphicon-hand-right" /> <strong class="h4 ">Error Insesperado</strong>
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
						<img src="https://image.ibb.co/kCYMBz/img.png" alt="Picture" />
						<h3 style="font-size: 1.4rem;">{data.Datos.personalName} {data.Datos.lastname}</h3>
					</header>
					<div class="experiences" style="text-align: center;">
						<p style="font-weight: bold; color: #7352F2">Universidad Politecnica de Tapachula</p>
						<p style="font-weight: bold; color: #18BE78">
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
					<div style="margin-left: 90px; margin-top: 5px">
						<QRCode
							codeValue="Nombre: {data.Datos.personalName} {data.Datos.lastname}|Carrera:{data
								.Career.carrera}|Matricula:{data.Datos.license}|Cuatrimestre: {data.Datos
								.grade}|Nacimiento: {data.Datos.birthday}| Contacto de Emergencia: {data.Emergency
								.emergency_name}| Numero 1: {data.Emergency.emergency_phone}| Numero extra: {data
								.Emergency.emergency_phone2}| Tipo de Sangre: {data.Emergency
								.blood_type}| Alergias: {data.Emergency.allergy} y {data.Emergency.allergy2}|"
							squareSize="200"
						/>
					</div>
					<br />
				</div>
				<div class="back">
					<header>
						<div class="bkg" />
						<img src="https://image.ibb.co/kCYMBz/img.png" alt="Picture" />
						{#if data.Emergency == null}
							<h3 style="font-size: 1.4rem;">El Estudiante no agrego los datos de emergencia</h3>
						{/if}
						<h3 style="font-size: 1.4rem;">Contactos de Emergencia</h3>
						<div class="experiences" style="text-align: center;">
							<p style="color: #1a1423 !important;">
								{data.Emergency.emergency_name}
							</p>
							<p style="color: #1a1423 !important;">
								Numero 1: {data.Emergency.emergency_phone}
							</p>
							{#if data.Emergency.emergency_phone2 != null}
								<p style="color: #1a1423 !important;">
									Numero extra: {data.Emergency.emergency_phone2}
								</p>
							{/if}
							{#if data.Emergency.blood_type != null}
								<p style="color: #1a1423 !important;">
									Tipo de sangre: {data.Emergency.blood_type}
								</p>
							{/if}
							{#if data.Emergency.allergy != null}
								<p style="color: #1a1423 !important;">
									Alergia: {data.Emergency.allergy}
								</p>
							{/if}
							{#if data.Emergency.allergy2 != null}
								<p style="color: #1a1423 !important;">
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
		margin-bottom: -115px;
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
		background-color: #f7fafa;
		backface-visibility: hidden;
		border: 1px solid #212122;
		/* display: none; */
	}

	.father .front header .bkg {
		background-color: #18be78;
		height: 80px;
		border-radius: 10px 10px 0 0;
	}
	.father .front header img {
		display: block;
		margin: -15% auto 0;
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
		background-color: blue;
		z-index: 1;
		transform: rotatey(180deg);
		background-color: #f7fafa;
		backface-visibility: hidden;
		text-align: left;
		border: 1px solid #212122;
	}
	.father .back header .bkg {
		background-color: #7352f3;
		height: 80px;
		border-radius: 10px 10px 0 0;
	}
	.father .back header img {
		display: block;
		margin: -15% auto 0;
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
