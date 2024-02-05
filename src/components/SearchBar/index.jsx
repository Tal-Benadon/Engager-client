import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './style.module.css';



// Description : searchBar
// Props : [searchTerm, setSearchTerm]= useState('')
// Creator : Yehoshua Preiser
export default function SearchBar({ searchTerm, setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className={styles.Input}
      />
      <FaSearch className={styles.FaSearch} />
    </div>
  );
};

