<script>
	import { page } from '$app/stores';
	import logo from '../lib/img/policard-wt-sf.png';
	import profile from '../lib/img/perfil.jpg';
	import { authenticated, user, emailUser } from '../stores/auth.js';
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
	<nav class="navbar navbar-expand-lg start-header">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">
				<img src={logo} alt="" width="50" height="50" class="d-inline-block align-text-top" />
			</a>

			<button
				id="Modal"
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
						class={$page.url.pathname === '/credentials' ? 'nav-item active' : 'nav-item '}
						aria-current={$page.url.pathname === '/credentials' ? 'page' : undefined}
					>
						<a class="nav-link " href="/credentials">Inicio</a>
					</li>
					<li
						class={$page.url.pathname === '/credentials/card' ? 'nav-item active' : 'nav-item '}
						aria-current={$page.url.pathname === '/credentials/card' ? 'page' : undefined}
					>
						<a class="nav-link" href="/credentials/card">Mi Credencial</a>
					</li>
					<li
						class={$page.url.pathname === '/credentials/procedures'
							? 'nav-item active'
							: 'nav-item '}
						aria-current={$page.url.pathname === '/credentials/procedures' ? 'page' : undefined}
					>
						<a class="nav-link" href="/credentials/procedures">Tramites</a>
					</li>
					<li
						class={$page.url.pathname === '/credentials/info' ? 'nav-item active' : 'nav-item '}
						aria-current={$page.url.pathname === '/credentials/procedures' ? 'page' : undefined}
					>
						<a class="nav-link" href="/credentials/info">Informacion</a>
					</li>

					<li class="nav-item dropdown d-flex">
						<a
							class="nav-link dropdown-toggle"
							data-bs-toggle="dropdown"
							href="#"
							role="button"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Perfil
						</a>
						<!-- Modal -->
						<div class="modal fade" id="myModal" role="dialog">
							<div class="modal-dialog">
								<div class="card">
									<div class="card-img">
										<img class="img-fluid" src={logo} />
									</div>
									<div class="card-title">
										<p>{$user}</p>
									</div>
									<div class="card-text">
										<p>{$emailUser}</p>
									</div>
									<button class="btn">Cerrar</button>
								</div>
							</div>
						</div>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<button class="dropdown-item" data-bs-toggle="modal" data-bs-target={'#myModal'}
								>Perfil</button
							>
							<div class="dropdown-divider" />
							<form method="POST" action="/logout">
								<button class="dropdown-item" href="#" on:click={logout}>Cerrar Sesion</button>
							</form>
						</div>
					</li>
				</ul>
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

	.start-header {
		opacity: 1;
		padding: 15px 0;
		box-shadow: 0 10px 30px 0 rgba(138, 155, 165, 0.15);
		-webkit-transition: all 0.3s ease-out;
		transition: all 0.3s ease-out;
	}

	li {
		margin-right: 1rem;
	}

	a {
		color: #000;
		margin-top: 0.25rem;
		font-size: 1.1rem;
	}

	.nav-link {
		color: #212121 !important;
		font-weight: 500;
		transition: all 200ms linear;
	}
	.nav-item:hover .nav-link {
		color: #8167a9 !important;
	}
	.nav-item.active .nav-link {
		color: #249434 !important;
	}
	.nav-link {
		position: relative;
		padding: 5px 0 !important;
		display: inline-block;
	}
	.nav-item:after {
		position: relative;
		bottom: -5px;
		left: 0;
		width: 100%;
		height: 2px;
		content: '';
		background-color: #8167a9;
		opacity: 0;
		transition: all 200ms linear;
	}
	.nav-item:hover:after {
		bottom: 0;
		opacity: 1;
	}
	.nav-item.active:hover:after {
		opacity: 0;
	}
	.nav-item {
		position: relative;
		transition: all 200ms linear;
	}

	/* Modal */

	.btn {
		background-color: #23c483;
		border-color: #23c483;
		border-radius: 6px;
		color: white;
		font-size: 17px;
		padding-right: 76px;
		padding-left: 76px;
	}

	.card {
		border-radius: 3vh;
		margin: auto;
		max-width: 380px;
		padding: 7vh 6vh;
		align-items: center;
		box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	@media (max-width: 767px) {
		.card {
			width: 90vw;
		}
	}
	.card-img {
		padding: 20px 0;
		width: 40%;
	}

	.card-img img {
		opacity: 0.7;
	}
	.card-title {
		margin-bottom: unset;
	}
	.card-title p {
		color: #6c63ff;
		font-weight: 900;
		font-size: 30px;
		margin-bottom: unset;
	}
	.card-text p {
		color: grey;
		font-size: 25px;
		text-align: center;
		padding: 3vh 0;
		font-weight: lighter;
	}
</style>
