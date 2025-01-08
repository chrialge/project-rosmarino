<script>
import tt from '@tomtom-international/web-sdk-maps';
import cc from '@tomtom-international/web-sdk-services';
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
            base_api_url: 'http://127.0.0.1:8000/',
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
            console.log('ciao')
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
                    console.log(response)
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
                console.log(this.date)

                const date = new Date(this.date);

                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                return `Nato il ${day}/${month}/${year}`;


            }
        },


    },
    mounted() {

        setTimeout(() => {

            const dd = document.querySelector("#eapps-tripadvisor-reviews-2fb0e2ba-3d20-45dd-a6d7-04bd01bd462c > div > div > div > div.WidgetBackground__ContentContainer-sc-1ho7q3r-1.jUKeJm > div > a")
            console.log(dd);

            dd.setAttribute('style', 'display: none;');
        }, 3000);



        const address = 'Viale Trento Trieste 61, 47838 Riccione Italia'
        cc.services.fuzzySearch({
            key: 'k41eUXpkTG7gxEctBAJDidKJ6MYAEIwd',
            query: address
        })
            .then((resp) => {
                // console.log(resp.results)

                const longitude = resp.results[0].position.lng;
                const latitudine = resp.results[0].position.lat;

                // console.log(longitude, latitudine)

                tt.setProductInfo("Ristorante Rosmarino", "1.0")

                const map = tt.map({
                    key: 'k41eUXpkTG7gxEctBAJDidKJ6MYAEIwd',
                    container: 'map',
                    zoom: 14,
                    language: 'it-IT',
                    center: resp.results[2].position
                })



                map.on('load', () => {
                    new tt.Marker().setLngLat(resp.results[2].position).addTo(map)

                })
            })
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


            <router-link class="btn_reserve" :to="{ name: 'reservation' }">
                Prenota
            </router-link>

        </div>


    </section>
    <!-- /#jumbotron -->



    <section id="reviews">

        <div class="container d-flex justify-content-between align-items-center">

            <div class="container_about">
                <h3>Ristorante Rosmarino</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ea beatae similique incidunt iste
                    corporis quia quis illo iure eveniet! Perspiciatis sint repellendus nisi sapiente saepe temporibus
                    eaque mollitia odit?
                </p>
            </div>
            <div class="elfsight-app-2fb0e2ba-3d20-45dd-a6d7-04bd01bd462c" data-elfsight-app-lazy></div>
        </div>


    </section>
    <!-- /#reviews -->

    <section id="form_newsletter">
        <div class="container">
            <div class="container_map">
                <h3>Dove siamo?</h3>

                <div id="map"></div>
            </div>

            <div class="container_newsletter">
                <h3>Newsletter</h3>

                <form action="" class="row-cols-2 d-flex row" @submit.prevent="check_form()">

                    <div class="form-floating mb-4">
                        <input type="text" v-model="name" id="name" name="name" class="form-control" placeholder=""
                            @keyup="hide_name_error('name', 'error_name')" @blur="check_name('name', 'error_name')">
                        <label for="name">Nome *</label>

                        <!-- messaggio di errore lato front -->
                        <span id="error_name" class="text-danger" style="display: none;">
                            Il campo nome non accetta caratteri numerici.
                        </span>
                    </div>


                    <div class="form-floating mb-4">
                        <input type="text" v-model="last_name" name="last_name" class="form-control" id="last_name"
                            placeholder="" @keyup="hide_name_error('last_name', 'error_last_name')"
                            @blur="check_name('last_name', 'error_last_name')">
                        <label for="last_name">Cognome *</label>

                        <!-- messaggio di errore lato front -->
                        <span id="error_last_name" class="text-danger" style="display: none;">
                            Il campo cognome non accetta caratteri numerici.
                        </span>
                    </div>

                    <div class="mb-4">
                        <VueDatePicker v-model="date" :format="format" :enable-time-picker="false" @blur="check_date()"
                            placeholder="Data di nascita *">
                        </VueDatePicker>

                    </div>


                    <div class="form-floating mb-4">
                        <input type="email" v-model="email" class="form-control" id="email"
                            placeholder="name@example.com" @keyup="hide_error_email()" @blur="check_email()"
                            style="position: relative;">
                        <label for="email">Email address *</label>

                        <!-- messaggio di errore lato front -->
                        <span id="error_email" class="text-danger" style="display: none; position: absolute;">
                            L'email non e valida.
                        </span>
                    </div>

                    <div class="form-floating ">
                        <input type="number" v-model="telephone" name="telephone" class="form-control" id="telephone"
                            placeholder="" @blur="check_telephone()" @keyup="hide_telephone_error()">
                        <label for="telephone">Telefono *</label>

                        <!-- messaggio di errore lato front -->
                        <span id="error_telephone" class="text-danger" style="display: none;">
                            Il numero di telefono non esiste
                        </span>
                    </div>

                    <div class="form-check w-100" id="container_checkbox">
                        <input class="form-check-input" type="checkbox" id="checkPrivacy">
                        <label class="form-check-label" for="checkPrivacy"
                            style="margin-left: 0.55rem; margin-top: 3px;">
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

    <FooterApp />


</template>

<style></style>