<script>
import HeaderApp from './view/components/HeaderApp.vue';
import FooterApp from './view/components/FooterApp.vue';

export default {
  name: "App",
  data() {
    return {

    }
  },
  components: {
    HeaderApp,
    FooterApp,
  }

}
</script>

<template>

  <HeaderApp />

  <router-view></router-view>

  <FooterApp />

</template>

<style></style>
