import React from 'react';
import '../assets/css/Filter.css';

const Filter = ({ setFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filter-container">
      <h3>Filter Kampanye</h3>
      <select onChange={handleFilterChange}>
        <option value="">Semua</option>
        <option value="Terbaru">Terbaru</option>
        <option value="Segera Berakhir">Segera Berakhir</option>
        <option value="Urgent">Urgent</option>
      </select>
    </div>
  );
};

export default Filter;
