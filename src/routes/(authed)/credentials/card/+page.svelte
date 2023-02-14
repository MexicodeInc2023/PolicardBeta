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
	<div class="card text-white bg-danger " style="max-width: 18rem; margin-top: 3rem;">
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

		<div class="container">
			<div class="father">
				<div class="front">
					<header>
						<div class="bkg" />
						<img src="https://image.ibb.co/kCYMBz/img.png" alt="Picture" />
						<h3 style="font-size: 1.5rem;">{Data.nombre}</h3>
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
							codeValue="Nombre: {Data.nombre}|Carrera:{Data.carrera}|Matricula:{Data.matricula}|Cuatrimestre: {Data.cuatrimestre} "
							squareSize="200"
						/>
					</div>
				</div>
				<div class="back">
					<header>
						<div class="bkg" />
						<img src="https://image.ibb.co/kCYMBz/img.png" alt="Picture" />
						<h3 style="font-size: 1.5rem;">{Data.nombre}</h3>
					</header>
					<div class="experiences" style="text-align: center;">
						<p style="font-weight: bold; color: #7352F2"> {Data.alergia} </p>
						<p style="font-weight: bold; color: #18BE78">
							{Data.carrera}
						</p>
						<p style="color: #1a1423 !important;">
							Matricula: {Data.matricula}
						</p>
					</div>
				</div>
			</div>
		</div>
	{/await}
{/if}

<style>
	h2 {
		color: #1a1423 !important;
	}

	.container {
		font-family: 'Roboto', sans-serif;
		background-size: cover;
		perspective: 1000px;
		height: 100vh;
	}
	.father {
		text-align: center;
		width: 400px;
		height: 520px;
		margin: auto;
		top: 20%;
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
		/* display: none; */
	}

	.father .front header .bkg {
		background-color: #2bde73;
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
	.father .front .experience {
		text-align: left;
		margin-left: 38px;
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

	.father .front .skills {
		text-align: left;
		overflow: hidden;
		margin-left: 38px;
	}
	.father .front .skills > h3 {
		font-size: 16px;
		padding: 5px 6px;
		background-color: #00a0ff;
		color: #f7fafa;
		font-weight: 700;
		border-radius: 5px;
		width: 10%;
		margin-bottom: 10px;
		margin-top: 15px;
	}
	.father .front .skills .grid-3 {
		width: 33.3333%;
		float: left;
		margin: 0 auto;
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
	}
	.father .back header .bkg {
		background-color: #fe2370;
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
	.father .back > h3 {
		padding: 6px;
		color: #f7fafa;
		background-color: #00a0ff;
		width: 25%;
		border-radius: 5px;
		margin: 20px 0 20px;
	}
	.father .back > h3,
	.father .back .social {
		margin-left: 38px;
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
	.father .back .social .facebook::first-letter {
		background-color: #4267b2;
	}
	.father .back .social .twitter::first-letter {
		background-color: #1da1f2;
	}
	.father .back .social .youtube::first-letter {
		background-color: #ff0000;
	}
	.father .back .social .linkedin::first-letter {
		background-color: #0077b5;
	}
	.father .back .social a {
		color: #2c2c2c;
		text-decoration: none;
		font-size: 16px;
		margin-top: 3px;
	}
</style>
