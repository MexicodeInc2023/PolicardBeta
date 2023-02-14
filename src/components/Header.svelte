<script>
	import { page } from '$app/stores';
	import logo from '../lib/img/favicon.ico';
	import profile from '../lib/img/perfil.jpg';
	import { authenticated } from '../stores/auth.js';
	import ModalProfile from './Modal_Profile.svelte';
	/* import {
		customerEmail,
		customerName,
	} from '../routes/form/components/sharedState';
	
	import {
		customerDate
	} from '../routes/form/components/sharedState' */

	const logoutUrl = 'http://127.0.0.1:8000/users/logout/';
	let auth = false;
	authenticated.subscribe((value) => (auth = value));

	const logout = async () => {
		const res = await fetch(logoutUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		});

		location.href = '/';
	};
	/* let name = customerName.name;
	
	let correo = customerEmail;

	let fecha = customerDate; */

	

</script>

<header>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">
				<img src={logo} alt="" width="50" height="50" class="d-inline-block align-text-top" />
			</a>

			<button
				id= "Modal"
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarColor03"
				aria-controls="navbarColor03"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse" id="navbarColor03">
				<ul class="navbar-nav me-auto">
					<div class="logo">POLICARD</div>
					<li
						class="nav-item"
						aria-current={$page.url.pathname === '/credentials' ? 'page' : undefined}
					>
						<a class="nav-link " href="/credentials">Inicio</a>
					</li>
					<li aria-current={$page.url.pathname === '/credentials/card' ? 'page' : undefined}>
						<a class="nav-link" href="/credentials/card">Mi Credencial</a>
					</li>
					<li aria-current={$page.url.pathname === '/credentials/procedures' ? 'page' : undefined}>
						<a class="nav-link" href="/credentials/procedures">Tramites</a>
					</li>
					<li aria-current={$page.url.pathname === '/credentials/info' ? 'page' : undefined}>
						<a class="nav-link" href="/credentials/info">Informacion</a>
					</li>
				</ul>
				<li class="nav-item dropdown d-flex dropstart">
					<a
						class="nav-link dropdown-toggle"
						data-bs-toggle="dropdown"
						href="#"
						role="button"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<img
							src={profile}
							alt=""
							width="50"
							height="50"
							class="d-inline-block align-text-middle"
						/>
					</a>
					<!-- Modal -->
					<div
						class="modal fade"
						id="staticBackdrop1"
						data-bs-backdrop="static"
						data-bs-keyboard="false"
						tabindex="-1"
						aria-labelledby="staticBackdropLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog">
							<div class="modal-content">
								<!-- <div class="modal-header">
									<h5 class="modal-title" id="staticBackdropLabel">Perfil</h5>
									<button 
										type="button"
										class="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"
									/>
								</div> -->
								<div class="modal-body">
									<div class="position-relative">
										<center>
											<img class ="img-fluid" src={logo}>
										</center>
									</div>
									<div class="form-group">										
										<form class=" needs-validation" novalidate>
											<center>
											<div class="col-md-8 position-relative">
											  <label for="validationTooltip01" class="form-label">Nombre</label>
											  <input  class="form-control" type="text" placeholder="undefined" aria-label="Disabled input example" disabled readonly>
											<!-- value={nombre} -->
											</div>
											<br/>
											<div class="col-md-6 position-relative">
											  <label for="validationTooltip02" class="form-label">Fecha de Creación</label>
											  <input class="form-control" type="text" placeholder="undefined" aria-label="Disabled input example" disabled  readonly>
											  <!-- value={fecha} -->
											</div>
											<br/>
											<div class="col-md-8 position-relative">
											  <label for="validationTooltipUsername" class="form-label">Correo</label>
											  <div class="input-group has-validation">
												<span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
												<input class="form-control" type="text" placeholder="undefined" aria-label="Disabled input example" disabled readonly>
												<!-- value={correo} -->  
											</div>
											</div>
											<div class="col-12">
											</div>
										</center>
									</div>
								</div>
								<div class="modal-footer">
									<button type="reset" class="btn btn-secondary" data-bs-dismiss="modal"
										>Close</button
									>
								</div>
							</div>
						</div>
					</div>
					<div class="dropdown-menu">
						<button class="dropdown-item" data-bs-toggle="modal" data-bs-target={'#staticBackdrop1'}>Perfil</button>
						<div class="dropdown-divider" />
						<form method="POST" action="/logout">
							<button class="dropdown-item" href="#" on:click={logout}>Cerrar Sesion</button>
						</form>
					</div>
				</li>
			</div>
		</div>
	</nav>
</header>

<style>
	.logo {
		font-size: 2rem;
		font-weight: bold;
		color: #000;
		margin-right: 1rem;
	}

	li {
		margin-right: 1rem;
	}

	a {
		color: #000;
		margin-top: 0.25rem;
	}
</style>
