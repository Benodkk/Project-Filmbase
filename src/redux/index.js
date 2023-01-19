import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

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

function userReducer(state = initialState, action) {
  const movieIndex = state.movies.findIndex((movie) => movie.id === action.id);
  const newMovie =
    movieIndex === -1
      ? {
          id: action.id,
          like: false,
          toWatch: false,
          rate: null,
        }
      : state.movies[movieIndex];

  switch (action.type) {
    case "likeMovie":
      newMovie.like = !newMovie.like;
      break;
    case "addToWatchlist":
      newMovie.toWatch = !newMovie.toWatch;
      break;
    case "rateMovie":
      newMovie.toWatch = newMovie.toWatch
        ? !newMovie.toWatch
        : newMovie.toWatch;
      newMovie.rate = newMovie.rate === action.rate ? null : action.rate;
      break;
    default:
      return state;
  }

  if (!newMovie.like && !newMovie.toWatch && newMovie.rate === null) {
    return { movies: state.movies.filter((movie) => movie.id !== newMovie.id) };
  }

  return movieIndex === -1
    ? { movies: [...state.movies, newMovie] }
    : {
        movies: state.movies.map((movie) =>
          movie.id === newMovie.id ? newMovie : movie
        ),
      };
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };

store.subscribe(() => {
  console.log(store.getState());
});
