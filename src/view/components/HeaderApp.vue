<script>


export default {
    name: "HeaderApp",
    data() {
        return {
            dropmenuActive: false,

        }
    },
    methods: {
        openDropMenu() {


            document.getElementById('btn_dropmenu').style.transform = 'translateX(100px)'
            if (this.dropmenuActive === false) {
                this.dropmenuActive = true;
                document.getElementById('dropmenu').style.display = 'block';
                document.getElementById('dropmenu').style.opacity = 0;
                document.getElementById('btn_dropmenu_close').style.transform = 'translateX(0px)'
                document.getElementById('btn_dropmenu_close').style.display = '';


                setTimeout(() => {

                    document.getElementById('dropmenu').style.opacity = '1';
                    document.getElementById('dropmenu').style.height = '130px';
                    document.getElementById('dropmenu').style.transform = 'translatey(0)'
                }, 100);



            } else {
                this.dropmenuActive = false;
                console.log(document.getElementById('btn_dropmenu_close'))


                document.getElementById('btn_dropmenu_close').style.transform = 'translateX(-200px)'

                document.getElementById('dropmenu').style.opacity = '0';
                document.getElementById('dropmenu').style.height = '0';
                setTimeout(() => {

                    document.getElementById('dropmenu').style.display = 'none';


                }, 300);

            }

        },
        closeDropMenu() {
            if (this.dropmenuActive === true) {
                this.dropmenuActive = false;
                document.getElementById('btn_dropmenu').style.transform = 'translateX(0)'

                document.getElementById('btn_dropmenu_close').style.transform = 'translateX(200px)';
                document.getElementById('btn_dropmenu_close').style.display = 'none';



                document.getElementById('dropmenu').style.opacity = '0';
                document.getElementById('dropmenu').style.height = '0';
            }

        }
    },
    mounted() {

    }

}
</script>

<template>


    <header id="site_header">
        <nav class="container">
            <div class="logo">
                <img src="./../../../public/img/logo-white.png" alt="">
            </div>
            <div class="link">
                <ul>
                    <li>
                        <router-link :to="{ name: 'home' }" activeClass="active">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'menu' }" activeClass="active">
                            Menu
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'about' }" activeClass="active">
                            Chi siamo?
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="btn-mobile">
                <img id="btn_dropmenu" src="/img/menu.svg" alt="" @click="openDropMenu()">
                <img id="btn_dropmenu_close" src="/img/close.svg" alt="" @click="closeDropMenu()"
                    style="transform: translateX(200px); display: none;">
                <div id="dropmenu" class="link_for_mobile">
                    <ul>
                        <li>
                            <router-link :to="{ name: 'home' }" activeClass="active" @click="closeDropMenu()">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'menu' }" activeClass="active" @click="closeDropMenu()">
                                Menu
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'about' }" activeClass="active" @click="closeDropMenu()">
                                Chi siamo?
                            </router-link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </header>




</template>

<style></style>