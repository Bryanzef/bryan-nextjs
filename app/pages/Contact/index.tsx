import styles from "./Contact.module.css";
export default function ContactSection() {
  return (
    <>
      <section className={styles.contato} id="contato">
        <h2 className={styles.heading}>
          Fale <span>Comigo!</span>
        </h2>
        <form
          id="meu-form"
          action="https://formspree.io/f/xpzejdvk"
          method="POST"
        >
          <div className={styles.inputBox}>
            <input type="text" placeholder="Nome Completo" name="nome" />
            <input type="text" placeholder="Email" name="_replyto" />
          </div>
          <div className={styles.inputBox}>
            <input
              type="number"
              placeholder="Número de telefone"
              name="telefone"
            />
            <input type="text" placeholder="Assunto" name="assunto" />
          </div>
          <textarea
            name="mensagem"
            id=""
            maxLength={30}
            placeholder="Sua Mensagem"
          ></textarea>
          <input
            type="submit"
            value="Enviar"
            className={styles.buttonInput}
            id="btn-input"
            placeholder="Enviar Mensagem"
          />
        </form>
      </section>
    </>
  );
}
