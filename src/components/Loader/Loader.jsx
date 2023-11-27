import { Rings } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Rings
        height={100}
        width={100}
        color="#4121b4"
        ariaLabel="Loading indicator"
      />
    </LoaderWrapper>
  );
};

export default Loader;
