import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import RouterProtected from "./components/RouterProtected";
import CreatePage from "./pages/CreatePage";
import EventPage from "./pages/EventPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ManageTorneo from "./pages/ManageTorneo";
import TorneoPage from "./pages/TorneoPage";
import UserPage from "./pages/UserPage";
import { useToken } from './state/authState.js'
import { useGetTorneos } from './hooks/useTorneos.js'
import { useEffect } from "react";
import { useStateTorneo } from './state/authState.js'
import RechargePage from "./pages/RechargePage";
import CopaPage from "./pages/CopaPage";

function App() {

  const { isAuth } = useToken()
  const { data, isLoading } = useGetTorneos()
  const { setLista } = useStateTorneo()

  useEffect(() => {
    setLista(data)
  },[data])

  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/torneos' element={<TorneoPage isLoading={isLoading} />} />
        <Route path='/torneos/:id' element={<CopaPage torneos={data} />} />
        <Route path='/eventos' element={<EventPage />} />
        <Route path='/recargas' element={<RechargePage />} />
        <Route element={<RouterProtected isAllowed={isAuth} />} >
          <Route path='/usuario/:name/create' element={<CreatePage />} />
          <Route path='/usuario/:name/update/:id' element={<CreatePage />} />
          <Route path='/usuario/:name/administrar' element={<ManageTorneo />} />
          <Route path='/usuario/:name' element={<UserPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App