/* Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola. */

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];
// Añade tu código de bucle aquí
const starWars70s = [];
const starWars80s = []
const starWars90s = []
const starWars2000s = []
const starWars2010s = []

for (let i = 0; i < starWarsMovies.length; i++) {
  if (starWarsMovies[i].releaseYear < 1980 && starWarsMovies[i].releaseYear > 1969) {
    starWars70s.push(starWarsMovies[i].title);
  } else if (starWarsMovies[i].releaseYear < 1990 && starWarsMovies[i].releaseYear > 1979) {
    starWars80s.push(starWarsMovies[i].title);

  } else if (starWarsMovies[i].releaseYear < 2000 && starWarsMovies[i].releaseYear > 1989) {
    starWars90s.push(starWarsMovies[i].title);

  } else if (starWarsMovies[i].releaseYear < 2010 && starWarsMovies[i].releaseYear > 1999) {
    starWars2000s.push(starWarsMovies[i].title);

  } else if (starWarsMovies[i].releaseYear < 2020 && starWarsMovies[i].releaseYear > 2009) {
    starWars2010s.push(starWarsMovies[i].title);
  }
}

/*
console.log(starWars70s);
console.log(starWars80s);
console.log(starWars90s);
console.log(starWars2000s);
console.log(starWars2010s);
*/

const allDecadesStarWars = {
  '70s': starWars70s,
  '80s': starWars80s,
  '90s': starWars90s,
  '2000s': starWars2000s,
  '2010s': starWars2010s
};

console.log(allDecadesStarWars);