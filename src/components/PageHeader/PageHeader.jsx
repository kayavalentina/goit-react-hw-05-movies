import PropTypes from 'prop-types';
import { PageTitle } from './PageHeader.styled';

const PageHeader = ({ text }) => {
  return <PageTitle>{text}</PageTitle>;
};

PageHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageHeader;