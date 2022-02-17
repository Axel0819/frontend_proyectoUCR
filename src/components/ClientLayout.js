import { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = lazy(() => import('./Navbar'))

export default function ClientLayout() {

  return (
    <div className="grid__container">
      <Suspense fallback={ <span>Cargando traducciones</span>}>
        <Navbar /> 
      </Suspense>

      <div className="main">
        <Outlet />
      </div>

      <footer className="footer">
        <h1>Footer</h1>
      </footer>
    </div>
  )
}