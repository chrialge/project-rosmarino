<script>


export default {
    name: "FooterApp",
    data() {
        return {


        }
    },
    methods: {
        openMap() {
            const latitude = 43.99604134408964;
            const longitude = 12.666046773103155;

            const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

            window.open(url, "_blank");
        }
    },
    mounted() {
    }

}
</script>

<template>




    <footer id="site_footer" class="text-white text-center text-lg-start ">
        <!-- Grid container -->
        <div class="container p-4">
            <!--Grid row-->
            <div class="row mt-4">
                <!--Grid column-->
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <h5 class="text-uppercase mb-4">Link</h5>

                    <ul class="list-unstyled" style="z-index: 999;">
                        <li>
                            <router-link :to="{ name: 'home' }" activeClass="active_footer" class="link_footer">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'menu' }" activeClass="active_footer" class="link_footer">
                                Menu
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'about' }" activeClass="active_footer" class="link_footer">
                                Chi siamo?
                            </router-link>
                        </li>
                    </ul>


                    <div class="mt-4 d-flex gap-2 justify-content-center">
                        <!-- Facebook -->
                        <a type="button" class="btn_social"
                            href="https://www.facebook.com/people/Rosmarino-Riccione/100091844406116/" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>

                        <!-- Twitter -->
                        <a type="button" class="btn_social"
                            href="https://www.thefork.it/ristorante/ristorante-rosmarino-riccione-r802415"
                            target="_blank">
                            <div style="width: 23px; overflow: hidden;">
                                <img src="../../../public/img/Thefork-logo-green.svg" alt="" style="width: 80px;">

                            </div>
                        </a>

                        <!-- Instagram -->
                        <a type="button" class="btn_social" style="font-size: 23px;">
                            <i class="fab fa-instagram"></i>
                        </a>

                    </div>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase mb-4 pb-1">Contatti</h5>


                    <ul class="fa-ul" style="margin-left: 1.65em;">
                        <li class="mb-3" @click="openMap()" style="cursor: pointer;">
                            <span class="fa-li">
                                <i class="fa-solid fa-location-dot"></i>
                            </span>
                            <span class="ms-2">
                                Viale Trento Trieste 61, 47838 Riccione Italia
                            </span>
                        </li>
                        <li class="mb-3">
                            <span class="fa-li"><i class="fas fa-envelope"></i></span><span
                                class="ms-2">info@example.com</span>
                        </li>
                        <li class="mb-3">
                            <a href="callto:+39 37 61 54 55 57" style="text-decoration: none; color:#BE9639;">
                                <span class="fa-li">
                                    <i class="fas fa-phone"></i>
                                </span>
                                <span class="ms-2">+39 376 154
                                    5557
                                </span>
                            </a>

                        </li>
                    </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase mb-4">Orari di apertura :</h5>

                    <table class="table text-center ">
                        <tbody class="font-weight-normal">
                            <tr>
                                <td>lundedi:</td>
                                <td>chiuso</td>
                            </tr>
                            <tr>
                                <td>Martedi - Mercoledi:</td>
                                <td>19:30 - 22:30</td>
                            </tr>
                            <tr>
                                <td>Giovedi - Domenica:</td>
                                <td>12:00 - 14:00/ 19:30 - 22:30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!--Grid column-->
            </div>
            <!--Grid row-->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2024 Christian Algieri
        </div>
        <!-- Copyright -->
    </footer>




</template>

<style></style>