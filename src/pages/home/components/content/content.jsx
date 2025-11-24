import contentStyles from "./content.module.css"

export default function Content() {
  return (
    <section className={contentStyles.contentContainer}>
      <div className={contentStyles.contentText}>
        <h1>Tudo que você precisa em um só lugar</h1>
        <p>
          Recursos completos para facilitar sua rotina e otimizar o atendimento
        </p>
      </div>
      <div className={contentStyles.cardsContainer}>
        <div className={contentStyles.card}>
          <div
            className={`${contentStyles.iconeContainer} ${contentStyles.card1}`}
          >
            <i className="bi bi-calendar-event"></i>
          </div>
          <h2>Agenda Inteligente</h2>
          <p>
            Organize consultas, envie lembretes automáticos e reduza faltas.
          </p>
        </div>
        <div className={contentStyles.card}>
          <div
            className={`${contentStyles.iconeContainer} ${contentStyles.card2}`}
          >
            <i className="bi bi-people"></i>
          </div>
          <h2>Gestão de Pacientes</h2>
          <p>Histórico completo, prontuários digitais e dados sempre à mão.</p>
        </div>
        <div className={contentStyles.card}>
          <div
            className={`${contentStyles.iconeContainer} ${contentStyles.card3}`}
          >
            <i className="bi bi-currency-dollar"></i>
          </div>
          <h2>Controle Financeiro</h2>
          <p>Acompanhe receitas, despesas e tenha relatórios detalhados.</p>
        </div>
        <div className={contentStyles.card}>
          <div
            className={`${contentStyles.iconeContainer} ${contentStyles.card4}`}
          >
            <i className="bi bi-bar-chart-line-fill"></i>
          </div>
          <h2>Relatórios e Análises</h2>
          <p>Visualize o desempenho do seu consultório com dados claros.</p>
        </div>
      </div>
    </section>
  )
}
