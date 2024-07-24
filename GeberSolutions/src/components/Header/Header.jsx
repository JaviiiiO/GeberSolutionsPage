import Hero from "../Hero/Hero";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);

  const handlelClick = () => {
    setShowHeader(!showHeader);
  };

  if (showHeader) {
    return (
      <header className={styles.headerContainer}>
        <nav className={styles.navContainer}>
          <div className={styles.centerGroup}>
            <a href="/">
              <img src="logo.png" alt="logo" className={styles.logo} />
            </a>
          </div>
          <div className={styles.rightGroup}>
            <p>
              <img src="/gmail.svg" />
              sales@gebersolutions.com
            </p>
            <p>
              <img src="/tel.svg" />
              +1 757-805-8804
            </p>
          </div>
          <div className={styles.leftGroup}>
            <a href="/" className={`${styles.navItem} ${styles.red}`}>
              Home
            </a>
            <a href="/" className={`${styles.navItem} ${styles.blue}`}>
              Services
            </a>
          </div>
        </nav>
        <Hero />
        <button onClick={handlelClick}>click</button>
      </header>
    );
  } else {
    return(
    <header className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <div className={styles.centerGroup}>
          <a href="/" className={`${styles.navItem} ${styles.red}`}>
            Home
          </a>
          <a href="/">
            <img src="logo.png" alt="logo" className={styles.logo} />
          </a>
          <a href="/" className={`${styles.navItem} ${styles.blue}`}>
            Services
          </a>
        </div>
        <div className={styles.rightGroup2}>
          <p>
            <img src="/gmail.svg" />
            sales@gebersolutions.com
          </p>
          <p>
            <img src="/tel.svg" />
            +1 757-805-8804
          </p>
        </div>
      </nav>
      <Hero />
      <button onClick={handlelClick}>click</button>
    </header>

    );
}
};

export default Header;
