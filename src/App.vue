<script>
import LoadingApp from './view/components/LoadingApp.vue';



export default {
  name: "App",
  watch: {
    $route(to, from) {

      if (to.fullPath !== "/reservation") {
        this.loading = true;
        if (document.readyState === "complete") {
          console.log(document.readyState + "if")
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
  data() {
    return {
      loading: true,
    }
  },
  components: {
    LoadingApp
  },

  mounted() {


  },

}
</script>

<template>

  <LoadingApp v-show="loading" />
  <router-view />





</template>

<style></style>
