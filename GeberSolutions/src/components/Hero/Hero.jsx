import styles from "./Hero.module.css"

const Hero = () => {
    return (
        <>
            <section className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Welcome to Geber Solutions</h1>
                    <p className={styles.heroText}>We are a team of professionals who are dedicated to providing the best services to our clients.</p>
                </div>
                <button className={styles.heroButton}>Contact us</button>
            </section>
        </>
    )
}

export default Hero;