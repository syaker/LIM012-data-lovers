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

//import { example } from './data.js';

// import data from './data/lol/lol.js';


//console.log(example, data);
import lol from './script.js'

let space = '';
const dataChamps = champs.data;
const showAll = () => {
  for (let properties in dataChamps) {
    let nameId = `<p class='info'>${dataChamps[properties].name}</p>`;
    let roleId = `<p class ='info2'>${dataChamps[properties].tags}</p>`;
    let attack = `<p class='info2'>Nivel de ataque: ${dataChamps[properties].info.attack}</p>`;
    let defense = `<p  class='info2' >Nivel de defensa: ${dataChamps[properties].info.defense}</p>`;
    space += `
    <section class='target'style="background:url(${dataChamps[properties].splash}); background-size: 100% 100%">
    <div id='Datescard'>
    ${nameId + roleId + attack + defense} 
    </div>
    </section>
    `;
  }
};

showAll(champs);
document.getElementById('champions').innerHTML = space;


const hola = (z) => {
    let name = `<p class='info'>${dataChamps[z].name}</p>`;
    let roleId = `<p class ='info2'>${dataChamps[z].tags}</p>`;
    let attack = `<p class='info2'>Nivel de ataque: ${dataChamps[z].info.attack}</p>`;
    let defense = `<p  class='info2' >Nivel de defensa: ${dataChamps[z].info.defense}</p>`;
    saveDates += ` n 
          <section class='target'style="background:url(${dataChamps[z].splash}); background-size: 100% 100%">
          <div id='Datescard'>
          ${name + roleId + attack + defense} 
          </div>
          </section>
          `;
  };
  
  const dataChampions = champs.data;
  let arrayObjects = Object.key(dataChampions);
  let list = document.getElementById('orderList');
  list.addEventListener('change', () => {
    let saveDates = '';
    const valor = document.getElementById('orderList').value;
    //const valor2 = document.getElementById('falling').value;
    console.log(valor);
    if (valor == 'az') {
  
      let upward = arrayObjects.sort((a, b) => {
        return a.localeCompare(b);
      });
      upward.forEach((z) => {
        let name = `<p class='info'>${dataChamps[z].name}</p>`;
        let roleId = `<p class ='info2'>${dataChamps[z].tags}</p>`;
        let attack = `<p class='info2'>Nivel de ataque: ${dataChamps[z].info.attack}</p>`;
        let defense = `<p  class='info2' >Nivel de defensa: ${dataChamps[z].info.defense}</p>`;
        saveDates += `
          <section class='target'style="background:url(${dataChamps[z].splash}); background-size: 100% 100%">
          <div id='Datescard'>
          ${name + roleId + attack + defense} 
          </div>
          </section>
          `;
      });
      document.querySelector('#champions').innerHTML = saveDates;
  
    } else {
      let falling = arrayObjects.sort((a, b) => {
        return b.localeCompare(a);
      });
  
      falling.forEach(m => {
        let name = `<p class='info' > ${dataChamps[m].name}</p > `;
        let roleId = `<p class ='info2' > ${dataChamps[m].tags}</p > `;
        let attack = `<p class='info2' > Nivel de ataque: ${dataChamps[m].info.attack}</p > `;
        let defense = `<p  class='info2' > Nivel de defensa: ${dataChamps[m].info.defense}</p > `;
        saveDates += `
            <section class='target'style = "background:url(${dataChamps[m].splash}); background-size: 100% 100%" >
              <div id='Datescard'>
                ${name + roleId + attack + defense}
              </div>
      </section >`;
  
      });
      document.querySelector('#champions').innerHTML = saveDates;
    };
  
  
  });
  

