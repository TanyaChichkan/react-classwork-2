import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Header.module.css';

const Header=()=>{
  return(
    <header className={styles.PageHeader}>
      <div className="container">
      <nav className = {styles.PageNav}>
        <a href="www.facebook.com">Logo</a>
        <ul className={styles.NavList}>
          <li key={uuidv4()} className={styles.NavListItem}>Главная</li>
          <li key={uuidv4()} className={styles.NavListItem}>Контакты</li>
          <li key={uuidv4()} className={styles.NavListItem}>О нас</li>
        </ul>
      </nav>
      </div>
    </header>
  )
};

export default Header;