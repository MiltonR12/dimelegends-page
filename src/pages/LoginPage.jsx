import React from 'react'
import CardForm from '../components/CardForm'
import estilos from '../sass/loginPage.module.scss'

function LoginPage() {
  return (
    <main className={estilos.contLoginPage} >
      <CardForm />
    </main>
  )
}

export default LoginPage