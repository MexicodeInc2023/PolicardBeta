<script>
	import logo1 from '../../../src/lib/img/favicon.ico';
  import imagen1 from '../../../src/lib/img/5.png'
  import imagen2 from '../../../src/lib/img/2.png'
  import imagen3 from '../../../src/lib/img/1.png'
  import beneficios from '../../../src/lib/img/beneficios.jpg'
  import funcionalidad from '../../../src/lib/img/funcionalidad.png'
  import cr from '../../../src/lib/img/cr.png'
</script>

<body>
	<section class="banner">
		<div>
			<img src={logo1} alt="Logo" class="logo" />
		</div>

		<br />

		
    <div class="container">

      <div id="carrusel-contenido">
        <div id="carrusel-caja">
            <div class="carrusel-elemento">
                <img class="imagen1" src={imagen1} alt="imagen1">
            </div>
            <div class="carrusel-elemento">   
                <img class="imagen2" src={imagen2} alt="imagen2">
            </div>
            <div class="carrusel-elemento">   
                <img class="imagen3" src={imagen3} alt="imagen3">                        
            </div>
        </div>
    </div>

		<div class="grey-bg container-fluid">
			<section id="minimal-statistics">
				<div class="row">
					<div class="col-12 mt-3 mb-1">
						<h4 class="text-uppercase">PREGUNTAS SOBRE POLICARD</h4>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-3 col-sm-6 col-12">
						<div class="card">
							<div class="card-content">
								<div class="card-body">
									<div class="media d-flex">
										<div class="align-self-center">
											<i class="icon-pencil primary font-large-2 float-left" />
										</div>
										<div class="media-body text-right">
                      <img src={funcionalidad} class="imgc" alt="funcionalidad">
											<h5 class="titlecard">¿Que es POLICARD?</h5>
											<span class="pcard"
												> <br /> POLICARD es un Sistema de credencialización digitalizado, que se encarga de
                        llevar acabo del control de los recursos otorgados como la identidad en la institución  hacia los alumnos de la Universidad Politecnica de Tapachula</span
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 col-12">
						<div class="card">
							<div class="card-content">
								<div class="card-body">
									<div class="media d-flex">
										<div class="align-self-center">
											<i class="icon-speech warning font-large-2 float-left" />
										</div>
										<div class="media-body text-right">
                      <img src={beneficios} class="imgc" alt="beneficios">
											<h5 class="titlecard">¿QUE BENEFICIOS OBTENDRÉ CON LA CREDENCIAL?</h5>
											<span class="pcard">  Con tu credencial digitalizada puedes obtener los siguientes beneficios. <br> </span> 
                      <br/>
                      <li class="pcard1">Visualización de perfil mediante Código QR</li>
                      <li class="pcard1">Visualización 24/7 365 dias</li>
                      <li class="pcard1">Podrás hacer tramites escolares</li>
                      <li class="pcard1">Tambien puedes identificarte con personal de seguridad</li>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 col-12">
						<div class="card">
							<div class="card-content">
								<div class="card-body">
									<div class="media d-flex">
										<div class="align-self-center">
											<i class="icon-graph success font-large-2 float-left" />
										</div>
										<div class="media-body text-right">
                      <img src={funcionalidad} class="imgc" alt="funcionalidad">
											<h5 class="titlecard">¿PARA QUE SIRVE LA CREDENCIAL DIGITAL?</h5>
											<span class="pcard"
												> <br/>Esta credencial servirá para identificar a los alumnos de la Universidad Politecnica de Tapachula, mediante 
                        una plataforma creada por Mexi-Code. Esto basandonos en las normas establecidas por la institución.  <br/>   </span
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 col-12">
						<div class="card">
							<div class="card-content">
								<div class="card-body">
									<div class="media d-flex">
										<div class="align-self-center">
											<i class="icon-pointer danger font-large-2 float-left" />
										</div>
                    
										<div class="media-body text-right">
                     
                      <img src={logo1} class="imgc" alt="lgo1">
                      <h5 class="titlecard">¿CÓMO SE DESARROLLO POLICARD?</h5>
											<span class="pcard">  POLICARD fue creada en relación a las normas y reglas establecidas por el 
                        comite de proyectos integradores, el cual decidieron que el desarrollo fuera con las siguientes tecnologias. <br> </span> 
                      <br/>
                      <li class="pcard1">Svelte</li>
                      <li class="pcard1">Django</li>
                      <li class="pcard1">Postgres SQL</li>
                      <li class="pcard1">Bootstrap</li>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

        <div class="grey-bg container-fluid">
          <section id="minimal-statistics">
            <div class="row">
              <div class="col-12 mt-3 mb-1">
                <h4 class="text-uppercase">Aun veré que pongo aca</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="align-self-center">
                          <i class="icon-pencil primary font-large-2 float-left" />
                        </div>
                        <div class="media-body text-right">
                          <img src={funcionalidad} class="imgc" alt="funcionalidad">
                          <h5 class="titlecard">¿Que es POLICARD?</h5>
                          <span class="pcard"
                            > <br /> POLICARD es un Sistema de credencialización digitalizado, que se encarga de
                            llevar acabo del control de los recursos otorgados como la identidad en la institución  hacia los alumnos de la Universidad Politecnica de Tapachula</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="align-self-center">
                          <i class="icon-speech warning font-large-2 float-left" />
                        </div>
                        <div class="media-body text-right">
                          <img src={beneficios} class="imgc" alt="beneficios">
                          <h5 class="titlecard">¿QUE BENEFICIOS OBTENDRÉ CON LA CREDENCIAL?</h5>
                          <span class="pcard">  Con tu credencial digitalizada puedes obtener los siguientes beneficios. <br> </span> 
                          <br/>
                          <li class="pcard1">Visualización de perfil mediante Código QR</li>
                          <li class="pcard1">Visualización 24/7 365 dias</li>
                          <li class="pcard1">Podrás hacer tramites escolares</li>
                          <li class="pcard1">Tambien puedes identificarte con personal de seguridad</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="align-self-center">
                          <i class="icon-graph success font-large-2 float-left" />
                        </div>
                        <div class="media-body text-right">
                          <img src={funcionalidad} class="imgc" alt="funcionalidad">
                          <h5 class="titlecard">¿PARA QUE SIRVE LA CREDENCIAL DIGITAL?</h5>
                          <span class="pcard"
                            > <br/>Esta credencial servirá para identificar a los alumnos de la Universidad Politecnica de Tapachula, mediante 
                            una plataforma creada por Mexi-Code. Esto basandonos en las normas establecidas por la institución.  <br/>   </span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="align-self-center">
                          <i class="icon-pointer danger font-large-2 float-left" />
                        </div>
                        
                        <div class="media-body text-right">
                         
                          <img src={logo1} class="imgc" alt="lgo1">
                          <h5 class="titlecard">¿CÓMO SE DESARROLLO POLICARD?</h5>
                          <span class="pcard">  POLICARD fue creada en relación a las normas y reglas establecidas por el 
                            comite de proyectos integradores, el cual decidieron que el desarrollo fuera con las siguientes tecnologias. <br> </span> 
                          <br/>
                          <li class="pcard1">Svelte</li>
                          <li class="pcard1">Django</li>
                          <li class="pcard1">Postgres SQL</li>
                          <li class="pcard1">Bootstrap</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
			</section>
		</div>
	
</body>

<style>
	.grey-bg {
		background-color: #f5f7fa;
	}
	.banner {
		background-image: url('../../lib/img/background.png');
		background-size: cover;
		background-position: 0 0, top left;
		background-repeat: no-repeat;
		padding: 100px 0;
	}

 
  
	.text-uppercase{
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

  .titlecard{
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

  .pcard{
    font-size: 1.2em;
		
		font-weight: 600;
		text-transform: none;
		padding: 18px 0 0 0;
		transition: all 0.5s;
    text-align:justify;
    color: #000;
  }


  .pcard1{
    font-size: 1em;
		font-weight: 600;
		text-transform: none;
		transition: all 0.5s;
    text-align:justify;
    color: #000;
  }
	


	.logo {
		position: absolute;
		width: 135px;
		height: 135px;
		left: 134px;
		top: 0px;
	}
  
  .imgc{
    display:block;
    margin:auto;
    position: relative;
    width: 100px;
  }


  #carrusel-caja {
    -moz-animation: automatizacion 15s infinite linear;
    -o-animation: automatizacion 15s infinite linear;
    -webkit-animation: automatizacion 15s infinite linear;
    animation: automatizacion 15s infinite linear;
    -webkit-transition: all 0.75s ease;
    -moz-transition: all 0.75s ease;
    -ms-transition: all 0.75s ease;
    -o-transition: all 0.75s ease;
    transition: all 0.75s ease;
    height: 500px;
    width: 300%;
}
#carrusel-contenido {
    margin: 0 auto;
    overflow: hidden;
    text-align: left;
}
.imagen1{
    height: 600px;
    width: 100%;
}

.imagen2{
    height: 600px;
    width: 100%;
}

.imagen3{
    height: 600px;
    width: 100%;
}
.carrusel-elemento {
    float: left;
    width: 33.333%;
}


@-moz-keyframes automatizacion {
    0% {
        margin-left: 0;
    }
    30% {
        margin-left: 0;
    }
    35% {
        margin-left: -100%;
    }
    65% {
        margin-left: -100%;
    }
    70% {
        margin-left: -200%;
    }
    95% {
        margin-left: -200%;
    }
    100% {
        margin-left: 0;
    }
}
@-webkit-keyframes automatizacion {
    0% {
        margin-left: 0;
    }
    30% {
        margin-left: 0;
    }
    35% {
        margin-left: -100%;
    }
    65% {
        margin-left: -100%;
    }
    70% {
        margin-left: -200%;
    }
    95% {
        margin-left: -200%;
    }
    100% {
        margin-left: 0;
    }
}
@keyframes automatizacion {
    0% {
        margin-left: 0;
    }
    30% {
        margin-left: 0;
    }
    35% {
        margin-left: -100%;
    }
    65% {
        margin-left: -100%;
    }
    70% {
        margin-left: -200%;
    }
    95% {
        margin-left: -200%;
    }
    100% {
        margin-left: 0;
    }
}

 

</style>
