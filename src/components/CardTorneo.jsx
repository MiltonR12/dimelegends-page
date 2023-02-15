import estilos from '../sass/cardTorneo.module.scss'

function CardTorneo({torneo}) {
  return (
    <div className={estilos.contCardTorneo} >
      <div className={estilos.contInfo} >
        <h2>{torneo.name}</h2>
        <h3>{torneo.organizer}</h3>
        <h3>Premio: <span>{torneo.award}</span></h3>
        <div className={estilos.seccion} >
          <h4>Fecha: </h4>
          <h4>{torneo.date}</h4>
        </div>
        <div className={estilos.seccion} >
          <h4>Modalidad:</h4>
          <h4>{torneo.modality}</h4>
        </div>
        <a href={torneo.form}>
          <button className={estilos.btnInscripcion} >INSCRIBIRSE</button>
        </a>
      </div>
    </div>
  )
}

export default CardTorneo