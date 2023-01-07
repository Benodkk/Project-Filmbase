import MovieImg from "./MovieImg";
import HiddenCard from "./HiddenCard";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <MovieImg movie={movie} />
      <HiddenCard movie={movie} />
    </div>
  );
};

export default MovieCard;
