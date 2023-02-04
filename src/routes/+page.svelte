<script>
	import imageHero from '../lib/img/example.svg';
	import logo from '../lib/img/favicon.ico';
</script>

<svelte:head>
	<title>Policard</title>
</svelte:head>
<body>
	<section class="banner">
		<div>
			<img src={logo} alt="Logo" class="logo" />
		</div>

		<div class="container">
			<div class="row main">
				<div class="col-xl-6 col-lg-8">
					<h1 class="banner-title">Policard</h1>
					<p class="banner-text">
						¡Bienvenido a tu nueva credencial estudiantil! <br />
						Bienvenido al Sistema de credenciales de la Universidad Politécnica de Tapachula.
					</p>
					<a href="/info" class="fancy">
						<span class="top-key" />
						<span class="text"> Más informacion </span>
						<span class="bottom-key-1" />
						<span class="bottom-key-2" />
					</a>
				</div>
				<div class="col-lg-6 d-none d-lg-block imagehero">
					<img src={imageHero} class="img-fluid" alt="policard" />
				</div>
			</div>
			<br />
			<div class="row lol">
				<div class="col">
					<div
						class="card text-center container border-success"
						style="width: 18rem; height: 18rem;"
					>
						<div class="card-body">
							<h5 class="card-title htxt">¿Ya tienes tu cuenta?</h5>
							<p class="card-text">Si tienes tu cuenta simplemente inicia sesion.</p>
							<a href="/login" class="loginn"> Iniciar Sesion </a>
						</div>
					</div>
				</div>
				<div class="col">
					<div
						class="card text-center container border-warning"
						style="width: 18rem; height: 18rem;"
					>
						<div class="card-body">
							<h5 class="card-title htxt">Tramita tu credencial</h5>
							<p class="card-text">Si aun, no cuentas con tu credencial, crea tu cuenta</p>
							<a href="/form" class="loginn">Crear cuenta</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
	body {
		font-family: 'Inter', sans-serif;
	}
	.banner {
		background-image: url('../lib/img/background.png');
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
		margin-top: 10%;
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
		font-size: 1.5rem;
		color: #000;
	}

	.htxt {
		font-weight: 600;
		font-size: 1.5rem;
		margin-top: 22px;
		margin-bottom: 22px;
	}

	.fancy {
		background-color: transparent;
		border: 2px solid #000;
		border-radius: 0;
		box-sizing: border-box;
		color: #fff;
		cursor: pointer;
		display: inline-block;
		font-weight: 700;
		letter-spacing: 0.05em;
		margin: 0;
		outline: none;
		overflow: visible;
		padding: 1.25em 2em;
		position: relative;
		text-align: center;
		text-decoration: none;
		text-transform: none;
		transition: all 0.3s ease-in-out;
		user-select: none;
		font-size: 13px;
	}

	.fancy::before {
		content: ' ';
		width: 1.5625rem;
		height: 2px;
		background: black;
		top: 50%;
		left: 1.5em;
		position: absolute;
		transform: translateY(-50%);
		transform-origin: center;
		transition: background 0.3s linear, width 0.3s linear;
	}

	.fancy .text {
		font-size: 1.125em;
		line-height: 1.33333em;
		padding-left: 2em;
		display: block;
		text-align: left;
		transition: all 0.3s ease-in-out;
		text-transform: uppercase;
		text-decoration: none;
		color: black;
	}

	.fancy .top-key {
		height: 2px;
		width: 1.5625rem;
		top: -2px;
		left: 0.625rem;
		position: absolute;
		background: #e8e8e8;
		transition: width 0.5s ease-out, left 0.3s ease-out;
	}

	.fancy .bottom-key-1 {
		height: 2px;
		width: 1.5625rem;
		right: 1.875rem;
		bottom: -2px;
		position: absolute;
		background: #e8e8e8;
		transition: width 0.5s ease-out, right 0.3s ease-out;
	}

	.fancy .bottom-key-2 {
		height: 2px;
		width: 0.625rem;
		right: 0.625rem;
		bottom: -2px;
		position: absolute;
		background: #e8e8e8;
		transition: width 0.5s ease-out, right 0.3s ease-out;
	}

	.fancy:hover {
		color: white;
		background: black;
	}

	.fancy:hover::before {
		width: 0.9375rem;
		background: white;
	}

	.fancy:hover .text {
		color: white;
		padding-left: 1.5em;
	}

	.fancy:hover .top-key {
		left: -2px;
		width: 0px;
	}

	.fancy:hover .bottom-key-1,
	.fancy:hover .bottom-key-2 {
		right: 0;
		width: 0;
	}

	a {
		position: relative;
		display: inline-block;
		cursor: pointer;
		outline: none;
		border: 0;
		vertical-align: middle;
		text-decoration: none;
		font-family: inherit;
		font-size: 15px;
	}

	.loginn {
		padding: 1.3em 3em;
		margin-top: 10px;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 2.5px;
		font-weight: 500;
		color: #000;
		background-color: #fff;
		border: none;
		border-radius: 45px;
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease 0s;
		cursor: pointer;
		outline: none;
	}

	.loginn:hover {
		background-color: #23c483;
		box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
		color: #fff;
		transform: translateY(-7px);
	}

	.loginn:active {
		transform: translateY(-1px);
	}

	@media screen and (max-width: 1199px) {
		.imagehero {
			visibility: hidden;
		}
	}
	@media screen and (max-width: 1199px) and (min-width: 992px) {
		.lol {
			margin-top: -300px;
		}
	}
</style>
