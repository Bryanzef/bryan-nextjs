import { FaArrowUp } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function FooterSection() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerText}>
          <p>&copy; 2023 by Bryan</p>
        </div>
        <div className={styles.footerIcon}>
          <a href="../Home">
            <FaArrowUp className={styles.icon} />
          </a>
        </div>
      </footer>
    </>
  );
}
