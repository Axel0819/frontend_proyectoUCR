import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AdminRouters from './AdminRouters'
//import ClientRouters from './ClientRouters'

const ClientRouters = lazy(() => import('./ClientRouters'))

export default function AppRouter() {
  return (
    <Suspense fallback={ <h1>Cargando...</h1> }>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ClientRouters />} />
          <Route path="admin/*" element={<AdminRouters />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}