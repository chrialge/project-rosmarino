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

  <section id="about_us">
    <div class="container">
      <div class="left">
        <img src="../../public/img/sea.jpg" alt="">
      </div>
      <div class="right">
        <h3>Chi siamo?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat debitis esse nihil ratione velit eaque
          dolorum vitae, similique atque quibusdam ut repellendus consectetur fuga quo pariatur dolore, saepe
          accusantium quis?
        </p>
      </div>
    </div>

  </section>

  <div class="whatapp">

    <a href="http://wa.me/393200133882" target="_blank">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
  </div>

  <FooterApp />
</template>

<style></style>