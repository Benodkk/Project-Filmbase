import { Link } from "react-router-dom";

const MovieImg = ({ movie }) => {
  return (
    <Link to={`/${movie.id}`}>
      <img alt={movie.title} src={movie.img} style={{ width: "100px" }} />
    </Link>
  );
};

export default MovieImg;
