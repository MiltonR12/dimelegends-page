import estilos from '../sass/deleteAcept.module.scss'
import { useDeleteUser } from '../hooks/useUsers'

function DeleteAcept({user, setOpen, reiniciar}) {

  const { mutate: deleteUser } = useDeleteUser()

  const handleClick = () => {
    deleteUser(user, {
      onSuccess: () => {
        reiniciar()
      }
    })
  }

  return (
    <div className={estilos.cuadroFlotante} >
      <h4>¿Estas Seguro?</h4>
      <button className={estilos.btn} onClick={e => setOpen(false)} >Cancelar</button>
      <button className={estilos.btn} onClick={handleClick} >Eliminar Cuenta</button>
    </div>
  )
}

export default DeleteAcept