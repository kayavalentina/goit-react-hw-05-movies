import { useState } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { MdSearch } from 'react-icons/md';
import {
  QueryForm,
  QueryFormInput,
  QueryFormBtn,
  QueryFormBtnLabel,
} from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onInputChange = evt => {
    const normalizeInputValue = evt.currentTarget.value.toLowerCase();
    setSearchQuery(normalizeInputValue);
  };

  const onSearch = evt => {
    evt.preventDefault();
    onSubmit(searchQuery.trim());
  };

  return (
    <QueryForm onSubmit={onSearch}>
      <QueryFormInput
        type="text"
        name="search"
        autocomplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchQuery}
        onChange={onInputChange}
      />
      <QueryFormBtn type="submit" aria-label="Search movies">
        <IconContext.Provider value={{ size: '2.5em' }}>
          <MdSearch />
        </IconContext.Provider>
        <QueryFormBtnLabel>Search</QueryFormBtnLabel>
      </QueryFormBtn>
    </QueryForm>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
