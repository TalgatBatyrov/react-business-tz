import React from 'react';
import searchIcon from '../../assets/img/search-icon.png';
import styles from './SearchBar.module.css';

const SearchBar = ({ filter, setFilter }) => {
    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder='Поиск'
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
            />
            <div>
                <img src={searchIcon} alt="icon" />
            </div>
        </div>
    );
};

export default SearchBar;