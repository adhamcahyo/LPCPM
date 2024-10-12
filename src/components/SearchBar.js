import React, { useState } from 'react';
import '../assets/css/SearchBar.css';

const SearchBar = ({ setFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setFilter(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilter('');
  };

  return (
    <div className="campaign-search">
      <input
        type="text"
        placeholder="Cari Kampanye"
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm && (
        <i className="fas fa-times clear-icon" onClick={clearSearch}></i>
      )}
      <i className="fas fa-search search-icon"></i>
    </div>
  );
};

export default SearchBar;
