import estilos from '../sass/mobil.module.scss'

function Mobil() {
  return (
    <section className={estilos.contRecargaMobil} >
      <div className={estilos.contTitle} >
        <h2>RECARGAS DE MOBILE LEGENDS</h2>
      </div>
      <div className={estilos.contCuadros} >
        <input type="number" placeholder='ID: 3217831287' />
        <input type="number" placeholder='Server: 1234' maxLength={4} />
      </div>
      <div className={estilos.contPrecios} >
        <input type="radio" id='uno' name='price' value='200' />
        <label htmlFor="uno">
          Diamantes 78 + 8 Bonus
          <span>10 Bs.</span>
        </label>
        <input type="radio" id='dos' name='price' value='300' />
        <label htmlFor="dos">
          Diamantes 156 + 16 Bonus
          <span>20 Bs.</span>
        </label>
        <input type="radio" id='tres' name='price' value='400' />
        <label htmlFor="tres">
          Diamantes 234 + 23 Bonus
          <span>30 Bs.</span>
        </label>
        <input type="radio" id='cuatro' name='price' value='400' />
        <label htmlFor="cuatro">
          Pase Crepuscular
          <span>60 Bs.</span>
        </label>
        <input type="radio" id='cinco' name='price' value='400' />
        <label htmlFor="cinco">
          Diamantes 625 + 81 Bonus
          <span>75 Bs.</span>
        </label>
        <input type="radio" id='seis' name='price' value='400' />
        <label htmlFor="seis">
          Diamantes 1860 + 335 Bonus
          <span>220 Bs.</span>
        </label>
        <input type="radio" id='siete' name='price' value='400' />
        <label htmlFor="siete">
          Diamantes 3099 + 589 Bonus
          <span>370 Bs.</span>
        </label>
      </div>
    </section>
  )
}

export default Mobil