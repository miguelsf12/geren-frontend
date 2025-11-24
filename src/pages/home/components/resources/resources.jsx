import Image from "next/image"
import resourcesStyles from "./resources.module.css"
import resourcesImage from "../../../../../public/photo-1551076805-e1869033e561.jpeg"

export default function Resources() {
  return (
    <section className={resourcesStyles.resourcesContainer}>
      <div className={resourcesStyles.resourcesTextContainer}>
        <h2 className={resourcesStyles.subtitle}>
          Recursos pensados para você
        </h2>
        <p className={resourcesStyles.resourcesText}>
          Cada funcionalidade foi desenvolvida para tornar sua rotina mais
          eficiente e seu consultório mais lucrativo.
        </p>
        <div className={resourcesStyles.resourcesList}>
          <span className={resourcesStyles.resource1}>
            <i className="bi bi-check2-circle"></i> Agenda online integrada
          </span>
          <span className={resourcesStyles.resource2}>
            <i className="bi bi-check2-circle"></i> Confirmação automática por
            WhatsApp
          </span>
          <span className={resourcesStyles.resource3}>
            <i className="bi bi-check2-circle"></i> Relatórios personalizados
          </span>
          <span className={resourcesStyles.resource4}>
            <i className="bi bi-check2-circle"></i> Segurança de dados
          </span>
          <span className={resourcesStyles.resource5}>
            <i className="bi bi-check2-circle"></i> Prontuário eletrônico
          </span>
          <span className={resourcesStyles.resource6}>
            <i className="bi bi-check2-circle"></i> Controle de pagamentos
          </span>
          <span className={resourcesStyles.resource7}>
            <i className="bi bi-check2-circle"></i> Múltiplos profissionais
          </span>
          <span className={resourcesStyles.resource8}>
            <i className="bi bi-check2-circle"></i> Suporte especializado
          </span>
        </div>
      </div>
      <div className={resourcesStyles.imageContainer}>
        <Image
          className={resourcesStyles.image}
          src={resourcesImage}
          alt=""
        ></Image>
      </div>
    </section>
  )
}
