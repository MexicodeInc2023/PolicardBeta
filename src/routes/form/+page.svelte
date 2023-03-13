<script>
	import Register from './components/register.svelte';
	import Logo from '../../lib/img/favicon.ico';
	import Logo2 from '../../lib/img/credentialization.png';
</script>

<body>
	<section class="banner">
		<div>
			<img src={Logo} alt="Logo" class="logo" />
		</div>
		<div class="container">
			<div class="row main">
				<div class="col-xl-6 col-lg-8">
					<h1 class="banner-title">Policard</h1>
					<p class="banner-text">
						Identificacion Institucional <br />
						que emite el Departamento de Servicios Escolares
					</p>
				</div>
				<div class="col-lg-6 d-none d-lg-block lol">
					<img src={Logo2} class="img-fluid" alt="policard" />
				</div>
			</div>
		</div>
	</section>
	<section class="register">
		<Register />
	</section>
</body>

<style>
	.register {
		position: relative;
		margin-top: 705px;
		padding-top: 10px;
		margin-left: 3px;
		margin-right: 3px;
	}

	.banner {
		background-image: url('../../lib/img/background.png');
		background-size: cover;
		background-position: 0 0, top left;
		background-repeat: no-repeat;
		padding: 50px 0;
		position: relative;
	}

	.logo {
		position: absolute;
		width: 135px;
		height: 135px;
		left: 134px;
		top: 0px;
	}

	.main {
		margin-top: 25%;
	}

	.banner-title {
		font-style: normal;
		font-weight: 800;
		font-size: 5rem;
		background: linear-gradient(180deg, #7352f3 0%, #5a40c0 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.banner-text {
		font-style: normal;
		font-weight: 500;
		font-size: 2rem;
		color: #000;
	}

	@media screen and (max-width: 1124px) and (min-width: 992px) {
		.register {
			position: relative;
			margin-top: 370px;
			margin-left: 80px;
		}
	}
	@media screen and (max-width: 1199px) and (min-width: 1125px) {
		.register {
			position: relative;
			margin-top: 370px;
			margin-left: 220px;
		}
	}

	@media screen and (max-width: 1201px) and (min-width: 992px) {
		.lol {
			visibility: hidden;
		}
	}
	@media screen and (min-width: 1202px) {
		.register {
			position: relative;
			margin-top: 705px;
			margin-left: 220px;
		}
	}
	@media screen and (min-width: 1793px) {
		.register {
			position: relative;
			margin-top: 705px;
			margin-left: 600px;
		}
	}
	@media screen and (min-width: 2540px) {
		.register {
			position: relative;
			margin-top: 705px;
			margin-left: 900px;
		}
	}
	@media screen and (max-width: 630px) {
		.banner-title {
		font-style: normal;
		font-weight: 700;
		font-size: 4rem;
		background: linear-gradient(180deg, #7352f3 0%, #5a40c0 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-align: center;
	}

	.banner-text {
		font-style: normal;
		font-weight: 500;
		font-size: 2.5rem;
		color: #000;
		text-align: center;
	}
	.banner  {
		background-image: none;
	}
	.logo {
		position: absolute;
		width: 135px;
		height: 135px;
		left: 134px;
		top: 0px;
		align-items: center;
	}
	.main {
		margin-top: 25%;
	}
	}
</style>
