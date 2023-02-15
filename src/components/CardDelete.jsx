import estilos from '../sass/cardDelete.module.scss'
import { useDeleteTorneo } from '../hooks/useTorneos.js'
import { useState } from 'react'

function CardDelete({ setOption, codigo, name }) {

  const { mutate: deleteTorneo } = useDeleteTorneo()
  const [texto, setTexto] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (texto.toLowerCase().trim() == name.toLowerCase().trim()) {
      deleteTorneo(codigo)
      setOption('')
    }
  }

  return (
    <div className={estilos.contCardDelete} >
      <div className={estilos.contTitle} >
        <h2 className={estilos.title} >Eliminar Torneo</h2>
        <button
          className={estilos.btnClose}
          onClick={() => setOption('')} >X</button>
      </div>
      <form className={estilos.contForm} onSubmit={handleSubmit} >
        <h4>
          Coloca <span>{name}</span> para confirmar
        </h4>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          type="text" placeholder='Colocar su usuario' required />
        <button
          className={estilos.btnDelete} >Eliminar</button>
      </form>
    </div>
  )
}

export default CardDelete