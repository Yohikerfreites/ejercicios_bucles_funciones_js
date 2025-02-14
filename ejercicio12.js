/* Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder. */

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(array, power) {
  let findPower = [];
  for (const mutant of array) {
    if (mutant.power === power) {
      findPower.push(mutant.power)
    }
  }
  if (findPower.length > 0) {
    return `Existen mutantes con el poder ${findPower}`
  } else {
    return 'No hay mutantes con ese poder'
  }
}

console.log(findMutantByPower(mutants, 'teleportation'));
