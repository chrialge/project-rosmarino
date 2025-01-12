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

  <section id="menu_full">



    <div class="container_entre_plate_menu bg_menu_first">
      <h2>Antipasti</h2>
      <ul>
        <li>
          <h5 class="name_plate">Antipasto freddo</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">18,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Antipasto freddo</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">18,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Antipasto freddo</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">18,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Antipasto freddo</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">18,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Antipasto freddo</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">18,00 &euro;</span>
        </li>
      </ul>
    </div>
    <!-- /.container_entre_plate_menu -->

    <div class="container_first_plate_menu bg_menu_second">

      <h2>Primi Piatti</h2>
      <ul>
        <li>
          <h5 class="name_plate">Spaghetto alla carbonara</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">16,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Spaghetto alla carbonara</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">16,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Spaghetto alla carbonara</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">16,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Spaghetto alla carbonara</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">16,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Spaghetto alla carbonara</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">16,00 &euro;</span>
        </li>
      </ul>
    </div>
    <!-- /.container_first_plate_menu -->

    <div class="container_second_plate_menu bg_menu_first">

      <h2>Secondi</h2>
      <ul>
        <li>
          <h5 class="name_plate">Coniglio in porchetta</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">20,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Coniglio in porchetta</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">20,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Coniglio in porchetta</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">20,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Coniglio in porchetta</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">20,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Coniglio in porchetta</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">20,00 &euro;</span>
        </li>
      </ul>

    </div>
    <!-- /.container_second_plate_menu -->

    <div class="container_dessert_plate_menu bg_menu_second">

      <h2>Dessert</h2>
      <ul>
        <li>
          <h5 class="name_plate">Semifreddo al pistacchio</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">17,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Semifreddo al pistacchio</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">17,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Semifreddo al pistacchio</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">17,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Semifreddo al pistacchio</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">17,00 &euro;</span>
        </li>

        <li>
          <h5 class="name_plate">Semifreddo al pistacchio</h5>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span class="price">17,00 &euro;</span>
        </li>
      </ul>
    </div>
    <!-- /.container_dessert_plate_menu -->
  </section>

  <FooterApp />





</template>

<style></style>