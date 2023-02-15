import { useState } from 'react'
import estilos from '../sass/cardForm.module.scss'
import { useCreateUsuario, useLoginRequest } from '../hooks/useUsers.js'
import { useForm } from 'react-hook-form'
import { useToken } from '../state/authState.js'
import { useNavigate } from 'react-router-dom'

function CardForm() {

  const [login, setLogin] = useState(false)
  const { register, handleSubmit } = useForm()
  const { mutate: send } = useCreateUsuario()
  const { mutate: optenerToken, isError } = useLoginRequest()
  const { setToken } = useToken()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    if (login) {
      send({
        ...data,
        code: parseInt(Math.random() * 10000)
      }, {
        onSuccess: ({ token, user }) => {
          setToken(token, user)
          navigate('/')
        }
      })
    } else {
      const { email, password } = data
      optenerToken({ email, password }, {
        onSuccess: ({ token, user }) => {
          setToken(token, user)
          navigate('/')
        }
      })
    }
  }

  return (
    <div className={estilos.contCardForm} >
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className={estilos.seccion} >
          <h2 className={estilos.title} >
            {login ? 'Crear Cuenta' : 'Iniciar Session'}
          </h2>
        </div>
        {
          login ? (
            <div className={estilos.seccion} >
              <label htmlFor="">Nombre</label>
              <input
                type="text" {...register('name')}
                required
              />
            </div>
          ) : undefined
        }
        <div className={estilos.seccion} >
          <label htmlFor="">Email</label>
          <input
            type="email"
            required
            pattern='^[^@]+@[^@]+\.[a-zA-Z]{2,}$'
            {...register('email')} />
        </div>
        <div className={estilos.seccion} >
          <label htmlFor="">Password</label>
          <input
            required
            type="password" {...register('password')} />
        </div>
        {
          login ? (
            <div className={estilos.seccion} >
              <label htmlFor="">Pagina</label>
              <input
                type="text" {...register('redes')} />
            </div>
          ) : undefined
        }
        {
          isError && !login ? <small className={estilos.messageError} >Contraseña o Correo incorrecto</small> : undefined
        }
        <button className={estilos.btnEnviar} >
          {login ? 'Crear Cuenta' : 'Iniciar Session'}
        </button>
      </form>
      <button className={estilos.btnCambio} onClick={e => setLogin(!login)} >
        {login ? 'Tengo una cuenta' : 'No tengo una cuenta'}
      </button>
    </div>
  )
}

export default CardForm