<script>
	import Status from './card/components/Status.svelte';

	export let data;

	if (!data) {
		console.log('No hay datos');
	}
</script>

<svelte:head>
	<title>Bienvenido</title>
</svelte:head>
{#if !data}
	<p>Cargando...</p>
{:else}
	<div class="container">
		<h1 class="text-center m-1">Bienvenido!</h1>
		<h1 class="text-center m-1 text-uppercase" style="font-weight: bold; color: #7352F2 ">
			{data.session.user}
		</h1>
		<Status />
	</div>
{/if}
