import estilos from '../sass/cardCreate.module.scss'
import { useForm } from 'react-hook-form'
import { useCreateTorneo, useUpdateTorneo } from '../hooks/useTorneos'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useStateUserTorneo } from "../state/authState.js";
import { useEffect } from 'react'
import { useToken } from '../state/authState.js'
import { DateTime } from 'luxon'

function CardCreate() {

  const { register, handleSubmit, setValue } = useForm()
  const { mutate: createTorneo } = useCreateTorneo()
  const { mutate: updateTorneo } = useUpdateTorneo()
  const navigate = useNavigate()
  const params = useParams()
  const { lista } = useStateUserTorneo()
  const { user } = useToken()

  useEffect(() => {
    const inicio = () => {
      const [torneo] = lista.filter(item => item.id == params.id)
      setValue('name', torneo.name)
      setValue('award', torneo.award)
      setValue('cost', torneo.cost)
      setValue('date', torneo.date)
      setValue('form', torneo.form)
      setValue('page', torneo.page)
      setValue('modality', torneo.modality)
      setValue('requeriment', torneo.requeriment)
      setValue('regulation', torneo.regulation)
    }
    if (params.id) {
      inicio()
    } else {
      setValue('award', 'GRATUITO')
    }
  }, [])

  const onSubmit = (date) => {
    if (params.id) {
      updateTorneo({id: params.id, ...date, organizer: user})
    } else {
      createTorneo({...date, organizer: user})
    }
    navigate('/torneos')
  }

  return (
    <form className={estilos.contCardCreate} onSubmit={handleSubmit(onSubmit)} >
      <div className={estilos.seccion} >
        <label htmlFor="">Nombre del Torneo</label>
        <input type="text" {...register('name')} required />
      </div>
      <div className={estilos.seccion} >
        <label htmlFor="">Premio</label>
        <input type="text" {...register('award')} required />
      </div>
      <div className={estilos.seccion} >
        <label htmlFor="">Costo</label>
        <input type="text" {...register('cost')} required />
      </div>
      <div className={estilos.seccion} >
        <label htmlFor="">Fecha de Inicio</label>
        <input type="date" {...register('date')} required />
      </div>
      <div className={estilos.seccion} >
        <label htmlFor="">Formulario de inscripcion</label>
        <input type="text" {...register('form')} required />
      </div>
      <div className={estilos.seccion} >
        <label htmlFor="">Grupo o Pagina</label>
        <input type="text" {...register('page')} required />
      </div>
      <div className={estilos.seccion} >
        <label htmlFor="">Modalidad</label>
        <textarea {...register('modality')} required rows="4"></textarea>
      </div>
      <div className={estilos.seccion} >
        <label htmlFor="">Requisitos</label>
        <textarea {...register('requeriment')} required rows="10"></textarea>
      </div>
      <div className={estilos.seccion} >
        <label htmlFor="">Reglas</label>
        <textarea {...register('regulation')} required rows="10"></textarea>
      </div>
      <div className={estilos.seccion} >
        <button>
          {params.id ? 'Actualizar' : 'Crear'}
        </button>
      </div>
    </form>
  )
}

export default CardCreate