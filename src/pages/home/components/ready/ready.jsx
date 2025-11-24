import Link from "next/link"
import readyStyles from "./ready.module.css"

export default function Ready() {
  return (
    <section className={readyStyles.readyContainer}>
      <div className={readyStyles.readyContent}>
        <h1>Pronto para transformar seu consultório?</h1>
        <p className={readyStyles.text}>
          Junte-se ao Geren e facilite sua rotina
        </p>
        <Link href={"#"} className={readyStyles.startNow}>
          Comece Agora <i className="bi bi-arrow-right-short"></i>
        </Link>
        <p className={readyStyles.endText}>
          Grátis para começar • Sem compromisso • Cancele quando quiser
        </p>
      </div>
    </section>
  )
}
