<script>
	import QRCode from './components/QRJS.svelte';
	let Datos = [];
	let OnError;
	// usen una api fake para ver como funciona, no usen la url de abajo porque solo tengo 500 peticiones al mes y ya como por la 400
	const url = 'http://localhost:3001/Policard'; //https://api.steinhq.com/v1/storages/6338ad24eced9b09e99d7c7f/creden

	const options = { method: 'GET' };
	const Datapromise = fetch(url, options) // fetch the data
		.then((response) => response.json())
		.then((data) => {
			return (Datos = data[0]); // return the data
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
	<div class="card text-white bg-danger  " style="max-width: 18rem; margin-top: 3rem;">
		<div class="card-header">Error Insesperado</div>
		<div class="card-body">
			<h4 class="card-title">Intente de nuevo</h4>
		</div>
	</div>
{:else if Datos.length === 0}
	<div class="progress">
		<div
			class="progress-bar progress-bar-striped bg-success"
			role="progressbar"
			style="width: 25%;"
			aria-valuenow="25"
			aria-valuemin="0"
			aria-valuemax="100"
		/>
		<p style="font-weight: bold; color: #04B404">Cargando Card</p>
	</div>
{:else}
	{#await Datapromise then Data}
		<div style="text-align: center;"><h1 style="color:#1a1423">Credencial UPTAP</h1></div>
		<div class="m-auto">
			<button class="btn btn-primary" on:click={() => window.print()}>Imprimir</button>
		</div>
		<div class="container">
			<div class="father">
				<div class="front">
					<header>
						<div class="bkg" />
						<img src="https://image.ibb.co/kCYMBz/img.png" alt="Picture" />
						<h3 style="font-size: 1.4rem;">{Data.nombre} {Data.apellidos}</h3>
					</header>
					<div class="experiences" style="text-align: center;">
						<p style="font-weight: bold; color: #7352F2">Universidad Politecnica de Tapachula</p>
						<p style="font-weight: bold; color: #18BE78">
							{Data.carrera}
						</p>
						<p style="color: #1a1423 !important;">
							Matricula: {Data.matricula}
						</p>
					</div>
					<div style="margin-left: 90px;">
						<QRCode
							codeValue="Nombre: {Data.nombre} {Data.apellidos}|Carrera:{Data.carrera}|Matricula:{Data.matricula}|Cuatrimestre: {Data.cuatrimestre} "
							squareSize="200"
						/>
					</div>
				</div>
				<div class="back">
					<header>
						<div class="bkg" />
						<img src="https://image.ibb.co/kCYMBz/img.png" alt="Picture" />
						<h3 style="font-size: 1.4rem;">{Data.cuatrimestre}°{Data.grupo}</h3>
					</header>
					<div class="experiences" style="text-align: center;">
						<p style="color: #1a1423 !important;">
							Alergia: {Data.alergia}
						</p>
						<p style="color: #1a1423 ;">
							Alergia extra: {Data.alergia_extra}
						</p>
						<p style="color: #1a1423 ;">
							Contacto de emergencia: {Data.contacto_de_emergencia}
						</p>
						<p style="color: #1a1423 ;">
							Numero de emergencia: {Data.numero_de_emergencia}
						</p>
					</div>
				</div>
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
	}
	.father {
		text-align: center;
		width: 400px;
		height: 620px;
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
		background-color: #18BE78;
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
		background-color: #7352F3;
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
</style>
