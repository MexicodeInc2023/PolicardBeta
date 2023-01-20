<script>
	import Register from './components/register.svelte';
	import Logo from '../../lib/img/favicon.ico';
	import Logo2 from '../../lib/img/identification.png';
	let steps = ['Register', 'Info', 'Confirmation'],
		currentActive = 1,
		progressBar;

	const handleProgress = (stepIncrement) => {
		progressBar.handleProgress(stepIncrement);
	};
</script>

<main>
	<section class="banner">
		<div>
			<img src={Logo} alt="Logo" class="logo" />
		</div>
		<div class="container">
			<div class="row main">
				<div class="col-xl-6 col-lg-8">
					<h2 class="banner-title">
						Identificacion Institucional <br />
						que emite el Departamento de Servicios Escolares
					</h2>
				</div>
				<div class="logoo col-lg-6 d-none d-lg-block">
					<img src={Logo2} class="img-fluid" alt="policard" />
				</div>
			</div>
		</div>
	</section>
	<section class="register">
		<Register />
	</section>
</main>

<style>
	.register {
		position: relative;
		height: 100vh;
		margin-top: 700px;
	}
	.banner {
		background-image: url('../../lib/img/background.png');
		background-size: cover;
		background-repeat: no-repeat;
		padding: 100px;
		position: relative;
	}
	.logo {
		position: absolute;
		width: 125px;
		height: 125px;
		left: 70px;
		top: 0px;
	}

	.main {
		margin-top: 13%;
	}

	.banner-title {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 800;
		background: linear-gradient(180deg, #7352f3 0%, #5a40c0 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-align: left;
		padding-top: 30px;
	}

	@media screen and (min-width: 1366px) {
		.register {
			position: relative;
			height: 100vh;
			margin-left: 900px;
			margin-top: -730px;
		}
		.banner {
			background-image: url('../../lib/img/background.png');
			background-size: cover;
			background-position: 0 0, top left;
			background-repeat: no-repeat;
			padding: 100px 0;
			position: relative;
		}
		.logo {
			position: absolute;
			width: 125px;
			height: 125px;
			left: 134px;
			top: 0px;
		}

		.main {
			margin-top: 13%;
		}

		.banner-title {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 800;
			font-size: 3rem;
			background: linear-gradient(180deg, #7352f3 0%, #5a40c0 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			margin-left: -100px;
		}

		.logoo {
			padding-top: 190px;
			margin-left: -750px;
		}
	}
</style>
