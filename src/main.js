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
  