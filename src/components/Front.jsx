import estilos from "../sass/front.module.scss";
import onda from '../imgs/onda.png'
import { useNavigate } from 'react-router-dom'

function Front() {

  const navigate = useNavigate()

  return (
    <section className={estilos.contFront} >
      <div className={estilos.contInfo} >
        <h1>DEMUESTRA QUIEN ES EL MEJOR <span>GAMER</span></h1>
        <p className={estilos.contDescription} >Participa en los torneos que estan aqui para que puedas mejorar como jugador y ganar muchos premios por parte de los creadores.</p>
        <button className={estilos.btnAction} onClick={e => navigate('/torneos')} >Participar</button>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div className={estilos.onda} >
        <img src={onda} alt="" className={estilos.ondaIcon} />
      </div>
    </section>
  )
}

export default Front