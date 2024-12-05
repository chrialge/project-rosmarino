<script>
import tt from '@tomtom-international/web-sdk-maps';
import cc from '@tomtom-international/web-sdk-services';

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
                console.log(resp.results)

                const longitude = resp.results[0].position.lng;
                const latitudine = resp.results[0].position.lat;

                console.log(longitude, latitudine)

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

                <form action="" class="row-cols-2 d-flex row">

                    <div class="form-floating mb-5">
                        <input type="text" id="first_name" name="first_name" class="form-control" placeholder="">
                        <label for="first_name">Nome</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="text" name="last_name" class="form-control" id="last_name" placeholder="">
                        <label for="last_name">Cognome</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="date" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div class="form-floating d-flex">
                        <input type="number" name="telephone" class="form-control" id="telephone"
                            placeholder="Password">
                        <label for="telephone">telefono</label>
                    </div>

                    <div class="form-check w-100">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>

                    <button class="btn_newsletter" type="submit">
                        Iscriviti!
                    </button>

                </form>
            </div>
        </div>


    </section>



</template>

<style></style>