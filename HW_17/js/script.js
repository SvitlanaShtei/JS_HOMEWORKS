'use strict';

const year = +prompt('Введіть свій рік народження:');
const city = prompt('Введіть місто, в якому ви живете:');
const sport = prompt('Введіть свій улюблений вид спорту:');

const currentYear = new Date().getFullYear();

let age;
let country = '';
const capitals = {
    'Київ': 'Україна',
    'Вашингтон': 'США',
    'Лондон': 'Велика Британія',
};

const champions = {
    'бокс': 'Віталій Кличко',
    'футбол': 'Андрій Шевченко',
    'важка атлетика': 'Василь Вірастюк',
};

let error = '';

if (year === null || isNaN(year)) {
    error += 'Шкода, що ви не захотіли ввести свій рік народження\n';
}

if (city === null) {
    error += 'Шкода, що ви не захотіли ввести своє місто\n';
}

if (sport === null) {
    error += 'Шкода, що ви не захотіли ввести свій улюблений вид спорту\n';
}

if (error !== '') {
    alert(error);
} else {
    age = currentYear - year;

    if (capitals.hasOwnProperty(city)) {
        country = capitals[city];
    }

    let message = 'Ваш вік: ' + age + '\n';

    if (capitals.hasOwnProperty(city)) {
        message += 'Ти живеш у столиці ' + capitals[city] + '.\n';
    } else {
        message += 'Ти живеш у місті ' + city + '.\n';
    }

    const sportLowerCase = sport.toLowerCase();

    if (champions.hasOwnProperty(sportLowerCase)) {
        const championsName = champions[sportLowerCase];
        message += 'Круто! Хочеш стати як ' + championsName + '?';
    } else {
        message += 'Твій улюблений вид спорту ' + sport;
    }

    alert(message);
}

