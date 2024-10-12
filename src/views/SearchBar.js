import React from 'react';
import '../assets/css/SearchBar.css';

const SearchBar = ({ setFilter }) => {
  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="campaign-search">
      <input
        type="text"
        placeholder="Cari Kampanye"
        className="search-input"
        onChange={handleSearchChange}
      />
      <i className="fas fa-search search-icon"></i>
    </div>
  );
};

export default SearchBar;
