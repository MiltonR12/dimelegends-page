import Front from "../components/Front";
import Information from "../components/Information";
import PiePaga from "../components/PiePaga";
import estilos from "../sass/home.module.scss";

function Home() {
  return (
    <main className={estilos.contHome} >
      <Front />
      <Information />
      <PiePaga />
    </main>
  )
}

export default Home