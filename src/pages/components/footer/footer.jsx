import footerStyles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={footerStyles.footerContainer}>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.footerInfos}>
          <p className={footerStyles.footerInfos_p1}>Geren</p>
          <p className={footerStyles.footerInfos_p2}>
            A plataforma completa para gestão de consultórios médicos. Organize
            agendamentos, pacientes e finanças em um só lugar.
          </p>
        </div>

        <div className={footerStyles.footerProducts}>
          <p className={footerStyles.footerProducts1}>Produto</p>
          <p className={footerStyles.footerProducts2}>Recursos</p>
          <p className={footerStyles.footerProducts3}>Planos</p>
        </div>

        {/* <div className={footerStyles.footerSuport}>
          <p className={footerStyles.footerSuport1}>Suporte</p>
          <p className={footerStyles.footerSuport2}>Central de Ajuda</p>
          <p className={footerStyles.footerSuport3}>Contato</p>
          <p className={footerStyles.footerSuport4}>Termos de Uso</p>
          <p className={footerStyles.footerSuport5}>PRivacidade</p>
        </div> */}
      </div>
      <div className={footerStyles.borderFooter}></div>

      <p className={footerStyles.footerRights}>
        © 2025 Geren. Todos os direitos reservados. Feito com ❤️ para
        profissionais da saúde.
      </p>
    </footer>
  )
}
