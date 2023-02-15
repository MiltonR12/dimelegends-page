import MenuUser from '../components/MenuUser'
import estilos from '../sass/userPage.module.scss'
import { useToken } from '../state/authState.js'

function UserPage() {

  const { user } = useToken()

  return (
    <main className={estilos.contUserPage} >
    </main>
  )
}

export default UserPage