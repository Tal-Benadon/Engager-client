import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './style.module.css';
import Icon from '../../components/Icon'



// Description : searchBar
// Props : [searchTerm, setSearchTerm]= useState('')
//         const [searchTerm, setSearchTerm]= useState('')
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
      <Icon nameIcon={'search'} nameColor={''} className={styles.SearchIcon}/>
      {/* <FaSearch className={styles.FaSearch} /> */}
    </div>
  );
};

