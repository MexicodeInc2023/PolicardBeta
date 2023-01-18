<script>
  import QRCode from "./components/QRJS.svelte";
  let Datos = [];
  let OnError;
  // usen una api fake para ver como funciona, no usen la url de abajo porque solo tengo 500 peticiones al mes y ya como por la 400
  const url =
    ""; //https://api.steinhq.com/v1/storages/6338ad24eced9b09e99d7c7f/creden

  const options = { method: "GET" };
  const Datapromise = fetch(url, options) // fetch the data
    .then((response) => response.json())
    .then((data) => {
      return (Datos = data[0]); // return the data
    })
    .catch((error) => {
      console.error(error);
      OnError = true;
      console.log(error);
    });
</script>
<svelte:head>
  <title>Policard-Credencial</title>
</svelte:head>
{#if OnError}
  <div
    class="card text-white bg-danger "
    style="max-width: 18rem; margin-top: 3rem;"
  >
    <div class="card-header">Error Insesperado</div>
    <div class="card-body">
      <h4 class="card-title">Intente de nuevo</h4>
    </div>
  </div>
{:else if Datos.length === 0}
  <div class="progress">
    <div
      class="progress-bar progress-bar-striped bg-success"
      role="progressbar"
      style="width: 25%;"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    />
    <p style="font-weight: bold; color: #04B404">Cargando Card</p>
  </div>
{:else}
  {#await Datapromise then Data}
    <!-- Espera la data para renderizar -->
    <div class="box">
      <h1 style="color:#1a1423">Credencial UPTAP</h1>
      <div class="card border-success">
        <img src={Data.img} alt="ImagenPersonal" class="img-pro" />
        <h2 style="font-size: 1.5rem;">{Data.nombre}</h2>
        <p style="font-weight: bold; color: #7352F3">
          Universidad Politecnica de Tapachula
        </p>
        <p style="font-weight: bold; color: #18BE78">
          {Data.carrera}
        </p>
        <p style="color: #1a1423 !important;">
          Matricula: {Data.matricula}
        </p>
        <div class="container" style="margin-left: 10px;">
          <QRCode
            codeValue="Nombre: {Data.nombre}|Carrera:{Data.carrera}|Matricula:{Data.matricula}|Cuatrimestre: {Data.cuatrimestre} "
            squareSize="200"
          />
        </div>
      </div>
    </div>
  {/await}
{/if}

<style>
  h2 {
    color: #1a1423 !important;
  }

  .box {
    max-width: 90%;
    width: 1200px;
    margin: 20px auto;
    overflow: hidden;
    text-align: center;
    padding-bottom: 5rem;
  }
  .card {
    padding: 1.5rem;
    border-radius: 3px;
    max-width: 290px;
    margin: auto;
    background-color: #ffffff;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 3px 1px -2px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    transition: 0.02s;
  }

  .box .card:hover {
    box-shadow: 0px 0px 0px 3px #18be78 inset;
  }

  .img-pro {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto 20px auto;
  }
</style>
