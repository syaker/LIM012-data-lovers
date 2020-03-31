import champs from './data/lol/lol.js';

const dataChampions = champs.data;
const arrayObjects = Object.keys(dataChampions);
const list = document.getElementById('orderList');
list.addEventListener('change', () => {
  let saveDates = '';
  const valor = document.getElementById('orderList').value;
  if (valor === 'az') {
    const upward = arrayObjects.sort((a, b) => a.localeCompare(b));
    upward.forEach((z) => {
      const name = `<p class='info'>${dataChampions[z].name}</p>`;
      const roleId = `<p class ='info2'>${dataChampions[z].tags}</p>`;
      const attack = `<p class='info2'>Nivel de ataque: ${dataChampions[z].info.attack}</p>`;
      const defense = `<p  class='info2' >Nivel de defensa: ${dataChampions[z].info.defense}</p>`;
      saveDates += `
        <section class='card'style='background:url(${dataChampions[z].splash}); background-size: 100% 100%'>
        <div id='datesCard'>
        ${name + roleId + attack + defense} 
        </div>
        </section>
        `;
    });
    document.querySelector('#champions').innerHTML = saveDates;
  } else {
    const falling = arrayObjects.sort((a, b) => b.localeCompare(a));

    falling.forEach((m) => {
      const name = `<p class='info' > ${dataChampions[m].name}</p > `;
      const roleId = `<p class ='info2' > ${dataChampions[m].tags}</p > `;
      const attack = `<p class ='info2' > Nivel de ataque: ${dataChampions[m].info.attack}</p > `;
      const defense = `<p  class ='info2' > Nivel de defensa: ${dataChampions[m].info.defense}</p > `;
      saveDates += `<section class ='card' style = 'background: url(${dataChampions[m].splash}); background-size: 100% 100%' >
            <div id='datesCard'>
              ${name + roleId + attack + defense}
            </div>
    </section >`;
    });
    document.querySelector('#champions').innerHTML = saveDates;
  }
});
