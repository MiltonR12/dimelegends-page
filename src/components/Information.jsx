import estilos from '../sass/information.module.scss'
import { AiOutlineStar } from 'react-icons/ai'
import copa from '../imgs/copa.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useToken } from '../state/authState.js'

function Information() {

  useEffect(() => {
    AOS.init()
  })

  const { user } = useToken()

  return (
    <section className={estilos.contInformation} >
      <div className={estilos.contImg} data-aos="flip-up" >
        <img src={copa} alt="" width={300} className={estilos.image} />
      </div>
      <div className={estilos.contCardInfo} >
        <div className={estilos.card} data-aos="flip-up" >
          <h3 className={estilos.title} >Crea tu torneo</h3>
          <p className={estilos.text} >
            Crea tu torneo, es muy facil dale click en Crear Torneo y llena el formulario para lo cual tendras que crearte una cuenta en la plataforma.
          </p>
          <Link to={user == '' ? `/login` : `/usuario/${user}/create`} className={estilos.btn} >
            Crear Torneo <AiOutlineStar />
          </Link>
        </div>
      </div>
      <div className={estilos.contCardInfo} >
        <div className={estilos.card} data-aos="flip-up" >
          <h3 className={estilos.title} >Crea tu evento</h3>
          <p className={estilos.text} >
            Crea tu Evento, es muy facil dale click en Crear Evento y llena el formulario para lo cual tendras que crearte una cuenta en la plataforma.
            <br />
            Esta funcion no esta disponible por el momento.
          </p>
          <Link to={user == '' ? `/login` : `/usuario/${user}/create`} className={estilos.btn} >
            Crear Evento <AiOutlineStar />
          </Link>
        </div>
      </div>
      <div className={estilos.contImg} data-aos="flip-up" >
        <img src={copa} alt="" width={300} className={estilos.image} />
      </div>
    </section>
  )
}

export default Information