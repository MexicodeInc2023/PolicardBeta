<script>
	import XD2 from '../../../src/lib/img/credentialization.png';
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

			<div class="row lol">
				<div class="col-xs-4 col-sm-6 col-md-6">
					<h1 class="infoex">Policard</h1>
					<p class="infoexx">
						Toda la información que necesites. <br />
						Te explicamos los detalles sobre esta credencial, en esta sección.
					</p>
				</div>

				<div class="col-xs-4 col-sm-6 col-md-1" />

				<div class="col-xs-4 col-sm-6 col-md-5">
					<div class="col-lg-6 d-none d-lg-block lol">
						<img src={XD2} class="imgpolicard" alt="policard" />
					</div>
				</div>
			</div>
			<br />
			<br />

			

		<div class="grey-bg container-fluid">
			<section id="minimal-statistics">
				<div class="row">
					<div class="col-12 mt-3 mb-1">
						<h4 class="text-uppercase">DUDAS Y MAS INFORMACIÓN</h4>
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
											<h5 class="titlecard">¿COMO FUNCIONA LA CREDENCIAL?</h5>
											<span
												> <br /> Necesitas tu nombre, en caso de tener mas de un nombre debesponerlos</span
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
											<span
												>Obligatorio <br /> Debe ser necesario registrar tus apellidos, paterno y materno.
											</span>
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
											<span
												>Obligatorio. <br /> Es un dato esencial para ru credencial, te identifica con
												tu dato escolar.
											</span>
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
											<h5 class="titlecard">¿COMO SE HIZO POLICARD?</h5>
											<span
												>Obligatorio. <br /> Dato esencial para ubicar en que programa academico estas
												vinculado y registrado.</span
											>
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

	h1 {
		font-style: normal;
		font-weight: 700;
		font-size: 5rem;
		background: linear-gradient(180deg, #7352f3 0%, #5a40c0 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		background-image: url('../../lib/img/bg-sidebar-mobile.svg');
	}

	

	.infoex {
		font-style: normal;
		font-weight: 700;
		font-size: 5rem;
		background: linear-gradient(180deg, #7352f3 0%, #5a40c0 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.infoexx {
		font-style: normal;
		font-weight: 600;
		font-size: 2rem;
		background: black;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		position: relative;
	}

	.imgpolicard {
		position: relative;
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
