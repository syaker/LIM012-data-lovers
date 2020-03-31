/* eslint-disable no-restricted-syntax */
import champs from './data/lol/lol.js';

let space = '';
const showAll = () => {
  const dataChamps = champs.data;
  // eslint-disable-next-line guard-for-in
  for (const properties in dataChamps) {
    const nameId = `<p class='info'>${dataChamps[properties].name}</p>`;
    const roleId = `<p class ='info2'>${dataChamps[properties].tags}</p>`;
    const attack = `<p class='info2'>Nivel de ataque: ${dataChamps[properties].info.attack}</p>`;
    const defense = `<p  class='info2' >Nivel de defensa: ${dataChamps[properties].info.defense}</p>`;
    space += `
    <section class='card'style="background:url(${dataChamps[properties].splash}); background-size: 100% 100%">
    <div id='datesCard'>
    ${nameId + roleId + attack + defense} 
    </div>
    </section>
    `;
  }
  document.getElementById('champions').innerHTML = space;
};

showAll(champs);
