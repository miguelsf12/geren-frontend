import "bootstrap-icons/font/bootstrap-icons.css" // icons bootstrap
import homeStyles from "./main.module.css"
import Link from "next/link"
import Image from "next/image"
import heroImage from "../../../../../public/photo-1576091160399-112ba8d25d1d.jpeg"

export default function Main() {
  return (
    <main className={homeStyles.mainContainer}>
      <div className={homeStyles.mainContainerDisclaimer}>
        <i className="bi bi-lightning-charge"></i>
        <p className={homeStyles.mainTextDisclaimer}>
          Plataforma #1 para profissionais da saúde
        </p>
      </div>
      <div className={homeStyles.mainContainerText}>
        <div className={homeStyles.mainContainerTitle}>
          <h1>
            Organize seu consultório. <span>Simplifique sua rotina.</span>
          </h1>
        </div>
        <div className={homeStyles.mainContainerSubtitle}>
          <p>
            Gerencie agendamentos, pacientes e finanças em uma única plataforma.
            Mais tempo para cuidar, menos tempo com burocracia.
          </p>
        </div>
      </div>
      <div className={homeStyles.mainContainerButton}>
        <Link href={"#"} className={homeStyles.startNow}>
          Comece Agora <i className="bi bi-arrow-right-short"></i>
        </Link>
        <Link href={"#"} className={homeStyles.ShowPlans}>
          Ver Planos
        </Link>
      </div>
      <div className={homeStyles.mainContainerSpan}>
        <span>
          <i className="bi bi-check2-circle"></i> Sem cartão de crédito
        </span>
        <span>
          <i className="bi bi-check2-circle"></i> Cancele quando quiser
        </span>
      </div>
      <div className={homeStyles.mainContainerImage}>
        <Image className={homeStyles.image} src={heroImage} alt=""></Image>
      </div>
    </main>
  )
}
