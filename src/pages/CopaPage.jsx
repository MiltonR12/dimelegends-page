import { useParams } from 'react-router-dom'
import estilos from '../sass/copaPage.module.scss'

function CopaPage({ torneos }) {

  const params = useParams();

  const torneo = () => {
    return torneos?.filter((item) => item.id == params.id)
  }

  const requisitos = () => {
    const [copa] = torneos?.filter(item => item.id == params.id)
    return copa.requeriment?.split('\n')
  }

  const modalidad = () => {
    const [copa] = torneos?.filter(item => item.id == params.id)
    return copa.modality?.split('\n')
  }

  const reglamento = () => {
    const [copa] = torneos?.filter(item => item.id == params.id)
    return copa.regulation?.split('\n')
  }

  return (
    <main className={estilos.contCopaPage} >
      {
        torneo()?.map(item => (
          <div key={item.id} className={estilos.contCardCopa} >
            <h1 className={estilos.title} > {item.name} </h1>
            <h2 className={estilos.subTitle} >Creado Por:</h2>
            <h3>{item.organizer}</h3>
            <h2 className={estilos.subTitle} >Premio:</h2>
            <h3>{item.award}</h3>
            <h2 className={estilos.subTitle} >Costo de Inscripcion:</h2>
            <h3>{item.cost}</h3>
            <h2 className={estilos.subTitle} >Inicio del torneo:</h2>
            <h3>{item.date}</h3>
            <h2 className={estilos.subTitle} >REQUISITOS:</h2>
            <ul>
              {
                requisitos()?.map((item, index) => (
                  <li key={index} > {item} </li>
                ))
              }
            </ul>
            <h2 className={estilos.subTitle} >MODALIDAD:</h2>
            <ul>
              {
                modalidad()?.map((item, index) => (
                  <li key={index} > {item} </li>
                ))
              }
            </ul>
            <h2 className={estilos.subTitle} >REGLAS:</h2>
            <ul>
              {
                reglamento()?.map((item, index) => (
                  <li key={index} > {item} </li>
                ))
              }
            </ul>
            <div className={estilos.contBtn} >
              <a href={item.form}>
                <button>Formulario de Inscripcion</button>
              </a>
              <a href={item.page}>
                <button>Grupo de WhatsApp</button>
              </a>
            </div>
          </div>
        ))
      }
    </main>
  )
}

export default CopaPage