import Link from "next/link"
import headerStyles from "./header.module.css"
import Image from "next/image"
import logo from "../../../../public/logo.png"

export default function Header() {
  return (
    <header>
      <nav className={headerStyles.navbar}>
        <Image className={headerStyles.logoText} src={logo} alt=""></Image>
        <ul className={headerStyles.menu}>
          <li className={headerStyles.menuOptions}>Ínicio</li>
          <li className={headerStyles.menuOptions}>Planos</li>
          <li className={headerStyles.menuOptions}>Suporte</li>
        </ul>
        <div className={headerStyles.buttonsAuth}>
          <Link href={"#"} className={headerStyles.loginButton}>
            Entrar
          </Link>
          <Link href={"#"} className={headerStyles.registerButton}>
            Criar conta
          </Link>
        </div>
      </nav>
    </header>
  )
}
