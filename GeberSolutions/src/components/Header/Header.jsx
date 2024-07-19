import Hero from "../Hero/Hero";
import styles from "./Header.module.css"

const Header = () => {
    return(
        <header className={styles.headerContainer}>
            <nav className={styles.navContainer}>
                <ul className={styles.listContainer}>
                    <li className={styles.red}><a href="/"></a>Home</li>
                    <li><a href="/"><img src="logo.png" alt="logo"></img></a></li>
                    <li className={styles.blue}><a href="/"></a>Services</li>
                </ul>
            </nav>

            <Hero />
        </header>

        )
}

export default Header;