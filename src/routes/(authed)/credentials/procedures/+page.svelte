<script>
	let motivo_reposicion = {
		motivo_r: ''
	};

	let motivo_changename = {
		dato: '',
		motivo_c: ''
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(e)
	};
	let limpiar = () => {
		limpiars.value = ''
		motivo_r.value = ''
	};
	
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
			<div class="col" style="padding: 0 0 20px 0;">
				<div class="card text-center container">
					<div class="header">
						<div class="img-box">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="46"
								height="46"
								fill="currentColor"
								class="bi bi-card-checklist"
								viewBox="0 0 16 16"
							>
								<path
									d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
								/>
								<path
									d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
								/>
							</svg>
						</div>
						<h2 class="login_user">Nueva credencial</h2>
					</div>

					<div class="content">
						<h5 class="card-title htxt">Reposicion de credencial</h5>
						<p class="card-text">
							¿Perdiste tu credencial?
							<br />
							Solicita una nueva ahora.
						</p>

						<button
							type="button"
							class="data_reason"
							data-bs-toggle="modal"
							data-bs-target="#staticBackdrop"
						>
							Solicitar
						</button>

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
												<textarea
													bind:value={motivo_reposicion.motivo_r}
													class="form-control"
													id="motivo_r"
													placeholder="Explica tus razones"
												/>
											</div>
											<div class="modal-footer">
												<button type="reset" class="btn btn-secondary" data-bs-dismiss="modal"
													>Cerrar</button
												>
												<button id='limpiar' class="btn btn-success" data-bs-dismiss="modal"
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
			<div class="col" style="padding: 50px 0 30px 0;">
				<div class="card text-center container register">
					<div class="header">
						<div class="img-box">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="46"
								height="46"
								class="bi bi-person-circle"
								viewBox="0 0 16 16"
							>
								<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
								<path
									fill-rule="evenodd"
									d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
								/>
							</svg>
						</div>
						<h2 class="register_user">Correcion de datos</h2>
					</div>

					<div class="content">
						<h5 class="card-title htxt">Datos de tu credencial</h5>
						<p class="card-text">Solicita cambiar alguno de los datos de tu credencial.</p>

						<button
							type="button"
							class="data_correction"
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
												<input
													bind:value={motivo_changename.dato}
													type="text"
													class="form-control"
													id="dato"
													placeholder="Ej. Mi nombre 'Eduardo'"
												/>
											</div>
											<div class="mb-3">
												<label for="message-text" class="col-form-label">Motivo:</label>
												<textarea
													bind:value={motivo_changename.motivo_c}
													class="form-control"
													id="motivo_c"
													placeholder="Explica tus razones"	
												/>
											</div>
											<div class="modal-footer">
												<button type="reset" class="btn btn-secondary" data-bs-dismiss="modal"
													>Cerrar</button
												>
												<button id='limpiars' class="btn btn-success" data-bs-dismiss="modal"
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
</div>

<style>
	.card {
		width: 18rem;
		height: 120px;
		transition: all 0.5s;
		box-shadow: 15px 15px 30px rgba(25, 25, 25, 0.247), -15px -15px 30px rgba(60, 60, 60, 0.082);
		text-align: center;
		overflow: hidden;
	}

	.card:hover {
		height: 22rem;
	}

	.card .header {
		padding: 30px 0 10px 0;
		margin: -12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #23c483;
	}

	.register .header {
		background: #7352f3;
	}

	.card .header .login_user {
		font-size: 1.2em;
		letter-spacing: 0.1em;
		font-weight: 600;
		text-transform: uppercase;
		padding: 18px 0 0 0;
		transition: all 0.5s;
		color: #000;
	}
	.register_user {
		font-size: 1.2em;
		letter-spacing: 0.1em;
		font-weight: 600;
		text-transform: uppercase;
		padding: 18px 0 0 0;
		transition: all 0.5s;
		color: #000;
	}
	.card .content {
		text-align: center;
		color: #212121;
		margin: 0 18px;
	}

	.htxt {
		font-weight: 600;
		font-size: 1.5rem;
		margin-top: 30px;
		margin-bottom: 22spx;
	}
	.data_reason {
		padding: 1.3em 3em;
		margin-top: 10px;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 2.5px;
		font-weight: 500;
		color: #000;
		background-color: #fff;
		border: none;
		border-radius: 45px;
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease 0s;
		cursor: pointer;
		outline: none;
	}
	.data_correction {
		padding: 1.3em 3em;
		margin-top: 10px;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 2.5px;
		font-weight: 500;
		color: #000;
		background-color: #fff;
		border: none;
		border-radius: 45px;
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease 0s;
		cursor: pointer;
		outline: none;
	}
	.data_reason:hover {
		background-color: #23c483;

		color: #fff;
		transform: translateY(-7px);
	}

	.data_correction:hover {
		background-color: #7352f3;
		color: #fff;
		transform: translateY(-7px);
	}
	.data_reason:active {
		transform: translateY(-1px);
	}
	.data_correction:active {
		transform: translateY(-1px);
	}
</style>
