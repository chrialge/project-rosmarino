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

      <div class="btn_reserve">
        Prenota ora!
      </div>
    </div>


  </section>
  <!-- /#jumbotron -->

  <section id="menu_full">



    <div class="container_entre_plate_menu">
      <h2>Antipasti</h2>
      <ul>
        <li>
          <h5>Antipasto freddo</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>18,00 &euro;</span>
        </li>

        <li>
          <h5>Antipasto freddo</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>18,00 &euro;</span>
        </li>

        <li>
          <h5>Antipasto freddo</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>18,00 &euro;</span>
        </li>

        <li>
          <h5>Antipasto freddo</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>18,00 &euro;</span>
        </li>

        <li>
          <h5>Antipasto freddo</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>18,00 &euro;</span>
        </li>
      </ul>
    </div>
    <!-- /.container_entre_plate_menu -->

    <div class="container_first_plate_menu">

      <h2>Primi Piatti</h2>
      <ul>
        <li>
          <h5>Spaghetto alla carbonara</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>16,00 &euro;</span>
        </li>

        <li>
          <h5>Spaghetto alla carbonara</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>16,00 &euro;</span>
        </li>

        <li>
          <h5>Spaghetto alla carbonara</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>16,00 &euro;</span>
        </li>

        <li>
          <h5>Spaghetto alla carbonara</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>16,00 &euro;</span>
        </li>

        <li>
          <h5>Spaghetto alla carbonara</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>16,00 &euro;</span>
        </li>
      </ul>
    </div>
    <!-- /.container_first_plate_menu -->

    <div class="container_second_plate_menu">

      <h2>Antipasti</h2>
      <ul>
        <li>
          <h5>Coniglio in porchetta</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>20,00 &euro;</span>
        </li>

        <li>
          <h5>Coniglio in porchetta</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>20,00 &euro;</span>
        </li>

        <li>
          <h5>Coniglio in porchetta</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>20,00 &euro;</span>
        </li>

        <li>
          <h5>Coniglio in porchetta</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>20,00 &euro;</span>
        </li>

        <li>
          <h5>Coniglio in porchetta</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>20,00 &euro;</span>
        </li>
      </ul>

    </div>
    <!-- /.container_second_plate_menu -->

    <div class="container_dessert_plate_menu">

      <h2>Dessert</h2>
      <ul>
        <li>
          <h5>semifreddo al pistacchio</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>17,00 &euro;</span>
        </li>

        <li>
          <h5>semifreddo al pistacchio</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>17,00 &euro;</span>
        </li>

        <li>
          <h5>semifreddo al pistacchio</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>17,00 &euro;</span>
        </li>

        <li>
          <h5>semifreddo al pistacchio</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>17,00 &euro;</span>
        </li>

        <li>
          <h5>semifreddo al pistacchio</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, harum.</p>
          <span>17,00 &euro;</span>
        </li>
      </ul>
    </div>
    <!-- /.container_dessert_plate_menu -->
  </section>

  <FooterApp />





</template>

<style></style>