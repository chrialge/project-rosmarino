<script>
export default {
    name: "ReservationConfirm",
    data() {
        return {}
    }
}
</script>

<template>

    <div class="container_reservation_confirm">

        <div class="card_confirm">
            <div class="img_top">
                <img src="../../public/img/check-image.png" alt="">
            </div>

            <div class="body_card">
                <h2>
                    Congratulazioni!!
                </h2>
                <p>
                    Abbiamo inviato un messagio per la prenotazione al ristorantore, quando risponderà le arrivera una
                    email di conferma o di disdetta.
                </p>
                <router-link :to="{ name: 'home' }" class="btn">
                    Torna alla home
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.container_reservation_confirm {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #074799;

    &>.card_confirm {
        max-width: 700px;
        text-align: center;
        box-shadow: 0 2px 24px hsla(228, 80%, 4%, 0.3);

        padding: 20px;
        border-radius: 40px;
        background-color: #BE9639;


        .img_top {
            max-width: 400px;
            margin: auto;

            &>img {
                width: 100%;
            }
        }

        .body_card {

            &>h2 {
                padding-bottom: 15px;
                color: #008000;
            }

            &>p {
                color: white;
            }

            &>a {
                background: #074799;

                color: white;

                &:hover {
                    background: #074699a8;

                }
            }
        }



    }
}
</style>
