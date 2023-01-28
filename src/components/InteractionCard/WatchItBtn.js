import { useState } from "react";

import { useDispatch } from "react-redux";
import { addToWatchList } from "../../redux";

import eyeBlackEmpty from "../../assets/eye-black-empty.png";
import eyeGold from "../../assets/eye-gold.png";
import eyeYellow from "../../assets/eye-yellow.png";

import { StyledWatchItBtn } from "../styles/shared/InteractionCard/InteractionCard.style";

const WatchItBtn = ({ movie, ratedMovie }) => {
  const dispatch = useDispatch();
  const [eyeHover, setEyeHover] = useState(false);

  const eyeSrc = () =>
    eyeHover
      ? eyeYellow
      : ratedMovie && ratedMovie.toWatch
      ? eyeGold
      : eyeBlackEmpty;

  return (
    <StyledWatchItBtn
      onMouseEnter={() => setEyeHover(true)}
      onMouseLeave={() => setEyeHover(false)}
      onClick={() => dispatch(addToWatchList(movie.id))}
    >
      <div>I will watch it!</div>
      <img alt="eye" src={eyeSrc()} />
    </StyledWatchItBtn>
  );
};

export default WatchItBtn;
