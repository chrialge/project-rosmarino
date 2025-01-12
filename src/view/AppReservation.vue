<script>
import { Value } from 'sass';
import { ref } from 'vue';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { getMonth, getYear, getDate } from 'date-fns';
import axios from 'axios';




const datevar = ref(new Date())

export default {
    name: 'AppReservation',
    data() {
        return {
            newDate: datevar,
            startTime: { hours: 12, minutes: 30 },
            minTime: { hours: 12, minutes: 30 },
            base_api_url: 'http://127.0.0.1:8000/',
            customer_name: '',
            customer_last_name: '',
            customer_email: '',
            customer_telephone: null,
            date: '',
            person: null,
            loading: false,
            success: false,
            errors: false,
            errorDate: true,
            isRange: [
                { hours: 15, minutes: '*' }, // disable full hour
                { hours: 16, minutes: '*' },
                { hours: 16, minutes: '*' },
                { hours: 17, minutes: '*' },
                { hours: 18, minutes: '*' },
                { hours: 23, minutes: 30 },
                { hours: 23, minutes: 45 },
                { hours: 0, minutes: 0 },

            ],
        }
    },
    methods: {
        updateFormStep(Steps, index) {


            Steps.forEach((Step) => {
                Step.classList.contains("form-step-active") && Step.classList.remove("form-step-active")
            })
            Steps[index].classList.add("form-step-active")

        },
        updateProgressBar(progressSteps, index, progress) {



            progressSteps.forEach((progressStep, idx) => {
                if (idx < index + 1) {
                    progressStep.classList.add('progress-step-active')
                } else {
                    progressStep.classList.remove('progress-step-active')

                }
            });

            if (index == 2) {
                document.getElementById('progress').style.width = "100%";

            } else if (index == 1) {
                document.getElementById('progress').style.width = "50%";

            } else {
                document.getElementById('progress').style.width = "0";

            }
        },
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
        check_telephone() {
            const input = document.getElementById('customer_telephone');
            const errorEl = document.getElementById('error_js_telephone');
            const regex = /[^0-9']/;
            const value = input.value.trim();

            if (value.length > 10 || value.length < 9 || value.match(regex)) {
                input.style.borderColor = 'red';
                errorEl.style.display = '';

                return false;
            } else {
                return true;
            }


        },
        check_email() {
            const input = document.getElementById('customer_email');
            const errorEl = document.getElementById('error_js_email')
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
        check_person() {
            const input = document.getElementById('person');
            const errorEl = document.getElementById('error_js_person');
            const regex = /[^0-9']/;
            const value = input.value.trim();

            if (parseInt(value) < 0 || parseInt(value) > 100 || value.match(regex)) {
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
        hide_error_telephone() {

            const input = document.getElementById('customer_telephone');
            const errorEl = document.getElementById('error_js_telephone');
            const regex = /[^0-9']/;
            const value = input.value.trim();


            if (value.length > 8 && value.length < 11) {

                if (value.match(regex)) {

                } else {
                    input.style.borderColor = '';
                    errorEl.style.display = 'none'
                }
            }

        },
        hide_error_email() {

            const input = document.getElementById('customer_email');
            const errorEl = document.getElementById('error_js_email')
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const value = input.value.trim().toLowerCase();

            if (value.length > 3 || value.lenght < 100) {

                if (regex.test(value)) {
                    input.style.borderColor = '';
                    errorEl.style.display = 'none'
                }
            }

        },
        check_form() {
            this.loading = true;

            if (this.date == 0) {
                this.errorDate = false;

            } else if (!this.check_person()) {
                this.errorDate = false;
            } else {
                console.log(this.date)

                const year = getYear(this.date);
                const month = getMonth(this.date) + 1;
                const day = getDate(this.date);

                let hours = this.date.getHours();
                if (hours.length == 1) {
                    hours = '0' + this.date.getHours();
                }
                let minutes = this.date.getMinutes();
                if (minutes.length == 1) {
                    minutes = '0' + this.date.getMinutes();
                }
                let seconds = '00';
                const dateFormat = `${year}-${month}-${day}`;
                const timeFormat = `${hours}:${minutes}:${seconds}`;


                const data = {
                    customer_name: this.customer_name,
                    customer_last_name: this.customer_last_name,
                    customer_email: this.customer_email,
                    customer_telephone: this.customer_telephone,
                    hour_reservation: timeFormat,
                    date: dateFormat,
                    person: this.person
                }

                const url = this.base_api_url + 'api/reservation';
                axios.post(url, data).then((response) => {


                    this.loading = false;
                    if (response.data.success === true) {
                        console.log(response)


                        this.customer_name = '';
                        this.customer_last_name = '';
                        this.customer_email = '';
                        this.customer_telephone = '';
                        this.date = '';
                        this.person = '';
                        this.$router.push('/reservation-confirm').catch(err => console.log(err));
                    }




                }).catch(err => {
                    console.log(err)
                })
            }


        },
        hide_error_person() {
            const input = document.getElementById('person');
            const errorEl = document.getElementById('error_js_person');
            const regex = /[^0-9']/;
            const value = input.value.trim();

            if (parseInt(value) > 0 || parseInt(value) < 100) {

                if (value.match(regex)) {

                } else {
                    input.style.borderColor = '';
                    errorEl.style.display = 'none'
                }
            }


        },
        format() {


            if (this.date == "") {
                return "Prenotato il ...."
            } else {

                const date = new Date(this.date);

                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                const hours = date.getHours();
                const minutes = date.getMinutes();

                return `${day}/${month}/${year} alle ore ${hours}:${minutes}`
            }
        }

    },
    computed: {

        returnPage() {
            window.history.go(-1)
        }

    },
    mounted() {
        const prevBtns = document.querySelectorAll('.btn-previous');
        const nextBtns = document.querySelectorAll('.btn-next');
        const progress = document.getElementById('progress');
        const formSteps = document.querySelectorAll('.form-step');
        const progressSteps = document.querySelectorAll('.progress_step')

        let formStepsNum = 0;


        nextBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                if (formStepsNum == 0) {
                    if (this.check_name('customer_name', 'error_js_name') && this.check_name('customer_last_name', 'error_js_last_name')) {
                        formStepsNum++;
                        this.updateFormStep(formSteps, formStepsNum, false);
                        this.updateProgressBar(progressSteps, formStepsNum);
                    } else {
                        console.log('ciao')
                        this.check_name('customer_name', 'error_js_name');
                        this.check_name('customer_last_name', 'error_js_last_name');
                    }

                } else if (formStepsNum == 1) {

                    if (this.check_email() && this.check_telephone()) {
                        formStepsNum++;
                        this.updateFormStep(formSteps, formStepsNum, false);
                        this.updateProgressBar(progressSteps, formStepsNum);
                    } else {
                        this.check_telephone();
                        this.check_email()

                    }

                }



            })
        })



        prevBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                formStepsNum--;
                this.updateFormStep(formSteps, formStepsNum, true);
                this.updateProgressBar(progressSteps, formStepsNum);

            })
        })

        const date = new Date();

        const hours = date.getHours();
        const minutes = date.getMinutes();
        if (hours <= 22 && hours >= 15) {
            let date = new Date();
            this.startTime = { hours: 19, minutes: 30 };
            this.minTime = { hours: 19, minutes: 30 };
            this.minDate = date.setDate(date.getDate() + 1);


        }

    }
}
</script>

<template>

    <div class="layout_reservation">

        <div class="return_page" @click="returnPage">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            <span>
                Torna indietro
            </span>
        </div>

        <form action="" class="form" @submit.prevent="check_form()">

            <h1 class="text_center text-color">
                Form di Prenotazione
            </h1>

            <!-- progress-bar -->
            <div class="progress_bar">
                <div class="progress" id="progress">

                </div>
                <div class="progress_step progress-step-active" data-title="Nome"></div>
                <div class="progress_step" data-title="Contatti"></div>
                <div class="progress_step" data-title="Dati"></div>
            </div>


            <!-- step -->
            <div class="form-step form-step-active">
                <div class="input_group">
                    <label for="customer_name">Nome</label>
                    <input type="text" name="customer_name" id="customer_name"
                        @keyup="hide_name_error('customer_name', 'error_js_name')"
                        @blur="check_name('customer_name', 'error_js_name')" v-model="customer_name">

                    <span id="error_js_name" class="text-danger" style="display: none;">
                        Il nome non valido
                    </span>
                </div>

                <div class="input_group">
                    <label for="customer_last_name">Cognome</label>
                    <input type="text" name="customer_last_name" id="customer_last_name"
                        @keyup="hide_name_error('customer_last_name', 'error_js_last_name')"
                        @blur="check_name('customer_last_name', 'error_js_last_name')" v-model="customer_last_name">
                    <span id="error_js_last_name" class="text-danger" style="display: none;">
                        Il cognome non valido
                    </span>
                </div>

                <div>
                    <a href="#" class="btn_a btn-next width_50 ml_auto">
                        Avanti
                    </a>
                </div>

            </div>

            <div class="form-step ">
                <div class="input_group">
                    <label for="customer_telephone">Telefono</label>
                    <input type="number" name="customer_telephone" id="customer_telephone" @blur="check_telephone()"
                        @keyup="hide_error_telephone()" v-model="customer_telephone">
                    <span id="error_js_telephone" class="text-danger" style="display: none;">
                        Il numero di telefono non valido
                    </span>
                </div>

                <div class="input_group">
                    <label for="customer_email">Email</label>
                    <input type="email" name="customer_email" id="customer_email" @blur="check_email()"
                        @keyup="hide_error_email()" v-model="customer_email">
                    <span id="error_js_email" class="text-danger" style="display: none;">
                        L'email non valida
                    </span>
                </div>


                <div class="btns_group">
                    <a href="#" class="btn_a btn-previous">
                        Indietro
                    </a>
                    <a href="#" class="btn_a btn-next ">
                        Avanti
                    </a>
                </div>
            </div>

            <div class="form-step ">
                <div class="input_group">
                    <VueDatePicker v-model="date" :min-date="new Date()" :min-time="minTime" :start-time="startTime"
                        minutes-increment="15" locale="it" :disabled-times="isRange" :state="errorDate"
                        :disabled-week-days="[1]" :format="format" placeholder="Ora e Data *" cancelText="Cancella"
                        selectText="Seleziona">
                    </VueDatePicker>
                </div>

                <div class="input_group">
                    <label for="person">Persone</label>
                    <input type="number" name="person" id="person" @keyup="hide_error_person()" @blur="check_person()"
                        placeholder="7" v-model="person">
                    <span id="error_js_person" class="text-danger" style="display: none;">
                        Il numero di persone non valido
                    </span>
                </div>

                <div class="btns_group">
                    <a href="#" class="btn_a btn-previous">
                        Indietro
                    </a>
                    <button class="btn_a " type="submit" :disabled="loading">
                        <span v-if="loading == false">Conferma</span>
                        <span v-if="loading == true">Attendi...</span>
                    </button>
                </div>

            </div>

        </form>

    </div>

</template>


<style>
/* nome,cognome, telefono, email, date, ore, persone */

:root {
    --primary-color: #074799;
}



*,
*::before,
*::after {
    box-sizing: border-box;
}

.layout_reservation {
    background: #074799;
    margin: 0;
    display: grid;
    place-items: center;
    min-height: 100vh;
}

/* Global */

.return_page {
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 30px;
    background-color: #BE9639;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;

    &:hover{
        background-color: #865f02;
    }
}

label {

    display: block;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
}

input {
    display: block;
    width: 100%;
    padding: 0.45rem 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background-color: #fff;
    outline: 0;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
}

.width_50 {
    width: 50%;
}

.ml_auto {
    margin-left: auto;

}

.text_center {
    text-align: center;
}

.text-color {
    color: var(--primary-color);
}

/* Progress Bar */

.progress_bar {
    position: relative;
    display: flex;
    justify-content: space-between;
    counter-reset: step;
    margin: 2rem 0 4rem;
}

.progress_bar::before,
#progress {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    background-color: #dcdcdc;
    z-index: 3;
    position: absolute;
}

#progress {
    background-color: var(--primary-color);
    width: 0%;
    transition: 0.3s;
}

.progress_step {
    width: 2.1875rem;
    height: 2.1875rem;
    background-color: #dcdcdc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 4;

    &::after {
        content: attr(data-title);
        position: absolute;
        top: calc(100% + 0.5rem);
        font-size: 0.85rem;
        color: var(--primary-color);
    }

    &::before {
        counter-increment: step;
        content: counter(step);

    }

}

.progress-step-active {
    background-color: var(--primary-color);
    color: #fefefe;
}




/* form */

.layout_reservation {
    padding: 5px;
}

.form {
    background-color: #BE9639;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    border: 1px solid #BE9639;
    border-radius: 0.35rem;
    padding: 1.5rem;
    box-shadow: 0 0 5px black;
}

.form-step {
    display: none;
    animation: animate .5s;

}

.form-step-active {
    display: block;
}


.input_group {
    margin: 2rem 0;
}

@keyframes animate {
    from {
        transform: scale(1, 0);
        opacity: 0;
    }

    to {
        transform: scale(1, 1);
        opacity: 1;
    }
}

/* Button */

.btn_a {
    border: 0;
    padding: 0.74rem;
    display: block;
    text-decoration: none;
    background-color: var(--primary-color);
    color: #f3f3f3;
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem;
    transition: 0.3s;

    &:hover {
        box-shadow: 0 0 0 2px #fff, 0 0 0 3px var(--primary-color);
    }
}

.btn_loading {
    padding: 0.74rem;
    display: block;
    text-decoration: none;
    background-color: #074699b7;
    color: #f3f3f3;
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem;
    transition: 0.3s;
    border: 0;
}

.btns_group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}


#app>div>form>div.form-step.form-step-active>div:nth-child(1)>div>div:nth-child(1)>div>input {

    border: 2px solid var(--primary-color);
    box-shadow: 0px 0px transparent;
}
</style>