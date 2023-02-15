<body>
	<br />

	<div class="container">
		<h4 class="text-uppercase">PREGUNTAS FRECUENTES</h4>
		<br />
		<div class="accordion" id="accordionExample">
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingOne">
					<button
						class="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
						aria-expanded="true"
						aria-controls="collapseOne"
					>
						<h4 class="titlecard">¿Que pasa si pierdo la credencial?</h4>
					</button>
				</h2>
				<div
					id="collapseOne"
					class="accordion-collapse collapse show"
					aria-labelledby="headingOne"
					data-bs-parent="#accordionExample"
				>
					<div class="accordion-body">
						<p class="pcard">
							El SCD POLICARD no se hace responsable de las crendenciales perdidas. En caso de
							perder acceso a la plataforma, puedes hablar con un administrativo para recuperar tu
							cuenta. El precio de la reposición de la credencial puede variar entre las
							circunstancias sucedidas y puede tener valor de $100.00 MXN a $300.00 MXN.
						</p>
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingTwo">
					<button
						class="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseTwo"
						aria-expanded="false"
						aria-controls="collapseTwo"
					>
						<h4 class="titlecard">¿Que datos necesito para registrarme?</h4>
					</button>
				</h2>
				<div
					id="collapseTwo"
					class="accordion-collapse collapse"
					aria-labelledby="headingTwo"
					data-bs-parent="#accordionExample"
				>
					<div class="accordion-body">
						<p class="pcard">
							Obligatoriamente necesitas tu nombre completo, matricula, fecha de nacimiento,
							programa academico, una foto de perfil y tu cuenta institucional. Opcionalmente puedes
							poner las alergias que padece, contactos de emergencia y respaldos.
						</p>
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingThree">
					<button
						class="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseThree"
						aria-expanded="false"
						aria-controls="collapseThree"
					>
						<h4 class="titlecard">¿Por que es importante tener la credencial?</h4>
					</button>
				</h2>
				<div
					id="collapseThree"
					class="accordion-collapse collapse"
					aria-labelledby="headingThree"
					data-bs-parent="#accordionExample"
				>
					<div class="accordion-body">
						<p class="pcard">
							La credencial un privilegio que el alumno adquiere cuando es aceptado por la
							institución, donde puedes identificarte con orgullo con la Universidad Politecnica de
							Tapachula, es un valor y un obsequio de prestigio y perseverancia.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>

<style>
	.card {
		height: 325px;
		transition: all 0.5s;
		box-shadow: px 15px 30px rgba(25, 25, 25, 0.247), -15px -15px 30px rgba(60, 60, 60, 0.082);
		text-align: center;
		overflow: hidden;
	}

	.text-uppercase {
		font-size: 3em;
		letter-spacing: 0.1em;
		font-weight: 600;
		text-transform: uppercase;
		padding: 18px 0 0 0;
		transition: all 0.5s;
		color: #000;
		text-align: center;
		color: #5a40c0;
	}

	.titlecard {
		font-size: 1.5em;
		letter-spacing: 0.1em;
		font-weight: 600;
		text-transform: uppercase;
		padding: 18px 0 0 0;
		transition: all 0.5s;
		color: #000;
		text-align: center;
		color: #5a40c0;
	}

	.pcard {
		font-size: 1.2em;

		font-weight: 600;
		text-transform: none;
		padding: 18px 0 0 0;
		transition: all 0.5s;
		text-align: justify;
		color: #000;
	}

	.imgc {
		display: block;
		margin: auto;
		position: relative;
		width: 100px;
	}

	@media only screen and (max-width: 375px) {
		.container {
			position: relative;
			margin-top: 705px;
			margin-left: 20px;
			margin-right: 3px;
		}
	}
</style>
