<script>
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';


export default {
  name: "AppAbout",
  data() {
    return {}
  },
  components: {
    HeaderApp,
    FooterApp,
  }
}
</script>

<template>

  <HeaderApp />

  <div class="space_header">

  </div>

  <section id="jumbotron">
    <div class="container_jumbo">
      <h1>
        Ristorante Rosmarino
      </h1>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, suscipit voluptas nam cupiditate
        magnam
        quam,
        omnis odio accusantium adipisci excepturi ducimus id doloremque fugiat labore dolorum reiciendis,
        molestiae
        eius
        non.
      </p>


      <router-link class="btn_reserve" :to="{ name: 'reservation' }">
        Prenota Ora!
      </router-link>

    </div>


  </section>
  <!-- /#jumbotron -->

  <h1>About</h1>

  <FooterApp />
</template>

<style></style>