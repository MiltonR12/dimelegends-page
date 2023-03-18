import { BsPencilSquare } from 'react-icons/bs'
import { ImCheckmark } from 'react-icons/im'
import estilos from '../sass/pencil.module.scss'

function Pencil({ openUser, setOpenUser, action }) {

  const handleClick = () => {
    if (!openUser) {
      action()
    }
    setOpenUser(!openUser)
  }

  if (!openUser) {
    return <>
      <ImCheckmark className={estilos.pencilBien} onClick={handleClick} />
    </>
  }

  return (
    <BsPencilSquare onClick={handleClick} className={estilos.pencil} />
  )
}

export default Pencil