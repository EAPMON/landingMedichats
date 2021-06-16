<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/logo.png" alt="logo">
                <img src="img/brand/name.png" alt="name">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            
            <ul class="navbar-nav  align-items-lg-center ml-lg-auto">
               
                <li class="nav-item">
                    <router-link class="nav-link nav-link-icon text-primary" to="#registro" >
                        <span >como me registro</span>
                    </router-link>
                </li> 
                <li class="nav-item">
                    <router-link class="nav-link nav-link-icon text-primary" to="#porque" >
                        <span >Porqué Medichats</span>
                    </router-link>
                   
                </li>
                <li class="nav-item">
                    <router-link class="nav-link nav-link-icon text-primary" to="#como" >
                        <span >Como funciona</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon text-primary" href="https://www.facebook.com/MedichatsAMESCOIPS/" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon text-danger" href="https://www.instagram.com/medichats/?hl=es-la"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                
                
               
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
