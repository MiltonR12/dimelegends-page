import { Outlet, Navigate } from 'react-router-dom'

function RouterProtected({ children, isAllowed }) {

  if (!isAllowed) {
    return <Navigate to='/login' />
  }

  return children ? { children } : <Outlet />
}

export default RouterProtected