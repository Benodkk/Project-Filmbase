import { createStore } from "redux";

const initialState = {
  movies: [],
};

function like(id) {
  return {
    type: "likeMovie",
    id: id,
  };
}

function addToWatchList(id) {
  return {
    type: "addToWatchlist",
    id: id,
  };
}

function rateMovie(id, rate) {
  return {
    type: "rateMovie",
    id: id,
    rate: rate,
  };
}
export { addToWatchList, like, rateMovie };

export function reducer(state = initialState, action) {
  const movieIndex = state.movies.findIndex((movie) => movie.id === action.id);
  const movie =
    movieIndex === -1
      ? {
          id: action.id,
          like: false,
          toWatch: false,
          rate: null,
          date: new Date(),
        }
      : state.movies[movieIndex];

  switch (action.type) {
    case "likeMovie":
      movie.like = !movie.like;
      break;
    case "addToWatchlist":
      movie.toWatch = !movie.toWatch;
      break;
    case "rateMovie":
      movie.rate = movie.rate === action.rate ? null : action.rate;
      break;
    default:
      return state;
  }

  if (!movie.like && !movie.toWatch && movie.rate === null) {
    return { movies: state.movies.filter((m) => m.id !== movie.id) };
  }

  return movieIndex === -1
    ? { movies: [...state.movies, movie] }
    : { movies: state.movies.map((m) => (m.id === movie.id ? movie : m)) };
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
