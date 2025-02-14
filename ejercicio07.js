/* Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

Utiliza bucles para estructurar este objeto e imprime el resultado por consola. */

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

// Añade tu código de bucle aquí
const metal = []
const rock = []
const pop = []
const country = []
const grunge = []

for (let i = 0; i < tracks.length; i++) {
  if (tracks[i].genre == 'Metal') {
    metal.push(tracks[i].title);
  } else if (tracks[i].genre == 'Rock') {
    rock.push(tracks[i].title);

  } else if (tracks[i].genre == 'Pop') {
    pop.push(tracks[i].title);

  } else if (tracks[i].genre == 'Country') {
    country.push(tracks[i].title);

  } else if (tracks[i].genre == 'Grunge') {
    grunge.push(tracks[i].title);
  }
}

const tracksAllGenre = {
  metal,
  rock,
  pop,
  country,
  grunge
};

console.log(tracksAllGenre);