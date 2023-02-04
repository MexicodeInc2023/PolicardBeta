<script>
    import XD2 from '../../../src/lib/img/credentialization.png';
    import logo1 from '../../../src/lib/img/favicon.ico';
    import datosp from '../../../src/lib/img/datosp.png';
    import requisitos from '../../../src/lib/img/requisitos.png';
</script>

<body>

    <section class="banner">
		<div>
			<img src={logo1} alt="Logo" class="logo" />
		</div>
    
        <br>

    <div class="container">
        <div class="row lol">
            <div class="col-xs-4 col-sm-6 col-md-6"> 
                <h1 class="infoex">Policard</h1>
                <p class="infoexx">
                Toda la información que necesites. <br>
                Te explicamos los detalles sobre esta credencial, en esta sección.
                </p>
            </div>

            <div class="col-xs-4 col-sm-6 col-md-1">
                
                </div>
            
            <div class="col-xs-4 col-sm-6 col-md-5">
                <div class="col-lg-6 d-none d-lg-block lol">
                    <img  src={XD2} class="imgpolicard" alt="policard" />
                </div>
            </div>
        </div>
        <br>
        <br> 
        

        <div class="colortext">
            <h1>ESTO ES LO QUE NECESITAS</h1>
        </div>
        <br>
    
        
        <div class="row lol">
            <div class="col">
                <div class="container border-success">
                    <img src={datosp} alt="datosp" class="datosp">
                </div>
            </div>

           <div class="col container border-success">
            <h2>CREDENCIAL</h2>
            </div>

            <div class="col">
                <div class="container border-success">
                    <img src= {requisitos} alt="requisitos" class="requisitos">
                </div>
            </div>
            

        </div>

        <br>
        <br>
        <br>
            <br>

        <div class="row lol">
            <div class="col">
                <div class="container border-success">
                    <div class="card-body">
                        <h5 class="card-title htxt">Datos necesarios</h5>
                        <li>Nombre (s)</li>
                        <li>Apellidos</li>
                        <li>Carrera y Matricula</li>
                        <li>Fecha de Nacimiento</li>
                        <li>Correo Institucional</li>
                        <li>Fotografia personal</li>
                        
                    </div>
                </div>
            </div>

           <div class="col container border-success">
            <p class="detalles">Es importante comprender que el sistema de credencialización digitalizada de
                la Universidad Politécnica de Tapachula es la semilla principal donde nuestros
                alumnos pueden tener una identidad propia apegado a su carrera, respetando
                su privacidad y los datos. Tambien servirá para trámites escolares y profesionales
            </p>
            </div>

            <div class="col">
                <div class="container border-success">
                    <div class="card-body">
                        <h5 class="card-title htxt">Requisitos</h5>
                        <li>Estudiante en activo</li>
                        <li>Cuota de Recuperación</li>
                        <li>Estatus Regular o Irregular</li>
                        <li>Contar con una cuenta Institucional</li>
                        <li>No tener antecedentes penales</li>
                        <li>No tener penalizaciones en la institución</li>
                    </div>
                </div>
            </div>


        </div>
    </div>


    <div class="grey-bg container-fluid">
        <section id="minimal-statistics">
          <div class="row">
            <div class="col-12 mt-3 mb-1">
              <h4 class="text-uppercase">¿QUE DATOS NECESITAS PARA OBTENER LA CREDENCIAL DIGITAL?</h4>
              <p>A continuación te presentaremos los datos a considerar:</p>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-sm-6 col-12"> 
              <div class="card">
                <div class="card-content">
                  <div class="card-body">
                    <div class="media d-flex">
                      <div class="align-self-center">
                        <i class="icon-pencil primary font-large-2 float-left"></i>
                      </div>
                      <div class="media-body text-right">
                        <h3>Nombre (s)</h3>
                        <span>Obligatorio. <br> Necesitas tu nombre, en caso de tener mas de un nombre debes ponerlos</span>
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
                        <i class="icon-speech warning font-large-2 float-left"></i>
                      </div>
                      <div class="media-body text-right">
                        <h3>Apellidos</h3>
                        <span>Obligatorio <br> Debe ser necesario registrar tus apellidos, paterno y materno. </span>
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
                        <i class="icon-graph success font-large-2 float-left"></i>
                      </div>
                      <div class="media-body text-right">
                        <h3>Matricula</h3>
                        <span>Obligatorio. <br> Es un dato esencial para ru credencial, te identifica con tu dato escolar. </span>
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
                        <i class="icon-pointer danger font-large-2 float-left"></i>
                      </div>
                      <div class="media-body text-right">
                        <h3>Carrera</h3>
                        <span>Obligatorio. <br> Dato esencial para ubicar en que programa academico estas vinculado y registrado.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div class="row">
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-content">
                  <div class="card-body">
                    <div class="media d-flex">
                      <div class="media-body text-left">
                        <h3 class="danger">Fecha de Nacimiento</h3>
                        <span>Obligatorio <br> Dato esencial para calcular tu edad, verificar datos y tramites escolares.</span>
                      </div>
                      <div class="align-self-center">
                        <i class="icon-rocket danger font-large-2 float-right"></i>
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
                      <div class="media-body text-left">
                        <h3 class="success">Foto de perfil</h3>
                        <span>Obligatorio <br> Es importante identificar tu persona, saber quien eres y como eres.</span>
                      </div>
                      <div class="align-self-center">
                        <i class="icon-user success font-large-2 float-right"></i>
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
                      <div class="media-body text-left">
                        <h3 class="warning">Correo institucional</h3>
                        <span>Obligatorio. Obtienes tu credencial registrandote con tu cuenta que te proporciono la escuela</span>
                      </div>
                      <div class="align-self-center">
                        <i class="icon-pie-chart warning font-large-2 float-right"></i>
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
                      <div class="media-body text-left">
                        <h3 class="primary">Adicionales</h3>
                        <span>Opcionales <br> Datos opcionales como alergias, datos de emergencia y</span>
                      </div>
                      <div class="align-self-center">
                        <i class="icon-support primary font-large-2 float-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
         
   

        
    </section>

    


</body>


<style>


.grey-bg {  
    background-color: #F5F7FA;
}
.banner{
    background-image: url('../../lib/img/background.png');
    background-size: cover;
		background-position: 0 0, top left;
		background-repeat: no-repeat;
		padding: 100px 0;
		
}

.colortext{
    text-align: center;

    
}

h1{
    font-style: normal;
		font-weight: 700;
		font-size: 5rem;
		background: linear-gradient(180deg, #7352f3 0%, #5a40c0 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
    background-image: url('../../lib/img/bg-sidebar-mobile.svg');
}

h2{
       font-style: normal;
		font-weight: 700;
		font-size: 5rem;
		background: linear-gradient(180deg, #7352f3 0%, #5a40c0 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
}

.infoex{
    font-style: normal;
		font-weight: 700;
		font-size: 5rem;
		background: linear-gradient(180deg, #7352f3 0%, #5a40c0 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
}

.infoexx{
    font-style: normal;
		font-weight: 600;
		font-size: 2rem;
		background: black;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
        position: relative;
}



.imgpolicard{
    position: relative;
}

.logo {
		position: absolute;
		width: 135px;
		height: 135px;
		left: 134px;
		top: 0px;
	}

    .datosp {
		position: absolute;
		width: 135px;
		height: 135px;
		
	}

    .requisitos {
		position: absolute;
		width: 135px;
		height: 135px;
		
	}

.detalles{
        font-style: normal;
		font-weight: 600;
		font-size: 1rem;
		background: black;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
        position: relative;
}

</style>