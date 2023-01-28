import genres from "./genre";

let faker = require("faker");
let casual = require("casual");

let database = {
  movies: [],
  tvSeries: [],
  directors: [],
  writers: [],
  actors: [],
};

//PEOPLE

for (let i = 1; i <= 200; i++) {
  database.directors.push({
    id: `director${i}`,
    name: faker.name.findName(),
    description: casual.sentences(3),
    birthDate: faker.date.between(
      "1940-01-01T00:00:00.000Z",
      "2000-01-01T00:00:00.000Z"
    ),
    img: faker.image.people(288, 410, true),
    rating: Math.floor(casual.double(100, 1000)) / 100,
  });
}

for (let i = 1; i <= 200; i++) {
  database.writers.push({
    id: `writer${i}`,
    name: faker.name.findName(),
    description: casual.sentences(3),
    birthDate: faker.date.between(
      "1940-01-01T00:00:00.000Z",
      "2000-01-01T00:00:00.000Z"
    ),
    img: faker.image.people(288, 410, true),
    rating: Math.floor(casual.double(100, 1000)) / 100,
  });
}

for (let i = 1; i <= 600; i++) {
  database.actors.push({
    id: `actor${i}`,
    name: faker.name.findName(),
    description: casual.sentences(3),
    birthDate: faker.date.between(
      "1940-01-01T00:00:00.000Z",
      "2000-01-01T00:00:00.000Z"
    ),
    img: faker.image.people(288, 410, true),
    rating: Math.floor(casual.double(100, 1000)) / 100,
  });
}

// movies AND TV SERIES
// trending means number of views in last week

for (let i = 1; i <= 1000; i++) {
  let word = faker.random.words(2);
  let randomActors = [];
  let actors = Math.floor(Math.random() * 10) + 1;
  while (randomActors.length < actors) {
    let r = Math.floor(Math.random() * 600);
    if (randomActors.indexOf(r) === -1) randomActors.push(r);
  }
  database.movies.push({
    id: `film${i}`,
    title: word.charAt(0).toUpperCase() + word.slice(1),
    img: faker.image.image(180, 256, true),
    description: casual.sentences(2),
    rating: Math.floor(casual.double(100, 1000)) / 100,
    numberOfRatings: casual.integer(1000, 100000),
    trending: casual.integer(1000, 10000),
    genre: genres[Math.floor(Math.random() * genres.length)],
    realsed: faker.date.between(
      "1980-01-01T00:00:00.000Z",
      "2022-07-30T00:00:00.000Z"
    ),
    director: database.directors[Math.floor(Math.random() * 200)].id,
    writer: database.writers[Math.floor(Math.random() * 200)].id,
    actors: randomActors.map((actorId) => database.actors[actorId].id),
  });
}

for (let i = 1; i <= 1000; i++) {
  let word = faker.random.words(2);
  let randomActors = [];
  let actors = Math.floor(Math.random() * 10) + 1;
  while (randomActors.length < actors) {
    let r = Math.floor(Math.random() * 600);
    if (randomActors.indexOf(r) === -1) randomActors.push(r);
  }
  database.tvSeries.push({
    id: `series${i}`,
    title: word.charAt(0).toUpperCase() + word.slice(1),
    img: faker.image.image(180, 256, true),
    description: casual.sentences(2),
    rating: Math.floor(casual.double(100, 1000)) / 100,
    numberOfRatings: casual.integer(1000, 100000),
    trending: casual.integer(1000, 10000),
    genre: genres[Math.floor(Math.random() * genres.length)],
    realsed: faker.date.between(
      "1980-01-01T00:00:00.000Z",
      "2022-07-30T00:00:00.000Z"
    ),
    director: database.directors[Math.floor(Math.random() * 200)].id,
    writer: database.writers[Math.floor(Math.random() * 200)].id,
    actors: randomActors.map((actorId) => database.actors[actorId].id),
  });
}

console.log(JSON.stringify(database));
