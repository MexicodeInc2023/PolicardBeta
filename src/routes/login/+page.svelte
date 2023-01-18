
<body class="gradient-custom">
    <section class="vh-100 ">
      <div class="container py-4 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card" style="border-radius: 1rem;">
              <form class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-3">
                  <h2 class="fw-bold mb-2 text-uppercase text-primary">
                    Inicio de Sesion
                  </h2>
                  <p class="text-dark-50 mb-5">
                    Ingresa tu correo y contraseña para iniciar sesion
                  </p>
                  <div class="form-group m-2">
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="matricula@uptapachula.edu.mx"
                      />
                      <label for="floatingInput">Correo Electronico</label>
                    </div>
                    <div class="form-floating">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">Contraseña</label>
                    </div>
                  </div>
                  <button
                    class="btn btn-outline-primary btn-lg px-5 m-5"
                    type="submit">Ingresar</button
                  >
                  <p>
                    <a href="#!" class="text-success fw-bold"
                      >Olvidaste tu constraseña ?</a
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Momentaneo -->
    <div class="text-center">
      <a href="/credentials" class="text-bg-dark btn">Acceder momentaneo</a>
    </div>
  </body>
  
  <style>
    .gradient-custom {
      background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        #4777e5 0%,
        #8e54e9 100%
      );
    }
  </style>
  