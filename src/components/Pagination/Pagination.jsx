import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/mainSlice';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage }) => {

    const { totalPostsCount, pageSize } = useSelector(state => state.main);
    const dispatch = useDispatch();

    const pagesCount = Math.ceil(totalPostsCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.pagination}>
            <div className={styles.paginationBack} onClick={() => currentPage === 1
                ? setCurrentPage(currentPage) : dispatch(setCurrentPage(currentPage - 1))}>
                Назад
            </div>
            <div>
                {
                    pages.map(p => (
                        <span
                            onClick={(e) => dispatch(setCurrentPage(p))}
                            className={currentPage === p ? styles.selectedPage : styles.pages}
                            key={p} >
                            {p}
                        </span>))
                }
            </div>
            <div className={styles.paginationNext} onClick={() => currentPage === pagesCount
                ? setCurrentPage(currentPage) : dispatch(setCurrentPage(currentPage + 1))} >
                Далее
            </div>
        </div>
    );
};

export default Pagination;