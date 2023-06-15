import { FaLink } from "react-icons/fa";
import styles from "./Projects.module.css";
import Image from "next/image";
export default function ProjectSection() {
  return (
    <>
      <section className={styles.projetos}>
        <h2 className={styles.heading}>Projetos em destaque</h2>
        <div className={styles.portifolioContainer}>
          <div className={styles.portifolioBox}>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fFBpenphc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className={styles.image}
            />
            <div className={styles.projetosLayer}>
              <h4>PIZZAS APP</h4>
              <p className={styles.styleP}>
                O meu projeto consiste em um aplicativo fictício de delivery de
                pizzas, que foi desenvolvido utilizando a biblioteca JavaScript
                React. Através da utilização desta biblioteca, foi possível
                criar interfaces de usuário interativas e intuitivas para os
                nossos usuários
              </p>
              <a href="https://pizzas-app-six.vercel.app/" target="_blank">
                <FaLink className={styles.icon} />
              </a>
            </div>
          </div>

          <div className={styles.portifolioBox}>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fFBpenphc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className={styles.image}
            />
            <div className={styles.projetosLayer}>
              <h4>HACKATON THE CODE FORCE</h4>
              <p className={styles.styleP}>
                Eu atuei como desenvolvedor Front-end, trabalhando na criação de
                diversas telas de um aplicativo para o banco. Graças ao trabalho
                em equipe, conseguimos conquistar o terceiro lugar no projeto.
                Meu papel foi fundamental para garantir que as telas fossem
                criadas de forma eficiente e que a experiência do usuário fosse
                positiva.
              </p>
              <a
                href="https://chipper-mandazi-fd1c9f.netlify.app/
                                                                                        "
                target="_blank"
              >
                <FaLink className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={styles.portifolioBox}>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt=""
              className={styles.image}
            />

            <div className={styles.projetosLayer}>
              <h4>Dashboard NextJS</h4>
              <p className={styles.styleP}>
                Esse é um projeto mais avançado usando NextJS como Framework
                para o desenvolvimento e TailwindCSS um framework css para a
                estilização e responsividade do site. a estilização e
                reponsividade do Site. O site Foi Colocado na vercel!
              </p>
              <a href="https://dashboardnextjs-jet.vercel.app/" target="_blank">
                <FaLink className={styles.icon} />
              </a>
            </div>
          </div>

          <div className={styles.portifolioBox}>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
              alt=""
              className={styles.image}
            />
            <div className={styles.projetosLayer}>
              <h4>Sistema de Finanças</h4>
              <p className={styles.styleP}>
                Sistema de Finanças usando HTML, CSS E JS no qual o foco
                principal é o JavaScript onde todas as funçoes adequadas do site
                forma criadas
              </p>

              <a href="https://financessystem.netlify.app/" target="_blank">
                <FaLink className={styles.icon} />
              </a>
            </div>
          </div>

          <div className={styles.portifolioBox}>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt=""
              className={styles.image}
            />
            <div className={styles.projetosLayer}>
              <h4>TO DO LIST</h4>
              <p className={styles.styleP}>
                Projeto to do list oferecido como atividade em um curso de
                desenvolimento full stack na udemy, onde usei meus conhecimentos
                de ReactJs para a implementaçao do projeto, no qual usei funçoes
                do framework para facilitar o desenvolvimento e usei o
                localStorage do navegador para salvar os dados
              </p>
              <a href="http://todolistbr.netlify.app" target="_blank">
                <FaLink className={styles.icon} />
              </a>
            </div>
          </div>

          <div className={styles.portifolioBox}>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
              className={styles.image}
            />
            <div className={styles.projetosLayer}>
              <h4>Design System</h4>
              <p className={styles.styleP}>
                Esse foi um evento da plataforma de estudos da rockeseat, onde
                desenvolvolvemos um design system com o story book, Conheci
                Vite, TailwindCSS, Radix, Storybook, Github Pages e teve muita
                prática!
              </p>
              <a
                href="https://bryanzef.github.io/DesignSystem-IGNITELAB/?path=/story/components-button--default"
                target="_blank"
              >
                <FaLink className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={styles.portifolioBox}>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
              className={styles.image}
            />
            <div className={styles.projetosLayer}>
              <h4>Sistema de cadastro</h4>
              <p className={styles.styleP}>
                Esse é um Crud javascript de um sistema de cadastro com funções
                de adicionar, editar e remover nesse projeto usei o localStorage
                do navegador para fazer o armazenamento dos dados e assim
                desenvolver o projeto.
              </p>
              <a href="https://crudcadastroweb.netlify.app/" target="_blank">
                <FaLink className={styles.icon} />
              </a>
            </div>
          </div>

          <div className={styles.portifolioBox}>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
              className={styles.image}
            />
            <div className={styles.projetosLayer}>
              <h4>DEV LINKS</h4>
              <p className={styles.styleP}>
                O site responsivo que desenvolvi foi criado durante um evento da
                Rockeseat, onde foram utilizadas funções da DOM do navegador
                para realizar modificações na página. Através da criação de um
                layout responsivo, garantimos que o site fosse acessível em
                diferentes dispositivos, como desktops, tablets e smartphones.
                Além disso, foram utilizados recursos como animações e
                transições para melhorar a experiência do usuário.
              </p>

              <a
                href="https://devlinksbryan.netlify.app/
                                                                                                    "
                target="_blank"
              >
                <FaLink className={styles.icon} />
              </a>
            </div>
          </div>

          <div className={styles.portifolioBox}>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
              className={styles.image}
            />
            <div className={styles.projetosLayer}>
              <h4>PAGINA DE LINKS</h4>
              <p className={styles.styleP}>
                Pagina Responsiva, no estilo LinkTree com links de
                redirecionamento
              </p>

              <a
                href="https://bryanzef.github.io/Page-Links/
                                                                                                    "
                target="_blank"
              >
                <FaLink className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={styles.portifolioBox}>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
              className={styles.image}
            />
            <div className={styles.projetosLayer}>
              <h4>rocket pay</h4>
              <p className={styles.styleP}>
                Projeto abordado em uma das nlws da rockseat, onde nesse projeto
                foi criado uma tela de pagamento com funções avançadas, usando
                uma integração de APIS
              </p>

              <a
                href="https://explorer-lab-projeto.vercel.app/
                                                                                                    "
                target="_blank"
              >
                <FaLink className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
