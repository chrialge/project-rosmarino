<script>
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from 'axios';


export default {
    name: "AppHome",
    data() {
        return {
            loading: false,
            name: "",
            last_name: "",
            date: "",
            email: "",
            telephone: "",
            base_api_url: 'https://backrosmarino.org/',
        }
    },
    components: {
        HeaderApp,
        FooterApp,

    },

    methods: {
        check_name(element, error) {
            const input = document.getElementById(element);
            const errorEl = document.getElementById(error);
            const regex = /[^a-z']/
            const value = input.value.trim().toLowerCase();


            if (value.length < 3 || value.length > 50 || value.match(regex)) {
                input.style.borderColor = 'red';
                errorEl.style.display = '';
                return false;
            } else {
                return true;
            }

        },
        check_email() {
            const input = document.getElementById('email');
            const errorEl = document.getElementById('error_email')
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const value = input.value.trim().toLowerCase();



            if (regex.test(value) === false || value.length < 3 || value.lenght > 100) {

                input.style.borderColor = 'red';
                errorEl.style.display = '';

                return false;

            } else {
                return true;
            }
        },
        check_date() {
            const input = document.querySelector("#form_newsletter > div > div.container_newsletter > form > div:nth-child(3) > div > div:nth-child(1) > div > input");

            if (this.date === '') {
                input.style.borderColor = 'red';
                return false;
            } else {
                input.style.borderColor = '';
                return true;
            }
        },
        check_telephone() {
            const input = document.getElementById("telephone");
            const errorEl = document.getElementById("error_telephone");
            const regex = /[^0-9']/;
            const value = input.value.trim().toLowerCase();

            if (value.length < 9 || value.lenght > 14 || value.match(regex)) {


                input.style.borderColor = 'red';
                errorEl.style.display = '';
                return false;
            } else {
                return true;
            }

        },
        hide_name_error(element, error) {
            const input = document.getElementById(element);
            const errorEl = document.getElementById(error);
            const regex = /[^a-z']/
            const value = input.value.trim().toLowerCase();


            if (value.length > 3 || value.length < 50) {

                if (value.match(regex)) {

                } else {
                    input.style.borderColor = '';
                    errorEl.style.display = 'none'
                }
            }
        },
        hide_error_email() {

            const input = document.getElementById('email');
            const errorEl = document.getElementById('error_email')
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const value = input.value.trim().toLowerCase();

            if (value.length > 3 || value.lenght < 100) {

                if (regex.test(value)) {
                    input.style.borderColor = '';
                    errorEl.style.display = 'none'
                }
            }

        },
        hide_telephone_error() {
            const input = document.getElementById("telephone");
            const errorEl = document.getElementById("error_telephone");
            const regex = /[^0-9']/;
            const value = input.value.trim().toLowerCase();



            if (value.length >= 9 || value.lenght < 14) {

                if (value.match(regex)) {

                } else {

                    input.style.borderColor = '';
                    errorEl.style.display = 'none'
                }
            }

        },
        check_form() {

            this.loading = true;
            const check = document.getElementById("checkPrivacy");


            if (this.check_name('name', 'error_name') && this.check_name('last_name', 'error_last_name') && this.check_date() && this.check_email() && this.check_telephone() && check.checked) {

                const date = new Date(this.date);
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                const data = {
                    name: this.name,
                    last_name: this.last_name,
                    birth_day: `${year}-${month}-${day}`,
                    email: this.email,
                    telephone: this.telephone,
                }


                const url = this.base_api_url + "api/customers";
                axios.post(url, data).then((response) => {


                    if (response.data.success == true) {
                        document.getElementById("popup").style.visibility = "visible";
                        document.getElementById("popup").style.opacity = "1";
                        document.querySelector(".popup-inner").style.bottom = "0vw";
                        document.querySelector(".popup-inner").style.right = "0vh";
                        document.querySelector(".popup-inner").style.transform = "rotate(0)";


                        this.name = '';
                        this.last_name = '';
                        this.birth_day = '';
                        this.date = '';
                        this.email = '';
                        this.telephone = '';
                        this.loading = false;
                    }


                }).catch(err => {
                    console.error(err);
                })
            } else {
                if (check.checked === false) {
                    document.getElementById("error_check").style.display = "block";

                }
                this.check_name('name', 'error_name');
                this.check_name('last_name', 'error_last_name');
                this.check_date();
                this.check_email();
                this.check_telephone();
                this.loading = false;
            }



        },
        format() {

            if (this.date === "") {

                return "Nato il ..."

            } else {

                const date = new Date(this.date);

                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                return `Nato il ${day}/${month}/${year}`;


            }
        },
        openMap() {
            const latitude = 43.99599650186263;
            const longitude = 12.666068938638197;

            const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

            window.open(url, "_blank");
        },
        closeModal() {

            document.getElementById("popup").style.visibility = "";
            document.getElementById("popup").style.opacity = "";
            document.querySelector(".popup-inner").style.bottom = "";
            document.querySelector(".popup-inner").style.right = "";
            document.querySelector(".popup-inner").style.transform = "";
        }

    },
    mounted() {



        const pos = { lat: 43.99599650186263, lng: 12.666068938638197 };

        const map = new google.maps.Map(document.getElementById("map"), { center: pos, zoom: 19, mapId: "81a20886051208a2" })

        const marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: "Uluru"
        })



        const element = document.querySelector("#eapps-tripadvisor-reviews-2fb0e2ba-3d20-45dd-a6d7-04bd01bd462c > div > div > div > div.WidgetBackground__ContentContainer-sc-1ho7q3r-1.jUKeJm > div > a");


        setTimeout(() => {
            document.querySelector("#eapps-tripadvisor-reviews-2fb0e2ba-3d20-45dd-a6d7-04bd01bd462c > div > div > div > div.WidgetBackground__ContentContainer-sc-1ho7q3r-1.jUKeJm > div > a").style.display = "none"
        }, 3000)



    }

}
</script>

<template>

    <HeaderApp />

    <div class="space_header">

    </div>


    <div class="popup" id="popup">
        <div class="popup-inner">
            <div class="popup-top">
                <img src="../../public/img/check-image.png" alt="">
            </div>
            <div class="popup-body">
                <span class="popup-text">Complimenti!! Ti sei sei registrato/a con successo.</span>
            </div>
            <a class="popup__close" @click="closeModal()">X</a>
        </div>
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





    <section id="menu">


        <div class="container_menu_card">
            <router-link class="container_entre_plate" :to="{ name: 'menu' }">
                <div class="container_card">
                    <h4>Antipasti</h4>
                    <img src="../../public/img/entre.png" alt="">
                </div>
            </router-link>


            <router-link class="container_first_plate" :to="{ name: 'menu' }">
                <div class="container_card">
                    <h4>Primi</h4>
                    <img src="../../public/img/entre.png" alt="">
                </div>
            </router-link>

            <router-link class="container_second_plate" :to="{ name: 'menu' }">
                <div class="container_card">
                    <h4>Secondi</h4>
                    <img src="../../public/img/entre.png" alt="">
                </div>
            </router-link>

            <router-link class="container_dessert_plate" :to="{ name: 'menu' }">
                <div class="container_card">
                    <h4>Dessert</h4>
                    <img src="../../public/img/entre.png" alt="">
                </div>
            </router-link>
        </div>
    </section>

    <section id="reviews">

        <div class="container d-flex justify-content-center align-items-center">


            <div class="elfsight-app-2fb0e2ba-3d20-45dd-a6d7-04bd01bd462c" data-elfsight-app-lazy></div>
        </div>


    </section>
    <!-- /#reviews -->

    <section id="form_newsletter">
        <div class="container">
            <div class="container_map">
                <h3>Dove siamo?</h3>

                <button class="" style="outline: 0;" @click="openMap()">
                    <span>
                        <i class="fa-solid fa-map-location-dot"></i>
                    </span>
                    <span class="ms-2">
                        Viale Trento Trieste 61, 47838 Riccione Italia
                    </span>
                </button>

                <div id="map"></div>


            </div>

            <div class="container_newsletter">
                <h3>Newsletter</h3>

                <form action="" class="row-cols-1 row-cols-sm-2 d-flex row" @submit.prevent="check_form()">

                    <div class="form-floating mb-4">
                        <input type="text" v-model="name" id="name" name="name" class="form-control" placeholder=""
                            @keyup="hide_name_error('name', 'error_name')" @blur="check_name('name', 'error_name')">
                        <label for="name" class="label_input">Nome *</label>

                        <!-- messaggio di errore lato front -->
                        <span id="error_name" class="text-danger" style="display: none;">
                            Il campo nome non accetta caratteri numerici.
                        </span>
                    </div>


                    <div class="form-floating mb-4">
                        <input type="text" v-model="last_name" name="last_name" class="form-control" id="last_name"
                            placeholder="" @keyup="hide_name_error('last_name', 'error_last_name')"
                            @blur="check_name('last_name', 'error_last_name')">
                        <label for="last_name" class="label_input">Cognome *</label>

                        <!-- messaggio di errore lato front -->
                        <span id="error_last_name" class="text-danger" style="display: none;">
                            Il campo cognome non accetta caratteri numerici.
                        </span>
                    </div>

                    <div class="mb-4">
                        <VueDatePicker v-model="date" :format="format" :enable-time-picker="false" @blur="check_date()"
                            placeholder="Data di nascita *" locale="it" cancelText="Cancella" selectText="Seleziona">
                        </VueDatePicker>

                    </div>


                    <div class="form-floating mb-4">
                        <input type="email" v-model="email" class="form-control" id="email"
                            placeholder="name@example.com" @keyup="hide_error_email()" @blur="check_email()"
                            style="position: relative;">
                        <label for="email" class="label_input">Email address *</label>

                        <!-- messaggio di errore lato front -->
                        <span id="error_email" class="text-danger" style="display: none; position: absolute;">
                            L'email non e valida.
                        </span>
                    </div>

                    <div class="form-floating ">
                        <input type="number" v-model="telephone" name="telephone" class="form-control" id="telephone"
                            placeholder="" @blur="check_telephone()" @keyup="hide_telephone_error()">
                        <label for="telephone" class="label_input">Telefono *</label>

                        <!-- messaggio di errore lato front -->
                        <span id="error_telephone" class="text-danger" style="display: none;">
                            Il numero di telefono non esiste
                        </span>
                    </div>

                    <div class="form-check w-100" id="container_checkbox">
                        <input class="form-check-input" type="checkbox" id="checkPrivacy">
                        <label class="form-check-label" for="checkPrivacy">
                            Ho preso visione della privacy policy
                        </label>
                        <span id="error_check" class="text-danger" style="display: none;">
                            Per favore acconsenti, e obbligatorio.
                        </span>
                    </div>


                    <button v-if="loading" class="btn_newsletter" disabled>
                        Attendi...
                    </button>
                    <button v-else class="btn_newsletter" type="submit">
                        Iscriviti!
                    </button>

                </form>
            </div>
        </div>


    </section>

    <div class="whatapp">

        <a href="http://wa.me/393761545557" target="_blank">
            <i class="fa-brands fa-whatsapp"></i>
        </a>
    </div>

    <FooterApp />


</template>

<style></style>