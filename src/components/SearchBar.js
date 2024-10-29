import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search by name or username"
    value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}
    className="border p-2 rounded w-full"
  />
);

export default SearchBar;
