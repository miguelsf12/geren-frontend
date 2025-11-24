import Link from "next/link"
import headerStyles from "./header.module.css"
import Image from "next/image"
import logo from "../../../../../public/logo.png"

export default function Header({ ocult = {} }) {
  return (
    <header>
      <nav className={headerStyles.navbar}>
        <Link href={"/"}>
          <Image className={headerStyles.logoText} src={logo} alt="" />
        </Link>

        <ul className={headerStyles.menu}>
          {!ocult.inicio && (
            <li className={headerStyles.menuOptions}>Ínicio</li>
          )}

          {!ocult.planos && (
            <Link href={"/plans/plans"} className={headerStyles.menuOptions}>Planos</Link>
          )}

          {!ocult.suporte && (
            <li className={headerStyles.menuOptions}>Suporte</li>
          )}
        </ul>

        <div className={headerStyles.buttonsAuth}>
          {!ocult.entrar && (
            <Link href={"/auth/login"} className={headerStyles.loginButton}>
              Entrar
            </Link>
          )}

          {!ocult.criarConta && (
            <Link
              href={"/auth/register"}
              className={headerStyles.registerButton}
            >
              Criar conta
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
