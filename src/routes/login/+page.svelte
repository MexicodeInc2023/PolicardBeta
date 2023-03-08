<script>
	import Image_1 from '../../lib/img/img-1.jpg';
	import Image_2 from '../../lib/img/img-2.jpg';
	import Policard from '../../lib/img/policard-wt-sf.png';

	const loginUrl = 'http://localhost:3000/api/auth/signin/';
	let email, password;
	console.log(email, password);
	let errorVisible = false;
	let successVisible = false;

	function hideError() {
		errorVisible = ' ';
	}

	function hideSuccess() {
		successVisible = ' ';
	}
	const submit = async () => {
		const res = await fetch(loginUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		}).catch((err) => {
			console.log(err);
			if (err) {
				successVisible = 'show';
			}
		});

		// Si La respuesta es 200 enviamos una alerta de que se ha iniciado sesion , si no enviamos una alerta de que no se ha iniciado sesion
		if (res.status === 200) {
			successVisible = 'show';
		} else {
			errorVisible = 'show';
		}

		const data = await res.text();
		console.log(data);
	};
</script>

<svelte:head>
	<title>Policard-Login</title>
</svelte:head>

<body class="bg-light">
	<div class="alert alert-danger alert-dismissible fade {errorVisible} " role="alert">
		Error al iniciar sesión. Por favor, comprueba tus credenciales e intenta de nuevo.
		<button
			type="button"
			class="btn-close"
			data-bs-dismiss="alert"
			aria-label="Close"
			on:click={hideError}
		/>
	</div>

	<div
		class="alert alert-success alert-dismissible fade {successVisible}"
		role="alert"
		class:successVisible
	>
		Sesión iniciada correctamente.
		<button
			type="button"
			class="btn-close"
			data-bs-dismiss="alert"
			aria-label="Close"
			on:click={hideSuccess}
		/>
	</div>
	<section>
		<div class="row g-0">
			<div class="col-lg-7 d-none d-lg-block">
				<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active" />
						<li data-target="#carouselExampleCaptions" data-slide-to="1" />
					</ol>
					<div class="carousel-inner">
						<div class="carousel-item img-1 min-vh-100 active">
							<div class="carousel-caption d-none d-md-block">
								<h5 class="font-weight-bold">Credencial escolar digital</h5>
							</div>
						</div>
						<div class="carousel-item img-2 min-vh-100">
							<div class="carousel-caption d-none d-md-block">
								<h5 class="font-weight-bold">Bienvenido a Policard</h5>
							</div>
						</div>
					</div>
					<a
						class="carousel-control-prev"
						href="#carouselExampleCaptions"
						role="button"
						data-slide="prev"
					>
						<span class="carousel-control-prev-icon" aria-hidden="true" />
						<span class="sr-only" />
					</a>
					<a
						class="carousel-control-next"
						href="#carouselExampleCaptions"
						role="button"
						data-slide="next"
					>
						<span class="carousel-control-next-icon" aria-hidden="true" />
						<span class="sr-only" />
					</a>
				</div>
			</div>
			<div class="col-lg-5 bg-ligth d-flex flex-column align-items-end min-vh-100">
				<div class="px-lg-5 pt-lg-4 pb-lg-3 p-4 mb-auto w-100" style="text-align: center;">
					<img src={Policard} alt="" class="img-fluid" width="200px" height="200px" />
				</div>
				<div class="align-self-center w-100 px-lg-5 py-lg-4 p-4">
					<h1 class="font-weight-bold mb-4">Bienvenido, Inicia Sesion</h1>
					<form class="mb-5" on:submit={submit}>
						<div class="mb-4">
							<label for="exampleInputEmail1" class="form-label font-weight-bold">Email</label>
							<input
								type="email"
								class="form-control  border-0"
								bind:value={email}
								id="exampleInputEmail1"
								placeholder="Ingresa tu email"
								aria-describedby="emailHelp"
							/>
						</div>
						<div class="mb-4">
							<label for="exampleInputPassword1" class="form-label font-weight-bold"
								>Contraseña</label
							>
							<input
								type="password"
								class="form-control  border-0 mb-2"
								bind:value={password}
								placeholder="Ingresa tu contraseña"
								id="exampleInputPassword1"
							/>
							<!-- <a
								href=""
								id="emailHelp"
								class="form-text text-muted text-decoration-none text-light"
								>¿Has olvidado tu contraseña?</a
							> -->
						</div>
						<button type="submit" class="btn btn-primary w-100">Iniciar sesión</button>
					</form>
				</div>
				<div class="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 mt-auto w-100">
					<p class="d-inline-block mb-0">¿Todavia no tienes una cuenta?</p>
					<a href="/form" class="text-light font-weight-bold text-decoration-none">Crea una ahora</a
					>
				</div>
			</div>
		</div>
	</section>
	<!-- Optional JavaScript -->
	<!-- Popper.js first, then Bootstrap JS -->

	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
		integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
		crossorigin="anonymous"
	></script>
</body>

<style>
	:root {
		--dark¿: #16191c;
		--dark-x: #1e2126;
		--light: #ffffff;
	}

	body {
		font-family: 'Spartan', sans-serif;
		font-weight: 300;
		color: var(--dark¿);
	}

	.text-light {
		color: var(--light) !important;
	}
	/* .bg-dark {
    background-color: var(--dark¿) !important;
	} */

	/* 	.bg-dark-x {
		background-color: var(--dark-x);
	}
 */

	/* .bg-dark-x {
		background-color: var(--dark-x);
	} */

	.bg-light {
		background-color: #ffffff;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%236CFF7B'/%3E%3Cstop offset='1' stop-color='%2309FF08'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23CE27FF'/%3E%3Cstop offset='1' stop-color='%23BF0FFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;
	}

	.btn {
		background-color: #18be78;
		border: none;
		min-height: 3.125rem;
		font-weight: 600;
	}

	.form-control {
		min-height: 3.125rem;
		line-height: initial;
	}
	.form-control:focus {
		background-color: var(--light);
		outline: none;
	}

	.img-1 {
		background-image: url('../../lib/img/prueba.jpg');
		background-size: cover;
		background-position: center;
	}

	.img-2 {
		background-image: url('../../lib/img/prueba2.jpg');
		background-size: cover;
		background-position: center;
	}
</style>
