<script>


export default {
    name: "FooterApp",
    data() {
        return {


        }
    },
    methods: {
    },
    mounted() {
    }

}
</script>

<template>




    <footer class="text-white text-center text-lg-start bg-dark">
        <!-- Grid container -->
        <div class="container p-4">
            <!--Grid row-->
            <div class="row mt-4">
                <!--Grid column-->
                <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
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


                    <div class="mt-4">
                        <!-- Facebook -->
                        <a type="button" class="btn btn-floating btn-dark btn-lg"
                            href="https://www.facebook.com/people/Rosmarino-Riccione/100091844406116/">
                            <i class="fab fa-facebook-f"></i>
                        </a>

                        <!-- Twitter -->
                        <a type="button" class="btn btn-floating btn-dark btn-lg">
                            <i class="fab fa-twitter"></i>
                        </a>

                        <!-- Instagram -->
                        <a type="button" class="btn btn-floating btn-dark btn-lg">
                            <i class="fab fa-instagram"></i>
                        </a>

                    </div>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase mb-4 pb-1">Contatti</h5>


                    <ul class="fa-ul" style="margin-left: 1.65em;">
                        <li class="mb-3">
                            <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">
                                Viale Trento Trieste 61, 47838 Riccione Italia
                            </span>
                        </li>
                        <li class="mb-3">
                            <span class="fa-li"><i class="fas fa-envelope"></i></span><span
                                class="ms-2">info@example.com</span>
                        </li>
                        <li class="mb-3">
                            <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+39 376 154
                                5557</span>
                        </li>
                    </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase mb-4">Orari di apertura :</h5>

                    <table class="table text-center text-white">
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