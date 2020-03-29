import champs from './data/lol/lol.js';

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