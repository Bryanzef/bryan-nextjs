import Image from "next/image";
import styles from "./About.module.css";
export default function AboutSection() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.aboutImage}>
          <Image
            width={50}
            height={50}
            src={"/"}
            alt={"/"}
            className={styles.image}
          />
        </div>
        <div className={styles.aboutContent}>
          <h2 className={styles.heading}>
            Um pouco sobre <div className={styles.span}> Mim! </div>
          </h2>
          <h3>Estudante de Desenvolvimento FullStack</h3>
          <p>
            Sou um desenvolvedor em busca de oportunidades de estágio ou posição
            júnior em uma empresa que valorize a inovação e o trabalho em
            equipe. Estou aberto a adquirir mais experiência em áreas
            relacionadas a desenvolvimento de sistemas e tenho a determinação de
            contribuir significativamente para o sucesso da empresa. Com minha
            paixão pela tecnologia e habilidades técnicas em constante
            aprimoramento, acredito poder agregar valor ao time e ajudar a
            impulsionar projetos para alcançar resultados notáveis
          </p>
          <div className={styles.aboutImage}>
            <Image width={22} height={33} src={"/"} alt={"/"} />
          </div>
          <a href="/" className={styles.button}>
            Desubra Mais
          </a>
        </div>
      </section>
    </>
  );
}
