import { Bars } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Bars
        height={100}
        width={100}
        color="#b43321"
        ariaLabel="Loading indicator"
      />
    </LoaderWrapper>
  );
};

export default Loader;
