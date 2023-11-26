import PropTypes from 'prop-types';
import { AppWrapper } from './Container.styled';

const Container = ({ children }) => {
  return <AppWrapper>{children}</AppWrapper>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
