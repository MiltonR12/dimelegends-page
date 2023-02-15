import estilos from '../sass/torneoPage.module.scss'
import CardTorneo from '../components/CardTorneo'
import { useStateTorneo } from '../state/authState.js'

function TorneoPage() {

  const { lista } = useStateTorneo()

  return (
    <main className={estilos.contTorneoPage} >
      <h1 className={estilos.title} > TORNEOS </h1>
      <section className={estilos.contCards} >
        {lista?.map(torneo => (
          <CardTorneo key={torneo.id} torneo={torneo} />
        ))}
      </section>
    </main>
  )
}

export default TorneoPage