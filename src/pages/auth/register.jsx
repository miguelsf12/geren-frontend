import Link from "next/link"
import registerStyles from "./register.module.css"
import Header from "../home/components/header/header"

export default function Register() {
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
      <main className={registerStyles.registerContainer}>
        <div className={registerStyles.registerCard}>
          <h2>
            Gerencie seu consultório da maneira mais pratica e ágil que existe!
          </h2>
          <form className={registerStyles.form}>
            <div className={registerStyles.inputGroup}>
              <label htmlFor="clinic">Clínica</label>
              <input
                type="text"
                id="clinic"
                name="clinic"
                placeholder="Seu consultório"
                required
              />
            </div>

            <div className={registerStyles.inputGroup}>
              <label htmlFor="cnpj">CNPJ</label>
              <input
                type="text"
                id="cnpj"
                name="cnpj"
                placeholder="Seu CNPJ"
                required
              />
            </div>

            <div className={registerStyles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu e-mail"
                required
              />
            </div>

            <div className={registerStyles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Sua senha"
                required
              />
            </div>

            <button type="submit" className={registerStyles.submitButton}>
              Criar conta
            </button>
            <button type="submit" className={registerStyles.loginWithGoogle}>
              Criar conta com google
            </button>
            <Link className={registerStyles.firstAcess} href={"/auth/login"}>
              Ja tenho conta
            </Link>
          </form>
        </div>
      </main>
    </>
  )
}
