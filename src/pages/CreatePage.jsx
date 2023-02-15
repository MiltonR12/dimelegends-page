import estilos from '../sass/createPage.module.scss'
import CardCreate from '../components/CardCreate'
import { useParams } from 'react-router-dom'

function CreatePage() {
  
  const params = useParams()

  return (
    <main className={estilos.contCreatePage} >
      <h2 className={estilos.title} >
        {params.id ? 'Actualizar Torneo' : 'Crear Nuevo Torneo'}
      </h2>
      <CardCreate />
    </main>
  )
}

export default CreatePage