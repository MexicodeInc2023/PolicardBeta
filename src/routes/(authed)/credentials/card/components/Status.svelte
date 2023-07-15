<script>
	import { statusCredentials, procedureTrue } from '../../../../../stores/states';

	let subject = 'Credencial';
	let pendingDot = '';
	let rejectedDot = '';
	let acceptedDot = '';

	procedureTrue.subscribe((value) => (value ? (subject = 'Tramite') : (subject = 'Credencial')));

	$: switch ($statusCredentials) {
		case 'denegada':
			rejectedDot = 'big-dot-rejected';
			acceptedDot = '';
			pendingDot = '';
			break;
		case 'aceptado':
			rejectedDot = '';
			acceptedDot = 'big-dot-accepted';
			pendingDot = '';
			break;
		case 'revision':
			rejectedDot = '';
			acceptedDot = '';
			pendingDot = 'big-dot-pending';
			break;
		case 'eliminado':
			rejectedDot = 'big-dot-rejected';
			acceptedDot = '';
			pendingDot = '';
			break;
		default:
			rejectedDot = '';
			acceptedDot = '';
			pendingDot = '';
	}
	// Obtener la fecha actual
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	let yyyy = today.getFullYear();

	today = dd + '/' + mm + '/' + yyyy;
</script>

<div class="container">
	<section>
		<div class="container py-5 h-100">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col">
					<div class="card card-stepper" style="border-radius: 10px;">
						<div class="card-body p-4">
							<div class="d-flex justify-content-between align-items-center">
								<div class="d-flex flex-column">
									<span class="lead fw-normal">Estado de tu {subject}</span>
									<span class="text-muted small">Fecha</span>
									{today}
								</div>
							</div>
							<hr class="my-4" />
							<div
								class="d-flex flex-row justify-content-between align-items-center align-content-center"
							>
								<span class="d-flex justify-content-center align-items-center dot {rejectedDot}" />
								<hr class="flex-fill track-line" />
								<span class="d-flex justify-content-center align-items-center dot {pendingDot}" />
								<hr class="flex-fill track-line" />
								<span class="d-flex justify-content-center align-items-center dot {acceptedDot}">
									<i class="fa fa-check text-white" /></span
								>
							</div>

							<div class="d-flex flex-row justify-content-between align-items-center">
								<div class="d-flex flex-column align-items-start">
									<span>Rechazado</span>
								</div>
								<div class="d-flex flex-column justify-content-center">
									<span>En Revision</span>
								</div>
								<div class="d-flex flex-column justify-content-center align-items-center">
									<span>Revisada</span>
								</div>
							</div>
						</div>
						{#if $statusCredentials === 'denegada' || $statusCredentials === 'eliminado'}
							<!-- content here -->
							<div class="m-4 alert alert-dismissible alert-danger">
								<h2>Rechazado ❌</h2>
								<p>
									Tus datos han sido rechazados, comunicate con las autoridades correspondientes.
								</p>
							</div>
						{:else if $statusCredentials === 'aceptado'}
							<div class="m-4 alert alert-dismissible alert-success">
								<h2>LISTO ✅ - Tus datos han sido aprobados</h2>
								<p>En breve podras visualizar tu credencial</p>
							</div>
						{:else if $statusCredentials === 'revision'}
							<div class="m-4 alert alert-dismissible alert-info">
								<h2>En Revision 🔎</h2>
								<p>Tus datos se estan comprobando. Mantente al pendiente</p>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.track-line{height:2px!important;background-color:#616ae7;opacity:1}.dot{height:10px;width:10px;margin-left:3px;margin-right:3px;margin-top:0;background-color:#96b6a8;border-radius:50%;display:inline-block}.big-dot-pending{height:20px;width:20px;margin-left:0;margin-right:0;margin-top:0;background-color:#f7b500;border-radius:50%;display:inline-block}.big-dot-accepted{height:20px;width:20px;margin-left:0;margin-right:0;margin-top:0;background-color:#18be78;border-radius:50%;display:inline-block}.big-dot-rejected{height:20px;width:20px;margin-left:0;margin-right:0;margin-top:0;background-color:#ff5630;border-radius:50%;display:inline-block}.card-stepper{z-index:0}
</style>
