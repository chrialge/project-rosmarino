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
    return {}
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

      const array = document.querySelectorAll("#menu > div > div.conatiner_dishes > div");
      array.forEach((element) => {
        if (value !== element.childNodes[0].textContent) {
          element.style.display = 'none'
        } else {
          element.childNodes[1].style.display = 'none';

          const markup = `
          <div class="container_return">
            <div class="d-flex gap-2 align-items-center ms-3 pt-2 pb-2" onclick=" window.location.reload();">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
              <span class="fs-5">Indietro</span>
            </div>
          </div>
          `


          const markupDish = `
          <hr>
          <div class="d-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 gap-5 justify-content-between">

            <div class="card" v-for="n in 5">
              <img class="card-img-top" src="../../public/img/antipasto.webp" alt="">
              <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Text</p>
              </div>
            </div>
          </div>
          `
          if (!element.childNodes[2]) {
            document.querySelector("#menu > div > div.conatiner_dishes").style.gap = '1px'
            element.insertAdjacentHTML('afterend', markupDish);
            element.insertAdjacentHTML('afterend', markup)

          }
        }
      });
    },
    returnPage() {
      console.log('ciao');
      window.location.reload();
    }
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

          <span class="badge text-bg-success">Antipasti</span>

          <span class="badge text-bg-success">Primi</span>

          <span class="badge text-bg-success">Secondi</span>

          <span class="badge text-bg-success">Contorni</span>

          <span class="badge text-bg-success">Dessert</span>

          <span class="badge text-bg-success">Bevande</span>

        </div>



        <swiper :slidesPerView="4" :spaceBetween="10" :pagination="{
          clickable: true,
        }" :modules="modules" id="swipper" class="swipperclass">

          <swiper-slide>
            <span class="badge text-bg-success">Antipasti</span>
          </swiper-slide>

          <swiper-slide>
            <span class="badge text-bg-success">Primi</span>
          </swiper-slide>

          <swiper-slide>
            <span class="badge text-bg-success">Secondi</span>
          </swiper-slide>

          <swiper-slide>
            <span class="badge text-bg-success">Contorni</span>
          </swiper-slide>

          <swiper-slide>
            <span class="badge text-bg-success">Dessert</span>
          </swiper-slide>
          <swiper-slide>
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



        <div class="card_dish">
          <h3>Primi</h3>
          <div class="img_bottom">
            <img src="../../public/img/primi.webp" alt="">

          </div>
        </div>

        <div class="card_dish">
          <h3>Secondi</h3>
          <div class="img_bottom">
            <img src="../../public/img/secondi.webp" alt="">

          </div>
        </div>

        <div class="card_dish">
          <h3>Contorni</h3>
          <div class="img_bottom">
            <img src="../../public/img/contorni.webp" alt="">

          </div>
        </div>

        <div class="card_dish">
          <h3>Dessert</h3>
          <div class="img_bottom">
            <img src="../../public/img/dessert.webp" alt="">

          </div>
        </div>

        <div class="card_dish">
          <h3>Bevande</h3>
          <div class="img_bottom">
            <img src="../../public/img/bevande.jpg" alt="">

          </div>
        </div>

      </div>
    </div>



  </section>

</template>

<style></style>