import styles from "./Skills.module.css";
import {
  FaDatabase,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function SkillsSection() {
  return (
    <>
      <section className={styles.skills}>
        <h2 className={styles.heading}>
          Minhas skills
        </h2>
        <div className={styles.skillsContainer}>
          <div className={styles.skillBox}>
            <FaReact className={styles.skillIcon} />
            <p>ReactJs</p>
          </div>

          <div className={styles.skillBox}>
            <SiNextdotjs className={styles.skillIcon} />
            <p>NextJs</p>
          </div>

          <div className={styles.skillBox}>
            <FaJsSquare className={styles.skillIcon} />
            <p>JavaScript</p>
          </div>

          <div className={styles.skillBox}>
            <SiTypescript className={styles.skillIcon} />
            <p>TypesScript</p>
          </div>

          <div className={styles.skillBox}>
            <FaNodeJs className={styles.skillIcon} />
            <p>NodeJs</p>
          </div>

          <div className={styles.skillBox}>
            <FaHtml5 className={styles.skillIcon} />
            <p>HTML</p>
          </div>

          <div className={styles.skillBox}>
            <SiTailwindcss className={styles.skillIcon} />
            <p>Tailwindcss</p>
          </div>

          <div className={styles.skillBox}>
            <FaJava className={styles.skillIcon} />
            <p>Java</p>
          </div>

          <div className={styles.skillBox}>
            <FaPython className={styles.skillIcon} />
            <p>Tailwindcss</p>
          </div>

          <div className={styles.skillBox}>
            <FaDatabase className={styles.skillIcon} />
            <p>Banco de Dados</p>
          </div>
        </div>
      </section>
    </>
  );
}
