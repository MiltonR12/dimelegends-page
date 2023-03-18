import estilos from '../sass/userPage.module.scss'
import { useToken } from '../state/authState.js'
import { useState } from 'react'
import { updateNameUser } from '../hooks/useUsers.js'
import Pencil from '../components/Pencil'
import DeleteAcept from '../components/DeleteAcept'

function UserPage() {

  const { user, reiniciar, setName } = useToken()
  const { mutate: updateUser } = updateNameUser()
  const [open, setOpen] = useState(false)
  const [openUser, setOpenUser] = useState(true)

  const changeName = () => {
    const name = document.getElementById('name').value
    updateUser(name.trim() , {
      onSuccess: () => {
        setName(name)
      }
    })
  }

  return (
    <main className={estilos.contUserPage} >
      <div className={estilos.contNameUser} >
        <div className={estilos.contIconUser} >
          <h2>{user.charAt(0)}</h2>
        </div>
        <div className={estilos.contName} >
          <input
            type="text"
            defaultValue={user}
            disabled={openUser} id='name'
            className={estilos.contText}
          />
          <Pencil openUser={openUser} setOpenUser={setOpenUser} action={changeName} />
        </div>
      </div>
      <div className={estilos.contDeleteUser} >
        <button onClick={() => setOpen(!open)} className={estilos.btnDelete} >
          Eliminar Cuenta
        </button>
      </div>
      {open && <DeleteAcept user={user} setOpen={setOpen} reiniciar={reiniciar} />}
    </main>
  )
}

export default UserPage