import PropTypes from 'prop-types';
import { ActorItem, ActorImg, ActorName, ActorRole } from './ActorCard.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const ActorCard = ({ profile_path, name, character }) => {
  return (
    <ActorItem>
      <ActorImg
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w300${profile_path}`
            : defaultImg
        }
        width={250}
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
