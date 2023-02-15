import estilos from '../sass/manageTorneo.module.scss'
import { useGetMysTorneos } from '../hooks/useTorneos'
import CardShow from '../components/CardShow'
import { useStateUserTorneo } from '../state/authState.js'
import { useEffect } from "react";

function ManageTorneo() {

  const { data } = useGetMysTorneos()
  const { setLista } = useStateUserTorneo()

  useEffect(() => {
    setLista(data)
  }, [data])

  return (
    <main className={estilos.contManageTorneo} >
      <h2>Mis Torneos</h2>
      {
        data?.map(torneo => (
          <CardShow torneo={torneo} key={torneo.id} />
        ))
      }
    </main>
  )
}

export default ManageTorneo