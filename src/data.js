// order
export const sortData = (array, sortOrder) => {
  let outcomeSort;
  if (sortOrder === 'za') {
    outcomeSort = array.sort((o1, o2) => {
      let outcome = 0;
      if (o1.name > o2.name) {
        outcome = -1;
      }
      if (o1.name < o2.name) {
        outcome = 1;
      }
      return outcome;
    });
  } else if (sortOrder === 'az') {
    outcomeSort = array.sort((o1, o2) => {
      let outcome = 0;
      if (o1.name < o2.name) {
        outcome = -1;
      }
      if (o1.name > o2.name) {
        outcome = 1;
      }
      return outcome;
    });
  } return outcomeSort;
};

// calculate promedio
export const arrArmorPerLevel = array1 => array1.map(element => element.stats.armorperlevel);
// entra un array con numeros
export const average = (array1) => {
  const sumArmorPerLevel = array1.reduce((previousValue, nowValue) => {
    const sumArmor = previousValue + nowValue;
    return sumArmor;
  });
  return sumArmorPerLevel / array1.length;
};

// FUNCTION CALCULAR
export const computeStats = (arr, num, valor) => {
  if (valor === 'higher') {
    const higherPerLevel = arr.filter(element => element.stats.armorperlevel > num);
    return higherPerLevel;
  }
  const lessPerLevel = arr.filter(element => element.stats.armorperlevel < num);
  return lessPerLevel;
};

// FILTRAR
export const filterData = (array, valor) => {
  const arrFiltered = array.filter(eachChampion => eachChampion.tags[0] === valor);
  return arrFiltered;
};
