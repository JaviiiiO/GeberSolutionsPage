import styles from "./Footer.module.css";

const Footer = () => {
  return (
    // Footer container
    <footer className={styles.footer}>
      <img src="/public/logo.png" alt="Logo image" />
      <p>© 2024 Geber Solutions</p>
      <div className={styles.footerLinks}>
        <a
          href="https://www.facebook.com/gebersolutions"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/gebersolutionsllc"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
