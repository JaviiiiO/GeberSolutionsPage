import Hero from "../Hero/Hero";
import styles from "./Header.module.css";

const Header = () => {

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
              About us
            </a>
            <a href="/" className={`${styles.navItem} ${styles.blue}`}>
              Services
            </a>
          </div>
        </nav>
        <Hero />
      </header>
    );
  }

export default Header;
