import React from 'react';
import PostList from './PostList/PostList';
import arrow from '../../assets/img/arrow.png';
import styles from './Table.module.css';

const Table = ({ setFilter, filter, posts, isLoading }) => {
    return (
        <div className={styles.table}>
            <div className={styles.tableHeader}>
                <div className={styles.tableIdList} onClick={() => setFilter({ ...filter, sort: 'id' })}>
                    <div>
                        ID
                    </div>
                    <div >
                        <img src={arrow} alt="" />
                    </div>
                </div>
                <div className={styles.tableTitleList} onClick={() => setFilter({ ...filter, sort: 'title' })}>
                    <div>
                        Заголовок
                    </div>
                    <div>
                        <img src={arrow} alt="icon" />
                    </div>
                </div>
                <div className={styles.tableBodyList} onClick={() => setFilter({ ...filter, sort: 'body' })}>
                    <div>
                        Описание
                    </div>
                    <div>
                        <img src={arrow} alt="icon" />
                    </div>
                </div>
            </div >
            {isLoading && <h1>Loading ...</h1>}
            {
                posts.length ?
                    <PostList posts={posts} />
                    : <h1 className='not-found'>Not found :(</h1>
            }
        </div>
    );
};

export default Table;