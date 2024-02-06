import React, { useState } from 'react';
import { FaSearch, FaSortAlphaDown } from 'react-icons/fa';
import styles from './style.module.css';
// import Icon from '../../components/Icon'



// Props :const [searchTerm, setSearchTerm]= useState('')
// Description : parent uses useState   , and 
// Creator : Yehoshua Preiser
export default function SearchBar({ searchTerm, setSearchTerm, sortType, setSortType, sortButton = false }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSort = () => {
    setSortType(prevSortType => prevSortType === 'name' ? 'date' : 'name');
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
      {sortButton && <FaSortAlphaDown className={styles.SortIcon} onClick={handleSort} />}
    </div>
  );
};

