<script>
	let display = 'block';
	function closeBanner() {
		display = 'none';
	}
</script>

<div
	style={display}
	class="alert alert-info alert-dismissible h6 fade show fixed-bottom"
	role="alert"
>
	<button
		type="button"
		class="btn-close"
		data-bs-dismiss="alert"
		aria-label="Close"
		on:click={closeBanner}
	/>
	Usamos cookies para el funcionamiento de la página &lbbrk;No te procupes no es de uso comercial&rbbrk;
	. Al continuar navegando, aceptas el uso de cookies. Para más
	<a href="/info" target="_blank">Politicas de Policard</a>.
</div>
