import estilos from '../sass/mobil.module.scss'

function Mobil() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.elements.price.value)
    console.log(e.target.elements.idServer.value)
    console.log(e.target.elements.idUser.value)
  }

  return (
    <form className={estilos.contRecargaMobil} onSubmit={handleSubmit} >
      <div className={estilos.contTitle} >
        <h2>RECARGAS DE MOBILE LEGENDS</h2>
      </div>
      <div className={estilos.contCuadros} >
        <input type="number" name='idUser' required placeholder='ID: 3217831287' />
        <input type="number" name='idServer' required placeholder='Server: 1234' />
      </div>
      <div className={estilos.contPrecios}>
        <input type="radio" id='uno' name='price' value='1' />
        <label htmlFor="uno">
          Diamantes 78 + 8 Bonus
          <span>10 Bs.</span>
        </label>
        <input type="radio" id='dos' name='price' value='2' />
        <label htmlFor="dos">
          Diamantes 156 + 16 Bonus
          <span>20 Bs.</span>
        </label>
        <input type="radio" id='tres' name='price' value='3' />
        <label htmlFor="tres">
          Diamantes 234 + 23 Bonus
          <span>30 Bs.</span>
        </label>
        <input type="radio" id='cuatro' name='price' value='4' />
        <label htmlFor="cuatro">
          Pase Crepuscular
          <span>60 Bs.</span>
        </label>
        <input type="radio" id='cinco' name='price' value='5' />
        <label htmlFor="cinco">
          Diamantes 625 + 81 Bonus
          <span>75 Bs.</span>
        </label>
        <input type="radio" id='seis' name='price' value='6' />
        <label htmlFor="seis">
          Diamantes 1860 + 335 Bonus
          <span>220 Bs.</span>
        </label>
        <input type="radio" id='siete' name='price' value='7' />
        <label htmlFor="siete">
          Diamantes 3099 + 589 Bonus
          <span>370 Bs.</span>
        </label>
      </div>
      <div className={estilos.contBtn} >
        <button>Pedir</button>
      </div>
    </form>
  )
}

export default Mobil