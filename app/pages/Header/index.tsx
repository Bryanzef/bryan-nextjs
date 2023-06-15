import { AiOutlineMenu } from "react-icons/ai";
import styles from "./Header.module.css";
export default function HeaderSection() {
  return (
    <>
      <header className={styles.header}>
        <AiOutlineMenu className={styles.menuIcon} />

        <nav className={styles.navbar}>
          <a href=""> HOME</a>
          <a href="">SOBRE MIM</a>
          <a href=""> SKILLS</a>
          <a href="">PROJETOS</a>

          <a href="">CONTATO</a>
        </nav>
      </header>
    </>
  );
}
