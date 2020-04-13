/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import champs from './data/lol/lol.js';
import {
  sortData, arrArmorPerLevel, average, computeStats, filterData, search,
} from './data.js';
import { items } from './logos.js';


const arrayChampsValues = Object.values(champs.data);


// LOGIN
const buttonenter = document.querySelector('.enterlogin');
buttonenter.addEventListener('click', () => {
  const screenSecond = document.querySelector('.login');
  screenSecond.classList.replace('login', 'logout');
  const valueInputUser = document.getElementById('inputUser').value;
  document.getElementById('username').innerHTML = valueInputUser;
});


// FUNCION MOSTRAR
const showAll = (array) => {
  let space = '';
  array.forEach((ele) => {
    const nameId = ` <p class='info'>${ele.name}</p>`;
    const roleId = `<p class ='info2'>${ele.tags}</p>`;
    const attack = `<p class='info2'>Nivel de ataque: ${ele.info.attack}</p>`;
    const def = `<p class='info2' >Nivel de defensa: ${ele.info.defense}</p>`;
    const titleId = ` <p class='infoMain'>${ele.title}</p>`;
    const img = `
    <div class='imagenItem'>
      <img src=${items.data.magic.img} /> 
      <img src=${items.data.dificultad.img}  />
      <img src=${items.data.velocidad.img}  />
      <img src=${items.data.daño.img} />
      <img src=${items.data.armor.img}  />
      <img src=${items.data.rango.img}  />
      <img src=${items.data.bloqueo.img}  />
    </div>`;
    const datos = `<div class='textItem'>
      <p > Magia: ${ele.info.magic}</p>
      <p > Dificultad : ${ele.info.difficulty}</p>
      <p > Velocidad : ${ele.stats.movespeed}</p>
      <p >Daño : ${ele.stats.attackdamage}</p>
      <p >Armadura : ${ele.stats.armorperlevel}</p>
      <p >Rango : ${ele.stats.attackrange}</p>
      <p>Bloqueo por Nivel : ${ele.stats.spellblockperlevel}</p>
    </div>`;
    const boton = ' <a href="https://euw.leagueoflegends.com/es-es/"><button class="play">Play</button></a>';
    space += `
    <section class='card' id='${ele.id}' style="background:url(${ele.splash});   
    background-size: cover;
     background-position: -200px 100%;
     ">
      
      <div class='Datescard'>
      ${nameId + roleId + attack + def} 
      </div>
    
      <div class='DatescardBack'>
      
      ${titleId + img + datos + boton} 
      </div>
    </section>`;
  });
  return space;
};

document.getElementById('champions').innerHTML = showAll(arrayChampsValues);

// MOSTRAR REVERSO DE CADA TARJETA
const listChampReverse = (card) => {
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
      card[i].style.transition = '.7s';
      card[i].style.transform = 'rotateY(180deg)';
    });
    card[i].addEventListener('dblclick', () => {
      card[i].style.transition = '.7s';
      card[i].style.transform = 'rotateY(360deg)';
    });
  }
};

let cardReverse = document.getElementById('champions').querySelectorAll('.card');
listChampReverse(cardReverse);


// FUNCION ORDENAR POR AZ - ZA
const listOrder = document.getElementById('orderList');
listOrder.addEventListener('change', () => {
  const valor = document.getElementById('orderList').value;
  const arrayOrder = sortData(arrayChampsValues, valor);
  document.getElementById('champions').innerHTML = showAll(arrayOrder);
  cardReverse = document.getElementById('champions').querySelectorAll('.card');
  listChampReverse(cardReverse);
});

// FUNCION CALCULAR
const prom = average(arrArmorPerLevel(arrayChampsValues));
const listArmor = document.getElementById('puntList');
listArmor.addEventListener('change', () => {
  const option = document.getElementById('puntList').value;
  const arrayStatsByChampsOrder = computeStats(arrayChampsValues, prom, option);
  document.getElementById('champions').innerHTML = showAll(arrayStatsByChampsOrder);
  cardReverse = document.getElementById('champions').querySelectorAll('.card');
  listChampReverse(cardReverse);
});


// FUNCION FILTRAR
const listRole = document.getElementById('roleList');
listRole.addEventListener('change', () => {
  const value = document.getElementById('roleList').value;
  const filterBy = filterData(arrayChampsValues, value);
  document.getElementById('champions').innerHTML = showAll(filterBy);
  cardReverse = document.getElementById('champions').querySelectorAll('.card');
  listChampReverse(cardReverse);
});
// BUSCAR
const inputSearch = document.querySelector('#look');
inputSearch.addEventListener('input', () => {
  const text = inputSearch.value;
  const championFiltered = search(arrayChampsValues, text);
  if (championFiltered.length < 1) {
    document.getElementById('champions').innerHTML = '<p id=\'mistakeText\'>No se encontro tu campeon</p>';
  } else {
    document.getElementById('champions').innerHTML = showAll(championFiltered);
    cardReverse = document.getElementById('champions').querySelectorAll('.card');
    listChampReverse(cardReverse);
  }
});
/*
// HAMBURGUER MENU
const menu = document.querySelector('.hamburger');

// method
function toggleMenu(event) {
  this.classList.toggle('is-active');
  document.querySelector('.menupal').classList.toggle('is_active');
  event.preventDefault();
}
// event
menu.addEventListener('click', toggleMenu, false);
// rotateY(180deg) */
