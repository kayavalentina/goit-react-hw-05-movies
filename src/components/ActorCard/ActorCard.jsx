import PropTypes from 'prop-types';
import { ActorItem, ActorImg, ActorName, ActorRole } from './ActorCard.styled';

const ActorCard = ({ profile_path, name, character }) => {
  return (
    <ActorItem>
      <ActorImg
        src={`https://image.tmdb.org/t/p/w300${profile_path}`}
        alt={name}
      />
      <ActorName>{name}</ActorName>
      <ActorRole>Role: {character}</ActorRole>
    </ActorItem>
  );
};

ActorCard.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default ActorCard;
