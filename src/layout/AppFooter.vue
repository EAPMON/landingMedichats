<template>
  <footer class="footer has-cards">
    <div class="container container-lg">
      <div class="row">
        <div class="col-md-6 mb-5 mb-md-0">
          <h1 class="display-3">¿Cómo llegar?</h1>
          <br />
          <div class="shadow border-0">
            <card
              class="border-0 row justify-content-center"
              shadow
              body-classes="py-5"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.27113819478248!2d-75.51584429418673!3d10.394689617061672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625f271c0ec89%3A0x8feda847cc953b39!2sIPS%20Amesco!5e0!3m2!1ses!2sco!4v1624825068113!5m2!1ses!2sco"
                width="100%"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </card>
          </div>
        </div>
        <div class="col-md-6 mb-5 mb-lg-0">
          <h1 class="display-3">¡No esperes más!</h1>
          <br />
          <div class="shadow border-0">
            <div class="container pt-lg-md">
              <div class="row justify-content-center">
                <div class="col-lg-12">
                  <template>
                    <div class="text-center text-muted mb-4">
                      <small
                        >Dejanos tus datos y pronto nos comunicaremos
                        contigo</small
                      >
                    </div>
                    <form role="form">
                      <base-input
                        alternative
                        class="mb-3"
                        placeholder="Nombre"
                        addon-left-icon="ni ni-users"
                        v-model="user.name"
                      >
                      </base-input>
                      <base-input
                        alternative
                        type="text"
                        placeholder="Celular de contacto"
                        addon-left-icon="ni ni-phone-number"
                        v-model="user.phone_number"
                      >
                      </base-input>
                      <div class="text-center">
                        <base-button
                          type="primary"
                          class="my-4"
                          v-on:click="addUser"
                          >Enviar</base-button
                        >
                      </div>
                    </form>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6"></div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{ year }}
            <a
              href="https://www.creative-tim.com"
              target="_blank"
              rel="noopener"
              >Creative Tim</a
            >
            &
            <a href="https://www.binarcode.com" target="_blank" rel="noopener"
              >Binar Code</a
            >
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <a
                href="https://www.creative-tim.com"
                class="nav-link"
                target="_blank"
                rel="noopener"
                >Creative Tim</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://www.creative-tim.com/presentation"
                class="nav-link"
                target="_blank"
                rel="noopener"
                >About Us</a
              >
            </li>
            <li class="nav-item">
              <a
                href="http://blog.creative-tim.com"
                class="nav-link"
                target="_blank"
                rel="noopener"
                >Blog</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                class="nav-link"
                target="_blank"
                rel="noopener"
                >MIT License</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear(),
      user: {},
    };
  },
  methods: {
    addUser() {
      Swal.showLoading()
      axios
        .post("https://back.teloconsigo.net/public/api/usuarios", this.user)
        .then((response) => {
          axios
            .get("https://back.teloconsigo.net/public/api/contactanos")
            .then((res) => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Pronto te contactaremos",
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .catch((err) => {
              Swal.fire({
                position: "top-end",
                icon: "danger",
                title:
                  "No hemos podido procesar tu solicitud, por favor intenta de nuevo ",
                showConfirmButton: false,
                timer: 1500,
              });
            });
        })
        .catch((error) => {
        });
    },
  },
};
</script>
<style>
</style>