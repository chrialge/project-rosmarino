<script>
import LoadingApp from './view/components/LoadingApp.vue';



export default {
  name: "App",
  watch: {
    $route(to, from) {
      this.loading = true;
      if (document.readyState === "complete") {
        console.log(document.readyState + "if")
        setTimeout(() => {
          this.loading = false
        }, 3000)
      } else {
        document.addEventListener('readystatechange', () => {
          console.log(document.readyState + "else")
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
