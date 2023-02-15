import { NavLink, Link } from "react-router-dom";
import estilos from '../sass/navigation.module.scss'
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { useToken } from '../state/authState.js'
import MenuUser from "./MenuUser";

function Navigation() {

  const [open, setOpen] = useState(false)
  const [openUser, setOpenUser] = useState(false)
  const { isAuth, user } = useToken()

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <header className={estilos.contNavigation} >
      <nav className={open ? `${estilos.contMenu} ${estilos.open}` : `${estilos.contMenu}`} >
        <ul>
          <li>
            <NavLink
              onClick={handleClick}
              className={({ isActive }) => (isActive ? estilos.activo : estilos.desactivado)}
              to='/' >Home</NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleClick}
              className={({ isActive }) => (isActive ? estilos.activo : estilos.desactivado)}
              to='/torneos' >Torneos</NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleClick}
              className={({ isActive }) => (isActive ? estilos.activo : estilos.desactivado)}
              to='/eventos' >Eventos</NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleClick}
              className={({ isActive }) => (isActive ? estilos.activo : estilos.desactivado)}
              to='/recargas' >Recargas</NavLink>
          </li>
        </ul>
      </nav>
      <div className={estilos.contTitle} >
        <AiOutlineMenu className={estilos.menuIcon} onClick={handleClick} />
        <h1>DIME LEGENDS</h1>
      </div>
      {isAuth ? <div className={estilos.contUser} >
        <button
          className={estilos.btnUser}
          onClick={() => setOpenUser(!openUser)} > {user.charAt(0).toUpperCase()} </button>
        {openUser ? <MenuUser setOpenUser={setOpenUser} /> : undefined}
      </div> : <div className={estilos.contUser} >
        <Link to='/login' className={estilos.login} >
          Entrar <AiOutlineUser />
        </Link>
      </div>}
    </header>
  )
}

export default Navigation