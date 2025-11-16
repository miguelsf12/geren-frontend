import "@/styles/globals.css"
import Layout from "./components/layout"

export default function App({ Component, pageProps }) {
  return (
    // Aqui vai ser meu layout
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

  // return <Component {...pageProps} />;
}
