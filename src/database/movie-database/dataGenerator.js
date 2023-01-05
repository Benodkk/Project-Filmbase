let faker = require("faker");
let casual = require("casual");

let database = {
  films: [],
  tvSeries: [],
  directors: [],
  writers: [],
  actors: [],
  articlesBig: [],
  articlesSmall: [],
  articlesMedSmall: [],
  articlesMedBig: [],
};

let genre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Drama",
  "Family",
  "Horror",
  "Musical",
  "Sci-Fi",
  "Sport",
  "Thiller",
  "War",
];

// ARTICLES FOR MAIN PAGE

database.articlesBig.push({
  id: `articleBig1`,
  type: "Series",
  description: casual.sentences(1),
  comments: "8 comments",
});

for (let i = 1; i <= 4; i++) {
  database.articlesSmall.push({
    articlesBigId: `articleSmall${i}`,
    type: genre[Math.floor(Math.random() * genre.length)],
    description: casual.sentences(1),
    img: faker.image.abstract(542, 306, true),
    comments: `${Math.floor(Math.random() * 200)} comments`,
  });
}

for (let i = 1; i <= 2; i++) {
  database.articlesMedBig.push({
    articlesBigId: `articleMediumBig${i}`,
    type: genre[Math.floor(Math.random() * genre.length)],
    description: casual.sentences(1),
    img: faker.image.abstract(814, 456, true),
    comments: `${Math.floor(Math.random() * 200)} comments`,
  });
}

for (let i = 1; i <= 4; i++) {
  database.articlesMedSmall.push({
    articlesBigId: `articleMediumSmall${i}`,
    type: genre[Math.floor(Math.random() * genre.length)],
    description: casual.sentences(1),
    img: faker.image.abstract(640, 360, true),
    comments: `${Math.floor(Math.random() * 200)} comments`,
  });
}

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

// FILMS AND TV SERIES

for (let i = 1; i <= 1000; i++) {
  let word = faker.random.words(2);
  let randomActors = [];
  let actors = Math.floor(Math.random() * 10) + 1;
  while (randomActors.length < actors) {
    let r = Math.floor(Math.random() * 600);
    if (randomActors.indexOf(r) === -1) randomActors.push(r);
  }
  database.films.push({
    id: `film${i}`,
    title: word.charAt(0).toUpperCase() + word.slice(1),
    img: faker.image.image(396, 566, true),
    description: casual.sentences(2),
    rating: Math.floor(casual.double(100, 1000)) / 100,
    numberOfRatings: casual.integer(1000, 100000),
    genre: genre[Math.floor(Math.random() * genre.length)],
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
    img: faker.image.image(396, 566, true),
    description: casual.sentences(2),
    rating: Math.floor(casual.double(100, 1000)) / 100,
    numberOfRatings: casual.integer(1000, 100000),
    genre: genre[Math.floor(Math.random() * genre.length)],
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
