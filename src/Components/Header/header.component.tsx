import React from 'react';
import styles from './header.module.css';

export const HeaderComponent = () => {
    return (
        <div className={styles.headers}>
            <h1 className={styles.logoTitle}>
					<span className={styles.logoSpan}>e</span>WealthManager
			</h1>
            <p className={styles.headerPlaceholder}>Header Placeholder</p>
        </div>
    )
}