

import React from "react";
import Link from "next/link";
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">
          <h1>MyPortfolio</h1>
        </a>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="/">
            <h1>About</h1>
          </a>
        </li>
        <li>
          <a href="/">
            <h1>Projects</h1>
          </a>
        </li>
        <li>
          <a href="/">
            <h1>Contact</h1>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
