<script>

import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';


export default {
  name: "AppMenu",
  data() {
    return {
      modal: false,
    }
  },
  components: {
    HeaderApp,
    FooterApp
  },

  methods: {


  }
}
</script>

<template>



  <HeaderApp />

  <div class="space_header">
  </div>





  <section id="jumbotron">
    <div class="container_jumbo">
      <div class="logo_container">
        <img src="../../public/img/logo-black.png" alt="">
      </div>




      <router-link class="btn_reserve" :to="{ name: 'reservation' }">
        Prenota Ora!
      </router-link>

    </div>


  </section>
  <!-- /#jumbotron -->

  <section id="menu_full">



    <div class="container_entre_plate_menu bg_menu_first">
      <h2>ANTIPASTI</h2>
      <ul>
        <li>
          <h5 class="name_plate">Antipasto freddo</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">14,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Cozze o vongole alla marinara o alla tarantina</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">14,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Polpo su polenta grigliata e cime di rapa</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">15,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Cappesante gratinate</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">12,00 &euro;</span>
        </li>
      </ul>
    </div>
    <!-- /.container_entre_plate_menu -->

    <div class="container_first_plate_menu bg_menu_second">

      <h2>PRIMI PIATTI</h2>
      <ul>
        <li>
          <h5 class="name_plate">Gnocchi di castagne con zucca e gamberi</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">15,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Tagliolino neri con ragu di seppia</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">15,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">tagliolini allo scoglio</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">16,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Spaghetto alle vongole</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">14,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Spaghetto alla tarantina</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">15,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Risotto ai frutti di mare</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">17,00 &euro;</span>
        </li>
      </ul>
    </div>
    <!-- /.container_first_plate_menu -->

    <div class="container_second_plate_menu bg_menu_first">

      <h2>SECONDI PIATTI</h2>
      <ul>
        <li>
          <h5 class="name_plate">Grigliata mista</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">23,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Sardoni scottadito</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">14,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Spiedini di gamberi e calmari</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">13,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Seppia e piselli</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">17,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Baccala con finocchi e arance</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">20,00 &euro;</span>
        </li>
      </ul>

    </div>
    <!-- /.container_second_plate_menu -->

    <div class="container_dessert_plate_menu bg_menu_second">

      <h2>DESSERT & CONTORNI</h2>
      <ul>
        <li>
          <h5 class="name_plate">Insalata mista</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">4,50 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Verdure grigliate</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">5,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Patate al forno</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">5,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Tiramisu</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">6,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Torta di mele con gelato alla vaniglia</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">6,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Torta di cachi e amaretto</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">6,00 &euro;</span>
        </li>
      </ul>
    </div>
    <!-- /.container_dessert_plate_menu -->
  </section>


  <div class="whatapp">

    <a href="http://wa.me/393200133882" target="_blank">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
  </div>

  <FooterApp />





</template>

<style></style>