<script>
	let motivo_reposicion = { 
		motivo_r: ''
	};

	let motivo_changename = {
		dato: '', 
		motivo_c: '' 
	};

	const onSubmitHandler = e => {
		e.preventDefault();
		console.log(e)
	}
</script>

<svelte:head>
	<title>Policard-Tramites</title>
</svelte:head>
<div>
	<div class="container ">
		<h1 class="text-center m-1">Tramites</h1>
		<div class="row no-gutters m-5">
			<div class="col-lg-6 d-none d-lg-inline-block">
				<img
					src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
					alt=""
					class="img-fluid mb-3 d-none d-md-block"
				/>
			</div>
			<div class="col-lg-6">
				<div class="card m-2 border-danger">
					<div class="card-body">
						<h5 class="card-title">Reposicion de credencial</h5>
						<p class="card-text">
							¿Perdiste tu credencial?
							<br />
							Solicita una nueva ahora.
						</p>
						<!-- Button trigger modal -->
						<button
							type="button"
							class="btn btn-danger"
							data-bs-toggle="modal"
							data-bs-target="#staticBackdrop"
						>
							Solicitar
						</button>

						<!-- Modal -->
						<div
							class="modal fade"
							id="staticBackdrop"
							data-bs-backdrop="static"
							data-bs-keyboard="false"
							tabindex="-1"
							aria-labelledby="staticBackdropLabel"
							aria-hidden="true"
						>
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="staticBackdropLabel">
											Tramitar Reposición de la credencial
										</h5>
										<button
											type="button"
											class="btn-close"
											data-bs-dismiss="modal"
											aria-label="Close"
										/>
									</div>
									<div class="modal-body">
										<form on:submit={onSubmitHandler}>
											<div class="mb-3">
												<label for="message-text" class="col-form-label">Escribe tu motivo:</label>
												<textarea bind:value={motivo_reposicion.motivo_r}
													class="form-control"
													id="motivo_r"
													placeholder="Explica tus razones"
												/>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
													>Cerrar</button
												>
												<button class="btn btn-success" data-bs-dismiss="modal"
													>Enviar</button
												>
											</div>
										</form>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div class="card m-2 border-warning">
					<div class="card-body">
						<h5 class="card-title">Correcion de datos</h5>
						<p class="card-text">Solicita cambiar alguno de los datos de tu credencial.</p>
						<button
							type="button"
							class="btn btn-warning text-black btn btn-primary"
							data-bs-toggle="modal"
							data-bs-target="#exampleModal"
							data-bs-whatever="@getbootstrap">Solicitar</button
						>

						<div
							class="modal fade"
							id="exampleModal"
							tabindex="-1"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true"
						>
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="exampleModalLabel">Corrección de Datos</h5>
										<button
											type="button"
											class="btn-close"
											data-bs-dismiss="modal"
											aria-label="Close"
										/>
									</div>
									<div class="modal-body">
										<form on:submit={onSubmitHandler}>
											<div class="mb-3">
												<label for="recipient-name" class="col-form-label"
													>¿Que dato de tu credencial quieres cambiar?</label
												>
												<input bind:value={motivo_changename.dato}
													type="text"
													class="form-control"
													id="dato"
													placeholder="Ej. Mi nombre 'Eduardo'"
												/>
											</div>
											<div class="mb-3">
												<label for="message-text" class="col-form-label">Motivo:</label>
												<textarea bind:value={motivo_changename.motivo_c}
													class="form-control"
													id="motivo_c"
													placeholder="Explica tus razones"	
												/>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
													>Cerrar</button
												>
												<button class="btn btn-success" data-bs-dismiss="modal"
													>Enviar</button
												>
											</div>
										</form>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
