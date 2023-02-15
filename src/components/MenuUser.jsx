import { useToken } from '../state/authState.js'
import { Link } from 'react-router-dom'
import estilos from '../sass/menuUser.module.scss'

function MenuUser({ setOpenUser }) {

  const { user, reiniciar } = useToken()

  return (
    <div className={estilos.contMenuUser} >
      <div className={estilos.contUser} >
        <h3>Hola <span>{user}</span></h3>
      </div>
      <hr />
      <nav className={estilos.contMenu} >
        <ul>
          <li>
            <Link
              onClick={() => setOpenUser(false)}
              className={estilos.enlace}
              to={`/usuario/${user}`} >Administrar Cuenta</Link>
          </li>
          <li>
            <Link
              onClick={() => setOpenUser(false)}
              className={estilos.enlace}
              to={`/usuario/${user}/create`} >Crear Torneo</Link>
          </li>
          <li>
            <Link
              onClick={() => setOpenUser(false)}
              className={estilos.enlace}
              to={`/usuario/${user}/administrar`} >Administrar Torneos</Link>
          </li>
          <li>
            <Link
              className={estilos.enlace}
              to='/' onClick={() => {
                reiniciar()
                setOpenUser(false)
              }} >Salir</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MenuUser