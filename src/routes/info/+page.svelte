  <script>
	  import Logo from '../../lib/img/favicon.ico';
    import imagen1 from '../../../src/lib/img/5.png'
    import imagen2 from '../../../src/lib/img/2.png'
    import imagen3 from '../../../src/lib/img/1.png'
    import gratis from '../../../src/lib/img/gratis.png'
    import cr from '../../../src/lib/img/cr.png'
    import qr from '../../../src/lib/img/qr.png'
    import cross from '../../../src/lib/img/cross.png'
    import acceso from '../../../src/lib/img/acceso.png'
    import estudiantes from '../../../src/lib/img/estudiantes.png'
    import verificar from '../../../src/lib/img/Verificar.png'
    import tramitar from '../../../src/lib/img/tramitar.png' 
  </script>

  <body>
	    
      
    <section class="banner">
		   
      <div>
			   
        <img src={Logo} alt="Logo" class="logo" />
		    
      </div>
        
        
      <div class="container grid-template-columns"><br/><br/><br/><br/>
          
        <h4 class="text-uppercase">MAS INFORMACIÓN</h4>
           
        <div class="row lol">
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={imagen1} class="d-block w-100" alt="" />
              </div>
              <div class="carousel-item">
                <img src={imagen2} class="d-block w-100" alt="" />
              </div>
              <div class="carousel-item">
                <img src={imagen3} class="d-block w-100" alt="" />
              </div>
              <div class="carousel-item">
                <img src={imagen1} class="d-block w-100" alt="" />
              </div>
              <div class="carousel-item">
                <img src={imagen2} class="d-block w-100" alt="" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true" />
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true" />
            </button>
          </div>
        </div>
       
      </div>
      
    </section>


      
    <div class="container">
          
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

      </div>

    </div>

    
    <div class="container">
      
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
                         
                    <span class="pcard">  No pagarás ningun centavo, la casa lo invita. Al menos este año.</span>
                              
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

                          <h5 class="titlecard">Cross Platform</h5>

                          <span class="pcard"> Puedes acceder a tu cuenta de SCD desde cualquier dispositivo. </span> 
                  
                        </div>
      
                </div>
    
              </div>
  
            </div>

          </div>

        </div>

      </div>
    
    </div>
    
    <br/>

    <div class="container">
      <h4 class="text-uppercase">PREGUNTAS FRECUENTES</h4><br/>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h4 class="titlecard">¿Que pasa si pierdo la credencial?</h4>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p class="pcard">El SCD POLICARD no se hace responsable de las crendenciales perdidas. En caso de perder acceso a la plataforma, puedes hablar con un administrativo para recuperar tu cuenta.
                El precio de la reposición de la credencial puede variar entre las circunstancias sucedidas y puede tener valor de $100.00 MXN a $300.00 MXN.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <h4 class="titlecard">¿Que datos necesito para registrarme?</h4>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p class="pcard">Obligatoriamente necesitas tu nombre completo, matricula, fecha de nacimiento, programa academico,
                una foto de perfil y tu cuenta institucional. Opcionalmente puedes poner las alergias que padece, contactos de emergencia y respaldos.
              </p>  
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <h4 class="titlecard">¿Por que es importante tener la credencial?</h4>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <p class="pcard">La credencial un privilegio que el alumno adquiere cuando es aceptado por la institución, donde puedes
              identificarte con orgullo con la Universidad Politecnica de Tapachula, es un valor y un obsequio de prestigio y perseverancia.  
            </p>  
            </div>
          </div>
        </div>
      </div>
    </div>

      
  </body>

<style>
    .banner {
		background-image: url('../../lib/img/background.png');
		background-size: cover;
		background-position: 0 0, top left;
		background-repeat: no-repeat;
		padding: 50px 0;
		position: relative;
	}

	.logo {
		position: absolute;
		width: 135px;
		height: 135px;
		left: 134px;
		top: 0px;
	}

  .card {
		height: 325px;
		transition: all 0.5s;
		box-shadow: px 15px 30px rgba(25, 25, 25, 0.247), -15px -15px 30px rgba(60, 60, 60, 0.082);
	  text-align: center;
		overflow: hidden;
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

  .carousel-item {
		-moz-animation: automatizacion 3s infinite linear;
    -o-animation: automatizacion 3s infinite linear;
    -webkit-animation: automatizacion 3s infinite linear;
    animation: automatizacion 3s infinite linear;
    -webkit-transition: all 0.75s ease;
    -moz-transition: all 0.75s ease;
    -ms-transition: all 0.75s ease;
    -o-transition: all 0.75s ease;
    transition: all 0.75s ease;
	}




  /*responsive*/

  @media screen and (max-width: 630px) {
	.banner  {
		background-image: none;
	}
	.logo {
		position: absolute;
		width: 135px;
		height: 135px;
		left: 134px;
		top: 0px;
		align-items: center;
	}
	
	}

  @media only screen and (max-width: 375px) {
  .container{
    position: relative;
		margin-top: 705px;
		margin-left: 20px;
		margin-right: 3px;
  }
}



</style>
