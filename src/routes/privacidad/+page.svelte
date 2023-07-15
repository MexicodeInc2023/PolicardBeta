<script>
    import Logo from '../../lib/img/favicon.ico';
    import privA from '../../lib/img/privacidad.png';
</script>

<svelte:head>
	<title>Policard</title>
</svelte:head>

<body>
	<section class="banner">
		<div>
			<a href="/">
				<img src={Logo} alt="Logo" class="logo" loading="lazy" decoding="async" />
			</a>
		</div>
		<br /><br /><br /><br />
		</section>

		<section>
		<div class="container grid-template-columns">
			
			<h4 class="text-uppercase">AVISO DE PRIVACIDAD</h4>
		</div>

        <br /><br />

        <div class="container">
			<div class="row main">
				<div class="col-lg-6 d-none d-lg-block privA">
					<img
						src={privA}
						class="img-fluid"
						alt="policard"
						loading="lazy"
						decoding="async"
						height="100%"
						width="100%"
					/>
				</div>

                <div class="col-xl-6 col-lg-8">
					
                    <h4 class="text2">Tus datos estan seguros</h4>

					<p class="banner-text">
						En cumplimiento con la legislación vigente en materia de protección de datos personales, 
                        la Universidad Politecnica de Tapachula pone a disposición de sus usuarios el presente 
                        Aviso de Privacidad para informar de manera clara y transparente sobre el tratamiento de 
                        los datos personales recolectados a través de Policard.
					</p>
                    
				</div>
				
			</div>
		</div>

			<br /><br /><br />

			<div>
				<div class="row main">
					<div class="col-lg-2 d-none d-lg-block">
						
					</div>
	
					<div class="col-xl-8 col-lg-8">
						<h4 class="text3">- Responsable del tratamiento de datos -</h4>

						<p class="banner-text">
							El responsable del tratamiento de los datos personales es la 
							Universidad Politecnica de Tapachula, con domicilio en Carretera a Puerto Madero Km.23+500. 
							Si tienes alguna pregunta o consulta relacionada con la protección de tus datos personales, 
							puedes contactarnos a través los sitios oficiales de la Universidad.
						</p>
						
					</div>


					<div class="col-xl-2 col-lg-8">
						
					</div>
				</div>
			</div>

				<div>
					<div class="row main">
						<div class="col-lg-2 d-none d-lg-block">
							
						</div>
		
						<div class="col-xl-8 col-lg-8">
							<h4 class="text3">- Datos personales recopilados -</h4>
	
							<p class="banner-text">
								El Sistema de Credencialización Digitalizada de la Universidad puede 
								recolectar y procesar los siguientes datos personales:
							</p>

							<li> Información de identificación: nombre completo, 
								 matricula, programa academico, fotografía, firma.
							</li>

							<li> 
								Datos de contacto: dirección de correo electrónico, número de teléfono, dirección física.
						   </li>

						    <li> 
								Información académica: programa de estudio, número de estudiante, historial académico.
					   		</li>

							<li> 
								Datos biométricos: huellas dactilares, reconocimiento facial.
							</li>

							
							
						</div>
	
	
						<div class="col-xl-2 col-lg-8">
							
						</div>
					</div>
				</div>

				<div>
					<div class="row main">
						<div class="col-lg-2 d-none d-lg-block">
							
						</div>
		
						<div class="col-xl-8 col-lg-8">
							<h4 class="text3">- Finalidad del tratamiento -</h4>
	
							<p class="banner-text">
								Los datos personales recopilados a través del Sistema de Credencialización 
								Digitalizada son utilizados con las siguientes finalidades:
							</p>

							<li> 
								Creación y gestión de credenciales estudiantiles.
						   </li>

						   <li> 
								Control de acceso a las instalaciones universitarias.
						  </li>

						   <li> 
								Identificación y autenticación del estudiante en trámites y servicios internos.
						   </li>

						   <li> 
							Mantenimiento de la seguridad y prevención de fraudes.
					   	   </li>  
						</div>
	
	
						<div class="col-xl-2 col-lg-8">
							
						</div>
					</div>
				</div>

				<div>
					<div class="row main">
						<div class="col-lg-2 d-none d-lg-block">
							
						</div>
		
						<div class="col-xl-8 col-lg-8">
							<h4 class="text3">- Transferencia de datos -</h4>
	
							<p class="banner-text">
								La Universidad puede compartir tus datos personales con terceros 
								únicamente en los siguientes casos:
							</p>
							
							<li>
								Proveedores de servicios: para llevar a cabo las funciones 
								necesarias para el funcionamiento del Sistema de 
								Credencialización Digitalizada
							</li>

							<li>
								Autoridades competentes: en cumplimiento de obligaciones
								 legales o por requerimiento judicial.
							</li>

							<li>
								Otros usuarios: en caso de que decidas compartir cierta i
								nformación a través de funcionalidades específicas del sistema.
							</li>
							
						</div>
	
	
						<div class="col-xl-2 col-lg-8">
							
						</div>
					</div>
				</div>

				<div>
					<div class="row main">
						<div class="col-lg-2 d-none d-lg-block">
							
						</div>
		
						<div class="col-xl-8 col-lg-8">
							<h4 class="text3">- Medidas de seguridad -</h4>
	
							<p class="banner-text">
								La Universidad implementa medidas de seguridad técnicas, organizativas y 
								administrativas apropiadas para proteger los datos personales de acceso 
								no autorizado, pérdida, alteración o destrucción. 
								Estas medidas incluyen el uso de encriptación, protección de acceso y 
								políticas internas de privacidad.
							</p>							
						</div>
	
	
						<div class="col-xl-2 col-lg-8">
							
						</div>
					</div>
				</div>
	
				<div >
					<div class="row main">
						<div class="col-lg-2 d-none d-lg-block">
							
						</div>
		
						<div class="col-xl-8 col-lg-8">
							<h4 class="text3">- Cambios al aviso de privacidad -</h4>
	
							<p class="banner-text">
								Como titular de los datos personales, tienes derecho a acceder, rectificar, 
								cancelar u oponerte al tratamiento de tus datos. Para ejercer estos derechos
								 o realizar cualquier consulta relacionada con tus datos personales, 
								 puedes ponerte en contacto con nosotros utilizando los datos de contacto 
								 indicados al final de este aviso.
							</p>							
						</div>
	
	
						<div class="col-xl-2 col-lg-8">
							
						</div>
					</div>
				</div>

				<div>
					<div class="row main">
						<div class="col-lg-2 d-none d-lg-block">
							
						</div>
		
						<div class="col-xl-8 col-lg-8">
							<h4 class="text3">- Conservación de los datos -</h4>
	
							<p class="banner-text">
								Mantendremos tus datos personales durante el tiempo necesario para cumplir 
								con las finalidades establecidas en este aviso, a menos que exista un requisito
								 legal o una necesidad legítima de conservarlos por un período más prolongado.
							</p>
							
						</div>
	
	
						<div class="col-xl-2 col-lg-8">
							
						</div>
					</div>
				</div>

				<div>
					<div class="row main">
						<div class="col-lg-2 d-none d-lg-block">
							
						</div>
		
						<div class="col-xl-8 col-lg-8">
							<h4 class="text3">- Uso de coookies y tecnologias similares -</h4>
	
							<p class="banner-text">
								Podemos utilizar cookies u otras tecnologías similares en el 
								Sistema de Credencialización Digitalizada para mejorar tu experiencia y 
								recopilar información estadística. Puedes configurar tu navegador para rechazar 
								las cookies, aunque esto puede afectar la funcionalidad del sistema.
							</p>
							
						</div>
	
	
						<div class="col-xl-2 col-lg-8">
							
						</div>
					</div>
				</div>
	
	
					
				
	</section>
</body>


<style>
   .banner{background-image:url(../../lib/img/background.png);background-size:cover;background-position:0 0,top left;background-repeat:no-repeat;padding:50px 0;position:relative}.logo{position:absolute;width:135px;height:135px;left:134px;top:0}.text-uppercase{font-size:4em;letter-spacing:.1em;font-weight:600;text-transform:uppercase;padding:18px 0 0;transition:all .5s;color:#000;text-align:center;color:#5a40c0}.text2{font-size:2em;letter-spacing:.1em;font-weight:700;text-transform:uppercase;padding:18px 0 0;transition:all .5s;color:#000;text-align:center;color:#18BE78}.text3{font-size:1.6em;letter-spacing:.1em;font-weight:700;text-transform:uppercase;padding:18px 0 0;transition:all .5s;color:#000;text-align:center;color:#18BE78}.banner-text{font-style:normal;font-weight:400;font-size:1.4rem;text-align:justify;color:#000}.privA{display:block;margin:auto;position:relative;width:325px}
</style>