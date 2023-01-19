<script>
	import { page } from '$app/stores';
	import logo from '../lib/img/favicon.ico';
	import profile from '../lib/img/profile.png';
	import {authenticated} from '../stores/auth.js';
    
	const logoutUrl = 'http://127.0.0.1:8000/users/logout/';
	let auth = false;
	authenticated.subscribe(value => auth= value);

	const logout = async () => {
		const res = await fetch(logoutUrl, 
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			});
         
		  location.href = '/';
	}
</script>

<header>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">
				<img
					src={logo}
					alt=""
					width="50"
					height="50"
					class="d-inline-block align-text-top"
				/>
			</a>

			<button
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
					<li class="nav-item" aria-current={$page.url.pathname === '/credentials' ? 'page' : undefined}>
						<a class="nav-link " href="/credentials">INICIO</a>
					</li>
					<li aria-current={$page.url.pathname === '/credentials/card' ? 'page' : undefined}>
						<a class="nav-link" href="/credentials/card">Mi Credencial</a>
					</li>
					<li aria-current={$page.url.pathname === '/credentials/procedures' ? 'page' : undefined}>
						<a class="nav-link" href="/credentials/procedures">Tramites</a>
					</li>
					<li aria-current={$page.url.pathname === '/credentials/info' ? 'page' : undefined}>
						<a class="nav-link" href="/credentials/info">InfoExtra</a>
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
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#">Perfil</a>
						<div class="dropdown-divider" />
						<a class="dropdown-item" href="#" on:click={logout}>Cerrar Sesion</a>
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

	li{
		margin-right: 1rem;
	}

	a{
		color: #000;
		margin-top: 0.25rem;
		
	}


</style>
