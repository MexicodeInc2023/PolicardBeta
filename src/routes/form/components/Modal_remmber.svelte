<script> 
	let Modal = {
		visible: false,
	}
	export let visible;

	function changeVisible(){
		visible = ""
	}
</script>

<div style={Modal} class="modal {visible}"  role="alert">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Recuerda:</h5>
			</div>
			<div class="modal-body">
				<p>
					Esto es un formulario, no actualices la pagina. Sí perdiste tu credencial contactate con
					soporte para la reposición
				</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" on:click={changeVisible}
					>Close</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	.visible {
		display: block !important;
	}
	.modal {
		display: none;
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.4);
	}
</style>