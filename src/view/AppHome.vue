<script>
import tt from '@tomtom-international/web-sdk-maps';
import cc from '@tomtom-international/web-sdk-services';

import axios from 'axios';

export default {
    name: "AppHome",
    data() {
        return {

        }
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
                console.log(resp.results[0])

                const longitude = resp.results[0].position.lng;
                const latitudine = resp.results[0].position.lat;

                console.log(longitude, latitudine)

                const map = tt.map({
                    key: 'k41eUXpkTG7gxEctBAJDidKJ6MYAEIwd',
                    container: 'map',
                    zoom: 10,
                    center: [longitude, latitudine]
                })

                map.on('load', () => {
                    new tt.Marker().setLngLat([longitude, latitudine]).addTo(map)
                })
            })
    }

}
</script>

<template>


    <h3>Home</h3>
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

    <section id="form_newsletter">
        <div class="w-50">
            <h3>Dove siamo?</h3>
            <hr>
            <div id="map"></div>
        </div>

        <div class="w-50">
            <h3>Newsletter</h3>
            <hr>
            <form action="">

                <div class="form-floating mb-3">
                    <input type="text" id="first_name" name="first_name" class="form-control" placeholder="">
                    <label for="first_name">Nome</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" name="last_name" class="form-control" id="last_name" placeholder="">
                    <label for="last_name">Cognome</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating d-flex">
                    <input type="number" name="telephone" class="form-control" id="telephone" placeholder="Password">
                    <label for="telephone">telefono</label>
                </div>

            </form>
        </div>

    </section>

    <section id="reviews">
        <div class="elfsight-app-2fb0e2ba-3d20-45dd-a6d7-04bd01bd462c" data-elfsight-app-lazy></div>

    </section>
    <!-- /#reviews -->


</template>

<style></style>