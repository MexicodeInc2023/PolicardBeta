<script>
  const tramite = {
    id: 1,
    approve: 1,
  };
  export let subject;
</script>

<div class="container">
  <section>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card card-stepper" style="border-radius: 10px;">
            <div class="card-body p-4">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                  <span class="lead fw-normal">Estado de tu {subject}</span>
                  <span class="text-muted small">Fecha</span>
                </div>
              </div>
              <hr class="my-4" />
              <div
                class="d-flex flex-row justify-content-between align-items-center align-content-center"
              >
                <span class="dot big-dot" />
                <hr class="flex-fill track-line" />
                <span class="dot" />
                <hr class="flex-fill track-line" />
                <span
                  class="d-flex justify-content-center align-items-center  dot"
                >
                  <i class="fa fa-check text-white" /></span
                >
              </div>

              <div
                class="d-flex flex-row justify-content-between align-items-center"
              >
                <div class="d-flex flex-column align-items-start">
                  <span>Fecha</span><span>Solicitada</span>
                </div>
                <div class="d-flex flex-column justify-content-center">
                  <span>Fecha</span><span>En Revision</span>
                </div>
                <div
                  class="d-flex flex-column justify-content-center align-items-center"
                >
                  <span>Fecha</span><span>Revisada</span>
                </div>
              </div>
            </div>
            {#if tramite.approve == 3}
              <!-- content here -->
              <div class="m-4 alert alert-dismissible alert-danger">
                <h2>Rechazado ❌</h2>
                <p>
                  Tus datos han sido rechazados, comunicate con las autoridades
                  correspondientes.
                </p>
              </div>
            {:else if tramite.approve == 2}
              <div class="m-4 alert alert-dismissible alert-success">
                <h2>LISTO ✅ - Tus datos han sido aprovados</h2>
                <p>En breve podras visualizar tu credencial</p>
                <a href="/card/card" class="alert-link">
                  <strong>VER CREDENCIAL</strong>
                </a>
              </div>
            {:else if tramite.approve == 1}
              <div class="m-4 alert alert-dismissible alert-info">
                <h2>En Revision 🔎</h2>
                <p>Tus datos se estan comprobando. Mantente al pendiente</p>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .track-line {
    height: 2px !important;
    background-color: #616ae7;
    opacity: 1;
  }

  .dot {
    height: 10px;
    width: 10px;
    margin-left: 3px;
    margin-right: 3px;
    margin-top: 0px;
    background-color: #96b6a8;
    border-radius: 50%;
    display: inline-block;
  }

  .big-dot {
    height: 25px;
    width: 25px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    background-color: #18be78;
    border-radius: 50%;
    display: inline-block;
  }

  .rejected {
    background-color: #ff5630 !important;
  }

  .card-stepper {
    z-index: 0;
  }
</style>
