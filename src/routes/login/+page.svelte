<script>
	import Policard from '../../lib/img/policard-wt-sf.png';
	import { fade, fly } from 'svelte/transition';
	import { superForm } from 'sveltekit-superforms/client';
	import { jwt, user, id, emailUser, authenticated } from '../../stores/auth';
	import { loading } from '../../stores/states';
	import CookiesAlert from '../../components/CookiesAlert.svelte';

	export let data;
	const { form, errors, constraints, delayed } = superForm(data.form);

	let errorVisible = 'none';
	let successVisible = 'none';

	function hideError() {
		errorVisible = 'none';
	}

	if (data.success) {
		errorVisible = 'none';
		id.set(data.dataLogin.id);
		user.set(data.dataLogin.name);
		emailUser.set(data.dataLogin.email);
		// Establecer las cookies de acceso y actualización con los valores de los tokens correspondientes
		jwt.set(data.dataLogin.tokens.access);
		authenticated.set(true);
	}

	if (data.error) {
		errorVisible = 'block';
	}

	setInterval(hideError, 3000);
</script>

<svelte:head>
	<title>Policard-Login</title>
</svelte:head>

<body>
	<CookiesAlert />
	<section
		in:fly|global={{ x: -100, duration: 500, delay: 500 }}
		out:fly|global={{ duration: 500 }}
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
							<div style="text-align: center;">
								<img src={Policard} alt="" width="140px" loading="lazy" decoding="async" />
							</div>
							<h3 style="text-align: center; color: #000000;">Bienvenido a Policard</h3>
							<p class="fs-6 mb-4" style="color: #000000;">
								<small
									>Inicie sesión para continuar con el trámite de tu credencial digital, Policard.</small
								>
							</p>
						</div>
						<div class="mt-4">
							<p style="color: #000000;">Ingresa tus credenciales</p>
						</div>
						<form method="POST">
							<input
								class="form-control rounded-0 mb-3"
								placeholder=" Ingresa tu correo institucional"
								type="email"
								name="email"
								aria-invalid={$errors.email ? 'true' : undefined}
								bind:value={$form.email}
								{...$constraints.email}
							/>
							{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
							<input
								class="form-control rounded-0 mb-3"
								placeholder=" Ingresa tu contraseña "
								type="password"
								name="password"
								aria-invalid={$errors.password ? 'true' : undefined}
								bind:value={$form.password}
								{...$constraints.password}
							/>
							{#if $errors.password}<span class="invalid">{$errors.password}</span>{/if}
							<button class="btn btn-rounded mt-4 w-100" type="submit">
								Inciar Sesión
								{#if $loading}
									<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
								{/if}
							</button>
						</form>
						<br />
						<div
							class="alert alert-danger alert-dismissible fade show"
							style="display:{errorVisible}"
							role="alert"
							transition:fade|global
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
					</div>
				</div>
			</div>
		</div>
	</section>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

	body {
		background: #475d62 url(../../lib/img/background1.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		font-family: 'Inter', sans-serif;
	}

	.invalid {
		color: rgb(246, 49, 49);
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
