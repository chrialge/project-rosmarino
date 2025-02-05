<script>
import { Value } from 'sass';
import { ref } from 'vue';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { getMonth, getYear, getDate, lastDayOfMonth, getTime } from 'date-fns';
import axios from 'axios';







export default {
    name: 'AppReservation',
    data() {
        return {
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
            month: null,
            year: null,
            day: null,
            dayName: null,
        }
    },

    methods: {
        getToday() {
            const monthYearEl = document.querySelector('.month_year');
            const datetxtEl = document.querySelector('.date_txt');

            let dmObj = {
                days: [
                    "Lunedì",
                    "Martedì",
                    "Mercoledì",
                    "Giovedì",
                    "Venerdì",
                    "Sabato",
                    "Domenica"
                ],
                month: [
                    "Gennaio",
                    "Febbraio",
                    "Marzo",
                    "Aprile",
                    "Maggio",
                    "Giugno",
                    "Luglio",
                    "Agosto",
                    "Settembre",
                    "Ottobre",
                    "Novembre",
                    "Dicembre"
                ]
            }

            this.date = new Date();
            this.dayName = dmObj.days[this.date.getDay() - 1];
            this.month = this.date.getMonth();
            this.day = this.date.getDate();


            datetxtEl.innerHTML = `${this.dayName},${this.day},${dmObj.month[this.month]}, ${this.year}`;
            monthYearEl.innerHTML = `${dmObj.month[this.month]} ${this.year}`;

            const dateBtn = document.querySelectorAll('.day_list');

            if (document.querySelector('.active')) {
                document.querySelector('.active').classList.replace('active', 'date_btn');
            }

            dateBtn.forEach((btn) => {


                if (btn.textContent == this.day) {
                    btn.classList.replace('date_btn', 'active');
                }
            })
        },
        getTime() {
            console.log(this.dayName)
        },

        returnPage() {

            const path = this.$route.meta.from;
            this.$router.push(path.path)
        },
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


    },
    mounted() {

        const datetxtEl = document.querySelector('.date_txt');
        const dateEl = document.querySelector('.dates');
        const btnEl = document.querySelectorAll('.calendar_heading > .fa-solid');
        const monthYearEl = document.querySelector('.month_year');

        let dmObj = {
            days: [
                "Lunedì",
                "Martedì",
                "Mercoledì",
                "Giovedì",
                "Venerdì",
                "Sabato",
                "Domenica"
            ],
            month: [
                "Gennaio",
                "Febbraio",
                "Marzo",
                "Aprile",
                "Maggio",
                "Giugno",
                "Luglio",
                "Agosto",
                "Settembre",
                "Ottobre",
                "Novembre",
                "Dicembre"
            ]
        }


        this.date = new Date();
        this.dayName = dmObj.days[this.date.getDay() - 1];
        this.month = this.date.getMonth();

        this.year = this.date.getFullYear();
        this.day = this.date.getDate();
        setTimeout(() => {
            datetxtEl.innerHTML = `${this.dayName},${this.day},${dmObj.month[this.month]}, ${this.year}`;

        }, 100)


        const displayCalendar = () => {
            let firstDayofMonth = new Date(this.year, this.month, 0).getDay();

            let lastDateofLastMonth = new Date(this.year, this.month, 0).getDate();
            let lastDateOfMonth = new Date(this.year, this.month + 1, 0).getDate();
            let lastDayMonth = new Date(this.year, this.month, lastDateOfMonth).getDay();

            let days = "";


            for (let i = firstDayofMonth; i > 0; i--) {

                days += `<li class="dummy">${lastDateofLastMonth - i + 1}</li>`
            }

            for (let i = 1; i <= lastDateOfMonth; i++) {


                let checkToday = i === this.date.getDate() && this.month === new Date().getMonth() && this.year === new Date().getFullYear() ? "active" : 'date_btn';


                days += `<li class="${checkToday} day_list" click="confirmDate()">${i}</li>`;

            }

            for (let i = lastDayMonth; i < 7; i++) {
                days += `<li class="dummy">${i - lastDayMonth + 1}</li>`;
            }


            dateEl.innerHTML = days;
            monthYearEl.innerHTML = `${dmObj.month[this.month]} ${this.year}`

            const dateBtn = document.querySelectorAll('.day_list');

            dateBtn.forEach((btn) => {
                btn.addEventListener('click', () => {




                    if (document.querySelector('.active')) {
                        document.querySelector('.active').classList.replace('active', 'date_btn');
                    }




                    const dateForText = new Date(this.year, this.month, btn.textContent);
                    this.date = dateForText;


                    this.dayName = dmObj.days[dateForText.getDay() - 1];

                    datetxtEl.innerHTML = `${this.dayName},${btn.textContent},${dmObj.month[this.month]}, ${this.year}`

                    btn.classList.replace('date_btn', 'active');
                   
                })
            })

        }

        displayCalendar();


        btnEl.forEach((btn) => {
            btn.addEventListener('click', (e) => {


                if (btn.id === "prev") {
                    let monthggg = new Date().getMonth();
                    let yearggg = new Date().getFullYear();
                    if (this.month === 1) {
                        this.month = btn.id === "prev" ? this.month - 1 : this.month + 1;

                    }
                    if (monthggg > this.month && yearggg >= this.year) {
                        e.preventDefault();

                    } else {
                        console.log('grig')
                        this.month = btn.id === "prev" ? this.month - 1 : this.month + 1;
                        if (this.month < 0 || this.month > 11) {
                            this.day = new Date(this.year, this.month, new Date().getDate());

                            this.month = this.day.getMonth();
                            this.year = this.day.getFullYear();

                        } else {
                            this.day = new Date();
                        }
                        displayCalendar();
                    }

                } else {
                    this.month = btn.id === "prev" ? this.month - 1 : this.month + 1;
                    if (this.month < 0 || this.month > 11) {
                        this.day = new Date(this.year, this.month, new Date().getDate());

                        this.month = this.day.getMonth();
                        this.year = this.day.getFullYear();

                    } else {
                        this.day = new Date();
                    }
                    displayCalendar();
                }




            })
        })





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

                } else {
                    formStepsNum++;
                    this.updateFormStep(formSteps, formStepsNum, false);

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

        <div class="return_page" @click="returnPage()">
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


                <div class="time_container">

                    
                </div>



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

                <div class="calendar">
                    <div class="calendar_inner">
                        <div class="calendar_controls">
                            <div class="calendar_heading">
                                <i class="fa-solid fa-arrow-left" id="prev"></i>
                                <h2 class="month_year"></h2>
                                <i class="fa-solid fa-arrow-right" id="next"></i>
                            </div>
                            <div class="current_datetime">
                                <p class="day_txt" @click="getToday()">Oggi</p>
                                <p class="date_txt">Tue, 10, Oct 2023</p>

                            </div>

                            <div class="days_date">
                                <ul class="days">
                                    <li>Lun</li>
                                    <li>Mar</li>
                                    <li>Mer</li>
                                    <li>Gio</li>
                                    <li>Ven</li>
                                    <li>Sab</li>
                                    <li>Dom</li>
                                </ul>
                                <ul class="dates">
                                    <li class="active">1</li>
                                    <li class="dummy">2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>6</li>
                                    <li>7</li>
                                    <li>8</li>
                                    <li>9</li>
                                    <li>10</li>
                                    <li>11</li>
                                    <li>12</li>
                                    <li>13</li>
                                    <li>14</li>
                                    <li>15</li>
                                    <li>16</li>
                                    <li>17</li>
                                    <li>18</li>
                                    <li>19</li>
                                    <li>20</li>
                                    <li>21</li>
                                    <li>22</li>
                                    <li>23</li>
                                    <li>24</li>
                                    <li>25</li>
                                    <li>26</li>
                                    <li>27</li>
                                    <li>28</li>
                                    <li>29</li>
                                    <li>30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="btns_group">
                    <a href="#" class="btn_a btn-previous">
                        Indietro
                    </a>
                    <a href="#" class="btn_a btn-next " @click="getTime()">
                        Avanti
                    </a>
                </div>

            </div>

            <div class="form-step ">


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
    padding: 50px 5px 5px;
}

/* Global */

.return_page {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #BE9639;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;

    &:hover {
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