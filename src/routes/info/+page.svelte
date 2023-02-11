<script>
	import logo1 from '../../../src/lib/img/favicon.ico';
  import imagen1 from '../../../src/lib/img/5.png'
  import imagen2 from '../../../src/lib/img/2.png'
  import imagen3 from '../../../src/lib/img/1.png'
  import beneficios from '../../../src/lib/img/beneficios.jpg'
  import funcionalidad from '../../../src/lib/img/funcionalidad.png'
  import gratis from '../../../src/lib/img/gratis.png'
  import cr from '../../../src/lib/img/cr.png'
  import qr from '../../../src/lib/img/qr.png'
  import cross from '../../../src/lib/img/cross.png'
  import acceso from '../../../src/lib/img/acceso.png'
  import estudiantes from '../../../src/lib/img/estudiantes.png'
  import verificar from '../../../src/lib/img/Verificar.png'
  import tramitar from '../../../src/lib/img/tramitar.png'
  import suma from '../../../src/lib/img/suma.png'

  
</script>

<body>
	<div class="banner">
		<div>
			<img src={logo1} alt="Logo" class="logo" />
		</div>
  </div>
		
    <div class="container grey-bg container-fluid">
      <h4 class="text-uppercase">MAS INFORMACIÓN</h4>
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
        </div><br/>
    </div>
    </div>

    <br/>

		<div class="container grey-bg container-fluid">
			<section id="minimal-statistics">
				<div class="row">
					<div class="col-12 mt-3 mb-1">
						<h4 class="text-uppercase">¿PARA QUE SIRVE POLICARD?</h4>
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
                      <img src={estudiantes} class="imgc" alt="estudiantes">
											<h5 class="titlecard">Estudiantes</h5>
											<span class="pcard"
												> Exclusivamente para los alumnos de la Universidad Politecnica de Tapachula.</span
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
                      <img src={verificar} class="imgc" alt="verificar">
											<h5 class="titlecard">Verificar</h5>
											<span class="pcard"> Se busca tener control sobre los alumnos que cursan los programas academicos.</span> 
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
                      <img src={tramitar} class="imgc" alt="tramitar">
											<h5 class="titlecard">Tramitar</h5>
											<span class="pcard"
												>Servirá como requisito el uso de la credencial para realizar tramites escolares y profesionales.   </span
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
                     
                      <img src={acceso} class="imgc" alt="acceso">
                      <h5 class="titlecard">Acceso</h5>
											<span class="pcard"> Servirá para ingresar a la institución y laboratorios del mismo, medida de seguridad. </span> 
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div><br/>
      </div>
      <br/>    

      <div class="container">
        <div class="grey-bg container-fluid">
          <section id="minimal-statistics">
            <div class="row">
              <div class="col-12 mt-3 mb-1">
                <h4 class="text-uppercase">VENTAJAS DE LA CREDENCIAL</h4>
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
                          <img src={gratis} class="imgc" alt="funcionalidad">
                          <h5 class="titlecard">GRATUITA</h5>
                          <span class="pcard"
                            >  No pagarás ningun centavo, la casa lo invita. Al menos este año.</span
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
                          <img src={cr} class="imgc" alt="beneficios">
                          <h5 class="titlecard">IDENTIFICACIÓN</h5>
                          <span class="pcard"> Indispensable en tu forma de ser en la institución.</span> 
                        
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
                          <img src={qr} class="imgc" alt="funcionalidad">
                          <h5 class="titlecard">CÓDIGO QR</h5>
                          <span class="pcard">Con solo escanear el Código QR, puedes ver tu perfil de SCD.</span>
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
                         
                          <img src={cross} class="imgc" alt="lgo1">
                          <h5 class="titlecard">CrossPlatform</h5>
                          <span class="pcard"> Puedes acceder a tu cuenta de SCD desde cualquier dispositivo. </span> 
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><br/>
			</section>

        


		</div>

    <div class="container">
      <div class="row">
          <div class="container-faq">
              <div >
                <h4 class="text-uppercase">¿PARA QUE SIRVE POLICARD?</h4>
              </div>

              <div class="item-faq">
                  <div class="question">
                      <h3 class="titlecard">¿Como puedo reponer mi credencial si la pierdo?</h3>
                      <div class="more"><i>+</i></div>
                  </div>
                  <div class="answer">
                      <p>Tu gfa.</p>
                  </div>
              </div>

              <div class="item-faq">
                  <div class="question">
                      <h3 class="titlecard">¿Que datos necesito para registrarme?</h3>
                      <div class="more"><i>+</i></div>
                  </div>
                  <div class="answer">
                      <p>Tu mama></p>
                  </div>
              </div>

              <div class="item-faq">
                  <div class="question">
                      <h3 class="titlecard">¿Necesito pagar para tener mi credencial?</h3>
                      <div class="more"><i>+</i></div>
                  </div>
                  <div class="answer">
                      <p>tu puta madre</p>
                  </div>
              </div>

              <div class="item-faq">
                  <div class="question">
                      <h3 class="titlecard">¿Cual es la vigencia de mi credencial?</h3>
                      <div class="more"><i>+</i></div>
                  </div>
                  <div class="answer">
                      <p>Belinda te amo</p>
                  </div>
              </div>

              

          </div>
      </div>
  </div>

    
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

  .card {
		height: 300px;
		transition: all 0.5s;
		box-shadow: px 15px 30px rgba(25, 25, 25, 0.247), -15px -15px 30px rgba(60, 60, 60, 0.082);
	  text-align: center;
		overflow: hidden;
	}



.container-faq {
    box-shadow: 0 0 15px -1px rgba(0,0,0,.1);
    padding: 30px;
}

.container-faq .title-faq {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 30px;
}

.container-faq .item-faq {
    box-shadow: 0 0 15px -1px rgba(0,0,0,.2);
    margin-bottom: 20px;
    border-radius: 10px;
}

.container-faq .item-faq .question {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(43, 51, 122, .2);
    padding: 20px 20px 20px 80px;
    transition: .4s;
}

.container-faq .item-faq .question .more {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 15px -1px rgba(0,0,0,.2);
    width: 40px;
    height: 40px;
    font-size: 1rem;
    cursor: pointer;
    transition: .4s;
}

.container-faq .item-faq .question .more:hover {
    box-shadow: 0 0 15px -1px rgba(0,0,0,.4);
}

.container-faq .item-faq .question span {
    position: absolute;
    left: 10px;
    font-size: 3rem;
    top: 10px;
    opacity: .1;
}

.container-faq .item-faq .answer {
    position: relative;
    padding: 0 20px 0 80px;
    overflow: hidden;
    height: 0;
    transition: .4s;
}

.container-faq .item-faq .answer p {
    font-size: 1.3rem;
}

.container-faq .item-faq .answer span {
    position: absolute;
    left: 10px;
    font-size: 3rem;
    top: -10px;
    opacity: .2;
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
