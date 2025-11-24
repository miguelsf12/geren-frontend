import Link from "next/link"
import loginStyles from "./login.module.css"
import Header from "../home/components/header/header"

export default function Login() {
  return (
    <>
      <Header
        ocult={{
          entrar: true,
          criarConta: true,
          planos: true,
          inicio: true,
          suporte: true
        }}
      />

      <main className={loginStyles.loginContainer}>
        <div className={loginStyles.loginCard}>
          <h2>Seja bem vindo de volta!</h2>
          <form className={loginStyles.form}>
            <div className={loginStyles.inputGroup}>
              <label htmlFor="cnpj">CNPJ</label>
              <input
                type="text"
                id="cnpj"
                name="cnpj"
                placeholder="Seu CNPJ"
                required
              />
            </div>

            <div className={loginStyles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu e-mail"
                required
              />
            </div>

            <div className={loginStyles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Sua senha"
                required
              />
            </div>

            <button type="submit" className={loginStyles.submitButton}>
              Entrar
            </button>
            <button type="submit" className={loginStyles.loginWithGoogle}>
              Entrar com google
            </button>
            <Link className={loginStyles.firstAcess} href={"/auth/register"}>
              Primeiro acesso
            </Link>
          </form>
        </div>
      </main>
    </>
  )
}
