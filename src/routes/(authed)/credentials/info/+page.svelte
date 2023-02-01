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
	<section class="banner">
		<div class="container">
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
</style>
