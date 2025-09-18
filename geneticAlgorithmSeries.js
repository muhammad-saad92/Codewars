function crossover(chromosome1, chromosome2, index) {
    let arrCh1 = chromosome1.split('');
    let arrCh2 = chromosome2.split('');
    let remCh1 = arrCh1.splice(index).join('');
    let remCh2 = arrCh2.splice(index).join('');
    arrCh1.push(remCh2);
    arrCh2.push(remCh1);
    return [arrCh1.join(''), arrCh2.join('')];
}

function crossover (chromosome1, chromosome2, index) {
    return [
      chromosome1.slice(0, index) + chromosome2.slice(index),
      chromosome2.slice(0, index) + chromosome1.slice(index)
    ]
  };

  const crossover = (chromosome1, chromosome2, index) => {
    return [
      chromosome1.substring(0, index) + chromosome2.substring(index),
      chromosome2.substring(0, index) + chromosome1.substring(index)
    ]
  };

console.log(crossover('111000', '000110', 3))