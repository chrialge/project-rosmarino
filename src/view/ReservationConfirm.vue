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
    background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(70, 237, 252, 1) 100%);

    &>.card_confirm {
        max-width: 700px;
        text-align: center;
        box-shadow: 0 2px 24px hsla(228, 80%, 4%, 0.3);

        padding: 20px;
        border-radius: 40px;
        background-color: white;

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
            }

            &>a {
                background-color: rgba(63, 94, 251, 1);
                color: white;

                &:hover {
                    background-color: rgba(63, 94, 251, 0.7);
                }
            }
        }



    }
}
</style>
