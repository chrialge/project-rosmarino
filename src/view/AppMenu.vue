<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


export default {
  name: "AppMenu",
  data() {
    return {
      modal: false,
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  methods: {
    showPlate(value) {





      const markup = `
          <div class="card_dish" @click="showPlate('Antipasti')">
            <h3>${value}</h3>
          </div>
          <div class="container_return">
            <div class="d-flex align-items-center ms-3 pt-2 pb-2" onclick=" window.location.reload();">
              <i class="fa fa-arrow-left pe-2" aria-hidden="true"></i>
              <span class="fs-5">Indietro</span>
            </div>
          </div>
          <div class="d-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 gap-5 justify-content-between card_single_dish">
            <div class="card p-0" >
              <img class="card-img-top" src="../../public/img/antipasto.webp" alt="">
              <div class="card-body" style="background-color: gray; border-bottom-left-radius: 0.35rem; border-bottom-right-radius: 0.35rem;">
                <h4 class="card-title">Antipasto di Mare</h4>
                 <div class="d-flex justify-content-between align-items-center">
                  <span>23,00</span>
                  <div class="btn btn-dark" ${'@click'}="${'this.modal = true'}">Dettaglio</div>
                </div>
              </div>
            </div>
          </div>
          `
      document.querySelector("#menu > div > div.conatiner_dishes").style.gap = '3px';
      document.querySelector("#menu > div > div.conatiner_dishes").innerHTML = markup

    },

  }
}
</script>

<template>





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


  <section id="menu">
    <div class="container">

      <div class="badges">

        <div id="container_badges">

          <span class="badge " @click="showPlate('Antipasti')">Antipasti</span>

          <span class="badge " @click="showPlate('Primi')">Primi</span>

          <span class="badge " @click="showPlate('Secondi')">Secondi</span>

          <span class="badge " @click="showPlate('Contorni')">Contorni</span>

          <span class="badge " @click="showPlate('Dessert')">Dessert</span>

          <span class="badge " @click="showPlate('Bevande')">Bevande</span>

        </div>



        <swiper :slidesPerView="4" :spaceBetween="10" :pagination="{
          clickable: true,
        }" :modules="modules" id="swipper" class="swipperclass">

          <swiper-slide @click="showPlate('Antipasti')">
            <span class="badge text-bg-success">Antipasti</span>
          </swiper-slide>

          <swiper-slide @click="showPlate('Primi')">
            <span class="badge text-bg-success">Primi</span>
          </swiper-slide>

          <swiper-slide @click="showPlate('Secondi')">
            <span class="badge text-bg-success">Secondi</span>
          </swiper-slide>

          <swiper-slide @click="showPlate('Contorni')">
            <span class="badge text-bg-success">Contorni</span>
          </swiper-slide>

          <swiper-slide @click="showPlate('Dessert')">
            <span class="badge text-bg-success">Dessert</span>
          </swiper-slide>

          <swiper-slide @click="showPlate('Bevande')">
            <span class="badge text-bg-success">Bevande</span>
          </swiper-slide>

        </swiper>



      </div>


      <div class="conatiner_dishes">



        <div class="card_dish" @click="showPlate('Antipasti')">
          <h3>Antipasti</h3>
          <div class="img_bottom">
            <img src="../../public/img/antipasto.webp" alt="">

          </div>



        </div>



        <div class="card_dish" @click="showPlate('Primi')">
          <h3>Primi</h3>
          <div class="img_bottom">
            <img src="../../public/img/primi.webp" alt="">

          </div>
        </div>

        <div class="card_dish" @click="showPlate('Secondi')">
          <h3>Secondi</h3>
          <div class="img_bottom">
            <img src="../../public/img/secondi.webp" alt="">

          </div>
        </div>

        <div class="card_dish" @click="showPlate('Contorni')">
          <h3>Contorni</h3>
          <div class="img_bottom">
            <img src="../../public/img/contorni.webp" alt="">

          </div>
        </div>

        <div class="card_dish" @click="showPlate('Dessert')">
          <h3>Dessert</h3>
          <div class="img_bottom">
            <img src="../../public/img/dessert.webp" alt="">

          </div>
        </div>

        <div class="card_dish" @click="showPlate('Bevande')">
          <h3>Bevande</h3>
          <div class="img_bottom">
            <img src="../../public/img/bevande.jpg" alt="">

          </div>
        </div>

      </div>
    </div>
    <div v-if="modal === true">
      <h1>porco dio</h1>
    </div>



  </section>

</template>

<style></style>