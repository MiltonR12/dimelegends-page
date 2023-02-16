import estilos from '../sass/manageTorneo.module.scss'
import { useGetMysTorneos } from '../hooks/useTorneos'
import CardShow from '../components/CardShow'
import { useStateUserTorneo } from '../state/authState.js'
import { useEffect } from "react";

function ManageTorneo() {

  const { data, isLoading } = useGetMysTorneos()
  const { setLista } = useStateUserTorneo()

  useEffect(() => {
    setLista(data)
  }, [data])

  const cargando = () => {
    if (isLoading) {
      return <h3>Cargando...</h3>
    }
  }

  return (
    <main className={estilos.contManageTorneo} >
      <h2 className={estilos.title} >Mis Torneos</h2>
      {cargando()}
      {
        data?.map(torneo => (
          <CardShow torneo={torneo} key={torneo.id} />
        ))
      }
    </main>
  )
}

export default ManageTorneo