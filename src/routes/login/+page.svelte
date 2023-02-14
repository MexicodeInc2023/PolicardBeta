<script>
   import Image_1 from "../../lib/img/img-1.jpg";
   import Image_2 from "../../lib/img/img-2.jpg";
   import Policard from "../../lib/img/policard-bk-sf.png";

   const loginUrl =   'http://127.0.0.1:8000/users/login/'
   
   let email,password;
   

    const submit = async () => {
        const res = await fetch(loginUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
              email,
              password
          })
          
        });
      
        if (res.ok) {
          // Enviar a la pagina de credenciales
          location.href = '/credentials';
          // enviar la autenticacion 
         
        } else {
          alert('Error en la autencacion');
        }
    };
</script>
<svelte:head>
  <title>Policard-Login</title>
</svelte:head>

<body class="bg-dark">
  <section>
    <div class="row g-0">
        <div class="col-lg-7 d-none d-lg-block">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item img-1 min-vh-100 active">
                    <div class="carousel-caption d-none d-md-block">
                      <h5 class="font-weight-bold"> Credencial escolar digital </h5>
                      <a href="" class="text-muted text-decoration-none">Visita nuestra tienda</a>
                    </div>
                  </div>
                  <div class="carousel-item img-2 min-vh-100">
                    <div class="carousel-caption d-none d-md-block">
                      <h5 class="font-weight-bold"> Bienvenido a Policard</h5>
                      <a href="#" class="text-muted text-decoration-none">Visita nuestra tienda</a>
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only"></span>
                </a>
              </div>
        </div>
        <div class="col-lg-5 bg-dark d-flex flex-column align-items-end min-vh-100">
            <div class="px-lg-5 pt-lg-4 pb-lg-3 p-4 mb-auto w-100" style="text-align: center;">
                <img src={Policard} alt="" class="img-fluid" width="200px" height="200px"/>
            </div>
            <div class="align-self-center w-100 px-lg-5 py-lg-4 p-4">
            <h1 class="font-weight-bold mb-4"> Bienvenido, Inicia Sesion </h1>
            <form class="mb-5" on:submit={submit} method="POST">
                <div class="mb-4">
                  <label for="exampleInputEmail1" class="form-label font-weight-bold">Email</label>
                  <input type="email" class="form-control bg-dark-x border-0" bind:value={email} id="exampleInputEmail1" placeholder="Ingresa tu email" aria-describedby="emailHelp">
                </div>
                <div class="mb-4">
                  <label for="exampleInputPassword1" class="form-label font-weight-bold">Contraseña</label>
                  <input type="password" class="form-control bg-dark-x border-0 mb-2"  bind:value={password} placeholder="Ingresa tu contraseña" id="exampleInputPassword1">
                  <a href="" id="emailHelp" class="form-text text-muted text-decoration-none">¿Has olvidado tu contraseña?</a>
                </div>
                <button type="submit" class="btn btn-primary w-100">Iniciar sesión</button>
              </form>

            </div>
            <div class="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 mt-auto w-100">
                <p class="d-inline-block mb-0">¿Todavia no tienes una cuenta?</p> <a href="" class="text-light font-weight-bold text-decoration-none">Crea una ahora</a>
            </div>
        </div>
    </div>
  </section>
<!-- Optional JavaScript -->
<!-- Popper.js first, then Bootstrap JS -->

<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
</body>
  
  <style>

:root {
    --dark¿: #16191C;
    --dark-x: #1E2126; 
    --light: #ffffff;
}

body {
    font-family: 'Spartan', sans-serif;
    font-weight: 300;
    color: var(--light);
}

.text-light { color: var(--light) !important; }
.bg-dark { background-color: var(--dark¿) !important; }
.bg-dark-x { background-color: var(--dark-x); }

.btn {
    min-height: 3.125rem;
    font-weight: 600;
}

.form-control {
    min-height: 3.125rem;
    line-height: initial;
}
.form-control:focus {
    background-color: var(--dark-x);
    outline: none;
}

.img-1 {
    background-image: url('../../lib/img/prueba.jpg');
    background-size: cover;
    background-position: center;
}

.img-2 {
    background-image: url('../../lib/img/prueba2.jpg');
    background-size: cover;
    background-position: center;
}
  </style>
  