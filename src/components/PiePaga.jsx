import estilos from '../sass/piePage.module.scss'
import { AiFillFacebook, AiOutlineWhatsApp } from 'react-icons/ai'
import { RxDiscordLogo } from 'react-icons/rx'
import logo from '../imgs/logomandar.png'

function PiePaga() {
  return (
    <footer className={estilos.contPiePage} >
      <div className={estilos.contLogo} >
        <img src={logo} alt="" width={150} />
        <h2>Dime Legends Bolivia</h2>
      </div>
      <div className={estilos.contRedes} >
        <h2>Redes Sociales</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com/DimeLegendsBolivia" className={estilos.enlace}>
              <AiFillFacebook /> Facebook
            </a>
          </li>
          <li>
            <a href="https://chat.whatsapp.com/K5AH26VUJwC9zhLMnZ7OI1" className={estilos.enlace}>
              <AiOutlineWhatsApp /> WhatsApp
            </a>
          </li>
          <li>
            <a href="https://discord.gg/rMunx9nFGc" className={estilos.enlace} >
              <RxDiscordLogo /> Discord
            </a>
          </li>
        </ul>
      </div>
      <div className={estilos.contForm} >
        <form action="">
          <label htmlFor="">Contacto</label>
          <textarea name="" rows="5" placeholder='Message' ></textarea>
          <button>Enviar</button>
        </form>
      </div>
    </footer>
  )
}

export default PiePaga