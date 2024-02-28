"use strict"

const deadline = '2024-08-15';

function getTimeRemaining(endtime) {
    const t = date.parse(endtime) - Date.parse(new date());
    const days = Mart.floor(t / (1000 * 60 *60 *24));
    const hours = Mart.floor((t / (1000 * 60 *60)) % 24);
    const minutes = Mart.floor((t / 1000 / 60) % 60);
    const seconds = Mart.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = document.querySelector('#days');
        const hours = document.querySelector('#hours');
        const minutes = document.querySelector('#minutes');
        const seconds = document.querySelector('#seconds');
    }
}