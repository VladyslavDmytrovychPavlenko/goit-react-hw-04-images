import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import {
  HeaderSearch,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchFormBtnLabel,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('atatata');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  useEffect(() => {}, [searchQuery]);

  return (
    <HeaderSearch>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <BsSearch />
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleQueryChange}
        />
      </SearchForm>
    </HeaderSearch>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
