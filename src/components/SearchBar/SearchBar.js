import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'Redux/contacts/filter-slice';
import { selectFilter } from 'Redux/contacts/contacts-selectors';
import { SearchInputStyles, SerchBarContainer } from './SearchBarStyles';

export default function SearchBar() {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <SerchBarContainer>
      <h2>Contacts</h2>
      <SearchInputStyles
        type="text"
        onChange={handleFilterChange}
        value={filter}
      />
    </SerchBarContainer>
  );
}
