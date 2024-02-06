import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './style.module.css';
// import Icon from '../../components/Icon'



// Props :const [searchTerm, setSearchTerm]= useState('')
// Description : parent uses useState   , and 
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
      {/* <Icon nameIcon={'search'} nameColor={''} className={styles.SearchIcon}/> */}
      <FaSearch className={styles.SearchIcon} />
    </div>
  );
};

