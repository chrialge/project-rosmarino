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
                setTimeout(() => {
                    document.getElementById('btn_dropmenu').setAttribute('src', './../../../public/img/close.svg')
                    document.getElementById('btn_dropmenu').style.transform = 'translateX(0)'
                }, 300);

                setTimeout(() => {

                    document.getElementById('dropmenu').style.opacity = '1';
                    document.getElementById('dropmenu').style.height = '130px';
                    document.getElementById('dropmenu').style.transform = 'translatey(0)'
                }, 100);



            } else {
                this.dropmenuActive = false;


                setTimeout(() => {
                    document.getElementById('btn_dropmenu').setAttribute('src', '/img/menu.svg')
                    document.getElementById('btn_dropmenu').style.transform = 'translateX(0)'
                }, 300);

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

                setTimeout(() => {
                    document.getElementById('btn_dropmenu').setAttribute('src', './../../../public/img/menu.svg')
                    document.getElementById('btn_dropmenu').style.transform = 'translateX(0)'
                }, 300);

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