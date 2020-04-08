import champs from './data/lol/lol.js';
import {
  sortData, arrArmorPerLevel, average, computeStats, filterData,
} from './data.js';

const arrayChampsValues = Object.values(champs.data);
// ARRAY DE OBJETOS donde cada objeto es el campeon siempre
// FUNCION MOSTRAR
const showAll = (array) => {
  let space = '';
  array.forEach((ele) => {
    const nameId = ` <p class='info'>${ele.name}</p>`;
    const roleId = `<p class ='info2'>${ele.tags}</p>`;
    const attack = `<p class='info2'>Nivel de ataque : ${ele.info.attack}</p>`;
    const defense = `<p  class='info2' >Nivel de defensa: ${ele.info.defense}</p>`;
    space += `
    <section class='card' id='card' style="background:url(${ele.splash}); background-size: 100% 110%">
    <div id='Datescard'>
    ${nameId + roleId + attack + defense} 
    </div>
    </section>`;
  });
  return space;
};
document.getElementById('champions').innerHTML = showAll(arrayChampsValues);


// FUNCION ORDENAR POR AZ - ZA
const listOrder = document.getElementById('orderList');
listOrder.addEventListener('change', () => {
  const valor = document.getElementById('orderList').value;
  const arrayOrder = sortData(arrayChampsValues, valor);
  document.getElementById('champions').innerHTML = showAll(arrayOrder);
});

// FUNCION CALCULAR
const prom = average(arrArmorPerLevel(arrayChampsValues));
const listArmor = document.getElementById('puntList');
listArmor.addEventListener('change', () => {
  const option = document.getElementById('puntList').value;
  const arrayStatsByChampsOrder = computeStats(arrayChampsValues, prom, option);
  document.getElementById('champions').innerHTML = showAll(arrayStatsByChampsOrder);
});


// FUNCION FILTRAR
const listRole = document.getElementById('roleList');
listRole.addEventListener('change', () => {
  const value = document.getElementById('roleList').value;
  const filterBy = filterData(arrayChampsValues, value);
  document.getElementById('champions').innerHTML = showAll(filterBy);
});
// BUSCAR

/*
const inputSearch = document.querySelector('#look')

inputSearch.addEventListener('keyup', () => {
  let  text= inputSearch.value.toLowerCase();
   const arrFiltered = arrayChampsValues.filter(eachChampion =>
    eachChampion.name.toLowerCase() === text);
   document.getElementById('champions').innerHTML = showAll(
     arrFiltered;

   });
const inputSearch = document.querySelector('#look');

inputSearch.addEventListener('keyup', () => {
  const text = inputSearch.value.toLowerCase();
  const search = (data, searchBy) => {
    const vacio = [];
    data.forEach((element) => {
      const nameChamp = element.name.toLowerCase();
      if (nameChamp.indexOf(searchBy) !== -1) {
        vacio.push(element);
      } if (vacio = '') {
        document.write('no se encontro tu champion');
      }
    });
    return vacio;
    document.getElementById('champions').innerHTML = showAll(search(arrayChampsValues, text));
  };
});

// FUNCION MOSTRAR REVERSO

const showAllReverse = (array) => {
  let space = '';
  array.forEach((ele) => {
    const nameId = ` <p class='info'>${ele.name}</p>`;
    const roleId = `<p class ='info2'>${ele.tags}</p>`;
    const attack = `<p class='info2'>Nivel de ataque : ${ele.info.attack}</p>`;
    const defense = `<p  class='info2' >Nivel de defensa: ${ele.info.defense}</p>`;
    space += `
    <section class='card' style="background:url(${ele.splash}); background-size: 100% 110%">
    <div id='Datescard'>
    ${nameId + roleId + attack + defense}
    </div>
    </section>`;
  });
  return space;
};

/*
const card = document.getElementById('card');
card.addEventListener('click', () => {
  const showAllReverse = (array) => {
    const space = '';
    array.forEach((ele) => {
      const imgReverse = '';
      const nameId = ` <p class='info'>${ele.title}</p>`;
      const roleId = `<p class ='info2'>${ele.tags}</p>`;
      const attack = `<p class='info2'>Nivel de ataque : ${ele.info.attack}</p>`;
      const defense = `<p  class='info2' >Nivel de defensa: ${ele.info.defense}</p>`;
    });
    return space;
  };

  document.getElementById('champions').innerHTML = showAllReverse(arrayChampsValues);
}); */
