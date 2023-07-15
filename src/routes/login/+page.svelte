<script>
	import Policard from '../../lib/img/policard-wt-sf.png';
	import Portada from '../../lib/img/Portada.png';
	import { fade, fly } from 'svelte/transition';
	import { superForm } from 'sveltekit-superforms/client';
	import { jwt, authenticated } from '../../stores/auth';
	import { loading } from '../../stores/states';
	import CookiesAlert from '../../components/CookiesAlert.svelte';

	export let data;
	const { form, errors, constraints, delayed } = superForm(data.form);

	let errorVisible = 'none';
	let successVisible = 'none';

	function hideError() {
		errorVisible = 'none';
	}

	if (!data) {
		console.log('No hay datos');
		$loading = true;
	}

	if (data.success) {
		errorVisible = 'none';
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
		<div class="container d-flex justify-content-center align-items-center min-vh-100">
			<!----------------------- Login Container -------------------------->

			<div class="row border rounded-5 p-3 bg-white shadow box-area">
				<!--------------------------- Left Box ----------------------------->

				<div
					class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
					style="background: rgb(59,125,247);
                    background: linear-gradient(90deg, rgba(59,125,247,1) 0%, rgba(72,50,235,1) 35%, rgba(187,32,232,1) 100%);"
				>
					<div class="featured-image mb-3">
						<img src={Portada} alt="" class="img-fluid" style="width: 250px;" loading="lazy" decoding="async" />
					</div>
					<p
						class="text-white fs-2"
						style="font-family: 'Courier New', Courier, monospace; font-weight: 600;"
					>
						Be Verified
					</p>
					<small
						class="text-white text-wrap text-center"
						style="width: 17rem;font-family: 'Courier New', Courier, monospace;"
						>Join experienced Designers on this platform.</small
					>
				</div>

				<!-------------------- ------ Right Box ---------------------------->

				<div class="col-md-6 right-box">
					<div class="row align-items-center">
						<div class="header-text mb-4">
                            <div style="text-align: center;">
								<img src={Policard} alt="" width="140px" loading="lazy" decoding="async" />
							</div>
							<h2 style="text-align: center; color: #000000;">Bienvenido a Policard 👋</h2>
							<p class="fs-6 mb-4" style="color: #000000;">Inicie sesión para continuar con el trámite de tu credencial digital.</p>
						</div>
						<div>
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
								Iniciar Sesión
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
	@import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap";body{background:url(../../lib/img/background1.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;font-family:'Inter',sans-serif}.box-area{width:930px}.right-box{padding:40px 30px 40px 40px}::placeholder{font-size:16px}.rounded-4{border-radius:20px}.rounded-5{border-radius:30px}.invalid{color:#f63131}#innerPage{width:100%;max-width:840px;margin:0 auto;border-radius:12px;background:#f7fafc}.form-control{background:none;border:none;border-bottom:1px solid #a91ce5;color:#27272e}#imgBgn{background:url(../../lib/img/temo.jpg) no-repeat;background-size:cover;background-position:center;min-height:75vh;width:100%;border-radius:12px 0 0 12px}.btn{color:#fff;background-color:purple}@media only screen and (max-width: 767px){.box-area{margin:0 10px}.left-box{height:100px;overflow:hidden}.right-box{padding:20px}}
</style>