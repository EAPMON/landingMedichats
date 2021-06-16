import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      setTimeout(() => {
        const element = document.getElementById(to.hash.replace(/#/, ''))
        if (element && element.scrollIntoView) {
          element.scrollIntoView({block: 'end', behavior: 'smooth'})
        }
      }, 500)
      return {el: to.hash};
    }
    else if (savedPosition) {
      return savedPosition
    }
    return {top: 0}
  }
});
