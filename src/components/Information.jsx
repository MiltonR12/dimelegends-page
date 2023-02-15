import estilos from '../sass/information.module.scss'
import { AiOutlineStar } from 'react-icons/ai'
import copa from '../imgs/copaTorneo.png'
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
          <p className={estilos.text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos recusandae in eaque. Dignissimos ducimus incidunt sit corrupti praesentium a illo! Doloremque quisquam facere nihil beatae, facilis et sit tenetur!</p>
          <Link to={user == '' ? `/login` : `/usuario/${user}/create`} className={estilos.btn} >
            Crear Torneo <AiOutlineStar />
          </Link>
        </div>
      </div>
      <div className={estilos.contCardInfo} >
        <div className={estilos.card} data-aos="flip-up" >
          <h3 className={estilos.title} >Crea tu evento</h3>
          <p className={estilos.text} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quia, perspiciatis illo consequuntur rerum voluptas. Repellat autem fugiat repellendus in a facere, voluptate deserunt, dolore eos nam iste, totam minus?</p>
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