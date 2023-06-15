import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import styles from "./Home.module.css";
import Image from "next/image";
export default function HomeSection() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.homeContent}>
          <h3 className={styles.h3}>Olá, eu me chamo</h3>
          <h1 className={styles.h1}>Bryan</h1>
          <h3 className={styles.h3}>
            Sou estudante de Análise e desenvolvimento de sistemas{" "}
          </h3>

          <div className={styles.socialMedia}>
            <a href="https://www.instagram.com/bryanzef7/" target="_blank">
              <AiOutlineInstagram />
            </a>
            <a href="http://wa.me/5551994394422" target="_blank">
              <AiOutlineWhatsApp />
            </a>
            <a href="https://www.linkedin.com/in/bryanzefino/" target="_blank">
              <AiOutlineLinkedin />
            </a>
            <a href="https://github.com/Bryanzef" target="_blank">
              <AiOutlineGithub />
            </a>
            <a href="" target="_blank">
              <AiOutlineMail />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/16sEtR08j7HmD0Hxf4gZmAG7Z37ISPsWj/view?usp=share_link
        "
            target="_blank"
            className={styles.buttonHome}
          >
            Baixar CV
          </a>
        </div>

        <div className={styles.homeProfile}>
          <Image className="image" width={22} height={22} src={"/"} alt={""} />
        </div>
      </section>
    </>
  );
}
