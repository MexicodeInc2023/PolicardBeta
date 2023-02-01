<script>
	import XD2 from '../../../../../src/lib/img/credentialization.png';
	import logo1 from '../../../../../src/lib/img/favicon.ico';
	import datosp from '../../../../../src/lib/img/datosp.png';
	import requisitos from '../../../../../src/lib/img/requisitos.png';
</script>

<svelte:head>
	<title>Policard-Extra Info</title>
</svelte:head>

<body>
	<section class="banner">
		<div class="container">
      <div class="row lol">
				<div class="col">
					<div class="container border-success">
						<img src={datosp} alt="datosp" class="datosp" />
					</div>
				</div>

				<div class="col container border-success">
					<h2>CREDENCIAL</h2>
				</div>

				<div class="col">
					<div class="container border-success">
						<img src={requisitos} alt="requisitos" class="requisitos" />
					</div>
				</div>
			</div>
<br />
<br />
			<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="../../../../../src/lib/img/1.png" class="d-block w-100" alt="" />
					</div>
					<div class="carousel-item">
						<img src="../../../../../src/lib/img/2.png" class="d-block w-100" alt="" />
					</div>
					<div class="carousel-item">
						<img src="../../../../../src/lib/img/3.png" class="d-block w-100" alt="" />
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleInterval"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true" />
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleInterval"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true" />
				</button>
			</div>

			<!-- <div class="row lol">
				<div class="col">
					<div class="container border-success">
						<div class="card">
							<img src="../../../../../src/lib/img/4.png" class="card-img-top" alt="..." />

							<div class="card-body">
								<h5 class="card-title htxt">Datos necesarios</h5>
								<li>Nombre (s)</li>
								<li>Apellidos</li>
								<li>Carrera y Matricula</li>
								<li>Fecha de Nacimiento</li>
								<li>Correo Institucional</li>
								<li>Fotografia personal</li>
							</div>
						</div>
						<div class="card-body" />
					</div>
				</div>

				<div class="col container border-success">
					<!-- <p class="detalles">Es importante comprender que el sistema de credencialización digitalizada de
              la Universidad Politécnica de Tapachula es la semilla principal donde nuestros
              alumnos pueden tener una identidad propia apegado a su carrera, respetando
              su privacidad y los datos. Tambien servirá para trámites escolares y profesionales
          </p> -->
				<!-- </div>

				<div class="col">
					<div class="container border-success">
						<div class="card">
							<img src="../../../../../src/lib/img/5.png" class="card-img-top" alt="..." />

							<div class="card-body">
								<h5 class="card-title htxt">Requisitos</h5>
								<div class="container border-success">
									<li>Estudiante en activo</li>
									<li>Cuota de Recuperación</li>
									<li>Estatus Regular o Irregular</li>
									<li>Contar con una cuenta Institucional</li>
									<li>No tener antecedentes penales</li>
									<li>No tener penalizaciones en la institución</li>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>  -->
		</div>
	</section>
</body>

<style>
	.carousel-item {
		transition: transform 2s ease-out opacity 0.2s ease-out;
	}

	.banner {
		background-image: url('../../lib/img/background.png');
		background-size: cover;
		background-position: 0 0, top left;
		background-repeat: no-repeat;
		padding: 100px 0;
	}

	.colortext {
		text-align: center;
	}

	h1 {
		font-style: normal;
		font-weight: 700;
		font-size: 5rem;
		background: linear-gradient(180deg, #7352f3 0%, #5a40c0 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		background-image: url('../../lib/img/bg-sidebar-mobile.svg');
	}

	h2 {
		font-style: normal;
		font-weight: 700;
		font-size: 5rem;
		background: linear-gradient(180deg, #7352f3 0%, #5a40c0 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.infoex {
		font-style: normal;
		font-weight: 700;
		font-size: 5rem;
		background: linear-gradient(180deg, #7352f3 0%, #5a40c0 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.infoexx {
		font-style: normal;
		font-weight: 600;
		font-size: 2rem;
		background: black;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		position: relative;
	}

	.imgpolicard {
		position: relative;
	}

	.logo {
		position: absolute;
		width: 135px;
		height: 135px;
		left: 134px;
		top: 0px;
	}

	.datosp {
		position: absolute;
		width: 135px;
		height: 135px;
	}

	.requisitos {
		position: absolute;
		width: 135px;
		height: 135px;
	}

	.detalles {
		font-style: normal;
		font-weight: 600;
		font-size: 1rem;
		background: black;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		position: relative;
	}
</style>
