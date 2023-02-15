import estilos from '../sass/cardShow.module.scss'
import CardDelete from './CardDelete'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToken } from "../state/authState.js";

function CardShow({ torneo }) {

  const [option, setOption] = useState('')
  const navigate = useNavigate()
  const { user } = useToken()

  const showCard = () => {
    if (option == 'delete') {
      return <CardDelete setOption={setOption} codigo={torneo.id} name={torneo.name} />
    }
  }

  return (
    <>
      {showCard()}
      <div className={estilos.contCardShow} >
        <div className={estilos.contShow} >
          <button>{torneo.name}</button>
        </div>
        <div className={estilos.contOperations} >
          <button
            onClick={() => navigate(`/usuario/${user}/update/${torneo.id}`)} >
            ACTUALIZAR
          </button>
          <button onClick={() => setOption('delete')} >ELIMINAR</button>
        </div>
      </div>
    </>
  )
}

export default CardShow