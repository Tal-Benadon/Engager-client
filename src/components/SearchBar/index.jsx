import { FaSearch, FaSortAlphaDown } from 'react-icons/fa';
import styles from './style.module.css';
// import Icon from '../../components/Icon'



// Creator : Yehoshua Preiser


// Description: This component is a search bar interface with optional sorting.
// The search functionality updates dynamically,
// sorting button switches between sorting options based on user interaction.

// Props:
// searchTerm and setSearchTerm for managing search queries,
// setSortType for toggling between sorting by name and date,
// sortButton to display or hide the sorting button.
export default function SearchBar({ searchTerm, setSearchTerm, setSortType, sortButton = false }) {
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

