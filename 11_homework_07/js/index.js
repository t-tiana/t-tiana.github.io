//1. створити список з допомогою роботи з домом, пронумерувати список та вивести всі його значення.
// Населення відобразити в млн '40 млн'. Київ та Україна підсвітити синьо-жовтим кольором.

const COUNTRY_list = [

    {

        country: 'Україна',

        capital: 'Київ',
        count: 40000000

    },

    {

        country: 'Грузія',

        capital: 'Тбілісі',

        count: 10000000

    },

    {

        country: 'Великобританія',

        capital: 'Лондон',
        count: 100000000

    },

    {

        country: 'США',

        capital: 'Вашингтон',
        count: 300000000

    }];

let createTaskBlock = (taskNum, number, taskWrap, list) => {

    taskNum.setAttribute('class', 'task-number');
    taskNum.innerHTML = `Task #${number}`;

    taskWrap.setAttribute('class', 'main-container__task-wrap');
    taskWrap.append(taskNum, list);

    list.setAttribute('class', 'list');

    mainContainerColumn.append(taskWrap)
    mainContainerRow.append(title, mainContainerColumn);
    mainContainer.append(mainContainerRow);
    document.body.append(mainContainer);

}

let mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'main-container');

let mainContainerRow = document.createElement('div');
mainContainerRow.setAttribute('class', 'main-container__row');

let mainContainerColumn = document.createElement('div');
mainContainerColumn.setAttribute('class', 'main-container__column');


let title = document.createElement('h1');
title.setAttribute('class', 'title');
title.innerHTML = 'JS Homework 07';

let taskWrapper1 = document.createElement('div');
let taskNumber1 = document.createElement('h3');
let list1 = document.createElement('ol');

createTaskBlock(taskNumber1, '1', taskWrapper1, list1);

let renderCountry = COUNTRY_list.forEach((element, index) => {
    let countryValue = element.country;
    let capitalValue = element.capital;
    let populationValue = element.count / 1e6 + ' млн';


    let liCountry = document.createElement('li');
    liCountry.setAttribute('class', 'country');

    let capitalWrap = document.createElement('span');
    capitalWrap.setAttribute('class', 'capital');

    let countryWrap = document.createElement('span');
    countryWrap.setAttribute('class', 'country-name');

    let populationWrap = document.createElement('span');
    populationWrap.setAttribute('class', 'population');

    let appendValues = () => {
        populationWrap.append(populationValue);
        liCountry.append(countryWrap, capitalWrap, populationWrap);
        list1.append(liCountry);
    }


    if (countryValue === 'Україна') {
        let colorize = function (word, container) {
            for (let i = 0; i < word.length; i++) {
                let letterContainer = document.createElement('span');
                let letter = word[i];
                letterContainer.append(letter);
                container.append(letterContainer);
                if (i % 2) {
                    letterContainer.style.color = '#ffd700';
                } else {
                    letterContainer.style.color = '#0057b7';
                }
            }
        }
        colorize(countryValue, countryWrap);
        colorize(capitalValue, capitalWrap);
        appendValues();


    } else {
        capitalWrap.append(capitalValue);
        countryWrap.append(countryValue);
        appendValues();
    }
});


//2. Створити список в якому можна буде довільно змінювати колір для айтемів (палітра мінімум з 5 кольорів).

const colorList = [
    'Adaptability',
    'Communication',
    'Creative thinking',
    'Dependability',
    'Work ethic',
    'Teamwork',
    'Positivity',
    'Time management',
    'Motivation',
    'Problem-solving',
    'Critical thinking',
    'Conflict resolution'
];

let taskWrapper2 = document.createElement('div');
let taskNumber2 = document.createElement('h3');
let list2 = document.createElement('ol');
list2.setAttribute('id', 'list2')
createTaskBlock(taskNumber2, '2', taskWrapper2, list2);

let colorInput = document.createElement('input');
let updateColor = () => list2.style.color = `${colorInput.value}`;

colorInput.setAttribute('class', 'color-picker')
colorInput.setAttribute('onChange', 'updateColor()');
colorInput.setAttribute('onInput', 'updateColor()');
colorInput.setAttribute('value', '3399FF80');
colorInput.setAttribute('data-jscolor',
    `{position: 'right', width: 181, height: 121,
\t\tpalette: '#FFFFFFFF #FF0000FF #EA6E00FF #BFBA00FF #06B200FF #0096B4FF #0008FFFF #6E00C1FF #000000FF',
 paletteCols: 9, paletteHeight: 25,
\t\tpadding: 10, sliderSize: 25, borderRadius: 5,
\t\tborderWidth: 0, controlBorderWidth: 1, pointerBorderWidth: 2,
\t\tborderColor: '#000', controlBorderColor: '#AAA', backgroundColor: '#F3F3F3', shadowColor: 'rgba(0,0,0,.4)',
\t\tcloseButton: true, closeText: 'OK', buttonColor: '#333'}`
);


list2.append(colorInput);

let renderColorList = colorList.forEach((element) => {
    let li = document.createElement('li');
    li.setAttribute('class', 'element');
    li.innerHTML = element;
    list2.append(li);
});