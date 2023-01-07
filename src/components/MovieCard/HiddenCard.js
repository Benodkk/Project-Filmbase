import { addToWatchList, like, rateMovie } from "../../redux";
import { useDispatch } from "react-redux";

const HiddenCard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>{movie.title}</div>
      <div onClick={() => dispatch(addToWatchList(movie.id))}>to watch</div>
      <div onClick={() => dispatch(like(movie.id))}>like</div>
      <div onClick={() => dispatch(rateMovie(movie.id, 5))}>rate</div>
      <div onClick={() => dispatch(rateMovie(movie.id, 6))}>rate2</div>
    </div>
  );
};

export default HiddenCard;
