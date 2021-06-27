<template>
  <div>
    <div class="position-relative">
      <!-- home -->
      <section class="section-shaped my-0 home">
        <div class="shape shape-style-1 shape-ligth shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row row-grid align-items-center">
              <div class="col-lg-6">
                <h1 class="display-3">
                  Atención y orientación medica
                  <span>Vía WhatsApp</span>
                </h1>
                <p class="lead">
                  Medichats te ofrece tranquilidad las 24 horas, los 7 días de
                  la semana, y se ha demostrado que reduce las visitas al
                  médico.
                </p>
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href="https://api.whatsapp.com/send?phone=34123456789&text=Hola Medichats,%20estoy%20interesado%20en%20afiliarme?"
                    class="mb-3 mb-sm-0"
                    type="primary"
                    icon="fa fa-sign-in"
                  >
                    ¡Afiliate ya!
                  </base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- paso a paso  -->
    </div>
    <section id="registro" class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid align-items-center">
              <div class="col-lg-12">
                <h1 class="display-3 text-center">
                  Más fácil imposible
                  <p class="text-center">
                    Medichat está disponible cuando necesitas ayuda
                  </p>
                </h1>
              </div>
            </div>

            <div class="row row-grid">
              <div class="col-lg-4">
                <card
                  class="border-0 row justify-content-center "
                  hover
                  shadow
                  body-classes="py-5"
                >
                  <div class="col-lg-1 offset-4">
                    <icon type="primary" rounded class="mb-4">
                      <h3 class="text-white">1</h3>
                    </icon>
                  </div>
                  <h6 class="text-primary text-center text-uppercase">
                    Paga tu suscripción.
                  </h6>
                  <p class="description text-center mt-3">
                    Utiliza cualquiera de nuestros métodos de pago. Nequi
                    3175634085 o Cuenta de ahorro Bancolombia 67835505674
                  </p>
                  <div class="text-center">
                    <badge type="primary" rounded>Nequi</badge>
                    <badge type="primary" rounded>Bancolombia</badge>
                  </div>
                  <base-button
                    tag="a"
                    href="https://www.nequi.com.co/"
                    type="primary"
                    class="mt-4"
                  >
                    Pagar Nequi
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <div class="col-lg-1 offset-4">
                    <icon type="success" rounded class="mb-4">
                      <h3 class="text-white">2</h3>
                    </icon>
                  </div>
                  <h6 class="text-success text-center text-uppercase">
                    Envía tu comprobante de pago
                  </h6>
                  <p class="description mt-3 text-center">
                    Envía capture de tu comprobante de pago vía WhatsApp al
                    numero 3058623146 y espera mientras nuestros colaboradores
                    validan tus datos
                  </p>
                  <base-button tag="a" href="#" type="success" class="mt-4">
                    Enviar
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <div class="col-lg-1 offset-4">
                    <icon type="warning" rounded class="mb-4">
                      <h3 class="text-white">3</h3>
                    </icon>
                  </div>
                  <h6 class="text-warning text-center text-uppercase">
                    ¡listo!
                  </h6>
                  <p class="description text-center mt-3">
                    Luego de cumplir estos sencillos pasos tú y tus
                    beneficiarios podrán acceder a consultas médicas a través de
                    nuestra línea de atención.
                  </p>

                  <base-button tag="a" href="#" type="warning" class="mt-4">
                    Consulta a un médico
                  </base-button>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- por que medichats -->

    <section id="porque" class="section-shaped section-lg">
       <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-12 order-md-2">
            <div class="row row-grid align-items-center">
              <div class="col-lg-12">
                <h1 class="display-3 text-center text-white mb-5">¿Por qué Medichats?</h1>
              </div>
            </div>
            <div class="row justify-content-center">
             <div class=" col-lg-3 ">
                <card
                class="border-0  justify-content-center"
                hover
                body-classes="py-5"
                shadow
              >
                <div >
                  <img src="img/theme/svg/heart-green.svg" class="img-fluid mb-3 " />
                </div>
                <h5 class="title text-center">
                  <span class="d-block mb-1 text-success">24/7</span>
                  <p class="h6 ">Sin importar el dia o la hora, estamos disponibles para atenderte.</p>
                </h5>
              </card>
             </div>
             <div class=" col-lg-3 ">
                <card
                class="border-0  justify-content-center"
                hover
                body-classes="py-5"
                shadow
              >
                <div >
                  <img src="img/theme/svg/world.svg" class="img-fluid mb-3 " />
                </div>
                <h5 class="title text-center">
                  <span class="d-block mb-1 text-success">Estés donde estés</span>
                  <p class="h6 ">Puedes consultar con tu medico desde cualquier lugar del mundo.</p>
                </h5>
              </card>
             </div>
             <div class=" col-lg-3 ">
                <card
                class="border-0  justify-content-center"
                hover
                body-classes="py-5"
                shadow
              >
                <div >
                  <img src="img/theme/svg/doctor.svg" class="img-fluid mb-3 " />
                </div>
                <h5 class="title text-center">
                  <span class="d-block mb-1 text-success">Doctores certificados</span>
                  <p class="h6 ">Nuestros profesionales de la salud están autorizados por la agencia gubernamental.</p>
                </h5>
              </card>
             </div>
             <div class=" col-lg-3 ">
                <card
                class="border-0  justify-content-center"
                hover
                body-classes="py-5"
                shadow
              >
                <div >
                  <img src="img/theme/svg/Connected.svg" class="img-fluid mb-3 " />
                </div>
                <h5 class="title text-center">
                  <span class="d-block mb-1 text-success">1200 Pacientes registrados</span>
                  <p class="h6 ">Son mas de 1200 familias las que ya confían en nuestro servicio. </p>
                </h5>
              </card>
             </div>
             
              <!-- <div class="px-4 " shadow>
              <img
                v-lazy="'img/theme/team-1-800x800.jpg'"
                class="
                  rounded-circle
                  img-center img-fluid
                  shadow
                  shadow-lg--hover
                "
                style="width: 200px"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Ryan Tompson</span>
                  <small class="h6 text-muted">Web Developer</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="warning"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="warning"
                    icon="fa fa-facebook"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="warning"
                    icon="fa fa-dribbble"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div> -->
             
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ----------- como---------------- -->
     <section id="como" class="section section-lg">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="img/theme/svg/chat.svg" class="img-fluid floating" />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <icon
                name="ni ni-ambulance"
                class="mb-5"
                size="lg"
                type="success"
                shadow
                rounded
              ></icon>
              <h3>¿Como funciona?</h3>
              <p>
                Medichats es la forma más rápida y segura de obtener ayuda personalizada de un médico de verdad.
              </p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-watch-time"
                    ></badge>
                    <h6 class="mb-0">
                      La dedicación de nuestros médicos nos permite responder la mayoría de 
                      las preguntas en 5 minutos o menos.
                    </h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-calendar-grid-58"
                    ></badge>
                    <h6 class="mb-0">
                      Estamos disponibles las 24h del día, los 7 dias de la semana para que no tengas que preocuparte.
                    </h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="fa fa-users"
                    ></badge>
                    <h6 class="mb-0">
                      Te atendemos a ti, y a tu núcleo familiar por el mismo precio   
                    </h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
  <section class="section section-lg pt-lg-1 section-contact-us">
      <div class="container">
        <div class="row justify-content-center mt--300">
          <div class="col-lg-8">
            <card gradient="secondary" shadow body-classes="p-lg-5">
              <h4 class="mb-1">Want to work with us?</h4>
              <p class="mt-0">Your project is very important to us.</p>
              <base-input
                class="mt-5"
                alternative
                placeholder="Your name"
                addon-left-icon="ni ni-user-run"
              >
              </base-input>
              <base-input
                alternative
                placeholder="Email address"
                addon-left-icon="ni ni-email-83"
              >
              </base-input>
              <base-input class="mb-4">
                <textarea
                  class="form-control form-control-alternative"
                  name="name"
                  rows="4"
                  cols="80"
                  placeholder="Type a message..."
                ></textarea>
              </base-input>
              <base-button type="default" round block size="lg">
                Send Message
              </base-button>
            </card>
          </div>
        </div>
      </div>
    </section>
  <!--  <section class="section bg-secondary">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <div class="card bg-default shadow border-0">
              <img
                v-lazy="'img/theme/img-1-1200x1000.jpg'"
                class="card-img-top"
              />
              <blockquote class="card-blockquote">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="svg-bg"
                >
                  <polygon
                    points="0,52 583,95 0,95"
                    class="fill-default"
                  ></polygon>
                  <polygon
                    points="0,42 583,95 683,0 0,95"
                    opacity=".2"
                    class="fill-default"
                  ></polygon>
                </svg>
                <h4 class="display-3 font-weight-bold text-white">
                  Design System
                </h4>
                <p class="lead text-italic text-white">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pl-md-5">
              <icon
                name="ni ni-settings"
                class="mb-5"
                size="lg"
                type="warning"
                shadow
                rounded
              ></icon>

              <h3>Our customers</h3>
              <p class="lead">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p>
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go.
              </p>
              <p>
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go.
              </p>
              <a href="#" class="font-weight-bold text-warning mt-5"
                >A beautiful UI Kit for impactful websites</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-1 bg-gradient-warning shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container py-0">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-lg-2 ml-lg-auto">
            <div class="position-relative pl-md-5">
              <img src="img/ill/ill-2.svg" class="img-center img-fluid" />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="d-flex px-3">
              <div>
                <icon
                  name="ni ni-building"
                  size="lg"
                  class="bg-gradient-white"
                  color="primary"
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-4">
                <h4 class="display-3 text-white">Modern Interface</h4>
                <p class="text-white">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </div>
            </div>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon
                    name="ni ni-satisfied"
                    gradient="success"
                    color="white"
                    shadow
                    rounded
                  ></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-success">Awesome Support</h5>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                  <a href="#" class="text-success">Learn more</a>
                </div>
              </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon
                    name="ni ni-active-40"
                    gradient="warning"
                    color="white"
                    shadow
                    rounded
                  ></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-warning">Modular Components</h5>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                  <a href="#" class="text-warning">Learn more</a>
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-8">
            <h2 class="display-3">The amazing Team</h2>
            <p class="lead text-muted">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record
              maximum.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-1-800x800.jpg'"
                class="
                  rounded-circle
                  img-center img-fluid
                  shadow
                  shadow-lg--hover
                "
                style="width: 200px"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Ryan Tompson</span>
                  <small class="h6 text-muted">Web Developer</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="warning"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="warning"
                    icon="fa fa-facebook"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="warning"
                    icon="fa fa-dribbble"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-2-800x800.jpg'"
                class="
                  rounded-circle
                  img-center img-fluid
                  shadow
                  shadow-lg--hover
                "
                style="width: 200px"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Romina Hadid</span>
                  <small class="h6 text-muted">Marketing Strategist</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="primary"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="primary"
                    icon="fa fa-facebook"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="primary"
                    icon="fa fa-dribbble"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-3-800x800.jpg'"
                class="
                  rounded-circle
                  img-center img-fluid
                  shadow
                  shadow-lg--hover
                "
                style="width: 200px"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Alexander Smith</span>
                  <small class="h6 text-muted">UI/UX Designer</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="info"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="info"
                    icon="fa fa-facebook"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="info"
                    icon="fa fa-dribbble"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-4-800x800.jpg'"
                class="
                  rounded-circle
                  img-center img-fluid
                  shadow
                  shadow-lg--hover
                "
                style="width: 200px"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">John Doe</span>
                  <small class="h6 text-muted">Founder and CEO</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="success"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="success"
                    icon="fa fa-facebook"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="success"
                    icon="fa fa-dribbble"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-0">
      <div class="container">
        <card gradient="warning" no-body shadow-size="lg" class="border-0">
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3 class="text-white">
                  We made website building easier for you.
                </h3>
                <p class="lead text-white mt-3">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers. I understand
                  culture.
                </p>
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <base-button
                  tag="a"
                  href="https://www.creative-tim.com/product/vue-argon-design-system"
                  type="white"
                  block
                  size="lg"
                >
                  Download Vue
                </base-button>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-3 bg-gradient-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-3 text-white">Build something</h2>
            <p class="lead text-white">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record low
              maximum sea ice extent tihs year down to low ice.
            </p>
          </div>
        </div>
        <div class="row row-grid mt-5">
          <div class="col-lg-4">
            <icon
              name="ni ni-settings"
              size="lg"
              gradient="white"
              shadow
              round
              color="primary"
            ></icon>
            <h5 class="text-white mt-3">Building tools</h5>
            <p class="text-white mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="col-lg-4">
            <icon
              name="ni ni-ruler-pencil"
              size="lg"
              gradient="white"
              shadow
              round
              color="primary"
            ></icon>
            <h5 class="text-white mt-3">Grow your market</h5>
            <p class="text-white mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="col-lg-4">
            <icon
              name="ni ni-atom"
              size="lg"
              gradient="white"
              shadow
              round
              color="primary"
            ></icon>
            <h5 class="text-white mt-3">Launch time</h5>
            <p class="text-white mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-lg-0 section-contact-us">
      <div class="container">
        <div class="row justify-content-center mt--300">
          <div class="col-lg-8">
            <card gradient="secondary" shadow body-classes="p-lg-5">
              <h4 class="mb-1">Want to work with us?</h4>
              <p class="mt-0">Your project is very important to us.</p>
              <base-input
                class="mt-5"
                alternative
                placeholder="Your name"
                addon-left-icon="ni ni-user-run"
              >
              </base-input>
              <base-input
                alternative
                placeholder="Email address"
                addon-left-icon="ni ni-email-83"
              >
              </base-input>
              <base-input class="mb-4">
                <textarea
                  class="form-control form-control-alternative"
                  name="name"
                  rows="4"
                  cols="80"
                  placeholder="Type a message..."
                ></textarea>
              </base-input>
              <base-button type="default" round block size="lg">
                Send Message
              </base-button>
            </card>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-3">
              Do you love this awesome
              <span class="text-success">Design System for Bootstrap 4?</span>
            </h2>
            <p class="lead">
              Cause if you do, it can be yours for FREE. Hit the button below to
              navigate to Creative Tim where you can find the Design System in
              HTML. Start a new project or give an old Bootstrap project a new
              look!
            </p>
            <div class="btn-wrapper">
              <a
                href="https://www.creative-tim.com/product/vue-argon-design-system"
                class="btn btn-primary mb-3 mb-sm-0"
                >Download Vue</a
              >
            </div>
            <div class="text-center">
              <h4 class="display-4 mb-5 mt-5">
                Available on these technologies
              </h4>
              <div class="row justify-content-center">
                <div class="col-lg-2 col-4">
                  <card
                    class="border-0 row justify-content-center"
                    hover
                    body-classes="py-5"
                  >
                    <div class="col-lg-1">
                      <icon
                        type="primary"
                        rounded
                        class="ni ni-favourite-28 text-white"
                      >
                      </icon>
                    </div>
                  </card>
                </div>
                <div class="col-lg-2 col-4">
                  <a
                    href="https://www.sketchapp.com/"
                    target="_blank"
                    data-toggle="tooltip"
                    data-original-title="[Coming Soon] Sketch - Digital design toolkit"
                  >
                    <img
                      v-lazy="
                        'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg'
                      "
                      class="img-fluid opacity-5"
                    />
                  </a>
                </div>
                <div class="col-lg-2 col-4">
                  <a
                    href="https://www.adobe.com/products/photoshop.html"
                    data-toggle="tooltip"
                    data-original-title="[Coming Soon] Adobe Photoshop - Software for digital images manipulation"
                  >
                    <img
                      v-lazy="
                        'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg'
                      "
                      class="img-fluid opacity-5"
                    />
                  </a>
                </div>
                <div class="col-lg-2 col-4">
                  <a
                    href="https://vuejs.org/"
                    target="_blank"
                    data-toggle="tooltip"
                    data-original-title="Vue.js - The progressive javascript framework"
                  >
                    <img
                      v-lazy="
                        'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg'
                      "
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="col-lg-2 col-4">
                  <a
                    href="https://angularjs.org/"
                    target="_blank"
                    data-toggle="tooltip"
                    data-original-title="[Coming Soon] Angular - One framework. Mobile &amp; desktop"
                  >
                    <img
                      v-lazy="
                        'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg'
                      "
                      class="img-fluid opacity-5"
                    />
                  </a>
                </div>
                <div class="col-lg-2 col-4">
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    data-toggle="tooltip"
                    data-original-title="[Coming Soon] React - A JavaScript library for building user interfaces"
                  >
                    <img
                      v-lazy="
                        'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg'
                      "
                      class="img-fluid opacity-5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    
    <a href="#" class="btn-flotante floating">
      <icon name="ni ni-bold-up">  </icon>
    </a>
  </div>
</template>

<script>
import Icon from '../components/Icon.vue';
export default {
  name: "home",
  components: {Icon},
};
</script>
<style scoped>
.home {
  background-image: url("/img/ill/fondo.png");
}
.btn-flotante {
	font-size: 16px; /* Cambiar el tamaño de la tipografia */
	text-transform: uppercase; /* Texto en mayusculas */
	font-weight: bold; /* Fuente en negrita o bold */
	color: #ffffff; /* Color del texto */
	border-radius: 5px; /* Borde del boton */
	letter-spacing: 2px; /* Espacio entre letras */
	background-color: #a3be2b; /* Color de fondo */
	padding: 2px 4px; /* Relleno del boton */
	position: fixed;
	bottom: 40px;
	right: 40px;
	transition: all 300ms ease 0ms;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	z-index: 99;
}
.btn-flotante:hover {
	background-color: #4973b1; /* Color de fondo al pasar el cursor */
	box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
	transform: translateY(-7px);
}
@media only screen and (max-width: 600px) {
 	.btn-flotante {
		font-size: 14px;
		padding: 12px 20px;
		bottom: 20px;
		right: 20px;
	}
}
</style>
