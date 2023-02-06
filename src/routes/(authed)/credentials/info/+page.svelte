<script>
	import XD2 from '../../../../../src/lib/img/credentialization.png';
	import logo1 from '../../../../../src/lib/img/favicon.ico';
	import datosp from '../../../../../src/lib/img/datosp.png';
	import requisitos from '../../../../../src/lib/img/requisitos.png';
</script>

<svelte:head>
	<title>Policard-Informacion</title>
</svelte:head>

<body>
	<table class="table">
		<thead>
			<tr>
				<th scope="col">
					<!-- Esta parte va el carrousel de información -->

					<div class="row lol">
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
								<div class="carousel-item">
									<img src="../../../../../src/lib/img/4.png" class="d-block w-100" alt="" />
								</div>
								<div class="carousel-item">
									<img src="../../../../../src/lib/img/5.png" class="d-block w-100" alt="" />
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
					</div>
					<br />
				</th>
				<th scope="col">
					<!-- Esta parte del codigo son las Cards -->

					<div class="container">
						<div class="card" style="width: 18rem;">
							<img src="../../../../../src/lib/img/6.png" class="card-img-top" alt="..." />
							<div class="card-body">
								<h6 class="card-subtitle mb-2 text-muted">Datos Personales:</h6>
								<div class="container">
									<ul class="list-group list-group-flush">
										<li class="card-subtitle">Nombres</li>
										<li class="card-subtitle">Apellidos</li>
										<li class="card-subtitle">Matricula</li>
										<li class="card-subtitle">Carrera</li>
										<li class="card-subtitle">Fecha de Nacimiento</li>
										<li class="card-subtitle">Foto de Perfil</li>
										<li class="card-subtitle">Correo Institucional</li>
										<li class="card-subtitle">Opcionales (Alergias)</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</th>
			</tr></thead
		>
	</table>
</body>

<style>
	.carousel-item {
		transition: transform 5s ease-out opacity 0.2s ease-out;
	}
	.card-subtitle{
		color: #7352F3;
		font-size: small;
	}
</style>
