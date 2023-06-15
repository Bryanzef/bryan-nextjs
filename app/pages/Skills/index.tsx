import styles from "./Skills.module.css";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function skillsSection() {
  return (
    <>
      <section className={styles.skills}>
        <h2 className={styles.heading}>
          {" "}
          <div className={styles.span}>skills</div>
        </h2>

        <div className={styles.skillsContainer}>
          <FaReact />
          <p>ReactJs</p>
        </div>
        <div className={styles.skillsContainer}>
          <SiNextdotjs />
          <p>NextJs</p>
        </div>
        <div className={styles.skillsContainer}>
          <p>JavaScript</p>
        </div>
        <div className={styles.skillsContainer}>
          <FaReact />
          <p>ReactJs</p>
        </div>
        <div className={styles.skillsContainer}>
          <FaReact />
          <p>ReactJs</p>
        </div>
        <div className={styles.skillsContainer}>
          <FaReact />
          <p>ReactJs</p>
        </div>
        <div className={styles.skillsContainer}>
          <FaReact />
          <p>ReactJs</p>
        </div>
      </section>
    </>
  );
}
