"use strict"

const deadline = '2024-08-15';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 *60 *24));
    const hours = Math.floor((t / (1000 * 60 *60)) % 24);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = document.querySelector('#days');
        const hours = document.querySelector('#hours');
        const minutes = document.querySelector('#minutes');
        const seconds = document.querySelector('#seconds');

        const timeInterval = setInterval(updateClock, 1000);

        // вызов функции без моргания
        updateClock(); 

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total<= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
