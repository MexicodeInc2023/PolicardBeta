<script>
    import  imageHero from '../lib/img/example.svg';
    import logo from '../lib/img/favicon.ico';
</script>
<svelte:head>
  <title>Policard</title>
</svelte:head>
  <body>
    <section class="banner">
      <div>
        <img src={logo} alt="Logo" class="logo" />
      </div>
  
      <div class="container">
        <div class="row main">
          <div class="col-xl-6 col-lg-8">
            <h1 class="banner-title">Policard</h1>
            <p class="banner-text">
              ¡Bienvenido a tu nueva credencial estudiantil! <br />
              Bienvenido al Sistema de credenciales de la Universidad Politécnica de
              Tapachula
            </p>
            <a href="/info" class="btn btn-primary">Más informacion</a>
          </div>
          <div class="col-lg-6 d-none d-lg-block">
            <img src={imageHero} class="img-fluid" alt="policard" />
          </div>
        </div>
        <br/>
        <div class="row">
          <div class="col">
            <div class="card text-center container border-success" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title htxt">¿Ya tienes tu cuenta?</h5>
                <p class="card-text">Si tienes tu cuenta simplemente incia sesion.</p>
                <a href="/login" class="btn btn-success">Incia Sesion</a>
              </div>
            </div>
          </div>
          <div class="col" >
            <div class="card text-center container border-warning" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title htxt">Tramita tu credencial</h5>
                <p class="card-text">Si aun, no cuentas con tu credencial, crea tu cuenta</p>
                <a href="/form" class="btn btn-warning">Crear cuenta</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
    body {
      font-family: 'Inter', sans-serif;
    }
    .banner {
      background-image: url("../lib/img/background.png");
      background-size: cover;
      background-position: 0 0, top left;
      background-repeat: no-repeat;
      padding: 100px 0;
      position: relative;
    }
    .logo {
      position: absolute;
      width: 125px;
      height: 125px;
      left: 134px;
      top: 0px;
    }
  
    .main {
      margin-top: 10%;
    }
  
    .banner-title {
    
      font-style: normal;
      font-weight: 800;
      font-size: 5rem;
      background: linear-gradient(180deg, #7352f3 0%, #5a40c0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .banner-text {
  
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;
      color: #000;
    }
  
    .htxt {
      font-weight: 600;
      font-size: 1.5rem;
      margin-top: 22px;
      margin-bottom: 22px;
    }
  </style>
  