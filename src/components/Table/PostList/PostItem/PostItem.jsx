import React from 'react';
import styles from './PostItem.module.css';

const PostItem = ({ post }) => {
    return (
        <div className={styles.tableData}>
            <div className={styles.itemId}>
                {post.id}
            </div>
            <div className={styles.itemTitle}>
                {post.title}
            </div>
            <div className={styles.itemBody}>
                {post.body}
            </div>
        </div>
    );
};

export default PostItem;