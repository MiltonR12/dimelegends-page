import estilos from '../sass/userPage.module.scss'
import { useToken } from '../state/authState.js'
import { useState } from 'react'
import { useDeleteUser } from '../hooks/useUsers.js'

function UserPage() {

  const { user, reiniciar } = useToken()
  const { mutate: deleteUser } = useDeleteUser()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    deleteUser(user, {
      onSuccess: () => {
        reiniciar()
      }
    })
  }

  const contAcept = () => {
    return <div className={estilos.cuadroFlotante} >
      <h4>¿Estas Seguro?</h4>
      <button className={estilos.btn} onClick={e => setOpen(false)} >Cancelar</button>
      <button className={estilos.btn} onClick={handleClick} >Eliminar Cuenta</button>
    </div>
  }

  return (
    <main className={estilos.contUserPage} >
      <div>
        <h1>Hola <span>{user}</span> !</h1>
      </div>
      <div className={estilos.contDeleteUser} >
        <button onClick={e => setOpen(!open)} className={estilos.btnDelete} >Eliminar Cuenta</button>
        {open && contAcept()}
      </div>
    </main>
  )
}

export default UserPage