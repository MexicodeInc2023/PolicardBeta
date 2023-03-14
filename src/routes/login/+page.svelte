<script>
	import Policard from '../../lib/img/policard-wt-sf.png';
	import { BaseUrl } from '../../stores/apiUrl';
	import { goto } from '$app/navigation';
	import { fade, fly } from 'svelte/transition';
	import { jwt, user, id, emailUser } from '../../stores/auth';
	import { authenticated } from '../../stores/auth';

	const loginUrl = BaseUrl + 'login/';
	let email, password;
	let errorVisible = 'none';
	let successVisible = 'none';
	function hideError() {
		errorVisible = 'none';
	}
	function hideSuccess() {
		successVisible = 'none';
	}
	function setCookie(name, value, days) {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = '; expires=' + date.toUTCString();
		document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
	}
	const submit = async () => {
		try {
			const res = await fetch(loginUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email,
					password
				})
			});
			if (!res.ok) {
				authenticated.set(false);
				throw new Error('No se pudo iniciar sesión');
			}
			const data = await res.json();
			if (!data.tokens) {
				authenticated.set(false);
				throw new Error('No se encontraron tokens de acceso');
			}
			// Enviamos el id y el usuario a los stores
			id.set(data.id);
			user.set(data.name);
			emailUser.set(data.email);
			// Establecer las cookies de acceso y actualización con los valores de los tokens correspondientes
			jwt.set(data.tokens.access);
			setCookie('access_token', data.tokens.access, 7);
			setCookie('refresh_token', data.tokens.refresh, 14);
			successVisible = 'block';
			// navegar a la página deseada después de autenticarse
			goto('/credentials');
		} catch (err) {
			console.error(err);
			errorVisible = 'block';
			authenticated.set(false);
		}
	};
</script>

<svelte:head>
	<title>Policard-Login</title>
</svelte:head>

<body>
	<section
		in:fly={{ x: -100, duration: 500, delay: 500 }}
		out:fly={{ duration: 500 }}
		class="background-radial-gradient overflow-hidden"
	>
		<div class="container vh-100 d-flex align-items-center">
			<div id="innerPage">
				<div class="row align-items-center justify-content-center">
					<div class="col-sm-6 col-xs-12 d-sm-block d-none">
						<div id="imgBgn" />
					</div>
					<div class="col-sm-6 col-xs-12 text-white p-5">
						<div class="lead">
							<h3 style="color: #000000;">Bienvenido a Policard</h3>
							<p class="fs-6 mb-4" style="color: #000000;">
								<small
									>Inicie sesión para continuar con el trámite de tu credencial digital, Policard.</small
								>
							</p>
						</div>
						<div class="mt-4">
							<p style="color: #000000;">Ingresa tus credenciales</p>
						</div>
						<form on:submit={submit}>
							<input
								class="form-control rounded-0 mb-3"
								type="Email"
								name=""
								placeholder=" Ingresa tu correo institucional"
								bind:value={email}
							/>
							<input
								id="exampleInputPassword1"
								class="form-control rounded-0 mb-3"
								type="password"
								name=""
								placeholder=" Ingresa tu contraseña "
								bind:value={password}
							/>
							<button class="btn btn-rounded mt-4 w-100" type="submit"> Iniciar Sesion </button>
						</form>
						<br />
						<div
							class="alert alert-danger alert-dismissible fade show"
							style="display: {errorVisible}"
							role="alert"
							transition:fade
						>
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
							class="alert alert-success alert-dismissible fade show"
							style="display: {successVisible}"
							role="alert"
							class:successVisible
							transition:fade
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
					</div>
				</div>
			</div>
		</div>
	</section>
</body>

<style>
	body {
		background: #475d62 url(../../lib/img/background1.jpg);
	}
	#innerPage {
		width: 100%;
		max-width: 840px;
		margin: 0 auto;
		border-radius: 12px;
		background: #f7fafc;
	}
	.form-control {
		background: none;
		border: none;
		border-bottom: 1px solid #a91ce5;
		color: #27272e;
	}

	#imgBgn {
		background: url('../../lib/img/temo.jpg') no-repeat;
		background-size: cover;
		background-position: center;
		min-height: 75vh;
		width: 100%;
		border-radius: 12px 0px 0px 12px;
	}
	.btn {
		color: white;
		background-color: purple;
	}
</style>
