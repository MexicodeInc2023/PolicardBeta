<script>
	import logo from '../lib/img/policard-wt-sf.png';
	import logoMex from '../lib/img/mexicode.png';
</script>

<div class="blockcode">
	<footer class="shadow" style="background-color: #a4c3b2;">
		<div
			class="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap"
			style="width: 80%"
		>
			<div href="/#" class="d-flex align-items-center p-0 text-dark">
				<img alt="logo" src={logo} width="30px" />
				<span class="ml-4 h5 font-weight-bold">Policard</span>
			</div>
			<small
				>&copy; Universidad Politécnica de Tapachula, By Mexic0de. Todos los derechos reservados.</small
			>
			<div href="/#" class="d-flex align-items-center p-0 text-dark">
				<img alt="logo" src={logoMex} width="30px" />
				<span class="ml-4 h5 font-weight-bold">Mexic0de</span>
			</div>
		</div>
	</footer>
</div>

<style>
	footer {
		background-color: rgb(228, 228, 228);
		padding: 10px 0;
		width: 100%;
		height: auto;
		color: rgb(0, 0, 0);
	}
	@media print {
		footer {
			display: none;
		}
	}
</style>
