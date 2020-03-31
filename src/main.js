/* eslint-disable no-restricted-syntax */
import champs from './data/lol/lol.js';

let space = '';
const dataChamps = champs.data;
const showAll = () => {
  // eslint-disable-next-line guard-for-in
  for (const properties in dataChamps) {
    const nameId = `<p class='info'>${dataChamps[properties].name}</p>`;
    const roleId = `<p class ='info2'>${dataChamps[properties].tags}</p>`;
    const attack = `<p class='info2'>Nivel de ataque: ${dataChamps[properties].info.attack}</p>`;
    const defense = `<p  class='info2' >Nivel de defensa: ${dataChamps[properties].info.defense}</p>`;
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
