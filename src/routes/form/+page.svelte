<script>
	import Form_register from './components/register.svelte';
    import Logo from '../../lib/img/favicon.ico'
    import Logo2 from '../../lib/img/identification.png'
	let steps = ['Register', 'Info', 'Confirmation'], currentActive = 1, progressBar;
	
	const handleProgress = (stepIncrement) => {
		progressBar.handleProgress(stepIncrement)
	}
	
</script>

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
				<img
					src={Logo2}
					class="img-fluid"
					alt="policard"
				/>
			</div>
			<Form_register/>
		</div>
	</div>
</section>
<style>

.banner {
		background-image: url("../public/background.png");
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
		font-family: "Inter";
		font-style: normal;
		font-weight: 800;
		font-size: 3rem;
		background: linear-gradient(180deg, #7352f3 0%, #5a40c0 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.logoo {
		padding-top: 1px;
		margin-left: 1px;
	}	

	.btn {
		position: relative;
		background-color: #3498db;
		color: #fff;
		border: 0;
		border-radius: 6px;
		cursor: pointer;
		font-family: inherit;
		padding: 8px 30px;
		font-size: 14px;
		margin-left: 800px;
		margin-top: 800px;
	}

	.btn:active {
		transform: scale(0.98);
	}

	.btn:focus {
		outline: 0;
	}

	.btn:disabled {
		background-color: #e0e0e0;
		cursor: not-allowed;
	}
	
	.step-button{
		margin-top: 1rem;
		text-align: center;
	}
</style>
