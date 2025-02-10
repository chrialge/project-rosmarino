<script>
import LoadingApp from './view/components/LoadingApp.vue';



export default {
  name: "App",
  data() {
    return {
      loading: true,
      path: null,
    }
  },
  watch: {
    $route(to, from) {

      if (from.path !== "/reservation") {
        to.meta.from = from;
        this.path = from
      } else {
        to.meta.from = this.path
      }





      if (to.fullPath !== "/reservation") {


        this.loading = true;
        if (document.readyState === "complete") {

          setTimeout(() => {
            this.loading = false
          }, 3000)
        } else {
          document.addEventListener('readystatechange', () => {

            if (document.readyState === "interactive") {

              while (this.loading == false) {
                if (document.readyState === "complete") {
                  this.loading = false

                }
              }
            } else {
              setTimeout(() => {
                this.loading = false
              }, 3000)
            }
          });
        }
      } else {
        this.loading = false;


      }

    }
  },
  components: {
    LoadingApp
  },
  methods: {


  },


}
</script>

<template>

  <LoadingApp v-show="loading" />
  <router-view />





</template>

<style></style>
