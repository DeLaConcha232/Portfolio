

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
            <h1>Welcome</h1>
          </a>
        </li>
        <li>
          <a href="/">
            <h1>Proyects</h1>
          </a>
        </li>
        <li>
          <a href="/">
            <h1>Skills</h1>
          </a>
        </li>
        <li>
          <a href="/">
            <h1>Education</h1>
          </a>
        </li>
        <li>
          <a href="/">
            <h1>Footer</h1>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
