import estilos from '../sass/cardTorneo.module.scss'
import { Link } from 'react-router-dom'

function CardTorneo({ torneo }) {
  return (
    <div className={estilos.contCardTorneo} >
      <div className={estilos.contInfo} >
        <h2>{torneo.name}</h2>
        <h3>{torneo.organizer}</h3>
        <h3>Premio: <span>{torneo.award}</span></h3>
        <div className={estilos.seccion} >
          <h4>Inicio del Torneo </h4>
          <h4>{torneo.date}</h4>
        </div>
        <Link to={`/torneos/${torneo.id}`} className={estilos.btnInscripcion} >
          Mas Informacion
        </Link>
      </div>
    </div>
  )
}

export default CardTorneo